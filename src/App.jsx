import React from 'react'
import './App.css'
import Navbar from './Component/Navbar/Navbar'
import Header from './Containers/header/Header'
import Brand from './Component/Brand/Brand'
import WhatGPT3 from './Containers/WhatGPT3/WhatGPT3'
import Features  from './Containers/features/features'
import Possibility from './Containers/Possibility/Possibility'
import Cta from './Component/Cta/Cta'
import Blog from './Containers/blog/Blog'
import Footer from './Containers/Footer/Footer'



const App = () => {
  return (
    <div className='app'>
      <div className="gradient__bg">
        <Navbar/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibility/>
      <Cta/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App
