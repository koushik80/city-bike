import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetStationDetailsQuery } from '../../features/station/stationApi';
import './StationDetails.scss';

const StationDetails = () => {

    const { id } = useParams();
    const { data } = useGetStationDetailsQuery(id);
    console.log(data);

    return (
        <Container>
            <div className="station-details-page">
                <h1>id: {id}</h1>
            </div>
        </Container>
    );
};

export default StationDetails;