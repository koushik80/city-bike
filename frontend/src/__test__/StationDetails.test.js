import { shallow } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../app/store';
import StationDetails from '../components/station/StationDetails';

describe("station details page test suite", () => {

    it("should render station details", () => {
        const wrapper = renderer.create(<Provider store={store}><StationDetails /></Provider>).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it("Station details function testing", () => {
        const wrapper = shallow(<Provider store={store}><StationDetails /></Provider>);

        let getMostPopularReturnStation = wrapper.instance();

        console.log("MostPopularReturnStation", getMostPopularReturnStation)
    });
});