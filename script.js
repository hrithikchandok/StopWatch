const timer = document.querySelector(".para");
const btnParent = document.querySelector(".button");

let seconds = 0;
let min = 0;
let hrs = 0;
var id;
var id2;

function handlebtn(event) {
  //   console.log(event);
  console.log(event.target);
  const btn_id = event.target.id;
  if (btn_id == "btn3") {
    // const timer = document.querySelector(".para");
    clearInterval(id2);
    clearInterval(id);
    id = null;
    id2 = null;
    hrs = 0;
    min = 0;
    seconds = 0;
    timer.innerHTML = `00:00:00`;
  } else if (btn_id == "btn1") {
    clearInterval(id2);
    id2 = null;
    seconds++;
    if (!id) {
      id = setInterval(function func() {
        seconds++;
        if (seconds >= 60) {
          seconds = seconds % 60;
          min++;
        }
        if (min >= 60) {
          min = min % 60;
          hrs++;
        }
        timer.innerHTML = `${Math.floor(hrs / 10) > 0 ? hrs : "0" + hrs}:${
          Math.floor(min / 10) > 0 ? min : "0" + min
        }:${Math.floor(seconds / 10) > 0 ? seconds : "0" + seconds}`;
      }, 100);
    }
  } else if (btn_id == "btn2") {
    clearInterval(id);
    clearInterval(id2);
    id2 = null;
    id = null;
    timer.innerHTML = `${Math.floor(hrs / 10) > 0 ? hrs : "0" + hrs}:${
      Math.floor(min / 10) > 0 ? min : "0" + min
    }:${Math.floor(seconds / 10) > 0 ? seconds : "0" + seconds}`;
  } else if (btn_id == "btn4") {
    clearInterval(id);
    id = null;

    if (!id2) {
      id2 = setInterval(function func2() {
        if (hrs == 0 && min == 0 && seconds == 0) {
          clearInterval(id2);
        } else {
          if (seconds > 0 || min > 0 || hrs > 0) seconds--;
          if (seconds < 0 && (min > 0 || hrs > 0)) {
            seconds += 60;
            min--;
          }
          if (min < 0 && hrs > 0) {
            min += 60;
            hrs--;
          }
          if (hrs < 0) {
            hrs = 0;
          }
        }
        timer.innerHTML = `${Math.floor(hrs / 10) > 0 ? hrs : "0" + hrs}:${
          Math.floor(min / 10) > 0 ? min : "0" + min
        }:${Math.floor(seconds / 10) > 0 ? seconds : "0" + seconds}`;
      }, 100);
    }
  }
}

btnParent.addEventListener("click", handlebtn);
