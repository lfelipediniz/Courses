function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, "stock", {
    enumerable: true, // show de key
    configurable: false, // can reconfigure
    get: function () {
      return stock;
    },
    set: function (value) {
      if (typeof value !== 'number') {
        console.log("Bad value!");
        return;
      }
    },
  });
}

const p1 = new Product("shird", 20, 3);
p1.stock = 9090;
console.log(p1);
