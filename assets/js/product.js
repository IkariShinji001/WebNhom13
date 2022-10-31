// Initial Animation on Scroll Libery
AOS.init();
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

const createQuestion = (name, question) => {
  console.log(name);
  console.log(question);
  let main = document.querySelector(".container.user-question");
  let div = document.createElement("div");
  div.classList.add("row");
  div.innerHTML = `<div class="col">
  <div class="avatar">
      <img src="./assets/img/SanPham/a85c1da4e1a65181cc0d56694a72093b.jpg" alt="">
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

/// Memories option

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
