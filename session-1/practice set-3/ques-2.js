const formatProduct = ({ name, price, inStock }) =>
  `${name} costs INR ${price} and ${
    inStock ? "is in stock" : "is not in stock"
  }`;

const product = {
  name: "Socks",
  price: 249,
  inStock: true,
};

const message = formatProduct(product);
console.log(message);
// Socks costs INR 249 and is in stock.
