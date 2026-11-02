/* LOOK UP. — script.js
   1) ข้อมูลภาพทั้งหมด  2) คีย์บอร์ดใน lightbox  3) ลิงก์ไปหน้า collection  4) วาดหน้า collection.html */

// [ชื่อ, วันที่, ชนิดท้องฟ้า, ไฟล์ภาพ, เรื่องราว, สถานที่, บันทึกส่วนตัว]
// ช่อง สถานที่ / บันทึกส่วนตัว เว้นว่างไว้ — เติมเองได้ ถ้าไม่ว่างจะแสดงในหน้า collection
const PHOTOS = [
  ["A Quiet Morning","12 JAN 2026","sunrise","sky-01.jpg","เช้าวันหนึ่งที่ท้องฟ้าเริ่มเปลี่ยนสี แสงแดดอ่อน ๆ ทำให้บรรยากาศดูสงบ","",""],
  ["Winter Dawn","24 JAN 2026","sunrise","sky-27.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Golden Hour","08 FEB 2026","sunset","sky-02.jpg","ช่วงเวลาที่ท้องฟ้าเปลี่ยนเป็นสีส้มทอง ก่อนที่พระอาทิตย์จะลับขอบฟ้า","",""],
  ["Rose Horizon","19 FEB 2026","sunset","sky-28.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Gray Lullaby","02 MAR 2026","cloudy","sky-29.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Cloud Stories","15 MAR 2026","cloudy","sky-03.jpg","กลุ่มเมฆที่ลอยผ่านท้องฟ้า แต่ละก้อนมีรูปร่างและความสวยงามต่างกัน","",""],
  ["Clear Window","27 MAR 2026","blue","sky-30.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["Early Bird Sky","08 APR 2026","sunrise","sky-31.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Blue Afternoon","20 APR 2026","blue","sky-09.JPG","ท้องฟ้าสีฟ้าในช่วงบ่าย เป็นวันที่อากาศสดใสและเหมาะกับการออกไปถ่ายรูป","",""],
  ["Before the Rain","06 MAY 2026","cloudy","sky-24.jpg","ก่อนที่ฝนจะตก ท้องฟ้าถูกปกคลุมด้วยเมฆสีเข้มและให้บรรยากาศที่แตกต่าง","",""],
  ["Amber Afterglow","14 MAY 2026","sunset","sky-32.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Heavy Clouds","29 MAY 2026","cloudy","sky-33.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Blue Pause","07 JUN 2026","blue","sky-34.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["Last Light","18 JUN 2026","sunset","sky-10.JPG","แสงสุดท้ายของวัน เป็นช่วงเวลาสั้น ๆ ที่อยากเก็บไว้ในความทรงจำ","",""],
  ["First Light","26 JUN 2026","sunrise","sky-35.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Morning Glow","02 JUL 2026","sunrise","sky-11.JPG","แสงสีทองยามเช้าที่ค่อย ๆ ส่องผ่านขอบฟ้า เริ่มต้นวันใหม่อย่างสดใส","",""],
  ["Peach Skyline","09 JUL 2026","sunset","sky-36.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Cotton Clouds","14 JUL 2026","cloudy","sky-12.jpg","ก้อนเมฆสีขาวนุ่มคล้ายปุยฝ้าย ลอยอยู่บนท้องฟ้าสีฟ้าอ่อน","",""],
  ["Drifting Away","20 JUL 2026","cloudy","sky-37.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Pastel Evening","26 JUL 2026","sunset","sky-13.jpg","ท้องฟ้ายามเย็นที่แต่งแต้มด้วยสีชมพูและม่วง เป็นช่วงเวลาที่ดูอบอุ่น","",""],
  ["Open Blue","05 AUG 2026","blue","sky-14.jpg","ท้องฟ้าสีฟ้ากว้างสุดสายตา พร้อมแสงแดดที่ทำให้ทุกอย่างดูสดใส","",""],
  ["Endless Blue","11 AUG 2026","blue","sky-38.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["A New Beginning","17 AUG 2026","sunrise","hero-sky.jpg","พระอาทิตย์เริ่มขึ้นเหนือขอบฟ้า พร้อมแสงแรกที่ทำให้เช้าวันนั้นพิเศษ","",""],
  ["Morning Haze","23 AUG 2026","sunrise","sky-39.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Cloudy Mood","29 AUG 2026","cloudy","sky-26.jpg","วันที่ท้องฟ้าเต็มไปด้วยเมฆ ให้ความรู้สึกสงบและแตกต่างจากวันอื่น","",""],
  ["Orange Horizon","04 SEP 2026","sunset","sky-17.jpg","เส้นขอบฟ้าสีส้มในช่วงเย็น แสงอาทิตย์ค่อย ๆ จางหายไปอย่างช้า ๆ","",""],
  ["Violet Dusk","08 SEP 2026","sunset","sky-40.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Simply Blue","12 SEP 2026","blue","sky-18.jpg","ท้องฟ้าสีฟ้าเรียบง่ายที่ทำให้รู้สึกสบายตา เป็นภาพธรรมดาที่น่าจดจำ","",""],
  ["Soft Sunrise","21 SEP 2026","sunrise","sky-19.jpg","แสงแดดยามเช้าที่นุ่มนวล ค่อย ๆ เปลี่ยนสีของท้องฟ้าให้สว่างขึ้น","",""],
  ["Silver Lining","27 SEP 2026","cloudy","sky-41.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Passing Clouds","02 OCT 2026","cloudy","sky-20.jpg","เมฆที่กำลังเคลื่อนตัวผ่านท้องฟ้า เปลี่ยนรูปร่างไปตามสายลม","",""],
  ["Fresh Air","06 OCT 2026","blue","sky-42.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["Golden Goodbye","09 OCT 2026","sunset","sky-21.jpg","แสงสีทองในช่วงท้ายของวัน เป็นอีกหนึ่งช่วงเวลาที่อยากหยุดเก็บไว้","",""],
  ["Pink Awakening","13 OCT 2026","sunrise","sky-43.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Blue Escape","16 OCT 2026","blue","sky-22.jpg","มองขึ้นไปเห็นท้องฟ้าสีฟ้าสดใส ช่วยเติมความสดชื่นให้กับวันธรรมดา","",""],
  ["Ember Sky","19 OCT 2026","sunset","sky-44.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Dreamy Clouds","22 OCT 2026","cloudy","sky-23.jpg","กลุ่มเมฆที่เรียงตัวอย่างสวยงามราวกับภาพวาดบนผืนฟ้า","",""],
  ["Until Tomorrow","27 OCT 2026","sunset","sky-25.jpg","พระอาทิตย์กำลังลับขอบฟ้า ปิดท้ายวันด้วยสีสันที่สวยงาม","",""],
  ["Quiet Overcast","30 OCT 2026","cloudy","sky-45.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""]
];
const TYPE_NAME = { sunrise: "Sunrise", sunset: "Sunset", cloudy: "Cloudy", blue: "Blue Sky" };

// 2) คีย์บอร์ดใน lightbox: Esc = ปิด, ← → = ภาพก่อนหน้า/ถัดไป
document.addEventListener("keydown", function (e) {
  const box = document.querySelector(".lightbox:target");
  if (!box) return;
  if (e.key === "Escape") box.querySelector(".lightbox-close").click();
  if (e.key === "ArrowLeft") box.querySelectorAll(".object-nav a")[0].click();
  if (e.key === "ArrowRight") box.querySelectorAll(".object-nav a")[1].click();
});

// 3) เติมลิงก์ "เปิดเป็นหน้าเต็ม" ให้ทุก lightbox
document.querySelectorAll(".lightbox").forEach(function (box) {
  const n = box.id.replace("photo-", "");
  const link = document.createElement("a");
  link.className = "primary-btn open-full";
  link.href = "collection.html?id=" + n;
  link.textContent = "OPEN FULL PAGE ↗";
  box.querySelector(".object-info").appendChild(link);
});

// 4) หน้า collection.html — อ่านเลขภาพจาก ?id=
const detail = document.getElementById("detail");
if (detail) {
  let id = parseInt(new URLSearchParams(location.search).get("id"), 10);
  if (!(id >= 1 && id <= PHOTOS.length)) id = 1;
  const p = PHOTOS[id - 1];
  const prev = id === 1 ? PHOTOS.length : id - 1;
  const next = id === PHOTOS.length ? 1 : id + 1;
  const num = (n) => String(n).padStart(2, "0");
  const extra = (label, val) => val ? "<div><dt>" + label + "</dt><dd>" + val + "</dd></div>" : "";

  detail.dataset.cat = p[2];
  detail.style.setProperty("--photo", 'url("images/' + p[3] + '")');
  document.title = p[0] + " | LOOK UP.";
  detail.innerHTML =
    '<a class="lightbox-close" href="gallery.html#c-' + id + '">BACK ×</a>' +
    '<a class="side-arrow left" href="collection.html?id=' + prev + '" aria-label="ภาพก่อนหน้า">‹</a>' +
    '<a class="side-arrow right" href="collection.html?id=' + next + '" aria-label="ภาพถัดไป">›</a>' +
    '<div class="object-page">' +
      '<div class="object-stage"><figure class="polaroid">' +
        '<span class="polaroid-photo"><img src="images/' + p[3] + '" alt="' + p[0] + '"></span>' +
        '<figcaption class="polaroid-caption"><strong>' + p[0] + '</strong><small>' + p[1] + '</small></figcaption>' +
      '</figure></div>' +
      '<div class="object-info">' +
        '<span class="section-label">' + TYPE_NAME[p[2]].toUpperCase() + ' — ' + num(id) + ' / ' + PHOTOS.length + '</span>' +
        '<h3>' + p[0] + '</h3>' +
        '<p class="object-story">' + p[4] + (p[6] ? "<br><br>" + p[6] : "") + '</p>' +
        '<dl class="object-details">' +
          '<div><dt>DATE</dt><dd>' + p[1] + '</dd></div>' +
          '<div><dt>SKY</dt><dd>' + TYPE_NAME[p[2]] + '</dd></div>' +
          extra("PLACE", p[5]) +
          '<div><dt>NUMBER</dt><dd>' + num(id) + ' of ' + PHOTOS.length + '</dd></div>' +
        '</dl>' +
        '<div class="object-nav">' +
          '<a class="pill" href="collection.html?id=' + prev + '">← PREVIOUS</a>' +
          '<a class="pill" href="collection.html?id=' + next + '">NEXT →</a>' +
        '</div>' +
      '</div>' +
    '</div>';

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") location.href = "collection.html?id=" + prev;
    if (e.key === "ArrowRight") location.href = "collection.html?id=" + next;
  });
}

// 5) เปลี่ยนโทนพื้นหลังตามเวลาของวัน (ตามนาฬิกาเครื่องผู้ชม)
(function () {
  const h = new Date().getHours();
  const t = h >= 5 && h < 11 ? "morning" : h >= 16 && h < 19 ? "evening" : (h >= 19 || h < 5) ? "night" : "day";
  document.documentElement.dataset.time = t;
})();

// 6) ปุ่ม Surprise me — สุ่มภาพแล้วเปิดหน้ารายละเอียด
(function () {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.className = "pill surprise-btn";
  btn.textContent = "SURPRISE ME ✦";
  btn.addEventListener("click", function () {
    const cur = parseInt(new URLSearchParams(location.search).get("id"), 10);
    let n;
    do { n = Math.floor(Math.random() * PHOTOS.length) + 1; } while (n === cur && PHOTOS.length > 1);
    location.href = "collection.html?id=" + n;
  });
  document.body.appendChild(btn);
})();

// ===== 7) ลูกเล่นเพิ่มเติม =====
document.documentElement.classList.add("js");
const canHover = window.matchMedia("(hover: hover)").matches;
const calm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// 7.1 แถบความคืบหน้าการเลื่อนหน้า
(function () {
  const bar = document.createElement("div");
  bar.className = "scroll-progress";
  document.body.appendChild(bar);
  function update() {
    const max = document.documentElement.scrollHeight - innerHeight;
    bar.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + "%";
  }
  addEventListener("scroll", update, { passive: true });
  update();
})();

// 7.2 การ์ดภาพค่อย ๆ ลอยขึ้นทีละใบเมื่อเลื่อนมาถึง
(function () {
  const cards = document.querySelectorAll(".photo-card");
  if (!("IntersectionObserver" in window)) { cards.forEach((c) => c.classList.add("in")); return; }
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); }
    });
  }, { threshold: 0.12 });
  cards.forEach(function (c, i) { c.style.setProperty("--i", i % 6); io.observe(c); });
})();

// 7.3 ตัวเลขสถิติวิ่งขึ้นเมื่อเลื่อนมาถึง
(function () {
  const nums = document.querySelectorAll(".stat strong");
  if (!nums.length || !("IntersectionObserver" in window)) return;
  const io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) {
      if (!en.isIntersecting) return;
      io.unobserve(en.target);
      const el = en.target, text = el.textContent.trim(), end = parseInt(text, 10);
      if (isNaN(end) || calm) return;
      const t0 = performance.now(), dur = 1400;
      (function tick(t) {
        const k = Math.min((t - t0) / dur, 1), v = Math.round(end * (1 - Math.pow(1 - k, 3)));
        el.textContent = String(v).padStart(text.length, "0");
        if (k < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  nums.forEach((n) => io.observe(n));
})();

// 7.5 ทักทายตามเวลาที่หัวข้อ Home
(function () {
  const eb = document.querySelector(".hero .eyebrow");
  if (!eb) return;
  const h = new Date().getHours();
  const g = h >= 5 && h < 12 ? "GOOD MORNING" : h >= 12 && h < 17 ? "GOOD AFTERNOON" : h >= 17 && h < 20 ? "GOOD EVENING" : "GOOD NIGHT";
  eb.insertAdjacentHTML("afterbegin", '<span class="greet">' + g + " ✦</span> ");
})();

// 7.6 พารัลแลกซ์ในฮีโร่ — ขยับตามเมาส์แบบหน่วงนุ่ม ๆ (lerp)
(function () {
  const stage = document.querySelector(".hero-stage");
  if (!stage || !canHover || calm) return;
  const backs = stage.querySelectorAll(".back"), main = stage.querySelector(".hero-main");
  let tx = 0, ty = 0, cx = 0, cy = 0, running = false;
  function loop() {
    cx += (tx - cx) * 0.07; cy += (ty - cy) * 0.07;
    backs.forEach(function (b, i) { const s = i % 2 ? 1 : -1; b.style.translate = (-cx * 26 * s) + "px " + (-cy * 18) + "px"; });
    if (main) main.style.translate = (cx * 10) + "px " + (cy * 8) + "px";
    if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.001) requestAnimationFrame(loop); else running = false;
  }
  function go() { if (!running) { running = true; requestAnimationFrame(loop); } }
  stage.addEventListener("mousemove", function (e) {
    const r = stage.getBoundingClientRect();
    tx = (e.clientX - r.left) / r.width - 0.5; ty = (e.clientY - r.top) / r.height - 0.5; go();
  });
  stage.addEventListener("mouseleave", function () { tx = 0; ty = 0; go(); });
})();

// 7.7 ปุ่มแม่เหล็ก — ปุ่มขยับเข้าหาเมาส์เล็กน้อย
(function () {
  if (!canHover || calm) return;
  document.querySelectorAll(".primary-btn, .pill").forEach(function (el) {
    el.addEventListener("mousemove", function (e) {
      const r = el.getBoundingClientRect();
      el.style.translate = ((e.clientX - r.left - r.width / 2) * 0.22) + "px " + ((e.clientY - r.top - r.height / 2) * 0.32) + "px";
    });
    el.addEventListener("mouseleave", function () { el.style.translate = "0 0"; });
  });
})();

// 7.8 การ์ดภาพเอียงตามเมาส์แบบนุ่ม ๆ (lerp + จำตำแหน่งการ์ดตอนเมาส์เข้า ไม่ให้สั่น)
(function () {
  if (!canHover || calm) return;
  document.querySelectorAll(".photo-card").forEach(function (card) {
    let rect, tx = 0, ty = 0, cx = 0, cy = 0, raf = 0;
    function loop() {
      cx += (tx - cx) * 0.09; cy += (ty - cy) * 0.09;
      card.style.rotate = (-cy) + " " + cx + " 0 " + (Math.hypot(cx, cy) * 11) + "deg";
      if (Math.abs(tx - cx) + Math.abs(ty - cy) > 0.002) { raf = requestAnimationFrame(loop); }
      else { raf = 0; if (tx === 0 && ty === 0) card.style.rotate = ""; }
    }
    function go() { if (!raf) raf = requestAnimationFrame(loop); }
    card.addEventListener("mouseenter", function () { rect = card.getBoundingClientRect(); });
    card.addEventListener("mousemove", function (e) {
      if (!rect) rect = card.getBoundingClientRect();
      tx = (e.clientX - rect.left) / rect.width - 0.5;
      ty = (e.clientY - rect.top) / rect.height - 0.5;
      go();
    });
    card.addEventListener("mouseleave", function () { tx = 0; ty = 0; rect = null; go(); });
  });
})();

// 7.9 หัวข้อใหญ่โผล่ขึ้นทีละคำ
(function () {
  if (calm) return;
  document.querySelectorAll("main h1").forEach(function (h) {
    let i = 0;
    const w = document.createTreeWalker(h, NodeFilter.SHOW_TEXT), nodes = [];
    while (w.nextNode()) nodes.push(w.currentNode);
    nodes.forEach(function (n) {
      const frag = document.createDocumentFragment();
      n.textContent.split(/(\s+)/).forEach(function (part) {
        if (!part.trim()) { frag.append(part); return; }
        const o = document.createElement("span"), s = document.createElement("span");
        o.className = "word"; s.textContent = part; s.style.setProperty("--w", i++);
        o.appendChild(s); frag.append(o);
      });
      n.replaceWith(frag);
    });
  });
})();

// 7.10 พื้นหลังส่วนคำคมเลื่อนช้ากว่าหน้า (parallax ตอนเลื่อน)
(function () {
  const sec = document.querySelector(".quote-section"), bg = sec && sec.querySelector(".quote-bg");
  if (!bg || calm) return;
  let ticking = false;
  function upd() {
    const r = sec.getBoundingClientRect();
    const off = (r.top + r.height / 2 - innerHeight / 2) * -0.12;
    const lim = r.height * 0.07;
    bg.style.translate = "0 " + Math.max(-lim, Math.min(lim, off)) + "px";
    ticking = false;
  }
  addEventListener("scroll", function () { if (!ticking) { ticking = true; requestAnimationFrame(upd); } }, { passive: true });
  upd();
})();

// 7.11 ปัดซ้าย/ขวาบนมือถือเพื่อเปลี่ยนภาพ (lightbox และหน้ารายละเอียด)
(function () {
  let sx = null;
  addEventListener("touchstart", function (e) { sx = e.touches[0].clientX; }, { passive: true });
  addEventListener("touchend", function (e) {
    if (sx === null) return;
    const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) < 70) return;
    const nav = document.querySelector(".lightbox:target .object-nav, #detail .object-nav");
    if (nav) nav.querySelectorAll("a")[dx > 0 ? 0 : 1].click();
  });
})();

// 7.12 ชื่อแท็บเปลี่ยนเมื่อสลับไปแท็บอื่น
(function () {
  const original = document.title;
  document.addEventListener("visibilitychange", function () {
    document.title = document.hidden ? "☁ Look up… come back soon" : original;
  });
})();

// 7.13 พื้นหลังมีชีวิต: แสงตามเมาส์ + ฟองแสงลอยขึ้นช้า ๆ
(function () {
  if (calm) return;
  const box = document.createElement("div");
  box.className = "bokeh"; box.setAttribute("aria-hidden", "true");
  for (let i = 0; i < 14; i++) {
    const s = document.createElement("span"), sz = 16 + Math.random() * 64;
    s.style.cssText = "left:" + (Math.random() * 100) + "%;width:" + sz + "px;height:" + sz + "px;" +
      "animation-duration:" + (28 + Math.random() * 32) + "s;animation-delay:-" + (Math.random() * 50) + "s;";
    box.appendChild(s);
  }
  document.body.appendChild(box);

  if (!canHover) return;
  const glow = document.createElement("div");
  glow.className = "bg-glow"; glow.setAttribute("aria-hidden", "true");
  document.body.appendChild(glow);
  let tx = innerWidth * 0.6, ty = innerHeight * 0.35, cx = tx, cy = ty;
  addEventListener("mousemove", function (e) { tx = e.clientX; ty = e.clientY; }, { passive: true });
  (function loop() {
    cx += (tx - cx) * 0.06; cy += (ty - cy) * 0.06;
    glow.style.translate = cx + "px " + cy + "px";
    requestAnimationFrame(loop);
  })();
})();

// ===== 8) โพลารอยด์หมุน 360° (ใช้ซ้ำ: ฮีโร่ / หน้ารายละเอียด / lightbox / ปฏิทิน) =====
var spunOnce = false;
function spinRotate(rx, ry) {   // รวมมุม X,Y เป็นการหมุนแบบแกน-มุม (ใช้กับ CSS rotate)
  const a = rx * Math.PI / 360, b = ry * Math.PI / 360;
  const cx = Math.cos(a), sx = Math.sin(a), cy = Math.cos(b), sy = Math.sin(b);
  const w = cx * cy, x = sx * cy, y = cx * sy, z = sx * sy, s = Math.sqrt(x * x + y * y + z * z);
  if (s < 1e-6) return "";
  return (x / s) + " " + (y / s) + " " + (z / s) + " " + (2 * Math.atan2(s, w) * 180 / Math.PI) + "deg";
}
function makeSpinner(el, o) {
  o = o || {};
  if (!el || el.dataset.spin) return;
  el.dataset.spin = "1";
  const par = el.parentElement;
  par.style.perspective = "1500px";
  const t = el.querySelector(".polaroid-caption strong"), d = el.querySelector(".polaroid-caption small");
  const back = document.createElement("div");
  back.className = "pback";
  back.innerHTML = '<span class="back-logo">LOOK UP<b>.</b></span><p>' + (o.note || (t ? t.textContent : "I look up to remember.")) +
    '</p><small>' + (o.sub || (d ? d.textContent : "PERSONAL SKY ARCHIVE")) + '</small>';
  el.appendChild(back);
  el.classList.add("spin3d");
  let hint = null;
  if (o.hint) {
    if (getComputedStyle(par).position === "static") par.style.position = "relative";
    hint = document.createElement("div"); hint.className = "spin-hint"; hint.textContent = "DRAG TO SPIN ↻";
    par.appendChild(hint);
  }
  let rx = 0, ry = 0, vx = 0, vy = 0, hx = 0, hy = 0, lx = 0, ly = 0, sx0 = 0, sy0 = 0;
  let down = false, moved = false, idle = 0, raf = 0;
  function frame() {
    raf = 0;
    let busy = down;
    if (!down) {
      if (Math.abs(vx) + Math.abs(vy) > 0.05) { ry += vx; rx += vy; vx *= 0.95; vy *= 0.95; idle = performance.now(); busy = true; }
      else {
        const wait = performance.now() - idle < 700;
        const ty = Math.round(ry / 360) * 360 + hx * 9, tx = Math.round(rx / 360) * 360 - hy * 7;
        if (!wait) { ry += (ty - ry) * 0.07; rx += (tx - rx) * 0.07; }
        busy = wait || Math.abs(ty - ry) + Math.abs(tx - rx) > 0.05;
      }
    }
    el.style.rotate = (!busy && !hx && !hy && Math.abs(ry % 360) < 0.1 && Math.abs(rx % 360) < 0.1) ? "" : spinRotate(rx, ry);
    if (busy) raf = requestAnimationFrame(frame);
  }
  function go() { if (!raf) raf = requestAnimationFrame(frame); }
  el.addEventListener("pointerdown", function (e) {
    down = true; moved = false; lx = sx0 = e.clientX; ly = sy0 = e.clientY; vx = vy = 0;
    el.setPointerCapture(e.pointerId); el.classList.add("grab"); go();
    spunOnce = true; document.querySelectorAll(".spin-hint").forEach((h) => h.classList.add("gone"));
  });
  el.addEventListener("pointermove", function (e) {
    if (!down) return;
    const dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY;
    if (Math.abs(e.clientX - sx0) + Math.abs(e.clientY - sy0) > 6) moved = true;
    ry += dx * 0.45; rx -= dy * 0.45; vx = dx * 0.45; vy = -dy * 0.45;
  });
  function up() { if (!down) return; down = false; idle = performance.now(); el.classList.remove("grab"); go(); }
  el.addEventListener("pointerup", up);
  el.addEventListener("pointercancel", up);
  el.addEventListener("click", function (e) { if (moved) { e.preventDefault(); e.stopPropagation(); moved = false; } }, true);
  el.addEventListener("dblclick", function () { vx = 17; go(); });                 // ดับเบิลคลิก = หมุนหนึ่งรอบ
  par.addEventListener("mousemove", function (e) {
    const r = par.getBoundingClientRect();
    hx = ((e.clientX - r.left) / r.width - 0.5) * 2; hy = ((e.clientY - r.top) / r.height - 0.5) * 2; go();
  });
  par.addEventListener("mouseleave", function () { hx = hy = 0; go(); });
}
(function () {
  makeSpinner(document.querySelector(".hero-main"), { note: "I look up<br>to remember.", sub: "PERSONAL SKY ARCHIVE · 2026", hint: true });
  if (detail) makeSpinner(detail.querySelector(".object-stage .polaroid"), { hint: true });
  document.querySelectorAll(".lightbox .object-stage .polaroid, .result-stage .polaroid").forEach((p) => makeSpinner(p));
  // ปฏิทิน: พื้นหลังแผงผลลัพธ์เรืองแสงตามสีของภาพ
  document.querySelectorAll(".result-stage").forEach(function (st) {
    const img = st.querySelector("img");
    if (img) st.style.setProperty("--photo", 'url("' + img.getAttribute("src") + '")');
  });
})();

// ===== 9) Fresh moments: ลูกกลิ้งภาพ 3 มิติ + แถบเลื่อนแนวตั้ง =====
(function () {
  const grid = document.querySelector(".latest-section .gallery-grid");
  if (!grid) return;
  const N = 8, STEP = 36, CW = 250, CH = 330, R = (CH / 2) / Math.tan((STEP / 2) * Math.PI / 180);
  const items = PHOTOS.map((p, i) => ({ p: p, id: i + 1 })).slice(-N).reverse();
  const wrap = document.createElement("div");
  wrap.className = "drum";
  wrap.innerHTML =
    '<div class="drum-slider" role="slider" tabindex="0" aria-label="เลื่อนดูภาพล่าสุด" aria-valuemin="1" aria-valuemax="' + N + '">' +
      '<button class="ds-btn" type="button" data-d="-1" aria-label="ภาพก่อนหน้า">▲</button>' +
      '<div class="ds-track"><i class="ds-knob"></i></div>' +
      '<button class="ds-btn" type="button" data-d="1" aria-label="ภาพถัดไป">▼</button></div>' +
    '<div class="drum-view"><div class="drum-stage"></div></div><div class="drum-info" aria-live="polite"></div>';
  grid.replaceWith(wrap);

  const stage = wrap.querySelector(".drum-stage"), info = wrap.querySelector(".drum-info");
  const slider = wrap.querySelector(".drum-slider"), track = wrap.querySelector(".ds-track"), knob = wrap.querySelector(".ds-knob");
  stage.style.cssText = "width:" + CW + "px;height:" + CH + "px;margin:-" + CH / 2 + "px 0 0 -" + CW / 2 + "px";
  const cards = items.map(function (it, i) {
    const p = it.p, c = document.createElement("div");
    c.className = "drum-card";
    c.innerHTML = '<div class="polaroid"><span class="polaroid-photo"><img src="images/' + p[3] + '" alt="' + p[0] + '" draggable="false" loading="lazy"></span>' +
      '<span class="polaroid-caption"><strong>' + p[0] + '</strong><small>' + p[1] + ' · ' + TYPE_NAME[p[2]].toUpperCase() + '</small></span></div>';
    c.addEventListener("click", function () { if (!moved) { target = i; go(); } });
    stage.appendChild(c);
    return c;
  });

  let pos = 0, target = 0, raf = 0, shown = -1, moved = false, drag = null;
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  function render() {
    stage.style.transform = "translateZ(" + -R + "px) rotateX(" + pos * STEP + "deg)";
    cards.forEach(function (c, i) {
      const d = Math.abs(i - pos), pull = Math.max(0, 1 - d) * 46;
      c.style.transform = "rotateX(" + -i * STEP + "deg) translateZ(" + (R + pull) + "px)";
      c.style.opacity = clamp(1 - (d - 1.1) / 1.5, 0, 1);
      c.style.pointerEvents = d > 2.4 ? "none" : "";
    });
    knob.style.top = (pos / (N - 1)) * 100 + "%";
    const k = Math.round(clamp(pos, 0, N - 1));
    if (k !== shown) {
      shown = k;
      const it = items[k], p = it.p;
      slider.setAttribute("aria-valuenow", k + 1);
      info.innerHTML = '<div class="di-in"><span class="section-label">' + String(k + 1).padStart(2, "0") + ' / ' + String(N).padStart(2, "0") + ' — ' + TYPE_NAME[p[2]].toUpperCase() + '</span>' +
        '<h3>' + p[0] + '</h3><p class="di-date">' + p[1] + '</p><p>' + p[4] + '</p>' +
        '<a class="text-link" href="collection.html?id=' + it.id + '">OPEN FULL PAGE ↗</a></div>';
    }
  }
  function tick() {
    pos += (target - pos) * 0.1;
    render();
    if (Math.abs(target - pos) > 0.002 || drag) raf = requestAnimationFrame(tick);
    else { pos = target; render(); raf = 0; }
  }
  function go() { if (!raf) raf = requestAnimationFrame(tick); }
  const snap = () => { target = Math.round(clamp(target, 0, N - 1)); go(); };
  render();

  // ลากที่ลูกกลิ้ง (เมาส์)
  const view = wrap.querySelector(".drum-view");
  view.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "touch") return;
    drag = { y: e.clientY, t: target }; moved = false; view.setPointerCapture(e.pointerId); go();
  });
  view.addEventListener("pointermove", function (e) {
    if (!drag) return;
    if (Math.abs(e.clientY - drag.y) > 5) moved = true;
    target = clamp(drag.t - (e.clientY - drag.y) / 120, -0.3, N - 0.7);
  });
  const end = function () { if (!drag) return; drag = null; snap(); setTimeout(function () { moved = false; }, 0); };
  view.addEventListener("pointerup", end); view.addEventListener("pointercancel", end);

  // ลากปุ่มกลมบนแถบ
  function byTrack(e) { const r = track.getBoundingClientRect(); target = clamp((e.clientY - r.top) / r.height, 0, 1) * (N - 1); go(); }
  knob.addEventListener("pointerdown", function (e) { drag = { knob: 1 }; knob.setPointerCapture(e.pointerId); e.stopPropagation(); });
  knob.addEventListener("pointermove", function (e) { if (drag && drag.knob) byTrack(e); });
  const kend = function () { if (drag && drag.knob) { drag = null; snap(); } };
  knob.addEventListener("pointerup", kend); knob.addEventListener("pointercancel", kend);
  track.addEventListener("click", function (e) { if (e.target === track) { byTrack(e); snap(); } });

  // ปุ่มลูกศร + คีย์บอร์ด + ล้อเมาส์ (ถึงปลายทางแล้วให้เลื่อนหน้าต่อได้)
  const step = (d) => { target = clamp(Math.round(target) + d, 0, N - 1); go(); };
  slider.querySelectorAll(".ds-btn").forEach((b) => b.addEventListener("click", () => step(+b.dataset.d)));
  slider.addEventListener("keydown", function (e) {
    if (e.key === "ArrowUp") { step(-1); e.preventDefault(); }
    if (e.key === "ArrowDown") { step(1); e.preventDefault(); }
    if (e.key === "Home") { target = 0; go(); }
    if (e.key === "End") { target = N - 1; go(); }
  });
  let lock = 0;
  wrap.addEventListener("wheel", function (e) {
    const d = Math.sign(e.deltaY), cur = Math.round(target);
    if (!d || (d > 0 && cur >= N - 1) || (d < 0 && cur <= 0)) return;
    e.preventDefault();
    const now = performance.now();
    if (now - lock > 380) { lock = now; step(d); }
  }, { passive: false });
})();