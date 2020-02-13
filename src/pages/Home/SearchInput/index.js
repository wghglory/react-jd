import React from 'react';
import { Link } from 'react-router-dom';

import classnames from 'classnames';

import styles from './search-input.module.scss';

export default function SearchInput(props) {
  const { user, history, showSearchPage, setShowSearchPage } = props;
  const { isAuthenticated } = user;

  const toSearchPage = () => {
    history.push('/productList');
  };

  // if clicking search input, call setShowSearchPage and show search result page

  return (
    <div className={styles.searchInput}>
      {showSearchPage ? (
        <div className={styles.iconBox}>
          <i
            className={classnames(styles.iconfont, 'iconfont icon-jiantou-copy')}
            onClick={() => setShowSearchPage(false)}
          ></i>
          {/* back button */}
        </div>
      ) : (
        // category link
        <Link to='/category' className={styles.iconIcon_}>
          <i className={classnames(styles.iconfont, styles.iconBox, 'iconfont icon-icon-')}></i>
        </Link>
      )}

      <div className={styles.inputBox}>
        <i className={classnames(styles.iconfont, styles.iconSousuo, 'iconfont icon-sousuo')}></i>
        <input placeholder='京东商城' onFocus={() => setShowSearchPage(true)} />
      </div>

      {showSearchPage ? (
        <div className={styles.iconBox}>
          <span className={styles.loginBtn} onClick={toSearchPage}>
            搜索
          </span>
        </div>
      ) : (
        <Link to='/user' className={styles.iconBox}>
          {isAuthenticated ? (
            <i className={classnames(styles.iconfont, 'iconfont icon-wode')}></i>
          ) : (
            <span className={styles.loginBtn}>登录</span>
          )}
        </Link>
      )}

      {showSearchPage && <div className={styles.searchPage}>更多搜索选择项</div>}
    </div>
  );
}
