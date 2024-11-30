let salesData = {};
let isLoggedIn = false;
document.addEventListener("DOMContentLoaded", function () {
  const storedUsername = localStorage.getItem("username");
  if (storedUsername) {
    isLoggedIn = true;
  }

  const storedSalesData = localStorage.getItem("salesData");
  if (storedSalesData) {
    salesData = JSON.parse(storedSalesData);
  }

  loadSoldCounts();
  loadCart();
});
function loadCart() {
  const username = localStorage.getItem("username");
  if (!username) {
    alert("Vui lòng đăng nhập");
    window.location.href = "https://nguyencuong23.github.io/nguyencuong/HTML/Home.html";
    return;
  }
  const cart = JSON.parse(localStorage.getItem("cart_" + username)) || [];
  const cartContainer = document.getElementById("cart");
  cartContainer.innerHTML = "";

  let total = 0;
  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>Giỏ hàng của bạn đang trống.</p>";
  } else {
    const ul = document.createElement("ul");

    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="${item.link}" target="_blank">${item.name}</a> - ${
        item.quantity
      } x ${item.price.toLocaleString()} VND
        <button class="buy-button" data-id="${item.id}" data-quantity="${
        item.quantity
      }">Mua hàng</button>
        <button class="remove-button" data-index="${index}">Xóa</button>
      `;
      ul.appendChild(li);
      total += item.price * item.quantity;
    });

    cartContainer.appendChild(ul);

    const totalPriceElement = document.getElementById("total-price");
    if (totalPriceElement) {
      totalPriceElement.textContent = `Tổng cộng: ${total.toLocaleString()} VND`;
    }

    document.querySelectorAll(".buy-button").forEach((button) => {
      button.addEventListener("click", increaseSoldCount);
    });

    document.querySelectorAll(".remove-button").forEach((button) => {
      button.addEventListener("click", removeItem);
    });
  }
}
function loadSoldCounts() {
  const cart =
    JSON.parse(
      localStorage.getItem("cart_" + localStorage.getItem("username"))
    ) || [];
  cart.forEach((item) => {
    const soldCount = salesData["soldCount" + item.id] || 0;
    const soldCountElement = document.getElementById("soldCount" + item.id);
    if (soldCountElement) {
      soldCountElement.innerText = `Đã bán: ${soldCount}`;
    }
  });
}
function increaseSoldCount(event) {
  event.preventDefault();
  if (!isLoggedIn) {
    alert("Vui lòng đăng nhập để mua hàng.");
    return;
  }
  const productId = event.currentTarget.getAttribute("data-id");
  const quantity = parseInt(event.currentTarget.getAttribute("data-quantity"));
  if (!salesData["soldCount" + productId]) {
    salesData["soldCount" + productId] = 0;
  }
  let currentCount = salesData["soldCount" + productId];
  currentCount += quantity;
  salesData["soldCount" + productId] = currentCount;
  const soldCountElement = document.getElementById("soldCount" + productId);
  if (soldCountElement) {
    soldCountElement.innerText = `Đã bán: ${currentCount}`;
  }
  localStorage.setItem("salesData", JSON.stringify(salesData));
  alert("Mua hàng thành công!");
}
function removeItem(event) {
  const index = event.target.getAttribute("data-index");
  const username = localStorage.getItem("username");
  const cart = JSON.parse(localStorage.getItem("cart_" + username)) || [];

  if (cart[index].quantity > 1) {
    cart[index].quantity -= 1;
  } else {
    cart.splice(index, 1);
  }

  localStorage.setItem("cart_" + username, JSON.stringify(cart));
  loadCart();
}
