import Header from './assets/components/Header.jsx';
import Students from './assets/components/Students.jsx';
import Card from './assets/components/Card.jsx';
import Footer from './assets/components/Footer.jsx';

function App() {
  return (
    <>
      <Header />
      <div className="flex justify-center">
      <Students name= "Nico" number= "202302598" age= {19} course="BSIT" year="3rd" />
      <Students name= "Lenerd" number= "202300001" age= {19} course="BSIT" year="3rd" />
      <Students name= "Geoffrey" number= "202300002" age= {19} course="BSIT" year="3rd" />
      <Students name= "MJ" number= "202300003" age= {19} course="BSIT" year="3rd" />
      <Students name= "Jommel" number= "202300004" age= {19} course="BSIT" year="3rd" />
      </div>
      <Card />
      <Footer />
    </>
  )
}

export default App