const result = document.querySelector('#result');
const date = new Date();

const options = {

    dateStyle: 'full',
    timeStyle: 'short'
};

result.innerHTML = date.toLocaleString('en-US', options);