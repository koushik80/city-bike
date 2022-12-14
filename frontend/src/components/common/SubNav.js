import React from 'react';
import { NavLink } from 'react-router-dom';
import './SubNav.scss';

const SubNav = () => {
  return (
    <header className="header-area">
        <div className="header-top">
            <div className="container-fluid">
                <div className="top_nav_area">
                    <div className="col-lg-6">
                        <div className="header_top_left_side">
                            <ul>
                                <li><a href="https://www.hel.fi/en/" target="_blank" rel="noopener noreferrer">Helsinki</a></li>
                                <li><a href="https://www.hsl.fi/" target="_blank" rel="noopener noreferrer">HSL</a></li>
                                <li><NavLink to="/map">Map</NavLink></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header-right-social text-center text-sm-right">
                            <ul>
                              <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                              <li><a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                              <li><a href="https://github.com/koushik80/" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                              <li><a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                              <li><a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default SubNav;