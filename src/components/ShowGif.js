import React, { useEffect, useState } from 'react'
import { getGiphy } from '../provider/publicProvider/provider'
import { Link } from 'wouter'
import { Typography, Card, CardContent, CardActionArea, CardMedia, makeStyles, Container, CardActions, Button } from '@material-ui/core'

const useStyles = makeStyles({
  customCard: {
    margin: '0 auto',
    width: '50%',
    height: '600px',
  },
  media: {
    width: '100%',
    height: '400px',
  },
})

export default function ShowGif({ params}) {
  const { id } = params;
  const classes = useStyles()
  const [gif, setGif] = useState({ id: '', type: '', url: '', title: '' })
  const [loader, setLoader] = useState(false)

  useEffect(() => {
    setLoader(true)
    getGiphy(id)
    .then((res) => {
      const { id, type, images, title } = res
      setGif({
        id: id,
        type: type,
        url: images.original.url,
        title: title
      })
      console.log(res)
    })
    .finally(() => {
      setLoader(false)
    })
  }, [id])

  return (
    <Container>
      <Card className={classes.customCard}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={gif.url}
            title={gif.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {gif.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {gif.type}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to="/gifs">
            Volver
          </Link>
        </CardActions>
      </Card>
    </Container>
  )
}