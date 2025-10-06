import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Students from './assets/components/Students.jsx'
import Cards from './assets/components/Cards.jsx'
function App() {
  return (
   <>
   <div className='bg-gray-400'>
   <Header/>
   
   <div className='flex bg-gray-400' >
   <Students
    name="Charls Sampaga"
    number="202302222"
    age={19}
    year={3}
    />

    <Students
    name="Mike Casaverde"
    number="202301234"
    age={20}
    year={4}
    />

    <Students
    name="Kian Pagkaliwagan"
    number="202303456"
    age={19}
    year={2}
    />

    <Students
    name="Jimuel Clidoro"
    number="202301238"
    age={20}
    year={3}
    />

    <Students
    name="Mhar Granado"
    number="202300134"
    age={19}
    year={1}
    />
    </div>  
   
   <Cards/>
   <Footer/>
   </div>
   </>
   
  )
}

export default App