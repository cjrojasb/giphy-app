import { useContext } from 'react'
import GifsContext from 'context/GifsContext'

export default function useGlobalGifs() {
  const context = useContext(GifsContext)
  const { gifs } = context

  return gifs
}