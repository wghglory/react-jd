import request, { prefix } from '../utils/request';

export async function getHomeCarouselRequest() {
  return await request(prefix + 'getHomeCarousel');
}

export async function getMallNavRequest() {
  return await request(prefix + 'getMallNav');
}
