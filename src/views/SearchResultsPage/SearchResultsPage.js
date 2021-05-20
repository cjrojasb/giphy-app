import React, { useRef, useEffect, useCallback } from 'react'
import { useGifs } from 'hooks/useGifs'
// Components
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Loading from 'components/Loading/Loading'
import Title from 'components/Title/Title'
import { Button } from '@material-ui/core'
import useNearScreen from 'hooks/useNearScreen'
import debounce from 'just-debounce-it'

export default function SearchResultsPage({ params }) {
  const { keyword } = params
  const { loader, gifs, setPage } = useGifs({ keyword })
  const externalRef = useRef()
  const { isNearScreen } = useNearScreen({ externalRef: loader ? null : externalRef, once: false })
  // const handleNextPage = () => setPage(prevPage => prevPage + 1)

  const debounceHandleNextPage = useCallback(debounce(
    () => setPage(prevPage => prevPage + 1), 500
  ), [])

  useEffect(() => {
    if (isNearScreen) debounceHandleNextPage()
  }, [debounceHandleNextPage, isNearScreen])

  return (
    loader ? (
      <Loading />
    ) : (
      <>
        <Title label={`Resultados para: ${decodeURI(keyword)}`} variant={'h5'} />
        <ListOfGifs gifs={gifs} />
        {/* <Button variant="contained" color="primary" onClick={handleNextPage}>
          Siguiente Página
        </Button> */}
        <div id="visor" ref={externalRef}></div>
      </>
    )
  )
}