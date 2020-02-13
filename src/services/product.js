import request, { prefix } from '../utils/request';

export async function getProductsRequest() {
  return await request(prefix + 'getProducts');
}
