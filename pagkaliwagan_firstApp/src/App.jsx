import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home.jsx';
import Sidebar from './assets/components/Sidebar.jsx';
import StudentProfile from './assets/components/StudentProfile.jsx';


function App() {
  return (
    <Router>
    <div className='flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100'>
        {/* Sidebar */}

        <Sidebar />
        {/* Main Content */}
        <main className='flex-1 p-6 bg-gray-600'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/students/:id' element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
     </Router>
  );
}

export default App

 