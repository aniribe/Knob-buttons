let dial = document.querySelector(".handle-base");
let handle = document.querySelector(".handle");
const rightFill2 = document.getElementById("rightFill2");
const leftFill2 = document.getElementById("leftFill2");

let pi = Math.PI;
let drMax = 310;
let drMin = 50;
let lastAngle = 0;
let startDeg = 90;

let diametr = dial.offsetWidth; //130px
let circumference = pi * diametr; //408
let radius = diametr / 2; //65px
let cx = dial.getBoundingClientRect().left + radius;
let cy = dial.getBoundingClientRect().top + radius;

function degTorad(deg) {
  //   return deg * (pi / 180);
  return deg * (pi / 360);
}

function radTodeg(rad) {
  //return rad * (180 / pi);
  return 180 / pi;
}

function mouseMove(e) {
  let x = e.clientX;
  let y = e.clientY;

  let distance = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2));

  if (distance <= radius) {
    let rx = x - cx;
    let ry = y - cy;

    // let angle = radTodeg(Math.atan2(ry, rx));
    let angle = Math.atan2(ry, rx) * radTodeg(10);
    console.log(angle);

    if (angle < 0) {
      // angle = 180 + (angle + 180);
      angle = 360 + angle;
      console.log("angle < 0: " + angle);
    }

    rotate(angle);
    lastAngle = angle;
  }
}

function rotate(angle) {
  //родная версия
  // let newAngle = angle + 180;

  //версия для отсчета от 0
  // let newAngle = angle - 90;

  let newAngle = Math.floor(angle - 90);

  console.log("angle: " + angle);
  console.log("newAngle: " + newAngle);

  if (newAngle > 359) {
    //версия для отсчета от 0
    // newAngle -= 360;
  }

  //родная версия
  // if (newAngle > 180) {
  //   //newAngle = 360 - newAngle - (360 - newAngle) * 2;

  //   newAngle = 360 - newAngle - (360 + newAngle) * 2;

  //   console.log("newAngle >180: " + newAngle);
  // }

  //версия для отсчета от 0
  if (newAngle < 0) {
    newAngle = 360 + newAngle;
    // newAngle += 120;
    console.log("newAngle < 0: " + newAngle);
  }

  if (newAngle > drMax || newAngle < drMin) {
    return;
  }

  console.log("final: " + newAngle);

  if (newAngle <= 180) {
    leftFill2.style.transform = "rotate(" + newAngle + "deg)";
    rightFill2.style.transform = "rotate(" + 0 + "deg)";
  }

  if (newAngle > 180) {
    rightFill2.style.transform = "rotate(" + (newAngle - 180) + "deg)";
    leftFill2.style.transform = "rotate(" + 180 + "deg)";
    console.log("newAngle > 180: " + (newAngle - 180));
  }

  dial.style.transform = "rotate(" + newAngle + "deg)";
}

function dragStop(e) {
  document.querySelector("body").style.cursor = "default";
  window.removeEventListener("mouseup", dragStop);
  window.removeEventListener("mousemove", mouseMove);
}

handle.addEventListener("dragstart", function (e) {
  document.querySelector("body").style.cursor = "pointer";
  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mouseup", dragStop);
  e.preventDefault();
});
