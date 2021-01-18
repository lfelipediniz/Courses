const formInformation = () => {

    const form = document.querySelector('.form'); // get data from the HTML form
    const result = document.querySelector('.result');

    const peopleArray = [];

        function eventReceiver (event) {
        
        event.preventDefault(); // prevent page loading behavior when submitting the form

            const name = form.querySelector('.name');
            const surname = form.querySelector('.surname');
            const height = form.querySelector('.height');
            const weight = form.querySelector('.weight');
            
            peopleArray.push({

                name: name.value,
                surname: surname.value,
                height: height.value,
                weight: weight.value
    
            });


            console.log(peopleArray);

            result.innerHTML += `<p>${name.value} ${surname.value} ${height.value} ${weight.value}</p>`;
        
        }


    form.addEventListener('submit', eventReceiver)
    
};

formInformation();
