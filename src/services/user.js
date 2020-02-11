import request, { prefix } from '../utils/request';

export async function logoutRequest() {
  return await request(prefix + 'logout');
}
