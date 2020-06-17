export class KnobwithButtons {
  constructor(
    minNum,
    maxNum,
    rotationMin,
    rotationMax,
    currentTemp,
    rightFill,
    leftFill,
    minusBtn,
    plusBtn,
    outputId = ""
  ) {
    this.rightFill = document.getElementById(rightFill);
    this.leftFill = document.getElementById(leftFill);
    this.minusBtn = document.getElementById(minusBtn);
    this.plusBtn = document.getElementById(plusBtn);
    this.output = document.getElementById(outputId);

    //Number for output
    this.minNum = minNum;
    this.maxNum = maxNum;

    //degrees for rotation
    this.rotationMin = rotationMin;
    this.rotationMax = rotationMax;

    //step for changing Number output
    this.step =
      (this.rotationMax - this.rotationMin) / (this.maxNum - this.minNum);

    this.currentTemp = currentTemp;
    this.deg = 0;

    this.initialize(outputId);
    console.log(outputId);

    this.minusBtn.addEventListener("click", this.minusBtnHandler);
    this.plusBtn.addEventListener("click", this.plusBtnHandler);
  }

  initialize = (elementId) => {
    console.log(elementId);

    if (this.output !== null) {
      this.output.innerText = this.currentTemp;
    }
    this.deg = this.currentTemp * this.step + this.rotationMin;

    this.changeDeg();
  };

  changeDeg = () => {
    if (this.deg < 180) {
      this.deg = this.currentTemp * this.step + this.rotationMin;
      this.leftFill.style.transform = `rotate(${this.deg}deg)`;
    }

    if (this.deg >= 180) {
      this.deg = this.currentTemp * this.step + this.rotationMin;
      this.rightFill.style.transform = `rotate(${this.deg - 180}deg)`;
    }
  };

  minusBtnHandler = () => {
    if (this.currentTemp > this.minNum) {
      this.currentTemp--;
    }

    if (this.output !== null) {
      this.output.innerText = this.currentTemp;
    }

    this.changeDeg();
  };

  plusBtnHandler = () => {
    if (this.currentTemp < this.maxNum) {
      this.currentTemp++;
    }

    if (this.output !== null) {
      this.output.innerText = this.currentTemp;
    }

    this.changeDeg();
  };
}
