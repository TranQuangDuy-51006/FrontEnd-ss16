let soThuNhat = +prompt("Nhập số thứ nhất");
let soThuHai = +prompt("Nhập số thứ hai");
let soLon = Math.max(soThuHai, soThuNhat);
let soBe = Math.min(soThuHai, soThuNhat);
let soNgauNhien = Math.floor(Math.random() * (soLon - soBe - 2 + 1)) + soBe + 1;
alert(soNgauNhien);
