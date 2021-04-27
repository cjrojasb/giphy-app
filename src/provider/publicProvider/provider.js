import { response } from './client'
const apiKey = process.env.REACT_APP_API_KEY;

export const getTrendingGiphys = () => {
  const options = {
    url: `/trending?api_key=${apiKey}&limit=25&rating=g`,
  }
  return response(options)
}

export const getGiphysByKeyword = (keyword) => {
  const options = {
    url: `/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`,
  }
  return response(options)
}

export const getGiphy = (id) => {
  const options = {
    url: `/${id}?api_key=${apiKey}`,
  }
  return response(options)
} 
