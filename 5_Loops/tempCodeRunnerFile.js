const shoppingCart = [
  {
    itemName: "js course",
    price: 2999,
  },
  {
    itemName: "py course",
    price: 999,
  },
  {
    itemName: "mobile dev course",
    price: 5999,
  },
  {
    itemName: "data science course",
    price: 12999,
  },
];

const totaLprice = shoppingCart.reduce((initialAmount, itemprice) => {
  return initialAmount + itemprice.price;
}, 0);

console.log(`Total of your cart : ${totaLprice}`);