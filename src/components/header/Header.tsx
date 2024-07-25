import { useState } from 'react';
import './Header.scss';
import { createPortal } from 'react-dom';

import { Sidebar } from '../sidebar/Sidebar';

export const Header = () => {
  const [isShowSidebar, setIsShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsShowSidebar((prevState) => !prevState);
  };

  return (
    <div className="header-container">
      <header>
        <div className="header__icon" onClick={toggleSidebar}>
          <span>=</span>
        </div>
        <div className="header__text">
          <span>Бaнк заданий по биологии</span>
        </div>
      </header>
      {isShowSidebar && createPortal(<Sidebar />, document.body)}
    </div>
  );
};
