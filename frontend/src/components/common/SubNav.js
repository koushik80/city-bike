import React from 'react';
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
                                <li><a href="#/">DUMMY1</a></li>
                                <li><a href="#/">DUMMY2</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="header-right-social text-center text-sm-right">
                            <ul>
                                <li><a href="https://www.facebook.com//"><i className="fab fa-facebook-f"></i></a></li>
                                <li><a href="https://twitter.com/"><i className="fab fa-twitter"></i></a></li>
                                <li><a href="https://github.com/koushik80/"><i className="fab fa-github"></i></a></li>
                                <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin-in"></i></a></li>
                                <li><a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a></li>
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