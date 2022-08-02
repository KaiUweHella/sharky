let canvas;
let world;
let keyboard = new Keyboard();
let overlayActiv = false;

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log(world.character);
  hideStartBtn();
}

function restart() {
  window.location.replace("index.html");
}

function hideStartBtn() {
  document.getElementById("start-button").classList.add("d-none");
}

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 37 || e.keyCode == 65) {
    keyboard.LEFT = true;
  }
  if (e.keyCode == 38 || e.keyCode == 87) {
    keyboard.UP = true;
  }
  if (e.keyCode == 39 || e.keyCode == 68) {
    keyboard.RIGHT = true;
  }
  if (e.keyCode == 40 || e.keyCode == 83) {
    keyboard.DOWN = true;
  }
});

document.addEventListener("keypress", (e) => {
  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }
});

document.addEventListener("keyup", (e) => {
  if (e.keyCode == 37 || e.keyCode == 65) {
    keyboard.LEFT = false;
  }
  if (e.keyCode == 38 || e.keyCode == 87) {
    keyboard.UP = false;
  }
  if (e.keyCode == 39 || e.keyCode == 68) {
    keyboard.RIGHT = false;
  }
  if (e.keyCode == 40 || e.keyCode == 83) {
    keyboard.DOWN = false;
  }
  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }
});

function openHelp() {
  let text = document.getElementById("help-info");
  let overlay = document.getElementById("overlay-help");

  if (!overlayActiv) {
    overlay.classList.remove("d-none");
    console.log("ja");
    text.innerHTML = "close";
    overlayActiv = true;
  } else {
    overlay.classList.add("d-none");
    text.innerHTML = "help";
    overlayActiv = false;
    console.log("nein");
  }
}

function stopAllIntervals() {
  var interval_id = window.setInterval(() => {}, 99999);
  for (var i = 0; i < interval_id; i++) window.clearInterval(i);
}
