let namSinh = prompt("Bạn sinh năm bao nhiêu?");

if (!isNaN(namSinh) && namSinh !== "") {
    
    namSinh = parseInt(namSinh);
    let tuoi = new Date().getFullYear() - namSinh;
    console.log("Tuổi của bạn là: " + tuoi);
} else {
    
    console.log("Giá trị không hợp lệ. Vui lòng nhập vào một số.");
}