import { PATH_DB } from '../constants/products.js';
import fs from 'node:fs/promises';
import { createFakeProduct } from '../utils/createFakeProduct.js';

const addOneProduct = async () => {
    const productList = await fs.readFile(PATH_DB, 'utf-8');
    const parsedProductList = JSON.parse(productList);
    parsedProductList.push(createFakeProduct());
    await fs.writeFile(PATH_DB, JSON.stringify(parsedProductList, null, 2), 'utf-8');
    
};
addOneProduct();