import React, { useState, useCallback } from 'react'
import { useLocation } from 'wouter'
import SearchForm from 'components/SearchForm/SearchForm'
import Loading from 'components/Loading/Loading'
import ListOfGifs from 'components/ListOfGifs/ListOfGifs'
import LazyTrending from 'components/TrendingGifs/LazyTrending'
import Title from 'components/Title/Title'
import { useGifs } from 'hooks/useGifs'
import { Box } from '@material-ui/core'

export default function HomePage() {
  const { loader, gifs } = useGifs()
  const [path, pushLocation] = useLocation()

  const handleSubmit = useCallback(({ keyword }) => {
    console.log(keyword)
    pushLocation(`/search/${keyword}`)
  }, [pushLocation])

  return (
    <>
      <Title label={'Buscar Gifs'} variant={'h5'}/>
      <SearchForm onSubmit={handleSubmit} />
      <hr />
      <Title label={'Última Busqueda'} variant={'h5'}/>
      {loader ? (
        <Loading />
      ) : (
        <Box style={{ minHeight: '100vh' }}>
          <ListOfGifs gifs={gifs} />
        </Box>
      )}
      <br></br>
      <Title label={'Tendencias'} variant={'h5'}/>
      <LazyTrending />
    </>
  )
}