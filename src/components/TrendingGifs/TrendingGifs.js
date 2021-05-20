import { useState, useEffect } from 'react'
import { getTrendingGiphys } from "provider/publicProvider/provider";
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'

export default function TrendingGifs() {
  const [trends, setTrends] = useState([])

  const getTrends = () => {
    getTrendingGiphys()
    .then((res) => {
      setTrends(res)
      console.log(res);
    })
  }

  useEffect(() => {
    getTrends()
  }, [])

  return (
    <ListOfGifs gifs={trends}  />
  )
}