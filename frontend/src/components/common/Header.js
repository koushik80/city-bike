import { Container, Grid } from '@mui/material';
import React from 'react';
import headerImg from './../../image/c2.gif';
import './Header.scss';

const Header = () => {
    return (
        <header className='header'>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={6} >
                        <div className="header--content">
                            <h1>Helsinki City-Bike</h1>
                            <p>Welcome to use city bikes! City bikes are available in Helsinki and Espoo from the beginning of April to the end of October. Enjoy your ride!</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <div className="header--image">
                            <img src={headerImg} alt="" />
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </header>
    );
};

export default Header;