import React from 'react';
import './index.scss';

export default function FirstCategories(props) {
  const { data = [], activeIndex, changeFirst } = props;
  return (
    <div className='firstCategories'>
      {data.map((item, index) => {
        return (
          <Node key={'fir' + index} data={item} active={activeIndex === index} changeFirst={() => changeFirst(index)} />
        );
      })}
    </div>
  );
}
function Node(props) {
  const { data, active, changeFirst } = props;
  const { title } = data;
  return (
    <div className={'node' + (active ? ' node-active' : '')} onClick={changeFirst}>
      {title}
    </div>
  );
}
