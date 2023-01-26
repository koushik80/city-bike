import { Container, Grid, Pagination, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';  // for further use useEffect, useRef
import { useDispatch, useSelector } from 'react-redux';
import { pagination, search } from '../../features/filter/filterSlice';
import { useGetStationsQuery } from '../../features/station/stationApi';
import CardLoading from '../loader/CardLoading';
import './Station.scss';
import StationCard from './StationCard';
//import Input from '../input/Input';

const Station = () => {

    const dispatch = useDispatch();
    const debounceHandler = (fn, delay) => {
        let timeoutId;
        return (arg) => {
            if (timeoutId) {
                clearTimeout(timeoutId)
            }
            timeoutId = setTimeout(() => {
                fn(arg)
            }, delay);
        }
    };

    const doSearch = (text) => {
        dispatch(search(text))
    };

    // SEARCH FUNCTION
    const handleSearch = debounceHandler(doSearch, 500);
/*
    // Functionality for search option always focused after page reloading
    const inputRef = useRef(null);
    useEffect(() => {
        inputRef.current.focus();
    }, []);
*/
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        dispatch(pagination(value));
    };

    const query = useSelector(state => state.filter);

    let queryStr = `?page=${query?.page}`;

    if (query?.search !== undefined) {
        queryStr = `?keyword=${query?.search}&page=${query?.page}`;
    } else if (query?.search && query?.search) {
        queryStr = `?keyword=${query?.search}&page=${query?.page}`;
    } else {
        queryStr = `?page=${query?.page}`;
    }


    const { data, isLoading, isError, error } = useGetStationsQuery(queryStr);

    // thinking what can be displayed
    let content;

    if(isLoading) {
        content = [...new Array(40)].map((item, i) => (
            <CardLoading key={i} />
        ))
    }

    if(!isLoading && isError) content = <div>{error?.message}</div>

    if(!isLoading && !isError && data?.stations?.length === 0) content = <div>data not found...</div>

    if(!isLoading && !isError && data?.stations?.length !== 0) {
        content = data?.stations?.map((station, i) => (
            <StationCard key={station?._id} item={station} />
        ))
    }

    return (
        <Container>
            <div className='station-page'>
                <div className='station-page--search-section'>
                    <form action="" onSubmit={(e) => e.preventDefault()}>
                        <div className='station-page--search-section--div'>
                            <input
                                //ref={inputRef}
                                type="search" placeholder='search by station name'
                                onChange={({ target }) => handleSearch(target.value)}
                                onBlur={({ target }) => handleSearch(target.value)}
                            />
                            <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
                        </div>
                    </form>
                </div>
                <Stack direction="row" alignItems="center" justifyContent="center" mb={1}>
                   <Typography variant="h5" fontWeight="bold" color="#C73866" gutterBottom>
                       Stations
                   </Typography>
                </Stack>
                <Grid container spacing={2}>
                    {content}
                </Grid>
                <div className="station-page--pagination">
                    {
                       data?.stations?.length === 100 ? <Pagination count={Math.round(data?.totalStations / 100) || 0} variant="outlined" color="primary" page={page} onChange={handleChange} /> : ""
                    }
                </div>
            </div>
        </Container>
    );
};

export default Station;
