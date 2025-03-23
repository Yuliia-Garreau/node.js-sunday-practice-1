import { readProduct } from '../utils/readProduct.js';

const countProducts = async () => {
  const productsList = await readProduct();
  return productsList.length;
};

console.log(await countProducts());
