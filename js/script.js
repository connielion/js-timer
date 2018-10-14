let timeRightNow = new Date();
document.getElementById("timeRightNow").innerHTML = timeRightNow;

// Set date we are counting down to
let timeUntilChristmas = new Date("Dec 25, 2018, 00:00:00").getTime();


let i = setInterval(
  function(){
    let now = new Date().getTime();

    let timeLeft = timeUntilChristmas - now;

    // Calculate days, hours, minutes, and seconds left
    let days = Math.floor(timeLeft/(1000 * 60 * 60 * 24));

    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let minutes = Math.floor((timeLeft %(100 * 60 * 60))/(100 * 60));

    let seconds = Math.floor((timeLeft % (1000 * 60 )) / 1000);

    // Output days
    document.getElementById("daysLeft").innerHTML = days;
    document.getElementById("hoursLeft").innerHTML = hours;
    document.getElementById("minutesLeft").innerHTML = minutes;
    document.getElementById("secondsLeft").innerHTML = seconds;


    if ( timeLeft< 0 ) {
      clearInterval(i);
      document.getElementById("daysLeft").innerHTML = "Happy Holidays!";
    }
  }, 1000);
//

// Chinese New Year

let cny = new Date("Feb 05, 2019, 00:00:00").getTime();

let c = setInterval(
  function() {
    let currentTime = new Date().getTime();

    let timeLeftUntilCNY = cny - currentTime;

    let d = Math.floor(timeLeftUntilCNY/(1000 * 60 * 60 * 24));

    let hr = Math.floor((timeLeftUntilCNY % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let min = Math.floor((timeLeftUntilCNY %(100 * 60 * 60))/(100 * 60));

    let sec = Math.floor((timeLeftUntilCNY % (1000 * 60 )) / 1000);

    // Output days
    document.getElementById("cnyDays").innerHTML = d;
    document.getElementById("cnyHours").innerHTML = hr;
    document.getElementById("cnyMinutes").innerHTML = min;
    document.getElementById("cnySeconds").innerHTML = sec;

    if ( timeLeftUntilCNY < 0 ) {
      clearInterval(c);
      document.getElementById("cnyDays").innerHTML = "Happy Chinese New Year!";
    }
  }
);


// Countdown to Mom's Bday
let halloween = new Date("Oct 31, 2018, 00:00:00").getTime();

let b = setInterval(
  function() {
    let n = new Date().getTime();
    let timeTilMBD = halloween - n;

    let _day = Math.floor(timeTilMBD/(1000 * 60 * 60 * 24));

    let _hour = Math.floor((timeTilMBD % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    let _min = Math.floor((timeTilMBD %(100 * 60 * 60))/(100 * 60));

    let _sec = Math.floor((timeTilMBD % (1000 * 60 )) / 1000);

    // Output days

    document.getElementById("day").innerHTML = _day;
    document.getElementById("hour").innerHTML = _hour;
    document.getElementById("min").innerHTML = _min;
    document.getElementById("sec").innerHTML = _sec;

    if (timeTilMBD < 0 ) {
      clearInterval(b);
      document.getElementById("day").innerHTML = "Happy Birthday, Mom!";
    }

  }
)
