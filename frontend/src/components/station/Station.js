import { Container, Grid } from '@mui/material';
import React from 'react';
import { useGetStationsQuery } from '../../features/station/stationApi';
import CardLoading from '../loader/CardLoading';
import StationCard from './StationCard';
import './Station.scss';

const Station = () => {

   // const [page, setPage] = React.useState(1);
    // const handleChange = (event, value) => {
    //   setPage(value);
    // };

  const { data, isLoading, isError, error } = useGetStationsQuery();

  // thinking what can be displayed

  let content;

  if (isLoading) {
    content = [...new Array(30)].map((item, i) => (
      <CardLoading key={i} />
    ))
  };

  if (!isLoading && isError) content = <div>{error?.message}</div>

  if (!isLoading && !isError && data?.stations?.length === 0) content = <div>data not found...</div>

  if (!isLoading && !isError && data?.stations?.length !== 0) {
    content = data?.stations?.map((station, i) => (
      <StationCard key={station?._id} item={station} />
        ))
    }

  return (
     <Container>
        <div className='station-page'>
            <div className='station-page--search-section'>
                <form action="">
                    <div className='station-page--search-section--div'>
                      <input type="text" placeholder='search by station name' />
                      <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </form>
            </div>
            <Grid container spacing={2}>
              {content}
            </Grid>
             {/* <Pagination count={10} variant="outlined" color="primary"  page={page} onChange={handleChange} /> */}
        </div>
     </Container>
  );
};

export default Station;
