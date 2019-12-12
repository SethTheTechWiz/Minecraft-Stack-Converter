const clock = 100;

let bool = false;

let number = document.getElementById("number").value;
let calcnumber = number / 64;
let remainder = calcnumber - Math.floor(calcnumber);

let full = Math.floor(calcnumber);
let partial = remainder * 64;

let fullHTML = document.getElementById("full");
let partialHTML = document.getElementById("partial");

const connectToHTML = function() {
  number = document.getElementById("number").value;

  if (number < 0) {
    document.getElementById("text").innerHTML = "no u";
    bool = true;
  }

  if (bool === false) {
    switch (document.getElementById("selection").value) {
      case "its":
        calcnumber = number / 64;
        remainder = calcnumber - Math.floor(calcnumber);
        full = Math.floor(calcnumber);
        partial = remainder * 64;
        break;

      case "sti":
        calcnumber = number * 64;
        partial = calcnumber;
        full = 0;
    }
  }
  fullHTML.innerHTML = full;
  partialHTML.innerHTML = partial;
}

setInterval(connectToHTML, clock);
