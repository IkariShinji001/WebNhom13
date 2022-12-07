function setLang(code) {
  window.localStorage.setItem("lang", code);
}
function getLang() {
  if (typeof localStorage.getItem("lang") === null) {
    window.localStorage.setItem("lang", "VN");
  }
  return window.localStorage.getItem("lang");
}

function myFunction() {
  var lang = getLang();
  $(".multilang").each(function (i, obj) {
    $("#" + obj.id)
      .html(labels[obj.id][lang])
      .attr("title", labels[obj.id][lang]);
  });
}

var vn = document.querySelector(".vn");
var us = document.querySelector(".us");
var userNameInput = document.querySelector("#username");
var pwInput = document.querySelector("#password");

vn.addEventListener("click", () => {
  setLang("VN");
  userNameInput.placeholder = "Tên đăng nhập";
  pwInput.placeholder = "Mật khẩu";
  myFunction();
});

us.addEventListener("click", () => {
  setLang("US");
  userNameInput.placeholder = "Username";
  pwInput.placeholder = "Password";
  myFunction();
});
