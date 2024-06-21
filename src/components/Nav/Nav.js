import GlobenotesLogo from '../../assets/images/globenotes-logo.svg';
import SearchIcon from '../../assets/images/search.svg';
import UploadIcon from '../../assets/images/upload.svg';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  let navContent;
  if (isMobile) {
    navContent = (
      <nav className="nav">
        <div className="nav__container">
          <ul className="nav__list">
            <li className="nav__image">
            <Link to="/">
                <img className="nav__logo" src={GlobenotesLogo} alt="Globenotes logo" />
              </Link>
            </li>
            <li className="nav__search">
              <div className="nav__search-container">
                <input className="nav__search--bar" type="search" name="search" placeholder="Search" />
                <img className="nav__search--icon" src={SearchIcon} alt="Search" />
              </div>
              <div className="nav__avatar"></div>
            </li>
            <li className="nav__upload">
            <Link to="/video-upload">
            <button className="nav__button">
                <img className="nav__button-icon" src={UploadIcon} alt="Upload" />
                UPLOAD
              </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  } else {
    navContent = (
      <nav className="nav">
        <div className="nav__container">
          <ul className="nav__list">
            <li className="nav__image">
            <Link to="/">
                <img className="nav__logo" src={GlobenotesLogo} alt="Globenotes logo" />
              </Link>
            </li>
            <div className='nav__right'>
            <li className="nav__search">
              <div className="nav__search-container">
                <input className="nav__search--bar" type="search" name="search" placeholder="Search" />
                <img className="nav__search--icon" src={SearchIcon} alt="Search" />
              </div>
            </li>
            <li className="nav__upload">
            <Link to="/video-upload">
            <button className="nav__button">
                <img className="nav__button-icon" src={UploadIcon} alt="Upload" />
                UPLOAD
              </button>
              </Link>
            </li>
            <li className="nav__avatar-container">
              <div className="nav__avatar"></div>
            </li>
            </div>
          </ul>
        </div>
      </nav>
    );
  }

  return navContent;
};

export default Nav;