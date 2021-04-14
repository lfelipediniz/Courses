function Calculator() {
  this.display = document.querySelector(".display");

  this.start = () => {
    this.captureClicks();
    this.captureEnter();
  };

  this.captureEnter = () => {
    document.addEventListener("keyup", (e) => {
      if (e.keyCode !== 13) return;
      this.doMath();
    });
  };

  this.captureClicks = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;

      if (el.classList.contains("btn-num")) this.addNumDisplay(el);
      if (el.classList.contains("btn-clear")) this.clear();
      if (el.classList.contains("btn-del")) this.del();
      if (el.classList.contains("btn-eq")) this.doMath();
    });
  };

  this.doMath = () => {
    try {
      const math = eval(this.display.value);

      if (!math) {
        alert("invalid account!");
        return;
      }

      this.display.value = math;
    } catch (e) {
      alert("invalid account!");
    }
  };

  this.addNumDisplay = (el) => {
    this.display.value += el.innerText;
    this.display.focus(); // when adding a number, we put the focus on the display
  };

  this.clear = () => (this.display.value = "");
  this.del = () => (this.display.value = this.display.value.slice(0, -1));
}

const calculator = new Calculator();
calculator.start();
