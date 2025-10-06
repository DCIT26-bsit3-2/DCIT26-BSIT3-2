import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Students from './assets/components/Students.jsx'
import Card from './assets/components/Card.jsx'

function App() {
  return (
    <>
    <div className='flex justify-between flex-col min-h-screen'>
    <Header />

    <div className="flex flex-wrap justify-center">

    <Students
    name="Lanz Michael Casino"
    number="202300430"
    age={21}
    course="BSIT"
    year="3rd Year"
    />

    <Students
    name="Yoshikazu Nagatama"
    number="202300649"
    age={20}
    course="BSIT"
    year="3rd Year"
    />

    <Students
    name="Messiahlyn Mae G. Mabilangan"
    number="202201860"
    age={21}
    course="BSIT"
    year="3rd Year"
    />

    <Students
    name="Mhar Granado"
    number="202302603"
    age={20}
    course="BSIT"
    year="3rd Year"
    />

    <Students
    name="Angelyn Acollador"
    number="202306231"
    age={30}
    course="BSIT"
    year="3rd Year"
    />

    </div>

    <Card />

    <Footer />
    
    </div>
    </>
  )
}

export default App
