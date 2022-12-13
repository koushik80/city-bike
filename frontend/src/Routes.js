import React from 'react';
import {BrowserRouter, Route, Routes as AllRoutes} from 'react-router-dom';
import Home from './pages/Home';

const Routes = () => {
    return (
        <BrowserRouter>
            <AllRoutes>
                <Route path="/" element={<Home />} />
            </AllRoutes>
        </BrowserRouter>
    );
};

export default Routes;
