// SS11_BT06_Nguyễn Bình Lam Nghi

while (true) {
    let a = Number(prompt("Mời bạn nhập vào số a"));

    let b = Number(prompt("Mời bạn nhập vào số b"));

    let c = prompt("Mời bạn nhập vào phép tính: + - * /");

    let add = a + b;
    let sub = a - b;
    let mul = a * b;
    let div = a / b;

    if (c === "+") {
        alert(`Kết quả của phép tính trên: ${a} + ${b} = ${add}`);
    } else if (c === "-") {
        alert(`Kết quả của phép tính trên: ${a} - ${b} = ${sub}`);
    } else if (c === "*") {
        alert(`Kết quả của phép tính trên: ${a} * ${b} = ${mul}`);
    } else if (c === "/") {
        alert(`Kết quả của phép tính trên: ${a} / ${b} = ${div}`);
    } else {
        alert("Bạn đã nhập sai phép tính");
        break;
    };
}