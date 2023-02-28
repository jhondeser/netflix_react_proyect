import { Form, Nav, Dropdown, Navbar, NavLink } from 'react-bootstrap'
import React, { useState } from 'react';
import Logo from '../../assets/logo_net.png'
import './header.css'

function Header() {
  const [showSearch, setShowSearch] = useState(false);

  const handleClick = () => {
    setShowSearch(!showSearch);
  };

  const handleBlur = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setShowSearch(false);
    }
  };
  
  return (
    <header>
      <Navbar collapseOnSelect expand="sm" bg="dark">
        <Navbar.Toggle aria-controls='navbarScroll' data-bs-target='#navbarScroll'/>
          <Navbar.Collapse id='navbarScroll'>
            <Nav className="nav_net navbar-expand-lg navbar-dark bg-dark">
              <div className="nav_rigth">
                <a className="navbar-brand" href="#">
                  <img className="logo" src={Logo} alt=""/>
                </a>
                <NavLink>
                  <a href="#">Inicio</a>
                </NavLink>
                <NavLink>
                  <a href="#">Series</a>
                </NavLink>
                <NavLink>
                  <a href="#">Peliculas</a>
                </NavLink>
                <NavLink>
                  <a href="#">Novedades Populares</a>
                </NavLink>
                <NavLink>
                  <a href="#">Mi Lista</a>
                </NavLink>
                <NavLink>
                  <a href="#">Explorar por idiomas</a>
                </NavLink>
                <Form className="d-flex" role="search">
                    <div className="search_container">
                      <div className="input-group w-5" onBlur={handleBlur}>
                        <span className="search_btn" id="basic-addon1" onClick={handleClick}>
                          <svg className="color_svg bi bi-search" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
                          </svg>
                        </span>
                        {showSearch && (
                          <input className='inp_search' type="text" placeholder="Search..." />
                        )}
                      </div>
                    </div>              
                </Form>
              </div>
              <div className="nav_left">
              <ul className="navbar-nav  mb-2 mb-lg-0">
                  <NavLink className="nav-item">
                    <a className="nav-NavLinknk">niños</a>
                  </NavLink>
                  <Dropdown className="nav-item dropdown">
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bell" viewBox="0 0 16 16">
                          <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown_right">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><hr className="dropdown-divider"/></Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Something else here</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="nav-item dropdown">
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-person-square" viewBox="0 0 16 16">
                          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                          <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
                        </svg>
                      </Dropdown.Toggle>
                      <Dropdown.Menu className="dropdown-menu dropdown_right">
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3"><hr className="dropdown-divider"/></Dropdown.Item>
                        <Dropdown.Item href="#/action-4">Something else here</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                </ul>
              </div>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Header
