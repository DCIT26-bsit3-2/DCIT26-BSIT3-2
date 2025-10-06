import Header from './assets/components/Header.jsx'
import Footer from './assets/components/Footer.jsx'
import Student from './assets/components/Student.jsx'
import Card from './assets/components/Card.jsx'


function App() {
  return (
    <>

<div className='flex justify-between flex-col min-h-screen'>
<Header />

<div className="flex flex-wrap justify-center">
<Student
name="Mhar Granado"
number="202302603"
age={20}
course="BSIT"
year={3}
/>

<Student
name="Curlh Joseph Golez"
number="202303690"
age={21}
course="BSIT"
year={3}
/>

<Student
name="Messiahlyn Mae Mabilangan"
number="202201860"
age={21}
course="BSIT"
year={3}
/>

<Student
name="Stephanie April Romo"
number="202303667"
age={21}
course="BSIT"
year={3}
/>

<Student
name="Lanz Michael Casino"
number="202300430"
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
