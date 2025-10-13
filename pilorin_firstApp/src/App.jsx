import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './assets/components/Sidebar.jsx';
import StudentProfile from './assets/components/StudentProfile.jsx';
import AnotherHome from './assets/components/AnotherHome.jsx';
  
function App() {

  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">

        <Sidebar />
        
        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<AnotherHome />} />
            <Route path="/students/:id" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
