import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
      <Link to="/">Mistery</Link>
      <Link to="/about">About</Link>
      <Link to="/songs">Songs</Link>
    </>
  )
}

export default Header