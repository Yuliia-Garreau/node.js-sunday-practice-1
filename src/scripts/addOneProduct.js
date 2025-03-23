import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProduct } from '../utils/readProduct.js';
import { writeProduct } from '../utils/writeProduct.js';

const addOneProduct = async () => {
  const readProducts = await readProduct();
  readProducts.push(createFakeProduct());
  await writeProduct(readProducts);
};
addOneProduct();
