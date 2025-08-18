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
        
        if (price === "-") {
            return `
                <div class="card-menu">
                    <img class="card-menu-img" src="menu/${img}" alt="${name}" loading="lazy">
                    <div class="card-menu-text-content noprice">
                        <p class="card-menu-text-product">${name}</p>
                    </div>
                </div>
            `;
        }

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
        ],
        B1: [
            { img: "B1-Menu1.png", name: "1 อย่าง", price: "35" },
            { img: "B1-Menu2.png", name: "2 อย่าง", price: "40" },
            { img: "B1-Menu3.png", name: "ไข่พะโล้", price: "25" },
            { img: "B1-Menu4.png", name: "พะแนงไก่", price: "25" },
            { img: "B1-Menu5.png", name: "แกงเขียวหวาน", price: "25" },
            { img: "B1-Menu6.png", name: "ไข่ต้ม", price: "10" },
            { img: "B1-Menu7.png", name: "ปลาทู", price: "30" }
        ],
        B2: [
            { img: "B2-Menu1.png", name: "1 อย่าง", price: "35" },
            { img: "B2-Menu2.png", name: "2 อย่าง", price: "40" },
            { img: "B2-Menu3.png", name: "กะเพราหมู", price: "25" },
            { img: "B2-Menu4.png", name: "ผัดสะตอกุ้ง", price: "25" },
            { img: "B2-Menu5.png", name: "ต้มจืด", price: "25" },
            { img: "B2-Menu6.png", name: "ไข่ดาว", price: "10" },
            { img: "B2-Menu7.png", name: "ทอดมัน", price: "20" }
        ],

        C1: [
            { img: "C1-Menu1.png", name: "ต้มยำ", price: "50" },
            { img: "C1-Menu2.png", name: "น้ำตก", price: "50" },
            { img: "C1-Menu3.png", name: "น้ำใส", price: "40" },
            { img: "C1-Menu4.png", name: "ต้มยำแห้ง", price: "50" },
            { img: "C1-Menu5.png", name: "เกาเหลาต้มยำ", price: "50" }
        ],
        C2: [
            { img: "C2-Menu1.png", name: "ไก่ฉีก", price: "40" },
            { img: "C2-Menu2.png", name: "น่องไก่", price: "40" },
            { img: "C2-Menu3.png", name: "ไกฉีก+ไข่ต้ม", price: "50" },
            { img: "C2-Menu4.png", name: "ไก่ฉีก+น่องไก่", price: "50" },
            { img: "C2-Menu5.png", name: "น่องไก่ 2", price: "60" }
        ],
        C3: [
            { img: "C3-Menu1.png", name: "เนื้อสด", price: "50" },
            { img: "C3-Menu2.png", name: "เนื้อเปื่อย", price: "60" },
            { img: "C3-Menu3.png", name: "เนื้อสด+เปื่อย", price: "60" },
            { img: "C3-Menu4.png", name: "เกาเหลาเนื้อเปื่อย", price: "70" }
        ],

        D1: [
            { img: "D1-Menu1.png", name: "ข้าวราดผัดกระเทียม", price: "50" },
            { img: "D1-Menu2.png", name: "ข้าวผัดโบราณ", price: "50" },
            { img: "D1-Menu3.png", name: "ข้าวราดผัดน้ำมันหอย", price: "50" },
            { img: "D1-Menu5.png", name: "ข้าวราดผัดผงกะหรี่", price: "50" },
            { img: "D1-Menu4.png", name: "ราดหน้า", price: "50" },
            { img: "D1-Menu6.png", name: "ต้มยำ", price: "60" },
            { img: "D1-Menu7.png", name: "แกงจืดไข่น้ำ", price: "50" }
        ],
        E1: [
            { img: "E1-Menu1.png", name: "โค๊ก", price: "20" },
            { img: "E1-Menu2.png", name: "สไปรท์", price: "20" },
            { img: "E1-Menu3.png", name: "แฟนต้า", price: "20" },
            { img: "E1-Menu4.png", name: "น้ำลำไย", price: "35" },
            { img: "E1-Menu5.png", name: "น้ำเก๊กฮวย", price: "30" },
        ],
        E2: [
            { img: "E2-Menu1.png", name: "บลูฮาวายโซดา", price: "20" },
            { img: "E2-Menu2.png", name: "สตอเบอรี่โซดา", price: "20" },
            { img: "E2-Menu3.png", name: "ชาเย็น", price: "25" },
            { img: "E2-Menu4.png", name: "ชาเขียว", price: "25" },
            { img: "E2-Menu5.png", name: "โกโก้", price: "25" },
            { img: "E2-Menu6.png", name: "นมเย็น", price: "25" },
        ],

        F1: [
            { img: "F1-option1.png", name: "ถ้วย", price: "30" },
            { img: "F1-option2.png", name: "โคน", price: "20" },
            { img: "F1-Menu1.png", name: "วานิลา", price: "-" },
            { img: "F1-Menu2.png", name: "มะนาว", price: "-" },
            { img: "F1-Menu3.png", name: "กะทิรวมมิตร", price: "-" },
            { img: "F1-Menu4.png", name: "ช็อคโกแลต", price: "-" },
            { img: "F1-Menu5.png", name: "เผือก", price: "-" },
            { img: "F1-Menu6.png", name: "โอริโอ้", price: "-" },
            { img: "F1-Menu7.png", name: "เรนโบว์", price: "-" },
            { img: "F1-Menu8.png", name: "คาปูชิโน่", price: "-" }
        ],
        F2: [
            { img: "F2-Menu1.png", name: "ออริจินอล", price: "10" },
            { img: "F2-Menu2.png", name: "อัลมอนด์", price: "10" },
            { img: "F2-Menu3.png", name: "ผลไม้รวม", price: "10" },
            { img: "F2-Menu4.png", name: "ลูกเกด", price: "10" },
            { img: "F2-Menu5.png", name: "ช็อคโกแลต", price: "10" }
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
