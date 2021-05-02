const product = {name: 'Cup', price: 1.8 };

const anotherThing = { ...product }; // copy an object
const anotherThing2 = Object.assign({}, product); // copy an object
const anotherThing3 = { name: product.name }; // copy an object-specific property

Object.freeze(product); // prevents the object from being changed

// see the characteristics of the properties on the object
console.log(Object.getOwnPropertyDescriptor(product, 'name'));

// view object values
console.log(Object.values(product));

// see the keys of the object
console.log(Object.keys(product));

// if you want the return of keys and values in an array
console.log(Object.entries(product));












