import { createContext } from 'react'

const StaticContext = createContext({
  name: 'myStaticContext',
  suscribe: true
})

export default StaticContext