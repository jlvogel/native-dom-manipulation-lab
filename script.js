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
// Let's add to DOM's Past Races list. Create a new <li>element, change the new <li>text to the name of a city, and append it to the Past Races list.
const li = document.createElement('li')
li.innerText = "New York City"
pastRacesUl.appendChild(li)

  // Part 7
  // Create a new .blog-post corresponding to the new city added in Part 6. You will have to create a new <div> with class of .blog-post, a new <h2> with text, and a new <p> with some text. Think about what order you want to create the elements, and what order you want to append them in.

  // will append to div class = main.  

  const newDiv = document.createElement('div')
  newDiv.classList.add('blog-post', 'purple')
  document.querySelector('.main').appendChild(newDiv)
  newDiv.innerHTML = `<h1>${li.innerText}</h1>
  <p>I RACED SPIDERMAN DURING RUSH HOUR AND WON!</p>`


  // Part 8
  // When you reload the page, the script.jsfile loads a random DOM quote. Let's play with the included function:

  // const randomQuote = function() {
  //   document.querySelector('#quote-of-the-day').innerText = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  // };
  // Query select the #quote-titleID element and add a click event handler. That event handler should use the function randomQuotewhenever #quote-titleis clicked.

  document.querySelector('#quote-title').addEventListener('click', randomQuote)



  // Part 9
  // Select all .blog-postclass elements. Iterate through the list of .blog-postclass elements and apply two event handlers to each node. The first event handler should be listening for mouseoutevents while the second handler should be listening for mouseenterevents.
  
  // The mouseouthandler should toggle the class .purple
  // The mouseenterhandler should toggle the class .red
  // Test it out!
  
  // Hint:
  
  // Remember the document node property .classListand the document node method .toggle().

  for (child of document.querySelectorAll('.blog-post')) {
    child.addEventListener('mouseout', handleMouseout)
    child.addEventListener('mouseenter', handleMouseenter)
  }

  function handleMouseout(evt) {
    evt.target.classList.toggle('purple')
  }
  
  function handleMouseenter(evt) {
    evt.target.classList.toggle('red')
  }


});
