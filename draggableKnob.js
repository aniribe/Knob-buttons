export class Knob {
  constructor(dial, handle, max, min, rightFill = "", leftFill = "") {
    this.dial = document.getElementById(dial);
    this.handle = document.getElementById(handle);

    //degrees for rotation
    this.drMax = max;
    this.drMin = min;

    // variables for rotation
    this.pi = Math.PI;
    this.lastAngle = 0;
    this.diametr = this.dial.offsetWidth;
    this.circumference = this.pi * this.diametr;
    this.radius = this.diametr / 2;
    this.cx = this.dial.getBoundingClientRect().left + this.radius;
    this.cy = this.dial.getBoundingClientRect().top + this.radius;

    //initialize filler
    if (rightFill === "" && leftFill === "") {
      this.rightFill = null;
      this.leftFill = null;
    } else {
      this.rightFill = document.getElementById(rightFill);
      this.leftFill = document.getElementById(leftFill);
    }

    //add listener
    this.handle.addEventListener("dragstart", (e) => {
      document.querySelector("body").style.cursor = "pointer";
      window.addEventListener("mousemove", this.mouseMove);
      window.addEventListener("mouseup", this.dragStop);
      e.preventDefault();
    });
  }

  radTodeg = () => {
    return 180 / this.pi;
  };

  mouseMove = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    //where the mouse is
    let distance = Math.sqrt(
      Math.pow(this.cx - x, 2) + Math.pow(this.cy - y, 2)
    );

    console.log(this.cx);

    if (distance <= this.radius) {
      let rx = x - this.cx;
      let ry = y - this.cy;

      let angle = Math.atan2(ry, rx) * this.radTodeg();
      console.log(angle);

      if (angle < 0) {
        angle = 360 + angle;
        console.log("angle < 0: " + angle);
      }

      this.rotate(angle);
      this.lastAngle = angle;
    }
  };

  rotate = (angle) => {
    let newAngle = Math.floor(angle - 90);

    console.log("angle: " + angle);
    console.log("newAngle: " + newAngle);

    if (newAngle < 0) {
      newAngle = 360 + newAngle;
      console.log("newAngle < 0: " + newAngle);
    }

    if (newAngle > this.drMax || newAngle < this.drMin) {
      return;
    }

    console.log("final: " + newAngle);

    //If we have filler
    if (newAngle <= 180 && this.rightFill !== null && this.leftFill !== null) {
      this.leftFill.style.transform = "rotate(" + newAngle + "deg)";
      this.rightFill.style.transform = "rotate(" + 0 + "deg)";
    }

    if (newAngle > 180 && this.rightFill !== null && this.leftFill !== null) {
      this.rightFill.style.transform = "rotate(" + (newAngle - 180) + "deg)";
      this.leftFill.style.transform = "rotate(" + 180 + "deg)";
      console.log("newAngle > 180: " + (newAngle - 180));
    }

    //handle rotation
    this.dial.style.transform = "rotate(" + newAngle + "deg)";
  };

  dragStop = (e) => {
    document.querySelector("body").style.cursor = "default";
    window.removeEventListener("mouseup", this.dragStop);
    window.removeEventListener("mousemove", this.mouseMove);
  };
}
