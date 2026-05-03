// SS11_BT05_Nguyễn Bình Lam Nghi

while (true) {
    let m = Number(prompt("Hãy nhập cân nặng của bạn (kg)"));
    let h = Number(prompt("Hãy nhập chiều cao của bạn (m)"));

    let bmi = m / (h * h);
    let result = bmi.toFixed(2);

    let tab = prompt("Hãy chọn hệ qui chiếu bạn muốn dùng (WHO/WPRO) (hoặc gõ E để thoát)");

    if (tab === "WHO") {
        if (result < 18.5) {
            alert(`BMI của bạn thuộc loại: Gầy`);
        } else if (result >= 18.5 && result < 25) {
            alert(`BMI của bạn là ${result}, thuộc loại: Bình thường`);
        } else if (result >= 25 && result < 30) {
            alert(`BMI của bạn là ${result}, thuộc loại: Thừa cân - Tiền béo phì`);
        } else if (result >= 30 && result < 35) {
            alert(`BMI của bạn là ${result}, thuộc loại: Thừa cân - Béo phì độ I`);
        } else if (result >= 35 && result < 40) {
            alert(`BMI của bạn là ${result}, thuộc loại: Thừa cân - Béo phì độ II`);
        } else {
            alert(`BMI của bạn là ${result}, thuộc loại: Thừa cân - Béo phì độ III`);
        };
    } else if (tab === "WPRO") {
        if (result < 18.5) {
            alert(`BMI của bạn thuộc loại: Gầy`);
        } else if (result >= 18.5 && result < 23) {
            alert(`BMI của bạn là ${result}, thuộc loại: Bình thường`);
        } else if (result >= 23 && result < 25) {
            alert(`BMI của bạn là ${result}, thuộc loại: Thừa cân - Tiền béo phì`);
        } else if (result >= 25 && result < 30) {
            alert(`BMI của bạn là ${result}, thuộc loại: Thừa cân - Béo phì độ I`);
        } else {
            alert(`BMI của bạn là ${result}, thuộc loại: Thừa cân - Béo phì độ II`);
        };
    } else if (tab === "E") {
        alert ("Cảm ơn bạn đã sử dụng chương trình");
        break;
    } else {
        alert("Bạn hãy nhập đầy đủ thông tin");
    };
};