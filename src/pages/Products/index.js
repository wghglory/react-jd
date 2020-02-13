import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { getProducts } from '../../action/productAction';

import DefaultLayout from '../Layout/DefaultLayout';

import ProductItem from './ProductItem';

function Products(props) {
  const { data, getProducts } = props;
  const { products = [] } = data;

  useEffect(() => {
    getProducts();
    return () => {};
  }, [getProducts]);

  return (
    <DefaultLayout title='商品搜索-京东' style={{ backgroundColor: 'white' }} headerConfig={{ title: '搜索' }}>
      <div className='products'>
        {products.map((item, index) => {
          return <ProductItem key={'node' + index} data={item} />;
        })}
      </div>
    </DefaultLayout>
  );
}

export default connect(
  (state) => {
    return {
      data: state.products,
    };
  },
  {
    getProducts,
  },
)(Products);
