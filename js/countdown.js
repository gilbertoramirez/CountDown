let days = 5;
let hours = 23;
let minutes = 12;
let seconds = 5;

const proximalDate = new Date(2018,7, days, hours, minutes, seconds).getTime();

var x = setInterval(function() {

  let currentDate = new Date().getTime();

  var remainingTime = proximalDate - currentDate;

  days = Math.floor(remainingTime / (1000 * 3600 * 24));
  hours = Math.floor((remainingTime % (1000 * 3600 * 24)) / (1000 * 3600));
  minutes = Math.floor((remainingTime % (1000 * 3600)) / (1000 * 60));
  seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "<br>Days";
  document.getElementById("hours").innerHTML = hours + "<br>Hours";
  document.getElementById("minutes").innerHTML = minutes + "<br>Minutes";
  document.getElementById("seconds").innerHTML = seconds + "<br>Seconds";
}, 1000);
