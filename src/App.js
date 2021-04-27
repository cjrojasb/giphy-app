import React from 'react'
import './App.css'
import Gifs from './components/Gifs'
import ShowGif from './components/ShowGif'
import { Route, Router } from 'wouter'

function App() {
  return (
    <Router>
      <Route path="/gifs" component={Gifs} />
      <Route path="/gifs/:id" component={ShowGif} />
    </Router>
  )
}

export default App
