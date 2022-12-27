import { Provider } from "react-redux";
import { store } from "../app/store";
import Station from "../components/station/Station";
import React from 'react';
import renderer from 'react-test-renderer';

describe("Station Test Suite", () => {

    it("should render Station component", () => {
        const wrapper = renderer.create(<Provider store={store}><Station /></Provider>).toJSON();
        expect(wrapper).toMatchSnapshot();
    });
});