import React from 'react'
import Header from './assets/components/Header' 
import Footer from './assets/components/footer'
import Students from './assets/components/Student'
import Cards from './assets/components/Cards'
import './index.css'

function App() {
  return (
    <>
      <div className="mb-6">
        <Header />
      </div>
      <hr />
      <div className="my-6">
        <Students
          name="John Doe"
          number="123456"
          age="20"
          course="BSIT"
          year="3rd"
        />
      </div>
      <hr />
      <div className="my-6">
        <Cards />
      </div>
      <hr />
      <Footer />
    </>
  )
}

export default App