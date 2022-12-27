import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../components/common/Header';


describe("Home Header", () => {

    it("should render correctly", () => {
        const wrapper = renderer.create(<Header />);

        expect(wrapper).toMatchSnapshot();
    })
});