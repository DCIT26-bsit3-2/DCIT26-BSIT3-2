import React from "react";

function Home(){
    return(
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
            <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Welcome to Student Portal</h1>
            <p style={{ fontSize: '1.25rem' }}>This is the home page of the student portal.</p>   
        </div>
    )

}

export default Home