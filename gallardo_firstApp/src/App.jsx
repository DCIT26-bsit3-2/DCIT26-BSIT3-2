import React from 'react';
import header from './assets/components/header';
import footer from './assets/components/footer';
import cards from './assets/components/cards';
import student from './assets/components/student';
import '.index.css'

function App(){
  return (
    <>
    <header/>
    <br/>
    <footer/>
    <br/>
    <student 
    name ="john doe"
    number ="654897"
    age =" 17"
    course =" BSIT"
    year ="3rd year"
    />
    <hr/>
    <cards />
    </>
  )
}
export default App;