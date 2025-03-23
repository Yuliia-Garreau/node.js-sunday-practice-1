import { PATH_DB } from '../constants/products.js';
import { createFakeProduct } from '../utils/createFakeProduct.js';
import fs from 'node:fs/promises';

const generateProducts = async (number) => {
  const productList = await fs.readFile(PATH_DB, 'utf-8');
  const parsedProductList = JSON.parse(productList);

  const newProduct = Array(number).fill(0).map(createFakeProduct);
  await fs.writeFile(
    PATH_DB,
    JSON.stringify([...parsedProductList, ...newProduct], null, 2),
    'utf-8',
  );
};
generateProducts(3);
