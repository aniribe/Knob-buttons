const minus3 = document.getElementById("minus3");
const plus3 = document.getElementById("plus3");
const rightFill3 = document.getElementById("rightFill3");
const leftFill3 = document.getElementById("leftFill3");

let min3 = 1;
let max3 = 20;
let currentTemp3 = 0;
let deg3 = 0;

plus3.addEventListener("click", plusClick);

minus3.addEventListener("click", minusClick);

function plusClick() {
  if (currentTemp3 < 20) {
    currentTemp3++;
  }

  if (deg3 < 180) {
    deg3 = currentTemp3 * 18;
    leftFill3.style.transform = `rotate(${deg3}deg)`;
    console.log("< 180: " + deg3);
  }

  if (deg3 >= 180) {
    deg3 = currentTemp3 * 18;
    rightFill3.style.transform = `rotate(${deg3 - 180}deg)`;
    console.log("> 180: " + deg3);
  }
}

function minusClick() {
  if (currentTemp3 > 0) {
    currentTemp3--;
  }

  if (deg3 <= 180 && currentTemp3 == 0) {
    leftFill3.style.transform = `rotate(${1}deg)`;
  }

  if (deg3 <= 180 && currentTemp3 > 0) {
    deg3 = currentTemp3 * 18;
    leftFill3.style.transform = `rotate(${deg3}deg)`;
  }

  if (deg3 > 180) {
    deg3 = currentTemp3 * 18;
    rightFill3.style.transform = `rotate(${deg3 - 180}deg)`;
  }
}
