import { Card, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './StationCard.scss';

const StationCard = ({ item }) => {

    return (
        <Grid item xs={8} md={6} lg={3}>
            <Link to={`/station/${item?._id}`}>
                <Card className="station-card">
                    <Typography gutterBottom variant="body2" component="div">
                        <b>ID:</b> {item?.id}
                    </Typography>
                    <Typography gutterBottom variant="body1" component="div">
                        <b>Name:</b> {item?.name}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        <b>Operaattor:</b> {item?.operaattor}
                    </Typography>
                </Card>
            </Link>
        </Grid>
    );
};

export default StationCard;