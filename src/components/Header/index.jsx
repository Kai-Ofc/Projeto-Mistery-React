import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styleHeader from './Header.module.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className={styleHeader.container}>
        <span className={styleHeader.svgRose}> 
          <Link to="/" className={styleHeader.misteryTittle}>MISTERY</Link>
        </span>
        
        <ul className={styleHeader.ulHeader}>
          <li className={styleHeader.svgRoseFallen}><Link to="/" className={styleHeader.linkHeader}>PARTICIPAÇÕES</Link></li>
          <li className={styleHeader.svgRoseFallen}><Link to="/songs" className={styleHeader.linkHeader}>MÚSICAS</Link></li>
          <li className={styleHeader.svgRoseFallen}><Link to="/about" className={styleHeader.linkHeader}>SOBRE</Link></li>
        </ul>
        
        <button onClick={toggleMenu} className={styleHeader.menuButton}>
          ☰
        </button>
      </header>

      {isMenuOpen && (
        <div className={styleHeader.sideMenu}>
          <button onClick={toggleMenu} className={styleHeader.closeButton}>
            ×
          </button>
          <ul>
            <li><Link to="/songs" className={styleHeader.linkHeader}>PARTICIPAÇÕES</Link></li>
            <li><Link to="/songs" className={styleHeader.linkHeader}>MÚSICAS</Link></li>
            <li><Link to="/about" className={styleHeader.linkHeader}>SOBRE</Link></li>
          </ul>
        </div>
      )}
    </>
  );
}

export default Header;

