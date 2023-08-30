var inputVal = document.getElementById("inputVal");

function add(num) {
  inputVal.value += num;
}

function result() {
  inputVal.value = eval(inputVal.value);
}

function clearAll() {
  inputVal.value = "";
}

function back() {
  var value = inputVal.value;
  inputVal.value = value.slice(0, -1);
}
