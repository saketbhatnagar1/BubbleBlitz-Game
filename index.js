/*game me jab we hit the given number denoted by hit
when we hit the number presented by hit,the score increments by 10,


*/
var score = 0;
var rand = 0;

function makebubble() {
  var clutter = "";

  for (var i = 1; i <= 180; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
    //clutter = clutter+<div class="bubble">${i}</div>
  }
  document.querySelector("#panelbtm").innerHTML = clutter;
}

function runtimer() {
  var timer = 60;
  var timerint = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerint);
      document.querySelector(
        "#panelbtm"
      ).innerHTML = `<h1>GAME OVER you score is ${score}</h1>`;
    }
  }, 1000);
}
runtimer();

function getnewhit() {
  rand = Math.floor(Math.random() * 100);
  document.querySelector("#hitval").textContent = rand;
}

function increasescore() {
  score += 5;
  document.querySelector("#scoreval").textContent = score;
}
function decreasescore() {
  score -= 5;
  document.querySelector("#scoreval").textContent = score;
}
makebubble();
getnewhit();

document.querySelector("#panelbtm").addEventListener("click", function (dets) {
  var map = Number(dets.target.textContent);

  if (map == rand) {
    increasescore();
    getnewhit();
    makebubble();
  } else {
    decreasescore();
    getnewhit();
    makebubble();
  }

  //dets.target ...here dets is a  random variable passed in function
  //dets.target returns exactly the variable/element that the event has occured on
});
