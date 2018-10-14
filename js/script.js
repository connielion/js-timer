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
    document.getElementById("minutesLeft").innerHTML = minutes + " minutes ";
    document.getElementById("secondsLeft").innerHTML = seconds + " seconds ";


    if ( timeLeft< 0 ) {
      clearInterval(i);
      document.getElementById("daysLeft").innerHTML = "Happy Holidays!";
    }
  }, 1000);

// Chinese New Year

let timeTilCNY = new Date("Feb 5, 2018, 00:00:00").getTime();

let c = setInterval(
    function() {
      let currentDate = new Date().getTime();

      let untilCNY = timeTilCNY - currentDate;
      // Calculate days, hours, minutes, and seconds left
      let daysLeftCNY = Math.floor(timeTilCNY /(1000 * 60 * 60 * 24));

      let hoursLeftCNY = Math.floor((timeTilCNY % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

      let minutesLeftCNY = Math.floor((timeTilCNY %(100 * 60 * 60))/(100 * 60));

      let secondsLeftCNY = Math.floor((timeTilCNY % (1000 * 60 )) / 1000);

      // Output days
      document.getElementById("daysLeftCNY").innerHTML = daysLeftCNY + " days";
      document.getElementById("hoursLeftCNY").innerHTML = hoursLeftCNY + " hours ";
      document.getElementById("minutesLeftCNY").innerHTML = minutesLeftCNY + " minutes ";
      document.getElementById("secondsLeftCNY").innerHTML = secondsLeftCNY + " seconds ";

    }, 1000
)
