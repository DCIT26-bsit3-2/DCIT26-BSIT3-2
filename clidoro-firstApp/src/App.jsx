import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Students from './assets/components/Students';
import Cards from './assets/components/Cards';
import './index.css'

function App() {
  return (
    <>
    <Header />
    <hr />
    <Footer />
    <hr />
    <Students
      name="John Doe"
      number="123456"
      age="20"
      course="BSIT"
      year="3rd"
    />
    <hr />
    
    <Cards />
    </>
    
  )
}

export default App
