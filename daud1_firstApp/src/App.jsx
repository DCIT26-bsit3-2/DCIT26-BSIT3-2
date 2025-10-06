import Header from './assets/components/Header'
import Footer from './assets/components/Footer'
import Students from './assets/components/Students'
import Card from './assets/components/Card' 


function App() {
  return (
    <div className="App">
      <Header />
      <hr></hr>
      <div className="flex">
      <Students name="Omar Raouf Daud" number="201310836" age="28" course="BSIT" year="3" />
      <Students name="Jherecho Pilorin" number="201310837" age="27" course="BSCS" year="2" />  
      <Students name="Jesmon Javier" number="201310838" age="26" course="BSIT" year="1" />  
      <Students name="Jin Macol" number="201310839" age="25" course="BSDM" year="4" />  
      <Students name="Marian Daud" number="201310840" age="24" course="BSBio" year="2" />    
      </div>
      <Card />  
      <Footer />
    </div>
  )
}

export default App
