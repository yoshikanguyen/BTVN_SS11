// SS11_BT06_Nguyễn Bình Lam Nghi

let a = Number(prompt("Mời bạn nhập vào số a"));

let b = Number(prompt("Mời bạn nhập vào số b"));

let c = prompt("Mời bạn nhập vào phép tính: + - * /");

let add = a + b;
let sub = a - b;
let mul = a * b;
let div = a / b;

if (c === "+") {
    alert("Kết quả của phép tính trên: " + add);
} else if (c === "-"){
    alert("Kết quả của phép tính trên: " + sub);
} else if (c === "*"){
    alert("Kết quả của phép tính trên: " + mul);
} else  {
    alert("Kết quả của phép tính trên: " + div);
}