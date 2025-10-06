import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';
import Students from './assets/components/Students';
import Cards from './assets/components/Cards';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white font-sans">
      <Header />

      <main className="container mx-auto px-4 py-10">
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          <Students
            name="John Doe"
            number="123456"
            age="20"
            course="BSIT"
            year="3rd"
          />
          <Students
            name="Jimuel"
            number="202301562"
            age="20"
            course="BSIT"
            year="3rd"
          />
          <Students
            name="Jane Doe"
            number="123457"
            age="21"
            course="BSIT"
            year="3rd"
          />
          <Students
            name="Mark Smith"
            number="123458"
            age="22"
            course="BSIT"
            year="3rd"
          />
          <Students
            name="Anna Cruz"
            number="123459"
            age="20"
            course="BSIT"
            year="3rd"
          />
        </section>

        <section className="flex justify-center mb-10">
          <Cards />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
