// construction function returns objects just like the factory, but is more automated

function Person(name, surname) {

    // attributes or private methods

    const ID = 123456;
    const internalMethod = function() {

};

// attributes or private methods 

    this.name = name;
    this.surname = surname;

    this.method = function () {

    console.log(this.name + ': I am a method');
    
    };
}