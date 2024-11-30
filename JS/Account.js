document
  .getElementById("registerform")
  .addEventListener("submit", function (regevent) {
    regevent.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    let confirmpassword = document.getElementById("confirmpassword").value;
    if (localStorage.getItem(username)) {
      alert("Tài khoản đã tồn tại. Hãy đăng nhập.");
    } else if (password != confirmpassword) {
      alert("Mật khẩu và xác nhận mật khẩu không trùng khớp.");
    } else {
      localStorage.setItem(username, password);
      alert("Đăng ký thành công. Vui lòng đăng nhập");
      window.location.href = "Login.html";
      document.getElementById("registerform").reset();
    }
  });
