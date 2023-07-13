import React, {useEffect, useState} from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMenu = () => setClick(false);
  
  const showButton = () => {
    if(window.innerWidth <= 960) {
      setButton(false);
    }else{
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
        <nav className="navbar">
            <div className="navbar-container">            
              <Link to='/' className='navbar-logo' onClick={closeMenu}>
                <img src={logo} alt="logo" className="navbar-logo" />
              </Link>
            </div>
            <div className="menu-icon" onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'}></i>
            </div>
            <ul className={click? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to='/services' className='nav-links' onClick={closeMenu}>
                  SERVICES
                </Link>
              </li>  
              <li>
                <Link to='/about' className='nav-links' onClick={closeMenu}>
                  ABOUT
                </Link>
              </li>
              <li>
                <Link to='/contact' className='nav-links' onClick={closeMenu}>
                  CONTACT
                </Link>
              </li>
              <li>
                <Link to='/order' className='nav-links-order' onClick={closeMenu}>
                  ONLINE ORDER
                </Link>
              </li> 
              <li>
                <Link to='/login' className='nav-links' onClick={closeMenu}>
                  SIGN UP
                </Link>
              </li>   

            </ul>
            {/* {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>} */}
        </nav>
    </>
    
  )
}

export default Navbar