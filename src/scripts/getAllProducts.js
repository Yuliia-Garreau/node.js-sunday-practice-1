import { readProduct } from '../utils/readProduct.js';

const getAllProducts = async () => {
  const products = await readProduct();
  return products;
};
console.log(await getAllProducts());
