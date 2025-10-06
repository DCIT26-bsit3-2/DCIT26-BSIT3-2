
import Header from './assets/components/header.jsx';
import Footer from './assets/components/footer.jsx';
import Student from './assets/components/Student.jsx';
import Card from './assets/components/Card.jsx';

function App() {
  return (
    <div>
      <Header />
      <hr />
      <div className="marquee-container">
        <div className="marquee-content">
          <Student name="Nathaniel Bakx" number="202300876" age={21} course="BSIT" year="3rd Year" />
          <Student name="Jane Doe" number="202300123" age={20} course="BSCS" year="2nd Year" />
          <Student name="Alice Smith" number="202300456" age={22} course="BSIT" year="4th Year" />
          <Student name="Bob Johnson" number="202300789" age={19} course="BSIS" year="1st Year" />
          <Student name="Charlie Brown" number="202300321" age={23} course="BSIT" year="3rd Year" />
          <Student name="Nathaniel Bakx" number="202300876" age={21} course="BSIT" year="3rd Year" />
          <Student name="Jane Doe" number="202300123" age={20} course="BSCS" year="2nd Year" />
          <Student name="Alice Smith" number="202300456" age={22} course="BSIT" year="4th Year" />
          <Student name="Bob Johnson" number="202300789" age={19} course="BSIS" year="1st Year" />
          <Student name="Charlie Brown" number="202300321" age={23} course="BSIT" year="3rd Year" />
        </div>
      </div>
      <hr />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
