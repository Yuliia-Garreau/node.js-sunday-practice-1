import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const writeProduct = async (updatedProduct) => {
  fs.writeFile(PATH_DB, JSON.stringify(updatedProduct, null, 2), 'utf-8');
};
