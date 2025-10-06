import Header from "./assets/components/Header.jsx"
import Footer from "./assets/components/Footer.jsx"
import Students from "./assets/components/Students.jsx"
import Cards from "./assets/components/Cards.jsx"


function App() {

return(
<>
<Header />
<hr />
<Footer />
<hr />
<Students
name="Earl Herod S. Amis"
number="202301389"
age="20"
course="BSIT"
year="3rd"
/>
<hr />
<hr />
<Students
name="Jerlyn Demotor"
number="054326475"
age="19"
course="BSIT"
year="3rd"
/>
<hr />
<hr />
<Students
name="Aster Comet"
number="456128795"
age="20"
course="BSIT"
year="3rd"
/>
<hr />
<Students
name="Brian Caponpon"
number="7895641233"
age="20"
course="BSIT"
year="3rd"
/>
<hr />
<hr />
<Students
name="Brian Hyorie"
number="445169771"
age="20"
course="BSIT"
year="3rd"
/>
<hr />
<hr />
<Cards />
</>
)
}

export default App