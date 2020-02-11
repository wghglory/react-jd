import request, { prefix } from '../utils/request';

export async function getFirstCategoriesRequest() {
  return await request(prefix + 'getFirstCategories');
}

export async function getSecondCategoriesRequest() {
  return await request(prefix + 'getSecondCategories');
}
