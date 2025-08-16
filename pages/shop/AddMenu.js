// AddMenu.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("menu-container");
  if (!container) {
      alert("Error ! ไม่พบเมนูของร้าน เจ้าหน้าที่กำลังแก้ไข");
      location.href = "../../index.html";
  }

  const path = location.pathname.split("/").pop();
  console.log("Path:", path); // สำหรับดีบัก
  const code = path.split("-")[0]; // A1, A2, B1, ...

  // 🛠 ฟังก์ชันสร้างการ์ดเมนู
  function createCard(img, name, price) {
    return `
      <div class="card-menu">
        <img class="card-menu-img" src="menu/${img}" alt="${name}" loading="lazy">
        <div class="card-menu-text-content">
          <p class="card-menu-text-product">${name}</p>
          <p class="card-menu-text-price">${price}</p>
        </div>
      </div>
    `;
  }

  // 📚 รายการเมนู (แก้ชื่อ/ราคาได้เอง)
  const menus = {
    A1: [
      { img: "A1-Menu1.png", name: "มาม่าต้มยำ", price: "45 บาท" },
      { img: "A1-Menu2.png", name: "ไก่อบน้ำจิ้มแจ่ว", price: "45 บาท" },
      { img: "A1-Menu3.png", name: "ข้าวยำไก่แซ่บ", price: "45 บาท" }
    ],
    A2: [
      { img: "A2-Menu1.png", name: "ข้าวผัดหมู", price: "45 บาท" },
      { img: "A2-Menu2.png", name: "ข้าวผัดกุ้ง", price: "50 บาท" }
    ],
    A3: [
      { img: "A3-Menu1.png", name: "ตำไทย", price: "40 บาท" },
      { img: "A3-Menu2.png", name: "ตำปูปลาร้า", price: "45 บาท" },
      { img: "A3-Menu3.png", name: "ตำทะเล", price: "60 บาท" }
    ],
    A4: [
      { img: "A4-Menu1.png", name: "กะเพราไก่ไข่ดาว", price: "50 บาท" }
    ],
    A5: [
      { img: "A5-Menu1.png", name: "สปาเก็ตตี้ขี้เมา", price: "60 บาท" },
      { img: "A5-Menu2.png", name: "สปาเก็ตตี้คาโบนาร่า", price: "65 บาท" }
    ],
    A6: [
      { img: "A6-Menu1.png", name: "ข้าวมันไก่", price: "45 บาท" },
      { img: "A6-Menu2.png", name: "ข้าวมันไก่ทอด", price: "50 บาท" }
    ],
    A7: [
      { img: "A7-Menu1.png", name: "ก๋วยเตี๋ยวต้มยำ", price: "45 บาท" },
      { img: "A7-Menu2.png", name: "ก๋วยเตี๋ยวน้ำตก", price: "45 บาท" },
      { img: "A7-Menu3.png", name: "ก๋วยเตี๋ยวเรือ", price: "45 บาท" }
    ],
    A8: [
      { img: "A8-Menu1.png", name: "โจ๊กหมู", price: "35 บาท" },
      { img: "A8-Menu2.png", name: "โจ๊กไก่", price: "35 บาท" }
    ],

    B1: [
      { img: "B1-Menu1.png", name: "ข้าวขาหมู", price: "55 บาท" },
      { img: "B1-Menu2.png", name: "ข้าวหมูกรอบ", price: "55 บาท" }
    ],
    B2: [
      { img: "B2-Menu1.png", name: "ข้าวแกงเขียวหวานไก่", price: "50 บาท" },
      { img: "B2-Menu2.png", name: "ข้าวแกงเผ็ดหมู", price: "50 บาท" }
    ],

    C1: [
      { img: "C1-Menu1.png", name: "พิซซ่าหน้าแฮม", price: "79 บาท" },
      { img: "C1-Menu2.png", name: "พิซซ่าหน้าทะเล", price: "89 บาท" },
      { img: "C1-Menu3.png", name: "พิซซ่าหน้าไก่", price: "75 บาท" }
    ],
    C2: [
      { img: "C2-Menu1.png", name: "แฮมเบอร์เกอร์หมู", price: "65 บาท" },
      { img: "C2-Menu2.png", name: "เบอร์เกอร์ไก่", price: "65 บาท" }
    ],
    C3: [
      { img: "C3-Menu1.png", name: "เฟรนช์ฟรายส์", price: "35 บาท" }
    ],

    D1: [
      { img: "D1-Menu1.png", name: "ชาเย็น", price: "25 บาท" },
      { img: "D1-Menu2.png", name: "ชามะนาว", price: "25 บาท" },
      { img: "D1-Menu3.png", name: "ชาเขียว", price: "25 บาท" }
    ],

    E1: [
      { img: "E1-Menu1.png", name: "เค้กช็อกโกแลต", price: "40 บาท" },
      { img: "E1-Menu2.png", name: "เค้กส้ม", price: "40 บาท" },
      { img: "E1-Menu3.png", name: "บราวนี่", price: "35 บาท" }
    ],
    E2: [
      { img: "E2-Menu1.png", name: "ไอศกรีมวนิลา", price: "30 บาท" },
      { img: "E2-Menu2.png", name: "ไอศกรีมช็อกโกแลต", price: "30 บาท" },
      { img: "E2-Menu3.png", name: "ไอศกรีมสตรอว์เบอร์รี่", price: "30 บาท" }
    ],

    F1: [
      { img: "F1-Menu1.png", name: "ส้มตำปู", price: "45 บาท" },
      { img: "F1-Menu2.png", name: "ส้มตำไทยไข่เค็ม", price: "50 บาท" },
      { img: "F1-Menu3.png", name: "ส้มตำปูม้า", price: "60 บาท" }
    ],
    F2: [
      { img: "F2-Menu1.png", name: "ลาบหมู", price: "50 บาท" },
      { img: "F2-Menu2.png", name: "ลาบไก่", price: "50 บาท" },
      { img: "F2-Menu3.png", name: "น้ำตกหมู", price: "55 บาท" }
    ]
  };

  if (menus[code]) {
    container.innerHTML = menus[code]
      .map(item => createCard(item.img, item.name, item.price))
      .join("");
  } else {
    container.innerHTML = `<p>ยังไม่มีเมนูสำหรับ ${code}</p>`;
  }
});
