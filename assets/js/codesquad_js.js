// GOAL IS TO CHANGE TEXT IN RED BAR BASED ON SCREEN SIZE
// For big screens, write "Energize your talent pipeline..."
// For mobile phones, write "and stable careers in low-income communities"
// while hiding the buttons and sub-head over the main banner image
// var redTxtHome = document.getElementById("redTxtHome").innerHTML;

// THE LINE BELOW CHANGES THE TEXT; STILL NEED TO ADD SCREEN-SIZE TEST
// document.getElementById("redTxtHome").innerHTML = "New text!";

$('.carousel').carousel({
  interval: 2000
});

let cardButtons = document.querySelectorAll('.button-more');

for (let i = 0; i < cardButtons.length; i++) {
  cardButtons[i].addEventListener('click', toggleCards);
  console.log(`the event listener added on ${cardButtons[i]}`)
}

function toggleCards(e) {
  let divToChange = e.target.parentElement.parentElement;
  console.log(divToChange);
  divToChange.classList.toggle('is-flipped');
  console.log(`${e.target} was clicked`)
}

console.log('javascript working')