




const button = document.getElementById("btn"); // get button's class

button.addEventListener(
  'click', // listen for click event
  (e)=> {

      console.log(e.target); // check what we are clicking

      let notice;

      // prompt user for date and time

      let t = prompt("Enter date and time like: Dec 8, 2000, optional - add 00:00:00 for hour, min, sec. DO NOT ENTER CURRENT TIME OR EMPTY INPUT, OR ELSE...");

      if(t === null || t === " "){ // if input is empty or null
          notice = "Please enter a time and date."
      }

      else {

        let c = setInterval(

          function () {

            let now = new Date().getTime();
            let date = new Date(t).getTime();
            let timeRemaining = date - now;
            // calc time
            let days = Math.floor(timeRemaining/(1000 * 60 * 60 * 24));
            let hr = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let min = Math.floor((timeRemaining %(100 * 60 * 60))/(100 * 60));
            let sec = Math.floor((timeRemaining % (1000 * 60 )) / 1000);

            // output
            document.getElementById("text").innerHTML = days + " days " + hr + " hours " + min + " minutes and " + sec + " seconds left until " + t + ".";

          }
        )


      }

      document.getElementById("text").innerHTML = notice;




  }
);
