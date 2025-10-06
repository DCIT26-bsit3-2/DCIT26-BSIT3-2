// import "./App.css";
import Header from "./assets/components/Header.jsx";
import Footer from "./assets/components/Footer.jsx";
import Card from "./assets/components/Card.jsx";
import Students from "./assets/components/Students.jsx";

function App() {
    return (
        <body className="min-h-screen flex-row">
            <Header />
            <div className="flex justify-between m-10 p-10">
                <Students
                    name="Geoffrey Soriano"
                    studnum="202301671"
                    yrLevel="3rd Year"
                    age="20"
                    course="BSIT"
                />
                <Students
                    name="Geoffrey Soriano"
                    studnum="202301671"
                    yrLevel="3rd Year"
                    age="20"
                    course="BSIT"
                />
                <Students
                    name="Jane Doe"
                    studnum="202301672"
                    yrLevel="3rd Year"
                    age="20"
                    course="BSIT"
                />
                <Students
                    name="John Smith"
                    studnum="202301673"
                    yrLevel="3rd Year"
                    age="21"
                    course="BSIT"
                />
                <Students
                    name="Alice Johnson"
                    studnum="202301674"
                    yrLevel="3rd Year"
                    age="19"
                    course="BSIT"
                />
            </div>
            <Card />
            <Footer />
        </body>
    );
}

export default App;
