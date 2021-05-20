import React from 'react'
import { CircularProgress, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  boxCenterItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
});

export default function Loading() {
  const classes = useStyles()

  return (
    <Box className={classes.boxCenterItems}>
      <CircularProgress />
    </Box>
  )
}