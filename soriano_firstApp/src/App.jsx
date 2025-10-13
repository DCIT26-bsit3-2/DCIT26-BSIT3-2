import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Sidebar from "./assets/components/Sidebar.jsx";
import StudentProfile from "./assets/components/StudentProfile.jsx";
import Home from "./assets/components/Home.jsx";

import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/Footer.jsx";
import Card from "./assets/components/Card.jsx";
import Students from "./assets/components/Students.jsx";

function App() {
    return (
        <BrowserRouter>
            <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                <Sidebar />

                <main className="min-h-screen items-center ml-64 p-6 content-center">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="/student/:id"
                            element={<StudentProfile />}
                        />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;
