import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/products.js';

export const readProduct = async () => {
  const data = await fs.readFile(PATH_DB, 'utf-8');
  const parsedData = data ? JSON.parse(data) : [];
  console.log('log for data to fix empty array', typeof data);
  console.log('log for parsedData', typeof parsedData);

  return parsedData;
};
