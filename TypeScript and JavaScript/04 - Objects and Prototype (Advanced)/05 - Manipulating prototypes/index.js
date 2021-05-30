function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.discount = function(percentage) {
    this.price = this.price - (this.price * (percentage / 100));
};

Product.prototype.increase = function(percentage) {
    this.price = this.price + (this.price * (percentage / 100));
};

const p1 = new Product('shirt', 50);

// Literal
const p2 = {
    name: 'Cup',
    price: 15
};

Object.setPrototypeOf(p2, Product.prototype) // linking the object's prototype

p2.increase(10);


