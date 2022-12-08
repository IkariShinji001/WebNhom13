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
function Change_op(type)
{
  var active_btn=document.getElementsByClassName("btn-info-item");
 for(var i=0;i<active_btn.length;i++)
 {
  active_btn[i].style.border="2px solid #f0f0f0"; }
  var info=document.querySelector('.profile');
  var address=document.querySelector('.address');
  var pay=document.querySelector('.pay');
  var order=document.querySelector('.order');
  switch (type) {
    case "info":
      active_btn[0].style.border="2px solid #000";
      info.style.display="block";
      pay.style.display="none";
      address.style.display="none";
      order.style.display="none";
      break;
    case "pay":
      active_btn[3].style.border="2px solid #000";
      pay.style.display="block";
      info.style.display="none";
      address.style.display="none";
      order.style.display="none";
      break;
    case "order":
      active_btn[1].style.border="2px solid #000";
      order.style.display="block";
      info.style.display="none";
      address.style.display="none";
      pay.style.display="none";
      break;
    case "address":
      active_btn[2].style.border="2px solid #000";
      order.style.display="none";
      info.style.display="none";
      address.style.display="block";
      pay.style.display="none";
      break;
  
  
  }
}
