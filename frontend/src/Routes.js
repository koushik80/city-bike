import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes as AllRoutes } from 'react-router-dom';
import Footer from './components/common/Footer';
import SubNav from './components/common/SubNav';
import Navbar from './components/common/Navbar';


const Home = lazy(() => import('./pages/Home'));
const Journey = lazy(() => import('./pages/Journey'));
const Station = lazy(() => import('./components/station/Station'));
const StationDetails = lazy(() => import('./components/station/StationDetails'));
const Contact = lazy(() => import('./pages/Contact'));
const Travelling = lazy(() => import('./pages/Travelling'));
const Map = lazy(() => import('./components/map/Map'));
const Navigation = lazy(() => import('./components/navigation/Navigation'));


const Routes = () => {
  return (
           <BrowserRouter>
           <SubNav />
           <Navbar />
              <AllRoutes>
                <Route path="/" element={<Home />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/station" element={<Station />} />
                <Route path="/station/:id" element={<StationDetails />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/travelling" element={<Travelling />} />
                <Route path="/map" element={<Map />} />
                <Route path="/navigation" element={<Navigation />} />
              </AllRoutes>

              <Footer />
           </BrowserRouter>
    );
};

export default Routes;
