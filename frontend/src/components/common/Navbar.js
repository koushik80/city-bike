import { Container } from '@mui/material';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from './../../image/logo.png';
import './Navbar.scss';

const Navbar = () => {
    return (
        <Container>
            <nav className='navbar'>
                <div className='navbar--logo'>
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className='navbar--link-list'>
                    <ul>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/journey">Journey</NavLink>
                        </li>
                        <li>
                            <NavLink to="/station">Station</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">Contact us</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </Container>
    );
};

export default Navbar;
