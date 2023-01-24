import './App.css'
import React from 'react'
import { Blog, Features, Footer, Header, Possibility, WhatGPT3 } from './containers'
import { CTA, Brand, NavBar } from './components'

const App: React.FC = () => {
  return (
    <div className='App'>
      <div className='gradient__bg'>
        <NavBar />
        <Header />
      </div>

      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App
