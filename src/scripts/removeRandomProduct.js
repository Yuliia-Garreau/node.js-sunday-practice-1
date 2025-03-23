import { readProduct } from '../utils/readProduct.js';
import { writeProduct } from '../utils/writeProduct.js';

const removeRandomProduct = async () => {
  const products = await readProduct();

  const index = Math.floor(Math.random() * products.length);
  products.splice(index, 1);

  await writeProduct(products);
};
removeRandomProduct();
