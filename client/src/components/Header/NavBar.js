import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand ml-3">
          <Link to="/">
            <a class="title navbar-item" href="">
              Hackiri.
            </a>
          </Link>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbarBasicExample" class="navbar-menu mr-3">
          <div class="navbar-end">
            <div class="navbar-item">
              <div class="buttons">
                <Link to="/registration">
                  <a class="button is-black">
                    COMMENCER
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    )
};

export default NavBar;
