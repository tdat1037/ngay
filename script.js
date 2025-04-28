var c = document.getElementById("c");
var ctx = c.getContext("2d");

var cw = (c.width = window.innerWidth),
  cx = cw / 2;
var ch = (c.height = window.innerHeight),
  cy = ch / 2;

var rad = Math.PI / 180;
var stopped = true;
var howMany = 100;
var Circles = [];
ctx.strokeStyle = "red";
ctx.fillStyle = "rgba(255, 234, 234, 0.59)";
ctx.globalAlpha = 0.75;

function Circle() {
  this.R = randomIntFromInterval(50, 200);
  this.X = randomIntFromInterval(this.R, cw - this.R);
  this.Y = randomIntFromInterval(this.R, ch - this.R);
  this.iX = 2 * Math.random() * (Math.random() < 0.5 ? -1 : 1); //positive or negative
  this.iY = 2 * Math.random() * (Math.random() < 0.5 ? -1 : 1); //positive or negative

  this.r = randomIntFromInterval(5, 50);
  this.r1 = randomIntFromInterval(this.R / 2, this.R);

  this.a = ~~(Math.random() * 360) + 1;
  this.x = this.X + this.r1 * Math.cos(this.a * rad);
  this.y = this.Y + this.r1 * Math.sin(this.a * rad);
  this.l = randomIntFromInterval(50, 80);
}

for (var i = 0; i < howMany; i++) {
  var circle = new Circle();
  Circles.push(circle);
}

function Draw() {
  ctx.fillRect(0, 0, cw, ch);

  for (var i = 0; i < Circles.length; i++) {
    var p = Circles[i];
    if (p.X < p.R || p.X > cw - p.R || p.Y < p.R || p.Y > ch - p.R) {
      p.iX *= -1;
      p.iY *= -1;
    }

    p.X += p.iX;
    p.Y += p.iY;
    p.a += 1;
    p.x = p.X + p.r1 * Math.cos(p.a * rad);
    p.y = p.Y + p.r1 * Math.sin(p.a * rad);
    p.gx = p.x + p.r * Math.cos(p.a * rad);
    p.gy = p.y + p.r * Math.sin(p.a * rad);

    ctx.save();

    ctx.fillStyle = Grd(p.gx, p.gy, p.r, p.l);

    heart(p.x, p.y, p.r, p.a);
    ctx.restore();
  }
  requestId = window.requestAnimationFrame(Draw);
}

function randomIntFromInterval(mn, mx) {
  return ~~(Math.random() * (mx - mn + 1) + mn);
}

function Grd(x, y, r, l) {
  grd = ctx.createRadialGradient(x, y, 0, x, y, r);
  grd.addColorStop(0, "hsla(0, 99%," + l + "%,.9)");
  grd.addColorStop(1, "hsla(0, 99%," + l + "%, 0.1)");
  return grd;
}

function heart(x, y, r, a) {
  ctx.beginPath();
  var x1 = x + r * Math.cos(a * rad);
  var y1 = y + r * Math.sin(a * rad);
  var cx1 = x + r * Math.cos((a + 22.5) * rad);
  var cy1 = y + r * Math.sin((a + 22.5) * rad);

  var cx2 = x + r * Math.cos((a - 22.5) * rad);
  var cy2 = y + r * Math.sin((a - 22.5) * rad);
  var chord = 2 * r * Math.sin((22.5 * rad) / 2);

  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.arc(cx1, cy1, chord, (270 + a) * rad, (270 + a + 225) * rad);
  ctx.lineTo(x, y);
  ctx.moveTo(x1, y1);
  ctx.arc(cx2, cy2, chord, (90 + a) * rad, (90 + a + 135) * rad, true);
  ctx.lineTo(x, y);
  ctx.fill();
}

function start() {
  requestId = window.requestAnimationFrame(Draw);
  stopped = false;
}

function stopAnim() {
  if (requestId) {
    window.cancelAnimationFrame(requestId);
  }
  stopped = true;
}

window.addEventListener("load", start(), false);
c.addEventListener(
  "click",
  function () {
    stopped == true ? start() : stopAnim();
  },
  false
);


function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}


const yourDate = new Date("2025-04-09T00:00:00");

document.addEventListener("DOMContentLoaded", function () {
  var hoursElement = document.getElementById("hours");
  var minutesElement = document.getElementById("minutes");
  var secondsElement = document.getElementById("seconds");
  var dateElement = document.querySelector("date");

  dateElement.textContent = Math.floor(
    Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24
  );

  function updateClock() {
    var now = new Date();
    var diff = now - yourDate;

    var hrs = Math.floor(diff / 1000 / 60 / 60) % 24;
    var mins = Math.floor(diff / 1000 / 60) % 60;
    var secs = Math.floor(diff / 1000) % 60;

    hoursElement.textContent = hrs < 10 ? "0" + hrs : hrs;
    minutesElement.textContent = mins < 10 ? "0" + mins : mins;
    secondsElement.textContent = secs < 10 ? "0" + secs : secs;
  }

  updateClock();
  setInterval(updateClock, 1000);
});

const developControl = document.querySelector(".js-develop-button");
const resetControl = document.querySelector(".js-reset-button");
const polaroidPhoto = document.querySelector(".js-photo");

developControl.addEventListener("click", () => {
  polaroidPhoto.classList.add("is-developed");
});

resetControl.addEventListener("click", () => {
  polaroidPhoto.classList.remove("is-developed");
});
const developButton = document.querySelector('.js-develop-button');
const resetButton = document.querySelector('.js-reset-button');
const nextButton = document.querySelector('.js-next-button');
const prevButton = document.querySelector('.js-prev-button');
const photo = document.querySelector('.js-photo');

const photos = [
  "images/chung1.jpg",
  "images/chung2.jpg",
  "images/chung3.jpg",
  "images/chung4.jpg",
  "images/chung5.jpg",
  "images/chung6.jpg",
  "images/chung7.jpg",
  "images/chung8.jpg",
  "images/chung9.jpg",
  "images/chung10.jpg",
  "images/chung11.jpg",
  "images/chung12.jpg",
  "images/chung13.jpg",
  "images/chung14.jpg",
  "images/chung15.jpg",
  "images/chung16.jpg",
  "images/chung17.jpg",
  "images/chung18.jpg",
  "images/chung19.jpg",
  "images/chung20.jpg",
  // Thêm ảnh nếu muốn
];

let currentPhotoIndex = 0;

// Khi ấn nút máy ảnh 📸
developButton.addEventListener('click', function() {
  photo.classList.add('is-developed');
  photo.style.backgroundImage = `url("${photos[currentPhotoIndex]}")`;
});

// Khi ấn nút Next ➡️
nextButton.addEventListener('click', function() {
  currentPhotoIndex++;
  if (currentPhotoIndex >= photos.length) {
    currentPhotoIndex = 0; // Nếu tới cuối thì quay về đầu
  }
  changePhoto();
});

// Khi ấn nút Previous ⬅️
prevButton.addEventListener('click', function() {
  currentPhotoIndex--;
  if (currentPhotoIndex < 0) {
    currentPhotoIndex = photos.length - 1; // Nếu tới đầu thì quay về cuối
  }
  changePhoto();
});

// Hàm đổi ảnh và làm hiệu ứng
function changePhoto() {
  photo.style.backgroundImage = `url("${photos[currentPhotoIndex]}")`;
  photo.classList.remove('is-developed');
  void photo.offsetWidth; // Trick để restart animation
  photo.classList.add('is-developed');
}
