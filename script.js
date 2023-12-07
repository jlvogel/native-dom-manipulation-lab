let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();
  
  // Do all of your work inside the document.addEventListener  

  // Part 1
document.querySelector('#main-title').textContent = "Part 1 complete"

  // Part 2
document.querySelector('body').style.background = 'lightblue'

  // Part 3
const ul = document.querySelector('#favorite-things')
ul.removeChild(ul.lastElementChild)
// document.querySelector('#favorite-things').removeChild(document.querySelector('#favorite-things').children[5])

  // Part 4
  // Select all .special-title class elements and change their font-size to 2rem. Remember you might have to iterate through the list of elements

for (element of document.querySelectorAll('.special-title')) {
  element.style.fontSize = '2rem'
}

  // Part 5
  // Turns out DOM never raced in Chicago. Access the Past Races list and remove Chicago.
  const pastRacesUl = document.querySelector('#past-races')
 for (child of pastRacesUl.children) {
  if (child.innerText == 'Chicago') {
    pastRacesUl.removeChild(child)
  }
 }
  // Part 6


  // Part 7


  // Part 8


  // Part 9




});
