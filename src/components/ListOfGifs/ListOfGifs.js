import React from 'react'
import Gif from '../Gif/Gif'
import { Grid } from '@material-ui/core';

export default function ListOfGifs({ gifs }) {
  return (
    <Grid container spacing={2}>
      {gifs.map(({ id, title, images, ...restOfGif }) => (
        <Grid item xs={12} md={3} key={id}>
          <Gif
            key={id}
            id={id}
            title={title}
            url={images.fixed_height.url}
            extraInfo={restOfGif}
          />
        </Grid>
      ))}
    </Grid>
  )
}