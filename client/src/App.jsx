/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Badge, Grid, GridItem, Spacer } from "@chakra-ui/react"
import './App.css'
import Header from './components/layouts/Header'
import Home from './components/layouts/Home'
import Enquiry from './components/layouts/links/Enquiry'
import Items from './components/layouts/links/Items'
import Quotes from './components/layouts/links/Quote'
import Footer from './components/layouts/Footer'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <Router>
      <main id='app-root'>
        <header id='app-header'>
          <Header />
        </header>
        <section id='app-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/quotes' element={<Quotes />} />
            <Route path='/enquiry' element={<Enquiry />} />
            <Route path='/items' element={<Items />} /> 
          </Routes>
        </section> 
        <footer id='app-footer' style={{ borderTop: '1px solid rgba(0, 0, 0, 0.3)' }}>

          <Grid templateColumns='repeat(5, 1fr)' align="" gap={1}>
            <GridItem colSpan={2}>
              <Badge>Total Amount: R...</Badge>
            </GridItem>
            <Spacer />
            <GridItem cursor={'pointer'} colStart={5} colEnd={6}>
              <Footer />
            </GridItem>
          </Grid>
        </footer>
      </main>
    </Router>
  )
}



export default App
