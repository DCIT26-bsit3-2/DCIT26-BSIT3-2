import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Students from './assets/components/Students.jsx'
import Card from './assets/components/Card.jsx'
  
function App() {

  return (
    <>
      <Header />

      <div className='flex' padding='10px' gap='10px'>
      <Students 
      name="Jherecho Pilorin"
      number="2023-12345"
      age="20"
      course="BSIT"
      year="3rd Year"
    />

     <Students 
      name="Omar Daud"
      number="2023-12345"
      age="20"
      course="BSIT"
      year="3rd Year"
    />

     <Students 
      name="Jesmon Javier"
      number="2023-12345"
      age="20"
      course="BSIT"
      year="3rd Year"
    />

     <Students 
      name="Nathaniel Bakx"
      number="2023-12345"
      age="20"
      course="BSIT"
      year="3rd Year"
    />

     <Students 
      name="Jhezrel Pilorin"
      number="2023-12345"
      age="20"
      course="BSIT"
      year="3rd Year"
    />
        
        </div>
    <Card />    


      <Footer />
    </>
  )
}

export default App
