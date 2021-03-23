const paragraphs = document.querySelector('#paragraphs');

// catches all the 'p' tags within the div, with a NodeList
const pTags = paragraphs.querySelectorAll('p'); 

const bodyStyles = getComputedStyle(document.body);
const bodyBackgroundColor = bodyStyles.backgroundColor;

console.log(bodyBackgroundColor);

for(let p of pTags){

  p.style.backgroundColor = bodyBackgroundColor;
}