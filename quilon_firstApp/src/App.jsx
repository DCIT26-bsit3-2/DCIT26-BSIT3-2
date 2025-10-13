import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/components/Home.jsx';
import Students from './assets/components/Students.jsx';
import StudentProfile from './assets/components/StudentProfile.jsx';
import Sidebar from './assets/components/Sidebar.jsx';  

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Sidebar />
        <main className="flex-1 ml-64 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/students" element={<Students />} />
            <Route path="/students/:id" element={<StudentProfile />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
