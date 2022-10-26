// Initial Animation on Scroll Libery
AOS.init();

// Send question open model

var openSendQuestionBtn = document.querySelector(".btn-send-question");
var closeSendQuestionBtn = document.querySelector(".fa-solid.fa-x");
var opacityLayer = document.querySelector(".opacity-layer");
var sendQuestModel = document.querySelector(".container.model");
var sendQuestionBtn = document.querySelector(".send-question");
var userQuestion = document.getElementById("question");
var toasts = document.querySelector(".toast");

console.log(sendQuestionBtn);

openSendQuestionBtn.addEventListener("click", () => {
  opacityLayer.style.display = "block";
  sendQuestModel.style.display = "block";
  // Validate
  sendQuestionBtn.addEventListener("click", (e) => {
    e.preventDefault();
    var userQuestionName = document.getElementById("user-question-name");
    var userQuestionPhone = document.getElementById("user-question-number");
    var userQuestionMail = document.getElementById("user-question-email");
    var x = 0;
    if (!validateName(userQuestionName.value)) {
      alert("Tên phải lớn hơn 4 ký tự!");
      x++;
    }
    if (!validatePhone(userQuestionPhone.value)) {
      alert("Số điện thoại sai!");
      x++;
    }
    if (!validateMail(userQuestionMail.value)) {
      alert("Mail sai định dạng!");
      x++;
    }

    if (x == 0) {
      alert("Câu hỏi đã được gửi đi");
    }
  });
});

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

// Close Model

closeSendQuestionBtn.addEventListener("click", () => {
  opacityLayer.style.display = "none";
  sendQuestModel.style.display = "none";
});

opacityLayer.addEventListener("click", () => {
  opacityLayer.style.display = "none";
  sendQuestModel.style.display = "none";
});

// Validate
