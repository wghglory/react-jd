import React from 'react';

import './product-item.scss';

export default function ProductItem(props) {
  const { data } = props;
  const { img, title, price, tags } = data;
  return (
    <div className='node'>
      <div className='imgBox'>
        <img src={img} alt='...' />
      </div>
      <div className='ctn'>
        <div className='title'>{title}</div>
        <div className='priceBox'>
          <span className='yuan'>￥</span>
          <span className='price'>{price}</span>
        </div>
        <Tags data={tags} />
      </div>
    </div>
  );
}

function Tags(props) {
  const { data = [] } = props;

  return (
    <ul className='tags'>
      {data.map((item, index) => {
        return (
          <li className='tag' key={'tag' + index}>
            {item}
          </li>
        );
      })}
    </ul>
  );
}
