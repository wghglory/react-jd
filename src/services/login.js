import request, { prefix } from '../utils/request';

export async function loginRequest() {
  return await request(prefix + 'login');
}
export async function getUserInfoRequest() {
  return await request(prefix + 'getUserInfo');
}
