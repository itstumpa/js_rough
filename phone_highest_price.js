const phones = {
  phone1: { name: "iPhone 15", price: 120000 },
  phone2: { name: "Samsung S24", price: 11000 },
  phone3: { name: "Pixel 8", price: 9000 },
  phone4: { name: "OnePlus 12", price: 8000 },
  phone5: { name: "Xiaomi 14", price: 7000 }
};

/* For highest price value */
const highest = Object.values(phones).reduce((max, phone) => 
  phone.price > max.price ? phone : max
);

console.log("Highest:", highest.name, highest.price);


/* For lowest price value */
const lowest = Object.values(phones).reduce((min, phone) => 
  phone.price < min.price ? phone : min
);

console.log("Lowest:", lowest.name, lowest.price);

// let highest = Object.entries(phones).reduce((max, [name, details]) => {
//   return details.price > max.price ? { name, ...details } : max;
// }, { price: -Infinity });

// console.log("Highest:", highest.name, highest.price);
