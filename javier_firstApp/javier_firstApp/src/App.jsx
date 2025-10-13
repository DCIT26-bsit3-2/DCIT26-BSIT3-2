import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import StudentProfile from './assets/components/StudentProfile.jsx';
import SideBar from './assets/components/SideBar.jsx';
import Home from './assets/components/Home.jsx';

function App() {
  return (
    <Router>
      <div className="flex min h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <SideBar />
        <main className="flex-1 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/student/:id" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
