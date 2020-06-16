let dial5 = document.getElementById("dial5");
let handle5 = document.getElementById("handle5");
const rightFill5 = document.getElementById("rightFill5");
const leftFill5 = document.getElementById("leftFill5");

let pi5 = Math.PI;
let drMax5 = 340;
let drMin5 = 20;
let lastAngle5 = 0;
let startDeg5 = 90;

let diametr5 = dial5.offsetWidth;
let circumference5 = pi5 * diametr5;
let radius5 = diametr5 / 2;
let cx5 = dial5.getBoundingClientRect().left + radius5;
let cy5 = dial5.getBoundingClientRect().top + radius5;

function radTodeg() {
  return 180 / pi5;
}

function mouseMove5(e) {
  let x = e.clientX;
  let y = e.clientY;

  let distance = Math.sqrt(Math.pow(cx5 - x, 2) + Math.pow(cy5 - y, 2));

  if (distance <= radius5) {
    let rx = x - cx5;
    let ry = y - cy5;

    let angle = Math.atan2(ry, rx) * radTodeg();
    console.log(angle);

    if (angle < 0) {
      angle = 360 + angle;
      console.log("angle < 0: " + angle);
    }

    rotate5(angle);
    lastAngle = angle;
  }
}

function rotate5(angle) {
  let newAngle = Math.floor(angle - 90);

  console.log("angle: " + angle);
  console.log("newAngle: " + newAngle);

  //версия для отсчета от 0
  if (newAngle < 0) {
    newAngle = 360 + newAngle;
    console.log("newAngle < 0: " + newAngle);
  }

  if (newAngle > drMax5 || newAngle < drMin5) {
    return;
  }

  console.log("final: " + newAngle);

  if (newAngle <= 180) {
    leftFill5.style.transform = "rotate(" + newAngle + "deg)";
    rightFill5.style.transform = "rotate(" + 0 + "deg)";
  }

  if (newAngle > 180) {
    rightFill5.style.transform = "rotate(" + (newAngle - 180) + "deg)";
    leftFill5.style.transform = "rotate(" + 180 + "deg)";
    console.log("newAngle > 180: " + (newAngle - 180));
  }

  dial5.style.transform = "rotate(" + newAngle + "deg)";
}

function dragStop5(e) {
  document.querySelector("body").style.cursor = "default";
  window.removeEventListener("mouseup", dragStop5);
  window.removeEventListener("mousemove", mouseMove5);
}

handle5.addEventListener("dragstart", function (e) {
  console.log("Move5");

  document.querySelector("body").style.cursor = "pointer";
  window.addEventListener("mousemove", mouseMove5);
  window.addEventListener("mouseup", dragStop5);
  e.preventDefault();
});
