var productsData = localStorage.getItem("Phone");

productsData = JSON.parse(productsData);
var table = document.querySelector(".table");
productsData.forEach((phone, index) => {
  var html = `
    <tr>
        <td style="color:#808080">${index + 1}</td>
        <td style="font-weight:500">${phone.name}</td>
        <td>${phone.type}</td>
        <td>100</td>
        <td>${phone.cost_after}</td>
        <td><button style="background-color: #4CAF50;" type="button"
            class="btn btn-primary" data-bs-toggle="modal"
            data-bs-target="#exampleModal">Sửa</button></td>
        <td><button style="background-color: #ff0000;">Xóa</button></td>
    </tr>
`;

  table.insertRow(1).innerHTML = html;
});
