import request, { prefix } from '../utils/request';

export async function getProductListRequest() {
  return await request(prefix + 'getProductList');
}
