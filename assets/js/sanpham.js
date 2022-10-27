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
    myToast.classList.add("toasts", `toast--${type}`);
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

toast({
  title: "Success",
  msg: "Hehl",
  type: "success",
  duration: 3000,
});
