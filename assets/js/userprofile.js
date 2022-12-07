var btnSignOut = document.querySelector(".btn-signout");

btnSignOut.addEventListener("click", () => {
  localStorage.setItem("isLogin", 0);
  window.location = "index.html";
});

var orderProduct = document.querySelector(".order-product");

var buyProducts = localStorage.getItem("buyProducts");
buyProducts = JSON.parse(buyProducts);

buyProducts.forEach((product) => {
  var div = document.createElement("div");
  var html = `
    <div class="row">
        <div class="order-item order-item-word col-lg-5"><img
        src="${product.img}" height="60px" alt="">
        ${product.name}</div>
        <div class="order-item col-lg-5">Đang giao</div>
    </div>
`;
  div.innerHTML = html;
  orderProduct.append(div);
});

var nameTitle = document.querySelector(".name");
var accountLogin = localStorage.getItem("accountLogin");
accountLogin = JSON.parse(accountLogin);
nameTitle.textContent = accountLogin.username;

var userName1 = document.querySelector(".username");
var userPhone1 = document.querySelector(".userphone");
var userMail1 = document.querySelector(".usermail");
var userAddress1 = document.querySelector(".useraddress");

if (localStorage.getItem("userInfo") != undefined) {
  var userInfo = localStorage.getItem("userInfo");
  userInfo = JSON.parse(userInfo);
  userName1.textContent = userInfo[0].userName;
  userMail1.textContent = userInfo[0].userMail;
  userPhone1.textContent = userInfo[0].userPhone;
  userAddress1.textContent = userInfo[0].address;
} else {
  userName1.textContent = "Vui lòng mua hàng";
  userMail1.textContent = "Vui lòng mua hàng";
  userPhone1.textContent = "Vui lòng mua hàng";
  userAddress1.textContent = "Vui lòng mua hàng";
}
