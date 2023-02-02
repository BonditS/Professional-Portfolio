import React from 'react'
import Header from  './componets/header/Header'
import Nav from './componets/nav/Nav'
import About from './componets/about/About'
import Skill from './componets/skill/Skill'
import Portfolio from './componets/portfolio/Portfolio'
import Contact from './componets/contact/Contact'
import Footer from './componets/footer/Footer'



const App = () => {
  return (
    <>
      <Nav/>
      <Header/>
      <About/>
      <Skill/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App