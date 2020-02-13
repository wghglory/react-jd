var Mock = require('mockjs');
var home = require('./home');
var user = require('./user');
var search = require('./search');
var product = require('./product');

function successWrap(obj) {
  return {
    code: 0,
    success: true,
    msg: '成功',
    data: obj,
  };
}

function failedWrap(obj) {
  return {
    code: -1,
    success: false,
    msg: '出错了',
    data: obj,
  };
}
module.exports = () => {
  // 使用 Mock
  const homeMockData = home();
  const userMockData = user();
  const searchMockData = search();
  const productMockData = product();

  var mockData = Mock.mock({
    // home page
    getHomeCarousel: successWrap(homeMockData.getHomeCarousel),
    getMall: successWrap(homeMockData.getMall),
    // user
    getUserInfo: successWrap(userMockData.getUserInfo),
    login: successWrap(userMockData.login),
    logout: successWrap(userMockData.logout),
    getFirstCategories: successWrap(searchMockData.getFirstCategories),
    getSecondCategories: successWrap(searchMockData.getSecondCategories),
    // product
    getProducts: successWrap(productMockData.getProducts),
  });
  // 返回的mockData会作为json-server的数据
  return mockData;
};
