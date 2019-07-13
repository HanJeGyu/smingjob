import React from 'react';
import '../App.css';
import Hello from '../components/Hello'
import Navbar from '../nav/Nav'
import Header from '../header/Header'
import Header2 from '../header2/Header'
import Navbar2 from '../nav2/Nav'
import Notice from '../notice/Notice'
function App() {
  return (
    <div className='wrapper'>
         {/* <Header /> */}
      {/* <Navbar /> */}
      {/* <Header2/> */}
      <Navbar2/>
      <Notice />
      <Hello name='smingjob'></Hello>
    </div>
  );
}

export default App;