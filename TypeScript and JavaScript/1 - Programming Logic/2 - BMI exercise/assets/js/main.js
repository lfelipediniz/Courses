const formInformation = () => {

    const form = document.querySelector('.form'); // get data from the HTML form
    const result = document.querySelector('.result');

    const info = [];

        function eventReceiver (event) {
        
        event.preventDefault(); // prevent page loading behavior when submitting the form

            const weight = form.querySelector('.weight');
            const height = form.querySelector('.height');
          
            info.push({

                weight: weight.value,
                height: height.value

            });


            console.log(info);

            let bmi = weight.value / Math.pow(height.value, 2);

            let healthAlert = null;

            if (bmi < 18.5) healthAlert = "Under weight";

            else if (bmi >= 18.5 && bmi <= 24.9) healthAlert = "Normal weight";

            else if (bmi >= 25 && bmi <= 29.9) healthAlert = "Overweight";

            else if (bmi >= 30 && bmi <= 34.9) healthAlert = "Obesity grade one";

            else if (bmi >= 35 && bmi <= 39.9) healthAlert = "Obesity grade two";

            else healthAlert = "Obesity grade three";

            // report errors

            if (bmi < 0.01) alert('Please enter a valid value!');

            else if (!weight.value) alert('Invalid Weight!');

            else if (!height.value) alert('Invalid Height!');

            else {

                result.innerHTML += `&nbsp; &nbsp; <font size=5> Your BMI is <font color=#1EE32B>${bmi.toFixed(2)}</font> (${healthAlert})</font></br></br>`; 
            }
        }



    form.addEventListener('submit', eventReceiver)
    
};

formInformation();
