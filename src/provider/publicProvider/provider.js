import { response } from './client'
const apiKey = process.env.REACT_APP_API_KEY;

export const getTrendingGiphys = () => {
  const options = {
    url: `/trending?api_key=${apiKey}&limit=25&rating=g`,
  }
  return response(options)
}

export const getGiphysByKeyword = ({ limit = 10, keyword, rating = 'g', page = 0 }) => {
  const options = {
    url: `/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=${rating}&lang=en`,
  }
  return response(options)
}

export const getGiphy = (id) => {
  const options = {
    url: `/${id}?api_key=${apiKey}`,
  }
  return response(options)
}
