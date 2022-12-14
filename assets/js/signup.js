const loginLocation = () => {
  window.location = "login.html";
};

var accounts = [
  {
    username: "admin",
    password: "admin",
  },
  {
    username: "B2103492",
    password: "duylatoi",
  },
];

// Check xem nếu localStorage chưa được khai báo thì set mảng accounts vào localStorage
var checkLocalStorage = localStorage.getItem("accounts");
if (checkLocalStorage == undefined) {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

const validateName = (name) => {
  if (name.length > 4) {
    return true;
  }
  return false;
};

// Bắt event khi người dùng submit đăng ký
var btnSubmit = document.querySelector("#submit");
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  var formLogin = document.forms["sign-up"];
  var username = formLogin["username"].value;
  var password = formLogin["password"].value;
  var rePassword = formLogin["re-password"].value;
  var x = 0;
  accounts = localStorage.getItem("accounts");
  accounts = JSON.parse(accounts);

  // Tìm xem tên đăng nhập của người dùng có tồn tại không
  const found = accounts.find((AccountUsername) => {
    return AccountUsername.username == username;
  });
  if (!username || !password || !rePassword) {
    toast({
      title: "Error",
      msg: "Không được để trống!",
      type: "error",
      duration: 3000,
    });
    x++;
    return;
  }

  if (found) {
    toast({
      title: "Error",
      msg: "Tên đăng nhập đã được sử dụng",
      type: "error",
      duration: 3000,
    });
    x++;
    return;
  }
  if (password !== rePassword) {
    toast({
      title: "Error",
      msg: "Mật khẩu không trùng khớp",
      type: "error",
      duration: 3000,
    });
    x++;
    return;
  }

  //   Nếu thỏa điều kiện push username và password
  // vào mảng accounts sau đó chuyển hướng tới trang đăng nhập
  if (x == 0) {
    accounts.push({
      username: username,
      password: password,
    });
    localStorage.setItem("accounts", JSON.stringify(accounts));
    toast({
      title: "Success",
      msg: "Đăng kí thành công!",
      type: "success",
      duration: 3000,
    });
    setTimeout(loginLocation, 1000);
  }
});

// Hiển thị thông báo

const toast = ({ title = "", msg = "", type, duration = 3000 }) => {
  const main = document.querySelector(".container.toasts");
  if (main) {
    const myToast = document.createElement("div");
    const icons = {
      success: "fas fa-check-circle",
      error: "fas fa-exclamation-circle",
    };

    const icon = icons[type];
    myToast.classList.add("toast1", `toast--${type}`);
    myToast.innerHTML = ` 
        <div class="toast__icon">
          <i class="${icon}"></i>
        </div>
        <div class="toast__body">
          <h4 class="toast__title">${title}</h4>
          <p class="toast__msg">${msg}</p>
      </div>`;
    main.append(myToast);

    setTimeout(() => {
      main.removeChild(myToast);
    }, duration + 1000);
  }
};
