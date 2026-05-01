// SS11_BT01_Nguyễn Bình Lam Nghi

let n = Number(prompt ("Input a year to check"))

if (n % 4 === 0 && n % 100 !== 0 ) {
    document.write(n + " is a leap year")
} else if (n % 400 === 0 && n % 100 === 0) {
    document.write(n + " is a leap year")
} else {document.write(n + " is not a leap year")}