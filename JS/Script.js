// Số lượng đã bán
const salesData = {};
let isLoggedIn = false;
function loadSoldCounts() {
  for (let i = 1; i <= 999; i++) {
    const soldCount = salesData["soldCount" + i] || 0;
    const soldCountElement = document.getElementById("soldCount" + i);
    if (soldCountElement) {
      soldCountElement.innerText = `Đã bán: ${soldCount}`;
    }
  }
}
function increaseSoldCount(event) {
  event.preventDefault();
  if (!isLoggedIn) {
    alert("Vui lòng đăng nhập để mua hàng.");
    return;
  }
  const productId = event.currentTarget.getAttribute("data-id");
  const soldCountElement = document.getElementById("soldCount" + productId);
  if (!salesData["soldCount" + productId]) {
    salesData["soldCount" + productId] = 0;
  }
  let currentCount = salesData["soldCount" + productId];
  currentCount += 1;
  salesData["soldCount" + productId] = currentCount;
  if (soldCountElement) {
    soldCountElement.innerText = `Đã bán: ${currentCount}`;
  }
  localStorage.setItem("salesData", JSON.stringify(salesData));
}
document.addEventListener("DOMContentLoaded", function () {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    isLoggedIn = true;
  }
  const storedSalesData = localStorage.getItem("salesData");
  if (storedSalesData) {
    Object.assign(salesData, JSON.parse(storedSalesData));
  }
  loadSoldCounts();
  // Nút mua hàng
  const buyButtons = document.querySelectorAll(".buy-button");
  buyButtons.forEach((button) => {
    button.addEventListener("click", () => {
      increaseSoldCount(event);
      alert("Mua hàng thành công");
    });
  });
});
// Giỏ hàng
const products = [
  {
    id: 1,
    name: '<a href="http://localhost:5500/HTML/SP/1.html">Điều kỳ diệu của tiệm tạp hóa NAMIYA</a>',
    price: 99350,
  },
  {
    id: 2,
    name: '<a href="http://localhost:5500/HTML/SP/2.html">NEXUS - Lược Sử Của Những Mạng Lưới Thông Tin Từ Thời Đại Đồ Đá Đến Trí Tuệ Nhân Tạo</a>',
    price: 260000,
  },
  {
    id: 3,
    name: '<a href="http://localhost:5500/HTML/SP/3.html">Trò Chơi Của Những Kẻ Hiểu Luật</a>',
    price: 126000,
  },
  {
    id: 4,
    name: '<a href="http://localhost:5500/HTML/SP/4.html">Dẫn Dắt Một Bầy Sói Hay Chăn Một Đàn Cừu</a>',
    price: 137000,
  },
  {
    id: 5,
    name: '<a href="http://localhost:5500/HTML/SP/5.html">Trải Nghiệm Khách Hàng Xuất Sắc</a>',
    price: 200000,
  },
  {
    id: 6,
    name: '<a href="http://localhost:5500/HTML/SP/6.html">Ngôi Nhà Bên Bờ Biển Xanh Thẳm</a>',
    price: 136000,
  },
  {
    id: 7,
    name: '<a href="http://localhost:5500/HTML/SP/7.html">Giải Mã Hoóc-môn Dopamine - Sống Cân Bằng Trong Thời Đại Đầy Cám Dỗ</a>',
    price: 145000,
  },
  {
    id: 8,
    name: '<a href="http://localhost:5500/HTML/SP/8.html">Định luật Murphy - Mọi bí mật tâm lý thao túng cuộc đời bạn</a>',
    price: 88100,
  },
  {
    id: 9,
    name: '<a href="http://localhost:5500/HTML/SP/9.html">Mẹ làm gì có ước mơ</a>',
    price: 62000,
  },
  {
    id: 10,
    name: '<a href="http://localhost:5500/HTML/SP/10.html">Cho Tôi Xin Một Vé Đi Tuổi Thơ</a>',
    price: 68000,
  },
  {
    id: 11,
    name: '<a href="http://localhost:5500/HTML/SP/11.html">Người Bán Hàng Vĩ Đại Nhất Thế Giới</a>',
    price: 134000,
  },
  {
    id: 12,
    name: '<a href="http://localhost:5500/HTML/SP/12.html">Chat GPT Thực Chiến</a>',
    price: 105000,
  },
  {
    id: 13,
    name: '<a href="http://localhost:5500/HTML/SP/13.html">Nghệ Thuật Không Nổi Giận</a>',
    price: 65100,
  },
  {
    id: 14,
    name: '<a href="http://localhost:5500/HTML/SP/14.html">Thao Túng Tâm Lý</a>',
    price: 105000,
  },
  {
    id: 15,
    name: '<a href="http://localhost:5500/HTML/SP/15.html">Bố Già</a>',
    price: 145000,
  },
  {
    id: 16,
    name: '<a href="http://localhost:5500/HTML/SP/16.html">Hoàng Lê Nhất Thống Chí</a>',
    price: 95000,
  },
  {
    id: 17,
    name: '<a href="http://localhost:5500/HTML/SP/17.html">Việt Nam: Lịch Sử Không Biên Giới</a>',
    price: 291000,
  },
  {
    id: 18,
    name: '<a href="http://localhost:5500/HTML/SP/18.html">Sự Thật Trần Trụi Về Thống Kê</a>',
    price: 147000,
  },
  {
    id: 19,
    name: '<a href="http://localhost:5500/HTML/SP/19.html">Luật Tâm Thức - Vũ Trụ Nhất Nguyên Luận</a>',
    price: 222000,
  },
  {
    id: 20,
    name: '<a href="http://localhost:5500/HTML/SP/20.html">Vị Thần Của Những Quyết Định</a>',
    price: 54100,
  },
  {
    id: 21,
    name: '<a href="http://localhost:5500/HTML/SP/21.html">Năm 2112 Doraemon Ra Đời</a>',
    price: 33000,
  },
  {
    id: 22,
    name: '<a href="http://localhost:5500/HTML/SP/22.html">Doraemon - Nobita Và Người Khổng Lồ Xanh</a>',
    price: 33000,
  },
  {
    id: 23,
    name: '<a href="http://localhost:5500/HTML/SP/23.html">Doraemon Thế Giới Khoa Học - Thế Giới Robot</a>',
    price: 45000,
  },
  {
    id: 24,
    name: '<a href="http://localhost:5500/HTML/SP/24.html">Doraemon Tranh Truyện Màu - Kỉ Niệm Về Bà</a>',
    price: 33000,
  },
  {
    id: 25,
    name: '<a href="http://localhost:5500/HTML/SP/25.html">Clean Code - Mã Sạch Và Con Đường Trở Thành Lập Trình Viên Giỏi</a>',
    price: 520000,
  },
  {
    id: 26,
    name: '<a href="http://localhost:5500/HTML/SP/26.html">Từ Nghiện Game Đến Mê Code</a>',
    price: 66000,
  },
  {
    id: 27,
    name: '<a href="http://localhost:5500/HTML/SP/27.html">XỨ SỞ ANIMATION - Nghệ thuật kể chuyện bằng Animation</a>',
    price: 270000,
  },
  {
    id: 28,
    name: '<a href="http://localhost:5500/HTML/SP/28.html">Chat GPT là gì ... Phép lạ nào khiến nó hoạt động?</a>',
    price: 217000,
  },
];
function addToCart(productId) {
  let cart =
    JSON.parse(
      localStorage.getItem("cart_" + localStorage.getItem("username"))
    ) || [];
  const product = products.find((item) => item.id === productId);
  if (product) {
    const existingProduct = cart.find((item) => item.id === productId);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    localStorage.setItem(
      "cart_" + localStorage.getItem("username"),
      JSON.stringify(cart)
    );
    alert("Đã thêm vào giỏ hàng!");
  }
}
