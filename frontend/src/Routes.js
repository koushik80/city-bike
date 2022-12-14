import React from 'react';
import { BrowserRouter, Route, Routes as AllRoutes } from 'react-router-dom';
import SubNav from './components/common/SubNav';
import Navbar from './components/common/Navbar';
import Journey from './components/journey/Journey';
import Station from './components/station/Station';
import StationDetails from './components/station/StationDetails';
import Home from './pages/Home';

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
              </AllRoutes>
        </BrowserRouter>
    );
};

export default Routes;
