import React from 'react'
import { Link } from 'react-router-dom'
import './Header.module.css'

function Header() {
  return (
    <>
      <header className='container'>
        <span > 
          <Link to="/">MISTERY</Link>
        </span>
        
        <ul>
          <li><Link to="/songs">PARTICIPAÇÕES</Link></li>
          <li><Link to="/songs">MÚSICAS</Link></li>
          <li><Link to="/about">SOBRE</Link></li>
        </ul>
      </header>
    </>
  )
}

export default Header