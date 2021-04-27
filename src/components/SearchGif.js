import React from 'react'
import { TextField, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  customField: {
    '& .MuiInputBase-input': {
      padding: '14px',
      display: 'flex',
      alignItems: 'center'
    },
  },
});

export default function Gif({ keyword, setKeyword }) {
  const classes = useStyles();

  return (
    <TextField
      id="search"
      label="Buscar"
      variant="outlined"
      onChange={(event) => setKeyword(event.target.value)}
      className={classes.customField}
      fullWidth
    />
  )
}