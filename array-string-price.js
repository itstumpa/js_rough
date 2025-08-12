const products = [
  { name: "Laptop", price: 800 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Headphones", price: 100 }
];

// Sum total price
const totalPrice = products.reduce((sum, product) => sum + product.price, 0);

console.log("Total Price:", totalPrice); // 1700
