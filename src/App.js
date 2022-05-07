import React from 'react'
import Header from './components/header/header';
import Nav from './components/nav/nav';
import About from './components/about/about';
import Experience from  './components/experience/experience';
import Services from './components/services/Services';
import Protfolio from './components/protfolio/protfolio';
import Testimonalis from './components/testimonalis/testimonalis';
import Contact from './components/contact/contact';
import Footer from './components/footer/Footer';
const App = () => {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Protfolio/>
      <Testimonalis/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App