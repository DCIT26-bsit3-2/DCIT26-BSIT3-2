import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Students from './assets/components/Students.jsx'
import Card from './assets/components/Card.jsx'

function App() {
  return (
   
    <>    
     <div className="bg-red-50 min-h-screen"> 
      <Header />
      <div className='flex p-5 justify-center flex-wrap m-10 text-center justify-items-center'>
      <Students
        name="Mike Casaverde"
        number="202301139"
        age={19}
        course="BSIT"
        year={3}  
      />

      <Students 
        name="Charls Sampaga"
        number="202302222"
        age={19}
        course="BSIT"
        year={3}  
      />

      <Students 
        name="Mhar Granado"
        number="202213112"
        age={21}
        course="BSIT"
        year={3}  
      />

      <Students 
        name="Kian Lhei"
        number="202312321"
        age={20}
        course="BSIT"
        year={3}  
      />
      
      <Students 
        name="Messiahlyn Mabilangan"
        number="202321312"
        age={21}
        course="BSIT"
        year={3}  
      />
      </div>
      <Card />
      <Footer />
       </div>
    </>
  )
}

export default App
