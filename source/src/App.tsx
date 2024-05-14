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
      {/* --==================MAIN===================-- */}
      <div className="main">
          <div className="left-content">
              <div className="text">
                  <h1>Create<br/>Your Impact.</h1>
              </div>
              <a href="">
                  <div className="button">
                    Join us
                  </div>
              </a>
          </div>
          <div className="right-content">
          <div className="outer-heropic-container">
            <div className="inner-heropic-container">
              <div className="reactor">
                <div className="triangle"></div>
                <div className="circle-1"><span></span><span></span><span></span><span></span></div>
                <div className="circle-2"></div>
                <div className="circle-3"><span></span><span></span><span></span></div>
                <div className="circle-4"></div>
                <div className="circle-5"></div>
                <div className="circle-6"></div>
                <div className="circle-7"></div>
              </div>
            </div>
          </div>
          </div>
      </div>  
    </>
  );
}

export default App;
