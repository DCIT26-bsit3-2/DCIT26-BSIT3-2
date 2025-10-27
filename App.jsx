import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Users from './pages/Users.jsx'
import UserDetails from './pages/UserDetails.jsx'

function App(){
  return(
    <div className='flex flex-col h-screen'>
      <Navbar />
      <main className='flex flex-grow container mx-auto p-4'>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/users' element={<Users/>}/>
          <Route path='/users/:id' element={<UserDetails/>}/>
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
export default App