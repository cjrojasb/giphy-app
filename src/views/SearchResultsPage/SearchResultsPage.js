import React, { useRef, useEffect, useCallback } from 'react'
import { useGifs } from 'hooks/useGifs'
// Components
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import Loading from 'components/Loading/Loading'
import Title from 'components/Title/Title'
import useNearScreen from 'hooks/useNearScreen'
import useSEO from 'hooks/useSEO'
import debounce from 'just-debounce-it'
import { Helmet } from 'react-helmet'
import SearchForm from 'components/SearchForm/SearchForm'

export default function SearchResultsPage({ params }) {
  const { keyword, rating = 'g' } = params
  const { loader, gifs, setPage } = useGifs({ keyword, rating })
  const externalRef = useRef()
  // const title = gifs ? `${gifs.length} resultados de ${keyword}` : ''
  // useSEO({ title })
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
        <Helmet>
          <title>{gifs.length.toString()} resultados para {keyword}</title>
        </Helmet>
        <Title label={`Resultados para: ${decodeURI(keyword)}`} variant={'h5'} />
        <SearchForm initialKeyword={keyword} initialRating={rating} />
        <hr />
        <ListOfGifs gifs={gifs} />
        {/* <Button variant="contained" color="primary" onClick={handleNextPage}>
          Siguiente Página
        </Button> */}
        <div id="visor" ref={externalRef}></div>
      </>
    )
  )
}