import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Sidebar from './assets/components/Sidebar.jsx';
import StudentProfile from './assets/components/StudentProfile.jsx';
import Home from './assets/components/Home.jsx';
 
function App() {
  return (
    <Router>
      <div className="flex min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"> 
        <Sidebar />

        <main className="flex-1 p-6">
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/students/:id" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
export default App;