import React, { useEffect, useState, useContext } from "react";
import { getGiphy } from "provider/publicProvider/provider";
import { Link } from "wouter";
import GifsContext from "context/GifsContext";
import useGlobalGifs from 'hooks/useGlobalGifs'
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  customCard: {
    margin: "0 auto",
    width: "50%",
    height: "600px",
  },
  media: {
    width: "100%",
    height: "400px",
  },
});

export default function DetailGifPage({ params }) {
  // const context = useContext(GifsContext);
  const gifs = useGlobalGifs();
  console.log(gifs);
  const { id } = params;
  console.log(params)
  const classes = useStyles();
  const [gif, setGif] = useState({ id: "", type: "", url: "", title: "" });
  const [loader, setLoader] = useState(false);

  const currentGif = gifs.find(gif => gif.id === id)

  const setCurrentGif = () => {
    setLoader(true);
    if (currentGif !== undefined) {
      console.log('currentGif', currentGif)
      const { id, type, images, title } = currentGif
      setGif({
        id: id,
        type: type,
        url: images.original.url,
        title: title,
      });
    } else {
      getGiphy(id)
      .then((res) => {
        const { id, type, images, title } = res;
        setGif({
          id: id,
          type: type,
          url: images.original.url,
          title: title,
        });
        console.log(res);
      })
    }
    setLoader(false);
  }

  useEffect(() => {
    setCurrentGif()
  }, []);

  return (
    <Container>
      <h1>Detalle</h1>
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
          <Link to="/">Volver</Link>
        </CardActions>
      </Card>
    </Container>
  );
}
