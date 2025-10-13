import React from "react";
function Home() {
  return (
    <div className="flex items-center justify-center p-6 min-h-[60vh]">
      <div className="max-w-lg text-center sidebar-nav p-10 text-white text-lg rounded-xl shadow">
        <>
          <h2 className="text-2xl">Welcome to Home Page</h2>
          <p>Select a student from the sidebar to view their profile.</p>

        </>
      </div>
    </div>
  );
}

export default Home;