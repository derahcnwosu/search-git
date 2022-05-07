import React from 'react'
import {Link} from 'react-router-dom'
import {FaGithub} from 'react-icons/fa'

function Navbar() {
  return (
    <div className="navbar">
       <div className="container mx-auto">
        <Link to='/'><FaGithub color='#fff' className='logo'/></Link>
        <ul>
          <li>
            <Link to= '/' className='nav-link'>Home</Link>
          </li>
          <li>
            <Link to= '/about' className='nav-link'>About</Link>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar
