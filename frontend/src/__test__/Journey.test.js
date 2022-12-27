import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../app/store';
import Journey from '../pages/Journey';

describe("render journey component", () => {

    it("should match journey component snapshot", () => {
        const wrapper = renderer.create(<Provider store={store}><Journey /></Provider>);

        expect(wrapper).toMatchSnapshot();
    })
});