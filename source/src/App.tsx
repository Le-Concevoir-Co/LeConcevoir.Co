import React, { useState, useRef } from 'react';
import logo from './assets/media-assets/logo.png';
import menuIcon from './assets/media-assets/nav/menu.png';
import closeIcon from './assets/media-assets/nav/close.png';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuBoxRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLImageElement>(null);

  const handleMenuClick = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  React.useEffect(() => {
    if (menuBoxRef.current && menuIconRef.current) {
      if (isMenuOpen) {
        menuBoxRef.current.classList.add("open-menu");
        menuIconRef.current.src = closeIcon;
      } else {
        menuBoxRef.current.classList.remove("open-menu");
        menuIconRef.current.src = menuIcon;
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      {/* --==================NAV-BAR===================-- */}
      <div className="container">
          <div className="logo">
            <a href="#">
              <img src={logo} alt="Logo"/>
            </a>
            <h1>Le Concevoir.Co</h1>
          </div>
          <div className="box">
            <img src={menuIcon} id="menuIcon" alt="Menu" onClick={handleMenuClick} ref={menuIconRef} />
          </div>
      </div>
      <div className="menu-box" id="menuBox" ref={menuBoxRef}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/InDEV/loader.html">V.I.P</a></li>
          <li><a href="/InDEV/loader.html">More</a></li>
          <li><a href="/InDEV/loader.html">More</a></li>
        </ul>
      </div>    
    </>
  );
}

export default App;
