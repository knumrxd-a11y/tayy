// Vercel Serverless Function — นับจำนวนถูกใจรวมของแต่ละภาพ (เก็บใน Upstash Redis)
const URL_ = process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
const TOTAL = 39; // จำนวนภาพทั้งหมด (แก้เมื่อเพิ่มภาพ)

async function redis(cmd) {
  const r = await fetch(URL_, {
    method: "POST",
    headers: { Authorization: "Bearer " + TOKEN },
    body: JSON.stringify(cmd)
  });
  return (await r.json()).result;
}

module.exports = async function (req, res) {
  res.setHeader("Cache-Control", "no-store");
  try {
    if (req.method === "GET") {
      const flat = (await redis(["HGETALL", "likes"])) || [];
      const out = {};
      for (let i = 0; i < flat.length; i += 2) out[flat[i]] = Math.max(0, +flat[i + 1]);
      return res.status(200).json(out);
    }
    if (req.method === "POST") {
      const b = typeof req.body === "string" ? JSON.parse(req.body) : req.body || {};
      const id = parseInt(b.id, 10);
      const delta = b.delta === -1 ? -1 : 1;
      if (!(id >= 1 && id <= TOTAL)) return res.status(400).json({ error: "bad id" });
      let count = await redis(["HINCRBY", "likes", String(id), delta]);
      if (count < 0) { await redis(["HSET", "likes", String(id), 0]); count = 0; }
      return res.status(200).json({ id: id, count: count });
    }
    res.status(405).end();
  } catch (e) {
    res.status(500).json({ error: "server error" });
  }
};