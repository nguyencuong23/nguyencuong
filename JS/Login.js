document
  .getElementById("loginForm")
  .addEventListener("submit", function (logEvent) {
    logEvent.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const storedPassword = localStorage.getItem(username);

    if (storedPassword === null) {
      alert("Tài khoản không tồn tại!");
    } else if (storedPassword !== password) {
      alert("Mật khẩu không đúng!");
    } else {
      alert("Đăng nhập thành công! Chào mừng trở lại " + username);
      updateUsername(username);
      window.location.href = "http://localhost:5500/HTML/Home.html";
    }

    document.getElementById("loginForm").reset();
  });
