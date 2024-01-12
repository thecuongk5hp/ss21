let soNhapVao = prompt("Nhập vào một số bất kỳ:");

let so = parseFloat(soNhapVao);

if (!isNaN(so)) {
    if (so % 2 === 0) {
        console.log("Số bạn nhập là số chẵn.");
    } else {
        console.log("Số bạn nhập là số lẻ.");
    }
} else {
    console.log("Nhập lại.");
}