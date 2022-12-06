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

//delete

    function deleteRow(o) {
     //no clue what to put here?
     var p=o.parentNode.parentNode;
         p.parentNode.removeChild(p);
    }

//valid + edit

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
  
  function valid() {
    var userName = document.getElementById("name");
    var userPhone = document.getElementById("phonenumber");
    var userMail = document.getElementById("mail");
    var userID = document.getElementById("id");
    var x = 0;
    console.log(x);
    if (!validateName(userName.value)) {
      toast({
        title: "Error",
        msg: "Vui lòng nhập tên lớn hơn 4 ký tự",
        type: "error",
        duration: 3000,
      });
      ++x;
    }
    console.log(x);
    if (!validatePhone(userPhone.value)) {
      toast({
        title: "Error",
        msg: "Số điện thoại không khả dụng",
        type: "error",
        duration: 3000,
      });
      ++x;
    }
    console.log(x);
    if (!validateMail(userMail.value)) {
      toast({
        title: "Error",
        msg: "Vui lòng đúng định dạng mail",
        type: "error",
        duration: 3000,
      });
      ++x;
    }
  
    if (x == 0) {
        toast({
          title: "Success",
          msg: "Đã sửa dữ liệu",
          type: "success",
          duration: 3000,
        });
            var codeNumbers = parseInt(localStorage.getItem("code"));
            document.querySelector("#number"+codeNumbers).innerHTML = userPhone.value;
            document.querySelector("#name"+codeNumbers).innerHTML = userName.value;
            document.querySelector("#mail"+codeNumbers).innerHTML = userMail.value;
            document.querySelector("#id"+codeNumbers).innerHTML = userID.value;
        }
        else {
        toast({
          title: "Error",
          msg: "Xin đừng để trống câu hỏi",
          type: "error",
          duration: 3000,
        });
      }
    }

//valid + add


function addUser() {
    var userName = document.getElementById("addname");
    var userPhone = document.getElementById("addphonenumber");
    var userMail = document.getElementById("addmail");
    var userID = document.getElementById("addid");
    var userUsername = document.getElementById("addusername");
    var userPass = document.getElementById("addpass");
    var x = 0;
    console.log(x);
    if (!validateName(userName.value)) {
      toast({
        title: "Error",
        msg: "Vui lòng nhập tên lớn hơn 4 ký tự",
        type: "error",
        duration: 3000,
      });
      ++x;
    }
    console.log(x);
    if (!validatePhone(userPhone.value)) {
      toast({
        title: "Error",
        msg: "Số điện thoại không khả dụng",
        type: "error",
        duration: 3000,
      });
      ++x;
    }
    console.log(x);
    if (!validateMail(userMail.value)) {
      toast({
        title: "Error",
        msg: "Vui lòng đúng định dạng mail",
        type: "error",
        duration: 3000,
      });
      ++x;
    }
  
    if (x == 0) {
        toast({
          title: "Success",
          msg: "Đã thêm dữ liệu",
          type: "success",
          duration: 3000,
        });
            var codeNumbers = parseInt(localStorage.getItem("code"));
            var table = document.getElementById("add-user");
            var row = table.insertRow(1);
            row.innerHTML = `
            <tr>
                <td style="color:#808080" id="id${codeNumbers+1}">${userID.value}</td>
                <td style="font-weight:500" id="name${codeNumbers+1}">${userName.value}</td>
                <td id="username${codeNumbers+1}">${userUsername.value}</td>
                <td id="password${codeNumbers+1}">${userPass.value}</td>
                <td id="number${codeNumbers+1}">${userPhone.value}</td>
                <td id="mail${codeNumbers+1}">${userMail.value}</td>
                <td><button onclick="pushCode(${codeNumbers+1});" style="background-color: #4CAF50;" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Sửa</button></td>
                <td><button style="background-color: #ff0000;" onclick="deleteRow(this);">Xóa</button></td>
            </tr>       
            `
        }
        else {
        toast({
          title: "Error",
          msg: "Xin đừng để trống câu hỏi",
          type: "error",
          duration: 3000,
        });
      }
    }

//

function pushCode(codeNumbers){
    window.localStorage.setItem("code", codeNumbers);
}