/* eslint-disable no-unused-vars */
import { useState } from 'react'
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './components/layouts/Header'
import Home from './components/layouts/Home'
import Enquiry from './components/layouts/links/Enquiry'
import Items from './components/layouts/links/Items'
import Quotes from './components/layouts/links/Quote'
import Footer from './components/layouts/Footer'
// import './assets/js/main.js'

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
        <footer id='app-footer'>
          <Footer />
        </footer>
      </main>
    </Router>
  )
}



export default App
