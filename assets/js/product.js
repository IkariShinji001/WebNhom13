// Send question open model

var openSendQuestionBtn = document.querySelector(".btn-send-question");
var closeSendQuestionBtn = document.querySelector(".btn-close");
var opacityLayer = document.querySelector(".opacity-layer");
var sendQuestModel = document.querySelector(".container.model");
var sendQuestionBtn = document.querySelector(".send-question");
var userQuestion = document.getElementById("question");
var toasts = document.querySelector(".toast");

openSendQuestionBtn.addEventListener("click", () => {
  opacityLayer.style.display = "block";
  sendQuestModel.style.display = "block";
  // Validate
});

sendQuestionBtn.addEventListener("click", (e) => {
  e.preventDefault();
  var userQuestionName = document.getElementById("user-question-name");
  var userQuestionPhone = document.getElementById("user-question-number");
  var userQuestionMail = document.getElementById("user-question-email");
  var x = 0;
  if (!validateName(userQuestionName.value)) {
    toast({
      title: "Error",
      msg: "Vui lòng nhập tên lớn hơn 4 ký tự",
      type: "error",
      duration: 3000,
    });
    ++x;
  }
  if (!validatePhone(userQuestionPhone.value)) {
    toast({
      title: "Error",
      msg: "Số điện thoại không khả dụng",
      type: "error",
      duration: 3000,
    });
    ++x;
  }
  if (!validateMail(userQuestionMail.value)) {
    toast({
      title: "Error",
      msg: "Vui lòng đúng định dạng mail",
      type: "error",
      duration: 3000,
    });
    ++x;
  }

  if (x == 0) {
    let question = document.querySelector("#question").value;
    if (question) {
      toast({
        title: "Success",
        msg: "Câu hỏi đã được gửi đi",
        type: "success",
        duration: 3000,
      });
      createQuestion(userQuestionName.value, question);
    } else {
      toast({
        title: "Error",
        msg: "Xin đừng để trống câu hỏi",
        type: "error",
        duration: 3000,
      });
    }
  }
});

const avatars = [
  "./assets/img/SanPham/ảnh-avatar-đẹp-cô-gái-đeo-kính.jpg",
  "./assets/img/SanPham/avatarconan.jfif",
  "./assets/img/SanPham/anh-dai-dien-dep.jpg",
  "./assets/img/SanPham/anh-avatar-hoat-hinh-de-thuong.jpg",
];

const createQuestion = (name, question) => {
  let randomAvatarIndex = Math.floor(Math.random() * 4); // Lấy index ngẫu nhiên trong mảng
  let main = document.querySelector(".container.user-question");
  let div = document.createElement("div");
  div.classList.add("row");
  div.innerHTML = `<div class="col">
  <div class="avatar">
      <img src="${avatars[randomAvatarIndex]}" alt="">
  </div>
  </div>
  <div class="col-11">
    <div class="user-name">
      <p><strong>${name}</strong></p>
    </div>
  <div class="question">
      <p>${question}
      </p>
  </div>
  <div class="answer-btn">
      <p>Trả lời</p>
  </div>
</div>`;

  main.append(div);
};

const validateName = (name) => {
  if (name.length > 4) {
    return true;
  }
  return false;
};

const validateMail = (mail) => {
  const reg = /^[a-z][a-z0-9_\.]{5,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}/;
  if (reg.test(mail) == true) {
    return true;
  }
  return false;
};

const validatePhone = (phone) => {
  if (phone.length == 10) {
    return true;
  }
  return false;
};

// Toast

const toast = ({ title = "", msg = "", type, duration = 3000 }) => {
  const main = document.querySelector(".container.toasts");
  console.log(main);
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

// Nhận dữ liệu từ bên trang danh sách sản phâm

var getProductUserChoose = localStorage.getItem("nameProduct");
var getListPhoneData = localStorage.getItem("Phone");
getListPhoneData = JSON.parse(getListPhoneData);
const productData = getListPhoneData.find((product) => {
  return getProductUserChoose == product.name;
});

var titleFav = document.querySelector(".title-fav");

titleFav.innerHTML = getProductUserChoose;

var nameTitleProduct = document.querySelector(".name-product");
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");
var img3 = document.querySelector(".img3");
var hlTitle = document.querySelector(".hl-title");
var hlTitle2 = document.querySelector(".hl-title2");
var aboutProduct = document.querySelector(".about-product");
var imgBanner = document.querySelector(".img-banner");
var priceSales = document.querySelector(".price-sales");
var memories = document.querySelectorAll(".opt-memory");
var priceNonSales = document.querySelector(".non-sales-price");
var productScreen = document.querySelector(".screen");
var productMemory = document.querySelector(".memory");
var productCpu = document.querySelector(".cpu");
var pinCapacity = document.querySelector(".pinCapacity");
var os = document.querySelector(".os");

nameTitleProduct.innerHTML = `${productData.name}`;
img1.src = productData.image;
img2.src = productData.image2;
img3.src = productData.image3;
imgBanner.src = productData.imageBanner;
hlTitle.innerHTML = `Đặc điểm nổi bật của ${productData.name}`;
hlTitle2.innerHTML = `Đánh giá về ${productData.name}`;
aboutProduct.innerHTML = productData.About;
priceSales.innerHTML = `${productData.cost_after}`;
priceNonSales.innerHTML = `${productData.cost_before}`;
productScreen.innerHTML = `${productData.screen}`;
productMemory.innerHTML = `${productData.memory}`;
productCpu.innerHTML = `${productData.cpu}`;
pinCapacity.innerHTML = `${productData.pinCapacity}`;
os.innerHTML = `${productData.os}`;

memories.forEach((Opt) => {
  if (Opt.textContent == productData.memory) {
    Opt.previousElementSibling.click();
    Opt.parentElement.parentElement.classList.add("active");
    Opt.nextElementSibling.textContent = productData.cost_after + "đ";
  }
});

// Memories option

var memoriesOption = document.querySelectorAll(".options");

memoriesOption.forEach((option) => {
  option.addEventListener("click", () => {
    memoriesOption.forEach((option) => {
      if (!option.checked) {
        var divParent = option.parentNode.parentNode;
        divParent.classList.remove("active");
      }
    });
    if (option.checked) {
      var divParent = option.parentNode.parentNode;
      if (divParent.className == "active") {
        divParent.classList.remove("active");
      } else {
        divParent.classList.add("active");
      }
    }
  });
});

// add-cart

function addCart(code) {
  if (typeof localStorage[code] == "undefined") {
    window.localStorage.setItem(code, 1);
  } else {
    current = parseInt(window.localStorage.getItem(code));
    window.localStorage.setItem(code, current + 1);
  }
}

var addCartBtn = document.querySelector(".add-cart");
addCartBtn.addEventListener("click", () => {
  addCart(productData.id);
  toast({
    title: "Success",
    msg: `Đã thêm  <strong> ${productData.name}</strong> vào giỏ hàng!`,
    type: "success",
    duration: 3000,
  });
});
