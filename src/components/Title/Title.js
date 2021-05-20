import React from 'react'
import { Typography } from '@material-ui/core';

export default function Title({ label, variant }) {
  return (
    <Typography variant={variant} gutterBottom>
      {label}
    </Typography>
  )
}