import React from 'react';
import '../App.css';
import Navbar from '../navbar/Nav'
import Notice from '../notice/Notice'
import Footer from '../footer/Footer'

function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
      <Notice />
      <Footer/>
    </div>
  );
}

export default App;