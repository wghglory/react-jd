import React, { useState, useEffect } from 'react';

export default function LoginItem(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [btnActive, setBtnActive] = useState(false);

  const login = () => {
    const { loginPost } = props;
    loginPost({
      username: 'derek',
      password: 'wang',
    });
  };

  useEffect(() => {
    if (username.trim().length > 3 && password.trim().length > 3) {
      setBtnActive(true);
    } else {
      setBtnActive(false);
    }
  }, [username, password]);

  const usernameChange = (e) => {
    let v = e.target.value;
    setUsername(v);
  };
  const passwordChange = (e) => {
    let v = e.target.value;
    setPassword(v);
  };

  return (
    <div className='loginForm'>
      <div className='input-container'>
        <input placeholder='用户名/邮箱/已验证手机' onChange={usernameChange} />
      </div>
      <div className='input-container'>
        <input placeholder='请输入密码' onChange={passwordChange} />
      </div>
      <button className={'btn' + (btnActive ? ' btn-active' : '')} onClick={login}>
        登录
      </button>
    </div>
  );
}
