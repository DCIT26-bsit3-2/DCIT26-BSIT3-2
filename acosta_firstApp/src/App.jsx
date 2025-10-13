import React from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './assets/components/Sidebar.jsx';
import Home from './assets/components/Home.jsx';
import StudentProfile from './assets/components/StudentProfile.jsx';
//import Students from './assets/components/Students.jsx';
// import Header from './assets/components/Header.jsx';
// import Card from './assets/components/Card.jsx';
// import Footer from './assets/components/Footer.jsx';


function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
        <Sidebar />

        <main className="flex-1 p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students/:id*" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;