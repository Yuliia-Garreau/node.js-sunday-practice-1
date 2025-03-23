import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const removeRandomProduct = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  const parsedProducts = JSON.parse(products);
  const index = Math.floor(Math.random() * parsedProducts.length);
  parsedProducts.splice(index, 1);
  await fs.writeFile(PATH_DB, JSON.stringify(parsedProducts, null, 2), 'utf-8');
};
removeRandomProduct();
