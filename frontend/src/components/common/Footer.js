import React from 'react';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6} lg={3}>
                        <ul>
                            <li>
                                <Link to="/">Link 1</Link>
                            </li>
                            <li>
                                <Link to="/">Link 2</Link>
                            </li>
                            <li>
                                <Link to="/">Link 3</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <ul>
                            <li>
                                <Link to="/">Link 1</Link>
                            </li>
                            <li>
                                <Link to="/">Link 2</Link>
                            </li>
                            <li>
                                <Link to="/">Link 3</Link>
                            </li>
                        </ul>
                    </Grid>
                    <Grid item xs={12} md={6} lg={3}>
                        <ul>
                            <li>
                                <Link to="/">Link 1</Link>
                            </li>
                            <li>
                                <Link to="/">Link 2</Link>
                            </li>
                            <li>
                                <Link to="/">Link 3</Link>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
            </Container>
            <div className="footer--copy-right-text">
                <b>All rights reserved © koushik@devHuß {new Date().getFullYear()}</b>
            </div>
        </footer>
    );
};

export default Footer;