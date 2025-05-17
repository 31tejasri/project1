var display = document.querySelector("#display");

function sign() {
  var dig = display.value;
  if (dig === "") return;
  if (parseFloat(dig) > 0) {
    display.value = "-" + dig;
  } else {
    display.value = Math.abs(dig);
  }
}

function cls() {
  display.value = "";
}

function show(dig) {
  display.value += dig;
}

function comma() {
  var val = display.value;
  if (val === "") {
    display.value += "0.";
  } else if (!val.includes(".")) {
    display.value += ".";
  }
}

function calcul() {
  var dis = display.value;
  if (dis === "") return;
  try {
    display.value = eval(dis);
  } catch (e) {
    display.value = "Syntax Error";
  }
}
