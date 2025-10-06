import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Students from './assets/components/Students.jsx'
import Cards from './assets/components/Card.jsx'

function App() {
  return (
   <>
   <div className='flex justify between flex-col min-h-screen'>

      <Header />
        <div className='flex flex-wrap justify-center'>
          <Students 
          name="Mark Joshua A. Delos Santos" number="202301579" age="20" course="BSIT" year="3rd year"
          />
          <Students 
          name="Geoffrey D. Soriano" number="202301671" age="20" course="BSIT" year="3rd year"
          />
          <Students 
          name="Allen James Nico D. Acosta" number="202301579" age="20" course="BSIT" year="3rd year"
          />
          <Students 
          name="Lenerd A. McGowan" number="202300951" age="19" course="BSIT" year="3rd year"
          />
          <Students 
          name="Jommel Quilon" number="202301234" age="20" course="BSIT" year="3rd year"
          />
        </div>

        <div className='flex flex-wrap justify-center'>
          <Cards />
        </div>

        <Footer />
    </div>
   </>
  )
}

export default App
