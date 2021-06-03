import React from "react";
import { Link, Redirect } from "wouter";
import useSingleGif from 'hooks/useSingleGif'
import { Grid } from "@material-ui/core";
import Loading from 'components/Loading/Loading'
import Gif from 'components/Gif/Gif'

export default function DetailGifPage({ params }) {
  const { gif, isLoading, isError } = useSingleGif({ id: params.id });

  if (isLoading) return <Loading />
  if (isError) return <Redirect to="404" />
  if (!gif) return <Loading />

  return <>
    <h1>{gif.title}</h1>
    <Grid container justify="center">
      <Grid item xs={12} md={8}>
        <Gif
          id={gif.id}
          title={gif.title}
          url={gif.images.fixed_height.url}
          extraInfo={gif}
        />
      </Grid>
    </Grid>
    <br />
    <Link to="/">Volver</Link>
  </>
}
