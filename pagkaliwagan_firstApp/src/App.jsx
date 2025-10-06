import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Students from './assets/components/Students.jsx'
import Cards from './assets/components/Cards.jsx'





function App() {
  return (
    <>
      <div classname="bg-gray-400">
      <Header />
      
      <div className="flex flex-wrap justify-center   p-4 gap-4">
      <Students 
        name = "Kian Lhei"
        number = "202301095"
        age = "19"
        course = "BSIT"
        year = "3rd Year"


      />

      <Students 
        name = "Chars Sampaga"
        number = "202322222"
        age = "20"
        course = "BSIT"
        year = "3rd Year"

        
      />

      <Students 
        name = "Jimuel Clidoro"
        number = "202301095"
        age = "19"
        course = "BSIT"
        year = "3rd Year"

        
      />

      <Students 
        name = "Jesmon Javier"
        number = "202301095"
        age = "19"
        course = "BSIT"
        year = "3rd Year"

        
      />

      <Students 
        name = "Mike Casaverde"
        number = "202301095"
        age = "19"
        course = "BSIT"
        year = "3rd Year"

        
      />
      </div>
      
      
      <Cards />
     

      <Footer />
      </div>
    </>
  )
}

export default App
