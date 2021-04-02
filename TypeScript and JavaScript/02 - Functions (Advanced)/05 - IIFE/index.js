// Immediately invoked function expression expression

(function(age, weight, height){

    const surname = 'Carrara';

    function nameCreator(name) {

        return name + ' ' + surname;
    }

    function nameSpeaker(){

        console.log(nameCreator('Agostinho'));
    }

    nameSpeaker();
    console.log(age, weight, height);

})(20, 80, 1.80); // It serves to call the function and put its arguments