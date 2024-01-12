let weight = prompt("Nhập cân nặng (kg): ");
let height = prompt("Nhập chiều cao (m): ");
let bmi = weight / (height ** 2);
alert(`Chỉ số BMI của bạn là ${bmi.toFixed(2)}.`);

if (bmi < 18.5) {
  alert("Bạn đang gầy.");
} else if (bmi >= 18.5 && bmi <= 24.9) {
  alert("Bạn có cơ thể bình thường.");
} else if (bmi >= 25) {
  alert("Bạn đang thừa cân.");
} else if (bmi >= 25 && bmi <= 29.9){
  alert("Bạn đang tiền béo phì.");
} else if (bmi >= 30 && bmi <= 34.9) {
  alert("Bạn đang béo phì độ 1");  
} else if (bmi >= 35 && bmi <= 39.9) {
  alert("Bạn đang béo phì độ 2");
} else {
  alert("Bạn đang béo phì độ 3");  
}