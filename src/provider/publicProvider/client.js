import axios from 'axios'

const client = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}/v1/gifs`,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export const response = (options) => {
  return new Promise(async (resolve, reject) => {
    try {
      const { data } = await client(options).catch((e) => reject())
      data.meta.status === 200 ? resolve(data.data) : reject()
    } catch {
      reject()
    }
  })
}

export default client
