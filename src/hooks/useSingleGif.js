import { useState, useEffect } from 'react';
import { useGifs } from './useGifs';
import { getGiphy } from '../provider/publicProvider/provider';

export default function useSingleGif({ id }) {
  const { gifs } = useGifs()
  const gitFromCache = gifs.find(singleGif => singleGif.id === id)
  const [gif, setGif] = useState(gitFromCache)
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    if (!gif) {
      setIsLoading(true)
      getGiphy(id)
        .then((res) => {
          console.log(res)
          setGif(res)
          setIsLoading(false)
          setIsError(false)
        }).catch(err => {
          console.log(err)
          setIsLoading(false)
          setIsError(true)
        })
    }
  }, [gif, id])

  return { gif, isLoading, isError }
}