import { Grid, Skeleton } from '@mui/material'
import React from 'react'

const StationDetailsLoading = () => {
  return (
    <Grid container spacing={4}>
      <Grid item xs={8} md={6} lg={6}>
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
      </Grid>
      <Grid item xs={4} md={6} lg={6}>
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '1.5rem', mt: '.5rem' }} />
      </Grid>
    </Grid>
  )
}

export default StationDetailsLoading