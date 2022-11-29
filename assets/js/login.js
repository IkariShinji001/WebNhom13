// Chuyển hướng tới trang Dashboard
const dashboardLocation = () => {
  window.location = "http://127.0.0.1:5500/DPN/WebNhom13/dashboard.html";
};
// Chuyển hướng tới trang sản phẩm
const productLocation = () => {
  window.location = "http://127.0.0.1:5500/DPN/WebNhom13/product.html";
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

// Thông báo
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

const validateName = (name) => {
  if (name.length > 4) {
    return true;
  }
  return false;
};

const validateLogin = (username, password) => {
  accounts = localStorage.getItem("accounts");
  accounts = JSON.parse(accounts);
  const found = accounts.find((AccountUsername) => {
    return AccountUsername.username == username;
  });

  if (found == undefined) {
    return false;
  }

  if (found.password == password) {
    return true;
  } else {
    return false;
  }
};

const validatePassword = (password) => {
  if (password > 5) {
    return true;
  }
  return false;
};

// Check xem nếu localStorage chưa được khai báo thì set mảng accounts vào localStorage
var checkLocalStorage = localStorage.getItem("accounts");
if (checkLocalStorage == undefined) {
  localStorage.setItem("accounts", JSON.stringify(accounts));
}

// Set trạng thái đăng nhập
if (localStorage.getItem("isLogin") == undefined) {
  isLogin = 0;
  localStorage.setItem("isLogin", JSON.stringify(isLogin));
}

var btnSubmit = document.querySelector("#submit");

// Bắt sự kiện onClick khi đăng nhập
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  var formLogin = document.forms["login"];
  var username = formLogin["username"].value;
  var password = formLogin["password"].value;
  if (username == "admin" && password == "admin") {
    dashboardLocation();
  } else {
    var x = 0;
    if (validateLogin(username, password) == false) {
      toast({
        title: "Error",
        msg: "Sai tên đăng nhập hoặc mật khẩu",
        type: "error",
        duration: 3000,
      });
      x++;
    }

    if (x === 0) {
      isLogin = 1;
      localStorage.setItem("isLogin", JSON.stringify(isLogin));
      productLocation();
    }
  }
});
