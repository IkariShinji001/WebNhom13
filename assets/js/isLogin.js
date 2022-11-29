var userInforNav = document.querySelector(".user-info-btn");

if (
  localStorage.getItem("isLogin") == undefined ||
  localStorage.getItem("isLogin") == 0
) {
  userInforNav.href = "login.html";
} else {
  userInforNav.href = "user-info.html";
}
