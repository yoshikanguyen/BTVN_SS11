// SS11_BT03_Nguyễn Bình Lam Nghi

let number = prompt("Type your number from 0 to 9");

if (number === "") {
    alert("Don't leave the input blanked!!!")
} else {
    switch (Number(number)) {
        case 0: alert("Zero");
            break;
        case 1: alert("One");
            break;
        case 2: alert("Two");
            break;
        case 3: alert("Three");
            break;
        case 4: alert("Four");
            break;
        case 5: alert("Five");
            break;
        case 6: alert("Six");
            break;
        case 7: alert("Seven");
            break;
        case 8: alert("Eight");
            break;
        case 9: alert("Nine");
            break;
        default: alert("You're entered wrong number!!!");
            break;
    }
}
