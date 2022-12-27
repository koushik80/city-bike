import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import SubNav from '../components/common/SubNav';


describe("Home SubNav", () => {

    it("should render correctly", () => {
        const wrapper = renderer.create(<BrowserRouter><SubNav /></BrowserRouter> );

        expect(wrapper).toMatchSnapshot();
    });
});