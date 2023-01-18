import React from 'react'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Menu from './components/Menu/Menu'
import Gallery from './components/Gallery/Gallery'
import FeedBack from './components/FeedBack/FeedBack'
import Events from './components/Events/Events'
import Message from './components/Message/Message'
import Footbar from './components/Footbar/Footbar'
import './App.css'


const App = () => {
  return (
    <>

      <Navbar />
      <About />
      <Menu />
      <hr />
      <Gallery />
      <FeedBack />
      <Events />
      <Message />
      <Footbar />

    </>



  )
}

export default App