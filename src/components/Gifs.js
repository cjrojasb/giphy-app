import React, { useState, useEffect } from 'react'
import { getTrendingGiphys, getGiphysByKeyword } from '../provider/publicProvider/provider'
import Gif from './Gif'
import SearchGif from './SearchGif'
import { Grid, CircularProgress, Container, Typography, Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  boxCenterItems: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  },
  mt2r: {
    marginTop: '2rem'
  }
});

export default function Gifs() {
  const classes = useStyles()
  const [keyword, setKeyword] = useState('')
  const [gifts, setGifts] = useState([])
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    getGiphysByKeyword(keyword)
    .then((res) => {
      setGifts(res)
      console.log(res)
    })
    .finally(() => {
      setLoader(false)
    })
  }, [keyword])

  useEffect(() => {
    setLoader(true)
    getTrendingGiphys()
    .then((res) => {
      setGifts(res)
      console.log(res)
    })
    .finally(() => {
      setLoader(false)
    })
  }, [])

  return (
    <Box className={'app-content'}>
      <Container>
        <Typography variant="h1" component="h2" gutterBottom align="center">
          Giphys
        </Typography>
        <SearchGif keyword={keyword} setKeyword={setKeyword} />
        {loader ? (
          <Box className={classes.boxCenterItems}>
            <CircularProgress />
          </Box>
        ) : (
          <Grid container spacing={2} className={classes.mt2r}>
            {gifts.map(({ id, title, images }) => (
              <Grid item xs={12} md={3}>
                <Gif
                  key={id}
                  id={id}
                  title={title}
                  url={images.fixed_height.url}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  )
}