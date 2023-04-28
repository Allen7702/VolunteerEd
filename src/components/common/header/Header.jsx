import { Link } from "react-router-dom"
import Head from "./Head"
import "./header.css"
import { useEffect, useState } from 'react';



  


const Header = () => {
  const [click, setClick] = useState(false)

  return (
    <>
      <Head />
      <header className="toss">
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            
            <li>
              <Link to='/about'>About</Link>
            </li>
           
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
           
              <li className="nav-item">
                <Link to="/resources" className="nav-link">
                  Resources
                </Link>
              </li>
           
            
            <li>
              <Link to='/login'>Login</Link>  
            </li>
            <li>
            <Link to='/register'>Register</Link>
          </li>
        

          </ul>
         
          <button className='toggle' onClick={() => setClick(!click)}>
            {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
          </button>
        </nav>
      </header>
    </>
  )
}

export default Header
