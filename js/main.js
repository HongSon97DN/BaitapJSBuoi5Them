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

// Bài 2

var hoaDonND = 4.5;
var coBanND = 20.5;
var caoCapND = 7.5;

var hoaDonDN = 15;
var coBanDN_0_10 = 75;
var caoCapDN = 50;

function showOnOff() {
   var showUpDown = document.getElementById("soKetNoi");
   var value = Number(document.getElementById("loaiKH").value);
   
   if (value == 0 || value == 4.5) {
        showUpDown.innerHTML = showUpDown.classList.add("showOff");
       
   } else if (value == 15) {
        showUpDown.innerHTML = showUpDown.classList.remove("showOff");       
   }
   
}

function tinhTienCap() {
    var hoaDonCoBan = Number(document.getElementById("loaiKH").value);
    var tenKH = document.getElementById("maKH").value;
    var soKenhCC = Number(document.getElementById("kenhCaoCap").value);

    if (hoaDonCoBan == 4.5) {      
        var tongTienCap = hoaDonND + coBanND + (soKenhCC * caoCapND);

        document.getElementById("txtResult1").innerHTML = "Mã KH: " + tenKH + " Tiền cáp: $ " + tongTienCap;
    } else if (hoaDonCoBan = 15) {
        var soKenhKT = Number(document.getElementById("soKetNoi").value);

        if (soKenhKT <= 10) {
            var tongTienCap = hoaDonDN + coBanDN_0_10 + (soKenhCC * caoCapDN);

            document.getElementById("txtResult1").innerHTML = "Mã KH: " + tenKH + " Tiền cáp: $ " + tongTienCap;
        } else {
            var tongTienCap = hoaDonDN + coBanDN_0_10 + ((soKenhKT - 10) * 5) + (soKenhCC * caoCapDN);

            document.getElementById("txtResult1").innerHTML = "Mã KH: " + tenKH + " Tiền cáp: $ " + tongTienCap;
        }
    }
}
document.getElementById("tinhTienCap").onclick = tinhTienCap;