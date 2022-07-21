// Bài 1
var hoTen = "";
var thuNhap = 0;
var soNguoi = 0;
var tienThue = 0;

function tinhTienThue() {
    var hoTen = document.getElementById("hoTen").value;
    var thuNhap = Number(document.getElementById("thuNhap").value);
    var soNguoi = Number(document.getElementById("soNguoi").value);

    const thuNhapChiuThue = thuNhap - 4e+6 - (soNguoi * 1.6e+6);

    if (0 < thuNhapChiuThue && thuNhapChiuThue <= 60e+6) {
        tienThue = thuNhapChiuThue * 0.05;
        document.getElementById("txtResult").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
        
    } else if (60e+6 < thuNhapChiuThue && thuNhapChiuThue <= 120e+6) {
        tienThue = thuNhapChiuThue * 0.1;
        document.getElementById("txtResult").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";

    } else if (120e+6 < thuNhapChiuThue && thuNhapChiuThue <= 210e+6) {
        tienThue = thuNhapChiuThue * 0.15;
        document.getElementById("txtResult").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
        
    } else if (210e+6 < thuNhapChiuThue && thuNhapChiuThue <= 384e+6) {
        tienThue = thuNhapChiuThue * 0.2;
        document.getElementById("txtResult").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";

    } else if (384e+6 < thuNhapChiuThue && thuNhapChiuThue <= 624e+6) {
        tienThue = thuNhapChiuThue * 0.25;
        document.getElementById("txtResult").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";

    } else if (624e+6 < thuNhapChiuThue && thuNhapChiuThue <= 960e+6) {
        tienThue = thuNhapChiuThue * 0.3;
        document.getElementById("txtResult").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
        
    } else {
        tienThue = thuNhapChiuThue * 0.35;
        document.getElementById("txtResult").innerHTML = "Họ tên "+ hoTen + " Tiền thuế phải chịu là: " + tienThue + "VND";
    }
}
document.getElementById("tinhTienThue").onclick = tinhTienThue;