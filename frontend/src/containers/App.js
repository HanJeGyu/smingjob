import React from 'react';
import '../App.css';
import Hello from '../components/Hello'
import Navbar from '../nav/Nav'
import Header from '../header/Header'
import Navbar2 from '../nav2/Nav'

function App() {
  return (
    <div className='wrapper'>
         {/* <Header /> */}
      {/* <Navbar /> */}
      <Navbar2/>
      <Hello name='smingjob'></Hello>
    </div>
  );
}

export default App;