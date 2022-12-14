import { Container } from '@mui/material';
import React from 'react';
import { useParams } from 'react-router-dom';
import './StationDetails.scss';

const StationDetails = () => {

    const {id} = useParams();

    return (
        <Container>
            <div className="station-details-page">
                <h1>id: {id}</h1>
            </div>
        </Container>
    );
};

export default StationDetails;