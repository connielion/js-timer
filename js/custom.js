let userInput = document.getElementById("input").value;


const button = document.querySelector('.btn-success'); // get button's class

button.addEventListener(
  'click', // listen for click event
  (e)=> {
  
      console.log(e.target);
  }
);
