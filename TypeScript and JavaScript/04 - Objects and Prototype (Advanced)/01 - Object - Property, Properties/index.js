function Product(name, price, stock) {
  this.name = name;
  this.price = price;

  Object.defineProperty(this, "stock", {
    enumerable: true, // show de key
    value: stock, // value
    writable: true, // can change
    configurable: false, // can reconfigure
  });

  Object.defineProperties(this, {
    name: {
      enumerable: true, // show de key
      value: stock, // value
      writable: true, // can change
      configurable: false, // can reconfigure
    },
    price: {
      enumerable: true, // show de key
      value: stock, // value
      writable: true, // can change
      configurable: false, // can reconfigure
    },
  });
}

const p1 = new Product("Spongebob shirt", 20, 3);
p1.stock = 5000000;
delete p1.stock;
console.log(p1);
console.log(Object.keys(p1));

for (let key in p1) console.log(key);
