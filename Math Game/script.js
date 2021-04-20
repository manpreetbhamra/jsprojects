let a = Math.floor(Math.random() * (100 - 0) + 1);
let b = Math.floor(Math.random() * (100 - 0) + 1);
let c = Math.floor(Math.random() * (5 - 0) + 1);

var v1 = document.getElementById("v1");
v1.innerHTML = a;

var v2 = document.getElementById("v2");
v2.innerHTML = b;

var ans;
var opperator;
if (c == 1) {
  opperator = "+";
  ans = a + b;
}
if (c == 2) {
  opperator = "-";
  ans = a - b;
}
if (c == 3) {
  opperator = "*";
  ans = a * b;
}
if (c == 4) {
  opperator = "/";
  ans = a / b;
  ans = ans.toFixed(3);
}
if (c == 5) {
  opperator = "%";
  ans = a % b;
}
var opp = document.getElementById("opp");
opp.innerHTML = opperator;
console.log(ans);

function check() {
  var refresh = document.getElementById("button");
  refresh.innerText = "CHECK";

  var inputVal = document.getElementById("input").value;
  console.log(inputVal);
  if (inputVal == ans) {
    console.log("correct");
    document.getElementById("print").style.color = "rgb(90, 255, 90)";
    document.getElementById("print").innerText = "YOUR ANSWER IS CORRECT";
  } 
  else if(inputVal==""){
    console.log("NOT ATTEMPTED!!");
    document.getElementById("print").style.color = "rgb(255,255,255);";
    document.getElementById("print").innerText = "NOT ATTEMPTED!! ANSWER IS "+ans;   
  }
  else {
    console.log("wrong");
    document.getElementById("print").style.color = "rgb(251, 117, 117);";
    document.getElementById("print").innerText = "YOUR ANSWER IS WRONG. ANSWER IS "+ans;
  }
  
  document.getElementById("input").value = "";
  // -----------------repeat----------------------
  let a = Math.floor(Math.random() * (100 - 0) + 1);
  let b = Math.floor(Math.random() * (100 - 0) + 1);
  let c = Math.floor(Math.random() * (5 - 0) + 1);

  v1 = document.getElementById("v1");
  v1.innerHTML = a;

  v2 = document.getElementById("v2");
  v2.innerHTML = b;

  ans;
  opperator;
  if (c == 1) {
    opperator = "+";
    ans = a + b;
  }
  if (c == 2) {
    opperator = "-";
    ans = a - b;
  }
  if (c == 3) {
    opperator = "*";
    ans = a * b;
  }
  if (c == 4) {
    opperator = "/";
    ans = a / b;
    ans = ans.toFixed(3);
  }
  if (c == 5) {
    opperator = "%";
    ans = a % b;
  }
  opp = document.getElementById("opp");
  opp.innerHTML = opperator;
  console.log(ans);
}
