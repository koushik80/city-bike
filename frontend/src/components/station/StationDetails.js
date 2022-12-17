import { Card, CardHeader, Container, Grid } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetStationDetailsQuery } from '../../features/station/stationApi';
import { calculateCoveredDistance } from '../../utils/utils';
import './StationDetails.scss';

const StationDetails = () => {

    const { id } = useParams();
    const { data } = useGetStationDetailsQuery(id);

    const getAverageDistanceOfAStarting = data && calculateCoveredDistance(data?.station?.allJourneyStartFromTheStation);
    const getAverageDistanceOfAEnding = data && calculateCoveredDistance(data?.station?.allJourneyEndFromTheStation);

    const { address, name, totalNumberOfJourneyEndFromTheStation, totalNumberOfJourneyStartFromTheStation } = data ? data?.station : {};

    return (
        <Container>
            <Card className="station-details-page">
                <CardHeader title="Station details" />
                <Grid container spacing={3}>
                    <Grid item sx={12} md={6} lg={6}>
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
                    <Grid item sx={12} md={6} lg={6}>
                        <ul className="station-details-page--info-2">
                            <li>{name}</li>
                            <li>{address}</li>
                            <li>{totalNumberOfJourneyStartFromTheStation}</li>
                            <li>{totalNumberOfJourneyEndFromTheStation}</li>
                            <li>{getAverageDistanceOfAStarting} Km</li>
                            <li>{getAverageDistanceOfAEnding} Km</li>
                            <li>Top 5 most popular return stations:</li>
                            <li>Top 5 most popular departure stations:</li>
                        </ul>
                    </Grid>
                </Grid>
            </Card>
        </Container>
    );
};

export default StationDetails;