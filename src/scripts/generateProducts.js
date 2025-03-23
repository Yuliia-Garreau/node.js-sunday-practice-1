import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProduct } from '../utils/readProduct.js';
import { writeProduct } from '../utils/writeProduct.js';

const generateProducts = async (number) => {
    const productList = await readProduct();

  const newProduct = Array(number).fill(0).map(createFakeProduct);
    await writeProduct([...productList, ...newProduct]);
};
generateProducts(3);
