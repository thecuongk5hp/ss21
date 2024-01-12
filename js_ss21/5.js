let month = parseInt(prompt("Nhập số tháng trong năm (1-12):"));

let daysInMonth;

if (month >= 1 && month <= 12) {
    switch (month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            daysInMonth = 31;
            break;
        case 4: case 6: case 9: case 11:
            daysInMonth = 30;
            break;
        case 2:
            var year = parseInt(prompt("Nhập năm:"));
            if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
                daysInMonth = 29;
            } else {
                daysInMonth = 28;
            }
            break;
    }

    console.log("Số ngày trong tháng " + month + " là: " + daysInMonth);
} else {
    console.log("Giá trị nhập không hợp lệ. Vui lòng nhập số tháng từ 1 đến 12.");
}