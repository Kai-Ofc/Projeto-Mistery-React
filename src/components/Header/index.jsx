import React from 'react'
import { Link } from 'react-router-dom'
import styleHeader from './Header.module.css'

function Header() {
  return (
    <>
      <header className={styleHeader.container}>
        <span className={styleHeader.svgRose}> 
          <Link to="/" className={styleHeader.misteryTittle}>MISTERY</Link>
        </span>
        
        <ul className={styleHeader.ulHeader}>
          <li className={styleHeader.svgRoseFallen}><Link to="/songs" className={styleHeader.linkHeader}>PARTICIPAÇÕES</Link></li>
          <li className={styleHeader.svgRoseFallen}><Link to="/songs" className={styleHeader.linkHeader}>MÚSICAS</Link></li>
          <li className={styleHeader.svgRoseFallen}><Link to="/about" className={styleHeader.linkHeader}>SOBRE</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header