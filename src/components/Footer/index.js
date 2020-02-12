import React from 'react';
import MenuItem from './MenuItem';
import './index.scss';

export default function Footer(props) {
  const { menu = [] } = props;
  const currentPath = window.location.pathname;

  return (
    <footer className='footer'>
      {menu.map((item, index) => {
        return <MenuItem key={'menuItem' + index} data={item} active={currentPath === item.link} />;
      })}
    </footer>
  );
}
