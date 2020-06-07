// let dialHolder = document.getElementById("dial-holder");
let dial = document.querySelector(".handle-base");
let handle = document.querySelector(".handle");
// const rightFill2 = document.getElementById("rightFill2");
// const leftFill2 = document.getElementById("leftFill2");

let pi = Math.PI;
// let drMax = 130;
// let drMin = -130;
let drMax = 330;
let drMin = 30;
let lastAngle = 0;

let diametr = dial.offsetWidth;
let circumference = pi * diametr;
let radius = diametr / 2;
let cx = dial.getBoundingClientRect().left + radius;
let cy = dial.getBoundingClientRect().top + radius;

// console.log(dial.getBoundingClientRect());

function degTorad(deg) {
  //   return deg * (pi / 180);
  return deg * (pi / 360);
}

function radTodeg(rad) {
  //   return rad * (180 / pi);
  return rad * (360 / pi);
}

function mouseMove(e) {
  let x = e.clientX;
  let y = e.clientY;

  let distance = Math.sqrt(Math.pow(cx - x, 2) + Math.pow(cy - y, 2));

  if (distance <= radius) {
    let rx = x - cx;
    let ry = y - cy;

    let angle = radTodeg(Math.atan2(ry, rx));

    if (angle < 0) {
      angle = 180 + (angle + 180);
    }

    rotate(angle);
    lastAngle = angle;
  }
}

function rotate(angle) {
  let newAngle = angle + 180;

  if (newAngle > 359) {
    newAngle -= 360;
    console.log(">359: " + newAngle);
  }

  //   if (newAngle > 180) {
  //     // newAngle = 360 - newAngle - (360 - newAngle) * 2;
  //     console.log(">180: " + newAngle);
  //     newAngle = 360 - newAngle - (360 + newAngle) * 2;
  //   }

  if (newAngle > drMax || newAngle < drMin) {
    return;
  }

  console.log("final: " + newAngle);

  dial.style.transform = "rotate(" + newAngle + "deg)";
}

function dragStop(e) {
  document.querySelector("body").style.cursor = "default";
  window.removeEventListener("mouseup", dragStop);
  window.removeEventListener("mousemove", mouseMove);
}

handle.addEventListener("dragstart", function (e) {
  //   console.log(e);
  document.querySelector("body").style.cursor = "pointer";
  window.addEventListener("mousemove", mouseMove);
  window.addEventListener("mouseup", dragStop);
  e.preventDefault();
});

// window.addEventListener("foobar", function (e) {
//   console.log(e);
// });
