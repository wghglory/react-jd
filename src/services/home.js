import request, { prefix } from '../utils/request';

export async function getHomeCarouselRequest() {
  return await request(prefix + 'getHomeCarousel');
}

export async function getMallRequest() {
  return await request(prefix + 'getMall');
}
