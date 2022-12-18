import { Card, CardHeader, Container, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetStationDetailsQuery } from '../../features/station/stationApi';
import { calculateCoveredDistance, getMostPopularReturnStation, getMostPopularStartingStation } from '../../utils/utils';
import StationDetailsLoading from '../loader/StationDetailsLoading';
import GoogleMap from './GoogleMap';
import './StationDetails.scss';

const StationDetails = () => {

    const { id } = useParams();
    const { data, isLoading, isError, error } = useGetStationDetailsQuery(id);

    const getAverageDistanceOfAStarting = data && calculateCoveredDistance(data?.station?.allJourneyStartFromTheStation);
    const getAverageDistanceOfAEnding = data && calculateCoveredDistance(data?.station?.allJourneyEndFromTheStation);

    const { adress, name, totalNumberOfJourneyEndFromTheStation, totalNumberOfJourneyStartFromTheStation } = data ? data?.station : {};

    //allJourneyEndFromTheStation
    const getMostPopularReturnStationName = getMostPopularReturnStation(data?.station?.allJourneyStartFromTheStation);
    const getMostPopularStartingStationName = getMostPopularStartingStation(data?.station?.allJourneyEndFromTheStation);

    let content;

    if (isLoading) content = <StationDetailsLoading />;

    if (!isLoading && isError) content = <div>{error?.message}</div>;

    if (!isLoading && !isError && data?.station) {
        content = (
            <Grid container spacing={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <ul className="station-details-page--info">
                        <li>Station name:</li>
                        <li>Station address:</li>
                        <li>Total number of journeys starting from the station:</li>
                        <li>Total number of journeys ending at the station:</li>
                        <li>The average distance of a journey starting from the station:</li>
                        <li>The average distance of a journey ending at the station:</li>
                        <li>Top 5 most popular return stations:</li>
                        <li>Top 5 most popular departure stations:</li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <ul className="station-details-page--info-2">
                        <li>{name}</li>
                        <li>{adress}</li>
                        <li>{totalNumberOfJourneyStartFromTheStation}</li>
                        <li>{totalNumberOfJourneyEndFromTheStation}</li>
                        <li>{getAverageDistanceOfAStarting} Km</li>
                        <li>{getAverageDistanceOfAEnding} Km</li>
                        <li>
                            <ul className='station-details-page--info-2--top-station-name'>
                                {
                                    getMostPopularReturnStationName?.map((s, i) => (
                                        <li key={s?.return_station_name}>{s?.return_station_name}</li>
                                    ))
                                }
                            </ul>
                        </li>
                        <li>
                            <ul className='station-details-page--info-2--top-station-name'>
                                {
                                    getMostPopularStartingStationName?.map((s, i) => (
                                        <li k={s?.departure_station_name}>{s?.departure_station_name}</li>
                                    ))
                                }
                            </ul>
                        </li>
                    </ul>
                </Grid>
                <Grid item xs={12} md={12} lg={12}>
                {/* <iframe
                        className="gmap_iframe" frameborder="0" title={name} marginheight="0" marginwidth="0"
                        src={mapURL}></iframe> */}
                    <GoogleMap location={adress} />
                </Grid>
            </Grid>
        )
    }

    return (
        <Container>
            <Card className="station-details-page">
                <CardHeader title="Station details" />
                {content}
            </Card>
        </Container>
    );
};

export default StationDetails;