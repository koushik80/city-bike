import React from 'react';
import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import { store } from '../app/store';
import StationDetails from '../components/station/StationDetails';
import * as helper from './../utils/utils';

jest.mock('./../utils/utils', () => {

    return {
        getMostPopularReturnStation: jest.fn(),
        getMostPopularStartingStation: jest.fn(),
    }
});

const allJourneyStartFromTheStation = [
    {
        _id: "6396fac6272a03aa9bf0335c",
        departure: "2021-05-31T13:04:22.000Z",
        return: "2021-05-31T13:13:57.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "731",
        return_station_name: "Leppävaarankäytävä",
        covered_distance: 1766,
        duration: 570,
        createdAt: "2022-12-12T09:56:22.576Z",
        updatedAt: "2022-12-12T09:56:22.576Z",
    },
    {
        _id: "6396fb69d26774095a0c2956",
        departure: "2021-05-31T05:52:44.000Z",
        return: "2021-05-31T05:55:40.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "749",
        return_station_name: "Vallikatu",
        covered_distance: 691,
        duration: 175,
        createdAt: "2022-12-12T09:59:06.157Z",
        updatedAt: "2022-12-12T09:59:06.157Z",
    },
    {
        _id: "6396fc0569179448d94e5f74",
        departure: "2021-05-31T09:50:42.000Z",
        return: "2021-05-31T10:04:25.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "745",
        return_station_name: "Leppävaaran urheilupuisto",
        covered_distance: 1592,
        duration: 819,
        createdAt: "2022-12-12T10:01:41.256Z",
        updatedAt: "2022-12-12T10:01:41.256Z",
    },
    {
        _id: "6396fc1632789fc1e1b22d0a",
        departure: "2021-05-31T08:40:56.000Z",
        return: "2021-05-31T08:53:02.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "731",
        return_station_name: "Leppävaarankäytävä",
        covered_distance: 2642,
        duration: 722,
        createdAt: "2022-12-12T10:01:58.804Z",
        updatedAt: "2022-12-12T10:01:58.804Z",
    },
    {
        _id: "6396fc2c1210d59d58471622",
        departure: "2021-05-31T05:52:44.000Z",
        return: "2021-05-31T05:55:40.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "749",
        return_station_name: "Vallikatu",
        covered_distance: 691,
        duration: 175,
        createdAt: "2022-12-12T10:02:20.450Z",
        updatedAt: "2022-12-12T10:02:20.450Z",
    },
    {
        _id: "639e0ac2f755bb63e9669518",
        departure: "2021-05-31T01:07:48.000Z",
        return: "2021-05-31T01:19:51.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "731",
        return_station_name: "Leppävaarankäytävä",
        covered_distance: 2127,
        duration: 718,
        createdAt: "2022-12-17T18:30:26.492Z",
        updatedAt: "2022-12-17T18:30:26.492Z",
    },
    {
        _id: "639e0b4b12c502feb979b939",
        departure: "2021-05-29T19:45:02.000Z",
        return: "2021-05-29T20:12:07.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "378",
        return_station_name: "Paloheinäntie",
        covered_distance: 8966,
        duration: 1621,
        createdAt: "2022-12-17T18:32:43.380Z",
        updatedAt: "2022-12-17T18:32:43.380Z",
    },
    {
        _id: "639e0ba81aa17c163a33b2fd",
        departure: "2021-05-29T08:02:39.000Z",
        return: "2021-05-29T08:14:51.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "731",
        return_station_name: "Leppävaarankäytävä",
        covered_distance: 2628,
        duration: 727,
        createdAt: "2022-12-17T18:34:17.658Z",
        updatedAt: "2022-12-17T18:34:17.658Z",
    },
    {
        _id: "639e0ba81aa17c163a33b55c",
        departure: "2021-05-29T07:36:29.000Z",
        return: "2021-05-29T07:43:38.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "731",
        return_station_name: "Leppävaarankäytävä",
        covered_distance: 1755,
        duration: 426,
        createdAt: "2022-12-17T18:34:17.669Z",
        updatedAt: "2022-12-17T18:34:17.669Z",
    },
    {
        _id: "639e0ba91aa17c163a33b886",
        departure: "2021-05-29T06:56:12.000Z",
        return: "2021-05-29T07:03:21.000Z",
        departure_station_id: "753",
        departure_station_name: "Linnuntie",
        return_station_id: "733",
        return_station_name: "Läkkitori",
        covered_distance: 1609,
        duration: 424,
        createdAt: "2022-12-17T18:34:17.685Z",
        updatedAt: "2022-12-17T18:34:17.685Z",
    },
]


describe("Station details page test suite", () => {

    it("should render station details", () => {
        const wrapper = renderer.create(<Provider store={store}><StationDetails /></Provider>).toJSON();

        expect(wrapper).toMatchSnapshot();
    });

    it("Station details function getMostPopularReturnStation", () => {

        helper.getMostPopularReturnStation(allJourneyStartFromTheStation)

        expect(helper.getMostPopularReturnStation).toBeCalled();
    });

    it("Station details function getMostPopularStartingStation", () => {
        helper.getMostPopularStartingStation(allJourneyStartFromTheStation)

        expect(helper.getMostPopularStartingStation).toBeCalled();
    });
});