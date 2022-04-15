const zero = document.getElementById("zero");
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");

const input = document.getElementById("input");
const ac = document.getElementById("ac");
const c = document.getElementById("c");
const minus = document.getElementById("minus");
const sum = document.getElementById("sum");
const multiply = document.getElementById("multiply");
const dot = document.getElementById("dot");
const equal = document.getElementById("equal");
const divide = document.getElementById("divide");

zero.addEventListener("click", onZeroClick);
one.addEventListener("click", onOneClick);
two.addEventListener("click", onTwoClick);
three.addEventListener("click", onThreeClick);
four.addEventListener("click", onFourClick);
five.addEventListener("click", onFiveClick);
six.addEventListener("click", onSixClick);
seven.addEventListener("click", onSevenClick);
eight.addEventListener("click", onEightClick);
nine.addEventListener("click", onNineClick);

ac.addEventListener("click", onAcClick);
c.addEventListener("click", onCClick);
minus.addEventListener("click", onMinusClick);
sum.addEventListener("click", onSumClick);
multiply.addEventListener("click", onMultiplyClick);
dot.addEventListener("click", onDotClick);
equal.addEventListener("click", onEqualClick);
divide.addEventListener("click", onDivideClick);

function onZeroClick() {
  if (input.value === "0") return;
  input.value += "0";
}

function onOneClick() {
  if (input.value === "0") {
    input.value = "1";
    return;
  }

  input.value += "1";
}

function onTwoClick() {
  if (input.value === "0") {
    input.value = "2";
    return;
  }

  input.value += "2";
}

function onThreeClick() {
  if (input.value === "0") {
    input.value = "3";
    return;
  }

  input.value += "3";
}

function onFourClick() {
  if (input.value === "0") {
    input.value = "4";
    return;
  }

  input.value += "4";
}

function onFiveClick() {
  if (input.value === "0") {
    input.value = "5";
    return;
  }

  input.value += "5";
}

function onSixClick() {
  if (input.value === "0") {
    input.value = "6";
    return;
  }

  input.value += "6";
}

function onSevenClick() {
  if (input.value === "0") {
    input.value = "7";
    return;
  }

  input.value += "7";
}

function onEightClick() {
  if (input.value === "0") {
    input.value = "8";
    return;
  }

  input.value += "8";
}

function onNineClick() {
  if (input.value === "0") {
    input.value = "9";
    return;
  }

  input.value += "9";
}

function onAcClick() {
  input.value = "0";
}

function onCClick() {
  if (input.value === "0") return;
  else if (input.value.length === 1) input.value = "0";
  else input.value = input.value.slice(0, input.value.length - 1);
}

function onMinusClick() {}

function onSumClick() {}

function onMultiplyClick() {}

function onDotClick() {}

function onEqualClick() {}

function onDivideClick() {}
