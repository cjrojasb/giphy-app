import React from 'react'
import './App.css'
import { Container } from '@material-ui/core'
import StaticContext from 'context/StaticContext'
import { GifsContextProvider } from 'context/GifsContext'
import { Route, Router, Link } from 'wouter'
import Logo from 'assets/images/logo.png'
// Views
import HomePage from 'views/HomePage/HomePage'
import SearchResultsPage from 'views/SearchResultsPage/SearchResultsPage'
import DetailGifPage from 'views/DetailGifPage/DetailGifPage'

function App() {
  return (
    <StaticContext.Provider value={{ name: 'myComponent', suscribe: true }}>
      <section className={'app-content'}>
        <Container>
          <div className={'box-logo'}>
            <Link to="/">
              <span></span>
              <img alt="Giphy" src={Logo} />
            </Link>
          </div>
          <GifsContextProvider>
            <Router>
              <Route path="/" component={HomePage} />
              <Route path="/search/:keyword" component={SearchResultsPage} />
              <Route path="/gifs/:id" component={DetailGifPage} />
            </Router>
          </GifsContextProvider>
        </Container>
      </section>
    </StaticContext.Provider>
  )
}

export default App
