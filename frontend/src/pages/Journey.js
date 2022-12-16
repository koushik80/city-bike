import { Box, Card, Container, Pagination, Stack, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import React, { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { journeyPagination, journeySearch } from '../features/filter/filterSlice';
import { useGetJourneyQuery } from '../features/journey/journeyApi';
import { meterToKm, secondsToHours } from '../utils/utils';
import './Journey.scss';

const Journey = () => {

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
    dispatch(journeySearch(text))
  };

  const handleSearch = debounceHandler(doSearch, 500);

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
    dispatch(journeyPagination(value));
  };

  const query = useSelector(state => state.filter);

  let queryStr = `?page=${query?.journeyPage}`;

  if (query?.journeySearch !== undefined) {
    queryStr = `?keyword=${query?.journeySearch}&page=${query?.journeyPage}`;
  } else if (query?.journeySearch && query?.journeyPage) {
    queryStr = `?keyword=${query?.journeySearch}&page=${query?.journeyPage}`;
  } else {
    queryStr = `?page=${query?.journeyPage}`;
  }

  const { data, isLoading } = useGetJourneyQuery(queryStr);

  const columns = [
    {
      field: "_id", headerName: "ID", winWidth: 100, flex: 0.2,
      renderCell: (params) => {
        return (
          <Fragment>
            <Typography>
               {(params?.row?._id).slice(15)}
            </Typography>
          </Fragment>
        )
      }
      },
    {
      field: "departure_station_name", headerName: "Departure Name", winWidth: 120, flex: 0.3
    },
    {
      field: "return_station_name", headerName: "Return Name", winWidth: 120, flex: 0.3
    },
    {
      field: "covered_distance", headerName: "Distance (Km)", winWidth: 120, flex: 0.2,
      renderCell: (params) => {
        return (
          <Fragment>
            <Typography>
               {meterToKm(params?.row?.covered_distance).toFixed(1)} Km
            </Typography>
          </Fragment>
        )
      }
    },
    {
      field: "duration", headerName: "Duration (s)", winWidth: 100, flex: 0.2,
      renderCell: (params) => {
        return (
          <Fragment>
            <Typography>
               {secondsToHours(params?.row?.duration)}
            </Typography>
          </Fragment>
        )
      }
    },
    {
      field: "departure", headerName: "Departure Time", winWidth: 100, flex: 0.2,
      renderCell: (params) => {
        return (
          <Fragment>
            <Typography>
               {(new Date(params?.row?.return)).toLocaleDateString()}
            </Typography>
          </Fragment>
        )
      }
    },
    {
      field: "return", headerName: "Return Time", winWidth: 100, flex: 0.2,
      renderCell: (params) => {
        return (
          <Fragment>
            <Typography>
               {(new Date(params?.row?.return)).toLocaleDateString()}
            </Typography>
          </Fragment>
        )
      }
    },
  ]

  return (
    <Container>
      <div className='journey-page--search-section'>
          <form action="" onSubmit={(e) => e.preventDefault()}>
             <div className='journey-page--search-section--div'>
                <input
                    type="search" placeholder='search by departure station name'
                    onChange={({ target }) => handleSearch(target.value)}
                    onBlur={({ target }) => handleSearch(target.value)}
                />
                <button type="submit"><i className="fa-solid fa-magnifying-glass"></i></button>
             </div>
          </form>
        </div>
      <Stack direction="row" alignItems="center" justifyContent="center" mb={1}>
        <Typography variant="h5" gutterBottom>
            Journey list view
        </Typography>
      </Stack>
      <Card>
        <Box
          sx={{
            minHeight: 400,
            width: 1
          }}
        >
          <DataGrid
              loading={!data?.journey?.length || isLoading}
              getRowId={(row) => row?._id}
              columns={columns}
              pageSize={100}
              autoHeight
              rows={data?.journey || []}
          />
        </Box>
      </Card>
      <div className="station-page--pagination">
        {
          data?.journey?.length === 100 ? <Pagination count={Math.round(data?.totalJourney / 100) || 0} variant="outlined" color="primary" page={page} onChange={handleChange} /> : ""
        }
      </div>
    </Container>
  );
};

export default Journey;