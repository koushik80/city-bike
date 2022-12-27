import { shallow } from 'enzyme';
import React from 'react';
import Contact from '../pages/Contact';

describe("Contact", () => {

    it("should render correctly", () => {
        const wrapper = shallow(<Contact />);

        expect(wrapper).toMatchSnapshot();
    })
});