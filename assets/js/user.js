var userBtn = document.querySelector(".user");

if (localStorage.getItem("isLogin") == undefined) {
  localStorage.setItem("isLogin", 0);
}

userBtn.addEventListener("click", () => {
  var checkLogin = localStorage.getItem("isLogin");
  console.log(checkLogin);
  if (checkLogin == 0) {
    userBtn.href = "login.html";
  } else {
    userBtn.href = "userprifile.html";
  }
});
