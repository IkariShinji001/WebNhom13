const dashboardLocation = () => {
  window.location = "http://127.0.0.1:5500/DPN/WebNhom13/dashboard.html";
};

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

var btnSubmit = document.querySelector("#submit");

const validateName = (name) => {
  if (name.length > 4) {
    return true;
  }
  return false;
};

const validatePassword = (password) => {
  if (password > 5) {
    return true;
  }
  return false;
};

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  var formLogin = document.forms["login"];
  var username = formLogin["username"].value;
  var password = formLogin["password"].value;
  console.log(password.length);
  var x = 0;
  if (!validateName(username)) {
    toast({
      title: "Error",
      msg: "Sai tên đăng nhập hoặc mật khẩu",
      type: "error",
      duration: 3000,
    });
    x++;
  }

  if (!validatePassword(password.length)) {
    toast({
      title: "Error",
      msg: "Sai mật khẩu",
      type: "error",
      duration: 3000,
    });
    x++;
  }

  if (x === 0) {
    dashboardLocation();
  }
});
