let dial4 = document.getElementById("dial4");
let handle4 = document.getElementById("handle4");
const rightFill4 = document.getElementById("rightFill4");
const leftFill4 = document.getElementById("leftFill4");

let pi4 = Math.PI;
let drMax4 = 310;
let drMin4 = 50;
let lastAngle4 = 0;
let startDeg4 = 90;

let diametr4 = dial4.offsetWidth;
let circumference4 = pi4 * diametr4;
let radius4 = diametr4 / 2;
let cx4 = dial4.getBoundingClientRect().left + radius4;
let cy4 = dial4.getBoundingClientRect().top + radius4;

function radTodeg() {
  return 180 / pi4;
}

function mouseMove(e) {
  let x = e.clientX;
  let y = e.clientY;

  let distance = Math.sqrt(Math.pow(cx4 - x, 2) + Math.pow(cy4 - y, 2));

  if (distance <= radius4) {
    let rx = x - cx4;
    let ry = y - cy4;

    let angle = Math.atan2(ry, rx) * radTodeg();
    console.log(angle);

    if (angle < 0) {
      angle = 360 + angle;
      console.log("angle < 0: " + angle);
    }

    rotate(angle);
    lastAngle = angle;
  }
}

function rotate(angle) {
  let newAngle = Math.floor(angle - 90);

  console.log("angle: " + angle);
  console.log("newAngle: " + newAngle);

  //версия для отсчета от 0
  if (newAngle < 0) {
    newAngle = 360 + newAngle;
    console.log("newAngle < 0: " + newAngle);
  }

  if (newAngle > drMax4 || newAngle < drMin4) {
    return;
  }

  console.log("final: " + newAngle);

  if (newAngle <= 180) {
    leftFill4.style.transform = "rotate(" + newAngle + "deg)";
    rightFill4.style.transform = "rotate(" + 0 + "deg)";
  }

  if (newAngle > 180) {
    rightFill4.style.transform = "rotate(" + (newAngle - 180) + "deg)";
    leftFill4.style.transform = "rotate(" + 180 + "deg)";
    console.log("newAngle > 180: " + (newAngle - 180));
  }

  dial4.style.transform = "rotate(" + newAngle + "deg)";
}

function dragStop(e) {
  document.querySelector("body").style.cursor = "default";
  window.removeEventListener("mouseup", dragStop);
  window.removeEventListener("mousemove", mouseMove);
}

handle4.addEventListener("dragstart", function (e) {
  console.log("Move4");

  document.querySelector("body").style.cursor = "pointer";
  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mouseup", dragStop);
  e.preventDefault();
});
