import React from 'react';

export default function Images(props) {
  const { data = [], activeIndex } = props;
  return (
    <>
      {data.map((item, index) => {
        return <Image key={'car' + index} data={item} active={activeIndex === index} />;
      })}
    </>
  );
}

function Image(props) {
  const { data, active } = props;
  const { src } = data;
  return (
    <div className={'image' + (active ? ' active' : '')}>
      <img src={src} />
    </div>
  );
}
