/* LOOK UP. — script.js
   1) ข้อมูลภาพทั้งหมด  2) คีย์บอร์ดใน lightbox  3) ลิงก์ไปหน้า collection  4) วาดหน้า collection.html */

// [ชื่อ, วันที่, ชนิดท้องฟ้า, ไฟล์ภาพ, เรื่องราว, สถานที่, บันทึกส่วนตัว]
// ช่อง สถานที่ / บันทึกส่วนตัว เว้นว่างไว้ — เติมเองได้ ถ้าไม่ว่างจะแสดงในหน้า collection
const PHOTOS = [
  ["A Quiet Morning","12 JAN 2026","sunrise","sky-01.jpg","เช้าวันหนึ่งที่ท้องฟ้าเริ่มเปลี่ยนสี แสงแดดอ่อน ๆ ทำให้บรรยากาศดูสงบ","",""],
  ["Sky No. 27","24 JAN 2026","sunrise","sky-27.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Golden Hour","08 FEB 2026","sunset","sky-02.jpg","ช่วงเวลาที่ท้องฟ้าเปลี่ยนเป็นสีส้มทอง ก่อนที่พระอาทิตย์จะลับขอบฟ้า","",""],
  ["Sky No. 28","19 FEB 2026","sunset","sky-28.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Sky No. 29","02 MAR 2026","cloudy","sky-29.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Cloud Stories","15 MAR 2026","cloudy","sky-03.jpg","กลุ่มเมฆที่ลอยผ่านท้องฟ้า แต่ละก้อนมีรูปร่างและความสวยงามต่างกัน","",""],
  ["Sky No. 30","27 MAR 2026","blue","sky-30.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["Sky No. 31","08 APR 2026","sunrise","sky-31.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Blue Afternoon","20 APR 2026","blue","sky-09.JPG","ท้องฟ้าสีฟ้าในช่วงบ่าย เป็นวันที่อากาศสดใสและเหมาะกับการออกไปถ่ายรูป","",""],
  ["Before the Rain","06 MAY 2026","cloudy","sky-24.jpg","ก่อนที่ฝนจะตก ท้องฟ้าถูกปกคลุมด้วยเมฆสีเข้มและให้บรรยากาศที่แตกต่าง","",""],
  ["Sky No. 32","14 MAY 2026","sunset","sky-32.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Sky No. 33","29 MAY 2026","cloudy","sky-33.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Sky No. 34","07 JUN 2026","blue","sky-34.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["Last Light","18 JUN 2026","sunset","sky-10.JPG","แสงสุดท้ายของวัน เป็นช่วงเวลาสั้น ๆ ที่อยากเก็บไว้ในความทรงจำ","",""],
  ["Sky No. 35","26 JUN 2026","sunrise","sky-35.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Morning Glow","02 JUL 2026","sunrise","sky-11.JPG","แสงสีทองยามเช้าที่ค่อย ๆ ส่องผ่านขอบฟ้า เริ่มต้นวันใหม่อย่างสดใส","",""],
  ["Sky No. 36","09 JUL 2026","sunset","sky-36.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Cotton Clouds","14 JUL 2026","cloudy","sky-12.jpg","ก้อนเมฆสีขาวนุ่มคล้ายปุยฝ้าย ลอยอยู่บนท้องฟ้าสีฟ้าอ่อน","",""],
  ["Sky No. 37","20 JUL 2026","cloudy","sky-37.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Pastel Evening","26 JUL 2026","sunset","sky-13.jpg","ท้องฟ้ายามเย็นที่แต่งแต้มด้วยสีชมพูและม่วง เป็นช่วงเวลาที่ดูอบอุ่น","",""],
  ["Open Blue","05 AUG 2026","blue","sky-14.jpg","ท้องฟ้าสีฟ้ากว้างสุดสายตา พร้อมแสงแดดที่ทำให้ทุกอย่างดูสดใส","",""],
  ["Sky No. 38","11 AUG 2026","blue","sky-38.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["A New Beginning","17 AUG 2026","sunrise","hero-sky.jpg","พระอาทิตย์เริ่มขึ้นเหนือขอบฟ้า พร้อมแสงแรกที่ทำให้เช้าวันนั้นพิเศษ","",""],
  ["Sky No. 39","23 AUG 2026","sunrise","sky-39.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Cloudy Mood","29 AUG 2026","cloudy","sky-26.jpg","วันที่ท้องฟ้าเต็มไปด้วยเมฆ ให้ความรู้สึกสงบและแตกต่างจากวันอื่น","",""],
  ["Orange Horizon","04 SEP 2026","sunset","sky-17.jpg","เส้นขอบฟ้าสีส้มในช่วงเย็น แสงอาทิตย์ค่อย ๆ จางหายไปอย่างช้า ๆ","",""],
  ["Sky No. 40","08 SEP 2026","sunset","sky-40.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Simply Blue","12 SEP 2026","blue","sky-18.jpg","ท้องฟ้าสีฟ้าเรียบง่ายที่ทำให้รู้สึกสบายตา เป็นภาพธรรมดาที่น่าจดจำ","",""],
  ["Soft Sunrise","21 SEP 2026","sunrise","sky-19.jpg","แสงแดดยามเช้าที่นุ่มนวล ค่อย ๆ เปลี่ยนสีของท้องฟ้าให้สว่างขึ้น","",""],
  ["Sky No. 41","27 SEP 2026","cloudy","sky-41.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""],
  ["Passing Clouds","02 OCT 2026","cloudy","sky-20.jpg","เมฆที่กำลังเคลื่อนตัวผ่านท้องฟ้า เปลี่ยนรูปร่างไปตามสายลม","",""],
  ["Sky No. 42","06 OCT 2026","blue","sky-42.jpg","ภาพธรรมดาของท้องฟ้า ที่เมื่อกลับมาดูอีกครั้งก็ทำให้นึกถึงบรรยากาศวันนั้น","",""],
  ["Golden Goodbye","09 OCT 2026","sunset","sky-21.jpg","แสงสีทองในช่วงท้ายของวัน เป็นอีกหนึ่งช่วงเวลาที่อยากหยุดเก็บไว้","",""],
  ["Sky No. 43","13 OCT 2026","sunrise","sky-43.jpg","ท้องฟ้าอีกวันหนึ่งที่หยุดมองแล้วอยากเก็บไว้ ไม่มีอะไรพิเศษ แต่เป็นของวันนั้นจริง ๆ","",""],
  ["Blue Escape","16 OCT 2026","blue","sky-22.jpg","มองขึ้นไปเห็นท้องฟ้าสีฟ้าสดใส ช่วยเติมความสดชื่นให้กับวันธรรมดา","",""],
  ["Sky No. 44","19 OCT 2026","sunset","sky-44.jpg","ช่วงเวลาเล็ก ๆ ระหว่างวันที่เงยหน้าขึ้นมอง แล้วรู้สึกว่าอยากจดจำมันไว้","",""],
  ["Dreamy Clouds","22 OCT 2026","cloudy","sky-23.jpg","กลุ่มเมฆที่เรียงตัวอย่างสวยงามราวกับภาพวาดบนผืนฟ้า","",""],
  ["Until Tomorrow","27 OCT 2026","sunset","sky-25.jpg","พระอาทิตย์กำลังลับขอบฟ้า ปิดท้ายวันด้วยสีสันที่สวยงาม","",""],
  ["Sky No. 45","30 OCT 2026","cloudy","sky-45.jpg","แสงและสีของท้องฟ้าในวันนี้ไม่เหมือนวันไหน ๆ จึงอยากเก็บไว้ในคอลเลกชัน","",""]
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
  link.className = "text-link";
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
  document.title = p[0] + " | LOOK UP.";
  detail.innerHTML =
    '<a class="lightbox-close" href="gallery.html#c-' + id + '">BACK ×</a>' +
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