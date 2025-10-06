
import Header from './assets/components/Header.jsx'
import Card from './assets/components/Card.jsx'
import Students from './assets/components/Students.jsx'
import Footer from './assets/components/Footer.jsx' 

function App() {
  return (
    <><div className='flex flex-col h-screen justify-between'>
    <Header />
    <div className='flex flex-wrap justify-center gap-4'>
    <Students name="Lenerd Mcgowan" studnum="202300951" age="20" course="BSIT" year="3rd year" />
    <Students name="Jommel Quilon" studnum="202300950" age="22" course="BSIT" year="3rd year" />
    <Students name="Nico Acosta" studnum="202300871" age="19" course="BSIT" year="3rd year" />
    <Students name="Geoffrey Soriano" studnum="202301951" age="25" course="BSIT" year="3rd year" />
    <Students name="MJ DelosSantos" studnum="202300153" age="20" course="BSIT" year="3rd year" />
    </div>
    <Card />
    <Footer />
    </div>
    </>
    )
}

export default App
