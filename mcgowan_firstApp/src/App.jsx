import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./assets/components/Home.jsx";
import StudentProfile from "./assets/components/StudentProfile.jsx";
import Sidebar from "./assets/components/Sidebar.jsx";

function App() {
  return (
    <Router>
      <div className="app-container bg-gray-200">
        <Sidebar />
        <main className="main-content p-4 text-center text-3xl font-bold">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/StudentProfile/:id" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
