var productsData = localStorage.getItem("Phone");

productsData = JSON.parse(productsData);
var table = document.querySelector(".table");
productsData.forEach((phone, index) => {
  var html = `
    <tr>
        <td style="color:#808080" id="id${index + 1}">${index + 1}</td>
        <td style="font-weight:500" id="name${index + 1}">${phone.name}</td>
        <td id="cata${index + 1}">${phone.type}</td>
        <td id="number${index + 1}">100</td>
        <td id="price${index + 1}">${phone.cost_after}</td>
        <td><button onclick="pushCode(${index + 1});" style="background-color: #4CAF50;" type="button"
            class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Sửa</button></td>
        <td><button onclick="deleteRow(this)" style="background-color: #ff0000;">Xóa</button></td>
    </tr>
`;

  table.insertRow(1).innerHTML = html;
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

//delete

  function deleteRow(o) {
   //no clue what to put here?
   var p=o.parentNode.parentNode;
       p.parentNode.removeChild(p);
  }

//valid + edit

function valid() {
  var userName = document.getElementById("name");
  var userNumber = document.getElementById("number");
  var userID = document.getElementById("id");
  var userPrice = document.getElementById("price");
  var userCata = document.getElementById("cata");
  var x = 0;
  console.log(x);

  if (x == 0) {
      toast({
        title: "Success",
        msg: "Đã sửa dữ liệu",
        type: "success",
        duration: 3000,
      });
          var codeNumbers = parseInt(localStorage.getItem("codep"));
          document.querySelector("#number"+codeNumbers).innerHTML = userNumber.value;
          document.querySelector("#name"+codeNumbers).innerHTML = userName.value;
          document.querySelector("#price"+codeNumbers).innerHTML = userPrice.value;
          document.querySelector("#id"+codeNumbers).innerHTML = userID.value;
          document.querySelector("#cata"+codeNumbers).innerHTML = userCata.value;
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

function add() {
  var userName = document.getElementById("addname");
  var userNumber = document.getElementById("addnumber");
  var userID = document.getElementById("addid");
  var userPrice = document.getElementById("addprice");
  var userCata = document.getElementById("addcata");
  var x = 0;
  console.log(x);

  if (x == 0) {
      toast({
        title: "Success",
        msg: "Đã thêm dữ liệu",
        type: "success",
        duration: 3000,
      });
      var codeNumbers = parseInt(localStorage.getItem("codep"));
      var table = document.getElementById("add-product");
      var row = table.insertRow(1);
      row.innerHTML = `
      <tr>
      <tr>
      <td style="color:#808080" id="id${codeNumbers+1}">${userID.value}</td>
      <td style="font-weight:500" id="name${codeNumbers+1}">${userName.value}</td>
      <td id="cata${codeNumbers+1}">${userCata.value}</td>
      <td id="number${codeNumbers+1}">${userNumber.value}</td>
      <td id="price${codeNumbers+1}">${userPrice.value}</td>
      <td><button onclick="pushCode(${codeNumbers+1});" style="background-color: #4CAF50;" type="button"
          class="btn btn-primary" data-bs-toggle="modal"
          data-bs-target="#exampleModal">Sửa</button></td>
      <td><button onclick="deleteRow(this)" style="background-color: #ff0000;">Xóa</button></td>
  </tr>
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
  window.localStorage.setItem("codep", codeNumbers);
}