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
    document.getElementById("daysLeft").innerHTML = days + " days";
    document.getElementById("hoursLeft").innerHTML = hours + " hours ";
    document.getElementById("minutesLeft").innerHTML = minutes + " minutes and";
    document.getElementById("secondsLeft").innerHTML = seconds + " seconds left.";


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
    document.getElementById("cnyDays").innerHTML = d + " days";
    document.getElementById("cnyHours").innerHTML = hr + " hours ";
    document.getElementById("cnyMinutes").innerHTML = min + " minutes and";
    document.getElementById("cnySeconds").innerHTML = sec + " seconds left.";

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

    document.getElementById("day").innerHTML = _day + " days";
    document.getElementById("hour").innerHTML = _hour + " hours";
    document.getElementById("min").innerHTML = _min + " minutes and";
    document.getElementById("sec").innerHTML = _sec + " seconds left";


  }
)
