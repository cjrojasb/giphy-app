import React, { useState } from 'react'
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

export function SearchForm({ onSubmit }) {
  const [keyword, setKeyword] = useState('')
  const classes = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ keyword })
  }

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        id="search"
        label="Buscar"
        variant="outlined"
        onChange={(event) => setKeyword(event.target.value)}
        className={classes.customField}
        fullWidth
      />
    </form>
  )
}

export default React.memo(SearchForm)