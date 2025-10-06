
import Header from './assets/components/Header.jsx'
import Card from './assets/components/Card.jsx'
import Student from './assets/components/Student.jsx'
import Footer from './assets/components/Footer.jsx'

function App() {
  return (
    <>
      <Header/>
      <div className="flex flex-col justify-between p-10">
        <div className="flex flex-wrap gap-4 justify-center items-center w-full mb-8">
          <Student name="Jommel Sean B. Quilon" course="Application Development" email="jommelsean.quilon@cvsu.edu.ph"/>
          <Student name="Jommel Quilon" course="Application Development" email="jommel.quilon@cvsu.edu.ph"/>
          <Student name="Jommel Sean" course="Application Development" email="sean.quilon@cvsu.edu.ph"/>
          <Student name="Jommel Sean Quilon" course="Application Development" email="jommelsean.quon@cvsu.edu.ph"/>
          <Student name="Sean Quilon" course="Application Development" email="jommean.quilon@cvsu.edu.ph"/>
        </div>
        <Card/>
      </div>
      <div className="mt-16 w-full">
        <Footer/>
      </div>
    </>
  )
}

export default App;