// Product
// Shirt, Pencil

function Product(name, price) {
  this.name = name;
  this.price = price;
}

Product.prototype.increase = function (amount) {
  this.price += amount;
};

Product.prototype.discount = function (amount) {
  this.price -= amount;
};

function Shirt(name, price, color) {
  Product.call(this, name, price);
  this.color = color;
}

Shirt.prototype = Object.create(Product.prototype); // make the builder stay the same as the product to get the parameters
Shirt.prototype.constructor = Shirt; // then, we come back with the original builder, so turning independent

const shirt = new Shirt("tank top", 7.5, "Patterned");

function Cup(name, price, material) {
  Product.call(this, name, price);
  this.material = material;
}

Cup.prototype = Object.create(Product.prototype);
Cup.prototype.constructor = Cup;

const cup = new Cup("Cuphead", 13, "Chocollato");

console.log(shirt, cup);
