import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';

const getAllProducts = async () => {
  const products = await fs.readFile(PATH_DB, 'utf-8');
  return JSON.parse(products);
};
console.log(await getAllProducts());
