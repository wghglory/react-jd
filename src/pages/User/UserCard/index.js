import React from 'react';
import './user-card.scss';

export default function UserCard(props) {
  const { username, headIcon } = props.data;
  return (
    <div className='userCard'>
      <div className='userIcon' style={{ background: 'url(' + headIcon + ') 0px 0px / 100% 100% no-repeat' }}></div>
      <div className='personalWrap'>
        <div className='username'>{username}</div>
        <div className='pin'>我还有个用户名</div>
        <div className='tips'>
          <div className='notice'>京享值19184</div>
          <div className='notice arrow'>小白信用101.7</div>
        </div>
      </div>
    </div>
  );
}
