import React from "react";
import { Link, useLocation } from "react-router-dom";

function Sidebar() {
    const location = useLocation();
    const students = [
        { id: 1, name: "Lenerd Mcgowan" },
        { id: 2, name: "Jommel Quilon" },
        { id: 3, name: "Nico Acosta" },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <aside className="app-sidebar">
            <h1 className="sidebar-title">Student Profiles</h1>
            <nav className="sidebar-nav">
                <Link to="/" className={`sidebar-link mb-2 ${isActive("/") ? "active" : ""}`}>
                    Home
                </Link>
                <h2 className="students-heading">Students</h2>
                {students.map((student) => (
                    <Link
                        key={student.id}
                        to={`/StudentProfile/${student.id}`}
                        className={`sidebar-link mb-2 ${isActive(`/StudentProfile/${student.id}`) ? "active" : ""}`}
                    >
                        {student.name}
                    </Link>
                ))}
            </nav>
        </aside>
    );
}

export default Sidebar;
