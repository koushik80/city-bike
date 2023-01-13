import React from 'react'
import { Container, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={3}>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/travelling">Pricing</Link>
              </li>
              <li>
                <Link to="/travelling">Travelling</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ul>
              <li>
                <Link to="/">FAQ</Link>
              </li>
              <li>
                <Link to="/">Help</Link>
              </li>
              <li>
                <Link to="/">Feedback</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={12} md={6} lg={3}>
            <ul>
              <li>
                <Link to="/">Terms</Link>
              </li>
              <li>
                <Link to="/">Privacy</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </Grid>
        </Grid>
      </Container>
      <div className="footer--copy-right-text">
        <b>All rights reserved © koushik@devHuß {new Date().getFullYear()}</b>
      </div>
    </footer>
  )
}

export default Footer