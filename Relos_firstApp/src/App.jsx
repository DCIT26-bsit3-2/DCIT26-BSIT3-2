import React from 'react';
import header from './assets/components/header';
import footer from './assets/components/footer';
import cards from './assets/componets/footer';
import student from './assets/components/footer';
import '.index.css';

function App(){
  return(
  <>
  <header/>
  <br/>
  <footer/>
  <br/>
  <student
   name ="john doe"
   number ="45884"
   age = "21"
   course ="BSIT"
   year ="3rd year"
  />
  <hr/>
  </>
  )
}
export default App;