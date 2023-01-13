import { Container, Grid } from '@mui/material';
import React from 'react';
import image2 from './../image/book.png';
import image3 from './../image/bus.png';
import cycleImg from './../image/cycling.png';
import icon1 from './../image/fi.png';
import icon3 from './../image/help.png';
import image4 from './../image/info.png';
import image1 from './../image/map.png';
import icon2 from './../image/people.png';
import trackImg from './../image/track.png';
import './Travelling.scss';


const data = [
    {
        id: 1,
        icon: icon1,
        title: 'Visitors',
    },
    {
        id: 2,
        icon: icon2,
        title: 'Accessibility',
    },
    {
        id: 3,
        icon: icon3,
        title: 'Companies and organizations',
    },
];

const tipsData = [
    {
        id: 1,
        img: image1,
        title: 'Planning your journey',
        list: [
            {
                id: 1,
                text: 'Find a route or a timetable'
            },
            {
                id: 2,
                text: 'Printable maps and timetables'
            },
            {
                id: 3,
                text: 'Zones'
            },
            {
                id: 4,
                text: 'Ticket prices'
            },
        ]
    },
    {
        id: 2,
        img: image2,
        title: 'Buying a ticket',
        list: [
            {
                id: 1,
                text: 'Tickets on the Ci†yßîke app'
            },
            {
                id: 2,
                text: 'Tickets on the Ci†yßîke card'
            },
            {
                id: 3,
                text: 'Sales and service points'
            }
        ]
    },
    {
        id: 3,
        img: image3,
        title: 'Travelling',
        list: [
            {
                id: 1,
                text: 'At stop or station'
            },
            {
                id: 2,
                text: 'On board'
            },
            {
                id: 3,
                text: 'Ticket validity and interchanging'
            },
            {
                id: 4,
                text: 'Accessibility'
            },
            {
                id: 5,
                text: 'Car rental and car sharing'
            },
        ]
    },
    {
        id: 4,
        img: image4,
        title: 'Good to know',
        list: [
            {
                id: 1,
                text: 'Service updates and disruptions'
            },
            {
                id: 2,
                text: 'Penalty fare'
            },
            {
                id: 3,
                text: 'Safety and security'
            },
            {
                id: 4,
                text: 'Lost property'
            },
        ]
    },
]

const Travelling = () => {
    return (
        <section className='travelling-page'>
            <h1 className="travelling-page--title">
                Travelling
            </h1>

            <div className="travelling-page--information">
                <h1>Information for different types of customers</h1>
                <Container>
                    <Grid container spacing={3} rowSpacing={3}>
                        {
                            data?.map((item) => (
                                <Grid item xs={12} md={4} lg={4} key={item?.id}>
                                    <div className="travelling-page--information--info-card">
                                        <img src={item?.icon} alt="" />
                                        <h2>{item?.title}</h2>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </Container>
            </div>

            <Container>
                <div className="travelling-page--tips">
                    <h1 className="travelling-page--heading">Tips for travel</h1>

                    <Grid container rowSpacing={3}>
                        {
                            tipsData?.map((item) => (
                                <Grid xs={12} md={6} lg={6} item key={item?.id}>
                                    <div className="travelling-page--tips-item">
                                        <div>
                                            <img src={item?.img} alt="" />
                                            <h1>{item?.title}</h1>
                                        </div>
                                        <div className="travelling-page--tips-item--list">
                                            <ul>
                                                {
                                                    item?.list?.map((i) => (
                                                        <li key={i?.id}>{i?.text}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                </Grid>
                            ))
                        }
                    </Grid>
                </div>
            </Container>

            <Grid container rowSpacing={3} alignItems={'center'} sx={{ backgroundColor: '#F2F5F7', mt: 3 }}>
                <Grid item xs={12} md={6} lg={6}>
                    <div className='travelling-page--readmore'>
                        <img src={cycleImg} alt="" />
                        <h3>Cycling</h3>
                        <p className="text">
                            Cycling and public transport go well together. You can leave your bike at a Park & Ride or take it with you on a commuter train, the metro or on the ferry.
                        </p>
                        <button><a href="https://www.hsl.fi/en/travelling/cycling" target="_blank" rel="noopener noreferrer">Read more</a></button>
                    </div>
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                    <div className='travelling-page--readmore'>
                        <img src={trackImg} alt="" />
                        <h3>Park your car</h3>
                        <p>
                            Leave your car at a Park & Ride, continue by public transport and use the travel time to deal with urgent matters or to relax with a good book.
                        </p>
                        <button><a href="https://www.hsl.fi/en/travelling/park--ride?display=map&type=all-facilities" target="_blank" rel="noopener noreferrer">Read more</a></button>
                    </div>
                </Grid>
            </Grid>
        </section>
    );
};

export default Travelling;