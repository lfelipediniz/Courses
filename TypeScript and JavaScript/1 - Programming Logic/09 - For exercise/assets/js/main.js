const elements = [

    {tag: 'p', text: 'Hi there, my name is Godolfredo!'},
    {tag: 'div', text: 'Did you know that Alek (brazilian prince) have a castle!'},
    {tag: 'br'},
    {tag: 'section', text: 'Philosophical phrases, like these, make me think...'},
    {tag: 'br'},
    {tag: 'footer', text: 'And you like this?'}
];

// adding in HTML

const container = document.querySelector('.container');

const div = document.createElement('div');  // Creating a div, to add the elements

for (let i = 0; i < elements.length; i++) {

    let { tag, text } = elements[i]

    let createdTag = document.createElement(tag); 
    let createdText = document.createTextNode(text);

    createdTag.appendChild(createdText);
    div.appendChild(createdTag);
}

container.appendChild(div);