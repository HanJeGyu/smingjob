import React from 'react';
import '../App.css';
import Hello from '../components/Hello'
import Navbar from '../nav/Nav'
import Header from '../header/Header'

function App() {
  return (
    <div className='wrapper'>
         <Header />
      <Navbar />
   
      <Hello name='smingjob'></Hello>
    </div>
  );
}

export default App;