import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Home from './pages/Home'
import About from './pages/About'
import Hero from './pages/Hero'

const App = () => {
  return <>

    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Hero />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/about' element={<About />} /> */}
        </Route>

        <Route path='*' element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  </>
}

export default App

