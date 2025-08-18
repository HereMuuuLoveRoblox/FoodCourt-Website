// AddMenu.js
document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("menu-container");
    if (!container) {
        alert("Error ! ไม่พบเมนูของร้าน เจ้าหน้าที่กำลังแก้ไข");
        location.href = "../../index.html";
    }

    const path = location.pathname.split("/").pop(); //  A1-info.html , A2-info.html
    const code = path.split("-")[0]; // A1, A2

    // func สร้าง card
    function createCard(img, name, price) {
        return `
            <div class="card-menu">
                <img class="card-menu-img" src="menu/${img}" alt="${name}" loading="lazy">
                <div class="card-menu-text-content">
                <p class="card-menu-text-product">${name}</p>
                <p class="card-menu-text-price">${price} บาท</p>
                </div>
            </div>
        `;
    }

    // menus data
    const menus = {
        A1: [
            { img: "A1-Menu1.png", name: "ข้าวหน้าหมู", price: "45" },
            { img: "A1-Menu2.png", name: "ข้าวแกงกะหรี่", price: "45" },
            { img: "A1-Menu3.png", name: "ข้าวน้ำตกไก่ย่าง", price: "45" },
            { img: "A1-Menu4.png", name: "ข้าวยำไก่แซ่บ", price: "45" },
            { img: "A1-Menu5.png", name: "ข้าวไก่สไปซี่", price: "45" },
            { img: "A1-Menu6.png", name: "ข้าวไก่อบน้ำจิ้มแจ่ว", price: "45" },
            { img: "A1-Menu7.png", name: "ข้าวไก่ย่าง", price: "45" },
            { img: "A1-Menu8.png", name: "ข้าวหน้าไก่ทอด", price: "45" },
            { img: "A1-Menu9.png", name: "มาม่าต้มยำ", price: "45" }
        ],

        A2: [
            { img: "A2-Menu1.png", name: "ขนมจีนน้ำยากะทิ", price: "45" },
            { img: "A2-Menu2.png", name: "ขนมจีนน้ำยาป่า", price: "45" },
            { img: "A2-Menu3.png", name: "แกงเขียวหวาน", price: "50" },
            { img: "A2-Menu4.png", name: "แกงไตปลา", price: "50" }
        ],

        A3: [
            { img: "A3-Menu1.png", name: "กระเพราหมูหมัก", price: "50" },
            { img: "A3-Menu2.png", name: "กระเพราหมูสับ", price: "45" },
            { img: "A3-Menu3.png", name: "ข้าวไข่ข้น", price: "35" },
            { img: "A3-Menu4.png", name: "ข้าวยำหมูหมักแซ่บ", price: "50" },
            { img: "A3-Menu5.png", name: "ข้าวราดต้มยำแห้ง", price: "50" },
            { img: "A3-Menu6.png", name: "ข้าวหน้าสเต็ก", price: "50" },
            { img: "A3-Menu7.png", name: "ยำมาม่า", price: "50" },
            { img: "A3-Menu8.png", name: "ยำวุ้นเส้น", price: "50" },
            { img: "A3-Menu9.png", name: "ยำหมูยอ", price: "50" }
        ],

        A4: [
            { img: "A4-Menu1.png", name: "ข้าวหมูทอด", price: "55" },
            { img: "A4-Menu2.png", name: "ข้าวหมูอบ", price: "55" }
        ],

        A5: [
            { img: "A5-Menu1.png", name: "ข้าวมันไก่ต้ม", price: "40" },
            { img: "A5-Menu2.png", name: "ข้าวมันไก่ทอด", price: "40" }
        ],

        A6: [
            { img: "A6-Menu1.png", name: "ข้าวมันไก่ทอด", price: "40" },
            { img: "A6-Menu2.png", name: "ข้าวมันไก่ต้ม", price: "40" },
            { img: "A6-Menu3.png", name: "ยำไก่แซ่บ", price: "45" },
            { img: "A6-Menu4.png", name: "ข้าวแกงกะหรี่ไก่", price: "45" },
            { img: "A6-Menu5.png", name: "ข้าวมันไก่รวม", price: "50" },
            { img: "A6-Menu6.png", name: "ข้าวหมกไก่ทอด", price: "40" },
            { img: "A6-Menu7.png", name: "ข้าวมันไก่ย่าง", price: "40" }
        ],

        A7: [
            { img: "A7-Menu1.png", name: "ผัดกระเพรา", price: "50" },
            { img: "A7-Menu2.png", name: "ข้าวผัดหมู", price: "50" },
            { img: "A7-Menu3.png", name: "ข้าวผัดทะเล", price: "60" },
            { img: "A7-Menu4.png", name: "สปาเก็ตตี้", price: "50" },
            { img: "A7-Menu5.png", name: "สุกี้น้ำ", price: "45" },
            { img: "A7-Menu6.png", name: "สุกี้แห้ง", price: "45" },
            { img: "A7-Menu7.png", name: "ผัดซีอิ๊ว", price: "45" }
        ],

        A8: [
            { img: "A8-Menu1.png", name: "ข้าวขาหมู", price: "50" },
            { img: "A8-Menu2.png", name: "ข้าวขาหมู+ไส้", price: "50" },
            { img: "A8-Menu3.png", name: "ข้าวหมูแดง", price: "50" },
            { img: "A8-Menu4.png", name: "ข้าวหมูกรอบ", price: "50" },
            { img: "A8-Menu5.png", name: "ข้าวหมูแดง", price: "50" },
            { img: "A8-Menu6.png", name: "ข้าวเปล่า", price: "10" }
        ],
        B1: [
            { img: "B1-Menu1.png", name: "ข้าวขาหมู", price: "55" },
            { img: "B1-Menu2.png", name: "ข้าวหมูกรอบ", price: "55" }
        ],
        B2: [
            { img: "B2-Menu1.png", name: "ข้าวแกงเขียวหวานไก่", price: "50" },
            { img: "B2-Menu2.png", name: "ข้าวแกงเผ็ดหมู", price: "50" }
        ],

        C1: [
            { img: "C1-Menu1.png", name: "พิซซ่าหน้าแฮม", price: "79" },
            { img: "C1-Menu2.png", name: "พิซซ่าหน้าทะเล", price: "89" },
            { img: "C1-Menu3.png", name: "พิซซ่าหน้าไก่", price: "75" }
        ],
        C2: [
            { img: "C2-Menu1.png", name: "แฮมเบอร์เกอร์หมู", price: "65" },
            { img: "C2-Menu2.png", name: "เบอร์เกอร์ไก่", price: "65" }
        ],
        C3: [
            { img: "C3-Menu1.png", name: "เฟรนช์ฟรายส์", price: "35" }
        ],

        D1: [
            { img: "D1-Menu1.png", name: "ชาเย็น", price: "25" },
            { img: "D1-Menu2.png", name: "ชามะนาว", price: "25" },
            { img: "D1-Menu3.png", name: "ชาเขียว", price: "25" }
        ],

        E1: [
            { img: "E1-Menu1.png", name: "เค้กช็อกโกแลต", price: "40" },
            { img: "E1-Menu2.png", name: "เค้กส้ม", price: "40" },
            { img: "E1-Menu3.png", name: "บราวนี่", price: "35" }
        ],
        E2: [
            { img: "E2-Menu1.png", name: "ไอศกรีมวนิลา", price: "30" },
            { img: "E2-Menu2.png", name: "ไอศกรีมช็อกโกแลต", price: "30" },
            { img: "E2-Menu3.png", name: "ไอศกรีมสตรอว์เบอร์รี่", price: "30" }
        ],

        F1: [
            { img: "F1-Menu1.png", name: "ส้มตำปู", price: "45" },
            { img: "F1-Menu2.png", name: "ส้มตำไทยไข่เค็ม", price: "50" },
            { img: "F1-Menu3.png", name: "ส้มตำปูม้า", price: "60" }
        ],
        F2: [
            { img: "F2-Menu1.png", name: "ลาบหมู", price: "50" },
            { img: "F2-Menu2.png", name: "ลาบไก่", price: "50" },
            { img: "F2-Menu3.png", name: "น้ำตกหมู", price: "55" },
            { img: "F2-Menu4.png", name: "น้ำตกหมู", price: "55" },
            { img: "F2-Menu5.png", name: "วาฟเฟิลช็อคโกแลต", price: "55" }
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
