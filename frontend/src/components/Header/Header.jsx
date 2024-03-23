import React, { useRef, useEffect, useContext } from 'react';
import { Container, Row, Button } from 'reactstrap';
import { NavLink, Link, useNavigate, useLocation } from 'react-router-dom';


import logo from '../../assets/images/logo-black.png';
import './header.css';

import { authContext } from './../context/authContext'
const nav__links = [
  {
    path: '/Home',
    display: 'HOME',
  },
  {
    path: '/About',
    display: 'ABOUT',
  },
  {
    path: '/Treks',
    display: 'TREKS',
  },
  
];



const Header = () => {

  const headerRef = useRef(null)
  const navigate = useNavigate()
  const { user, dispatch } = useContext(authContext)
  const location = useLocation();

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    navigate('/')
  }

  const stickyHeaderFunc = () => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('sticky__header')
      } else {
        headerRef.current.classList.remove('sticky__header')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()

    return () => window.removeEventListener('scroll', stickyHeaderFunc)
  })

  const handleLogoClick = () => {
    // If user is already on the Home page, refresh the page
    if (location.pathname === '/Home') {
      window.location.reload();
    } else {
      // If user is not on the Home page, navigate to the Home page
      navigate('/Home');
    }
  };

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper d-flex align-items-center 
        justify-content-between">


            <div className="logo">
              {/* Make the logo a Link to the Home page */}
              <Link to='/Home' onClick={handleLogoClick}>
                <img src={logo} alt="" />
              </Link>
            </div>


            <div className="navigation">
              <ul className="menu d-flex align-items-center gap-5" >
                {
                  nav__links.map((item, index) => (
                    <li className="nav__item" key={index}>
                      <NavLink
                        to={item.path}
                        className={navClass =>
                          navClass.isActive ? "active__link" : ""
                        }
                      >
                        {item.display}
                      </NavLink>
                    </li>

                  ))}
              </ul>
            </div>

            <div className="nav__right d-flex align-items-center gap-4 ">
              <div className="nav__btns d-flex align-items-center gap-4">

                {
                  user ? <>
                    <h5 className='mb-0'>{user.username}</h5>
                    <Button className='btn btn-dark' onClick={logout}> LOGOUT</Button>
                  </> : <>
                    <Button className="btn secondary__btn"><Link to='/login'>Login</Link></Button>
                    <Button className="btn primary__btn "><Link to='/register'>Register</Link></Button>

                  </>
                }

              </div>
              <span className="mobile__menu">
                <i className="ri-menu-line"></i>
              </span>

            </div>

          </div>
        </Row>
      </Container>



    </header>
  )
}

export default Header