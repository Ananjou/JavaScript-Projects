const newYear = "1 jan 2023";
const day = document.getElementById("day");
const hour = document.getElementById("hour");
const minute = document.getElementById("min");
const seconde = document.getElementById("sec");

function countDown() {
  const newYearDate1 = new Date(newYear);
  const currentDate = new Date();
  //   console.log(newYearDate1 - currentDate);
  //nombre de secondes totals pour cette periode
  const secTotal = (newYearDate1 - currentDate) / 1000;
  const days = Math.floor(secTotal / 3600 / 24); //Math.floor retourne la partie entiere de cette division

  const hours = Math.floor((secTotal / 3600) % 24);

  const mins = Math.floor((secTotal / 60) % 60);
  const sec = Math.floor(secTotal % 60);

  //   console.log("Days:" + days);
  //   console.log("Hours:" + hours);
  //   console.log("Minutes:" + mins);
  //   console.log("Secondes:" + sec);

  day.innerHTML = formatTime(days);
  hour.innerHTML = formatTime(hours);
  minute.innerHTML = formatTime(mins);
  seconde.innerHTML = formatTime(sec);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countDown();

setInterval(countDown, 1000);
