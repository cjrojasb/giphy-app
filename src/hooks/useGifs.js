import { useState, useEffect, useContext } from 'react'
import { getGiphysByKeyword } from 'provider/publicProvider/provider'
import GifsContext from 'context/GifsContext'

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {
  const context = useContext(GifsContext)
  const { gifs, setGifs } = context
  const [loader, setLoader] = useState(false)
  const [loaderNextPage, setLoaderNextPage] = useState(false)
  const [page, setPage] = useState(INITIAL_PAGE)
  const keywordToUse = keyword || localStorage.getItem('lastKeyword') || 'random'

  useEffect(() => {
    setLoader(true)
    getGiphysByKeyword({ keyword: keywordToUse })
    .then((res) => {
      console.log(res)
      setGifs(res)
      localStorage.setItem('lastKeyword', keywordToUse)
    })
    .finally(() => {
      setLoader(false)
    })
  }, [keyword, keywordToUse, setGifs])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    setLoaderNextPage(true)
    getGiphysByKeyword({ keyword:  keywordToUse, page })
    .then((res) => {
      setGifs(prevGifs => prevGifs.concat(res))
      setLoaderNextPage(false)
    })
    .finally(() => {
      setLoader(false)
    })
  }, [keywordToUse, page, setGifs])

  return {loader, loaderNextPage, gifs, setPage}
}