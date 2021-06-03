import React from 'react'
import { Typography, Card, CardContent, CardActionArea, CardMedia, makeStyles } from '@material-ui/core'
import { Link } from 'wouter'

const useStyles = makeStyles({
  media: {
    height: 350,
  },
});

export function Gif({ title, id, url, ...restOfGif }) {
  const classes = useStyles();

  console.log(restOfGif)

  return (
    <Card>
      <CardActionArea>
        <Link to={`/gifs/${id}`}>
          <CardMedia
            className={classes.media}
            image={url}
            title={title}
          />
        </Link>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {id}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default React.memo(Gif)