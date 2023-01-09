import { Card, Grid, Skeleton } from '@mui/material'
import React from 'react'

const CardLoading = () => {
  return (
    <Grid item xs={8} md={6} lg={3}>
      <Card style={{ padding: '1rem' }}>
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
        <Skeleton variant="text" sx={{ fontSize: '2rem' }} />
      </Card>
    </Grid>
  )
}

export default CardLoading