const temp = document.getElementById("temp");
const rightFill = document.getElementById("rightFill");
const leftFill = document.getElementById("leftFill");
const minus = document.getElementById("minus");
const plus = document.getElementById("plus");

let min = 1;
let max = 34;
let currentTemp = 1;
let deg = 30;

plus.addEventListener("click", function () {
  if (currentTemp < 34) {
    currentTemp++;
    temp.innerText = currentTemp;
  }

  changeDeg();
});

minus.addEventListener("click", function () {
  if (currentTemp > 1) {
    currentTemp--;
    temp.innerText = currentTemp;
  }

  changeDeg();
});

function changeDeg() {
  if (deg < 180) {
    deg = currentTemp * 8.8 + 30;
    leftFill.style.transform = `rotate(${deg}deg)`;
  }

  if (deg >= 180) {
    deg = currentTemp * 8.8 + 30;
    rightFill.style.transform = `rotate(${deg - 180}deg)`;
  }
}
