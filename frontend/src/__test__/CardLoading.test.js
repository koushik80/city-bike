import React from 'react';
import renderer from 'react-test-renderer';
import CardLoading from '../components/loader/CardLoading';


describe("Card Loading", () => {

    it("should render correctly", () => {
        const wrapper = renderer.create(<CardLoading />);

        expect(wrapper).toMatchSnapshot();
    })
});