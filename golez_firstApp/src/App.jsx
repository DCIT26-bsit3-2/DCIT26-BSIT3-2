import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Sidebar from "./assets/components/Sidebar.jsx";
import StudentProfile from "./assets/components/StudentProfile.jsx";
import Home from "./assets/components/AnotherHome.jsx";


function App() {
  return (
      <Router>
        <div className="flex min-h-screen bg-purple-50 dark:bg-gray">
          {/* Sidebar */}
          <Sidebar />

          {/* Main Content */}
          <main className="flex-1 p-6">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/students/:id"element={<StudentProfile />}/> 
            </Routes>
          </main>
        </div>
      </Router>

  );
}

export default App
