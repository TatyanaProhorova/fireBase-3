import { useState } from 'react';
import { createPortal } from 'react-dom';
import { Sidebar } from '../Sidebar/Sidebar';
import styles from './Header.module.scss';

export const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsShowSidebar((prevState) => !prevState);
  };

  return (
    <div className={styles.headerContainer}>
      <header>
        <div className={styles.headerIcon} onClick={toggleSidebar}>
          <span>=</span>
        </div>
        <div className={styles.headerText}>
          <span>Бaнк заданий по биологии</span>
        </div>
      </header>
      {isShowSidebar && createPortal(<Sidebar />, document.body)}
    </div>
  );
};
