var btnSignOut = document.querySelector(".btn-signout");

btnSignOut.addEventListener("click", () => {
  localStorage.setItem("isLogin", 0);
  window.location = "ListItem.html";
});

var orderProduct = document.querySelector(".order-product");

var buyProducts = localStorage.getItem("buyProducts");
buyProducts = JSON.parse(buyProducts);

buyProducts.forEach((product) => {
  var html = `
    <div class="row">
        <div class="order-item order-item-word col-lg-5"><img
        src="${product.img}" height="60px" alt="">
        ${product.name}</div>
        <div class="order-item col-lg-5">Đang giao</div>
    </div>
`;
  orderProduct.innerHTML = html;
});
