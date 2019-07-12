import React from 'react'
import {Nav} from 'react-bootstrap' 
import './Nav.css';


const Navbar =()=>{
   
    return (<div>
        <div id="myNav" class="overlay">

   
    <span class="closebtn" onClick={closeNav} >X</span>
  

    <div class="overlay-content">
      <Nav.Link href="/">공고</Nav.Link>
      <Nav.Link href="/">면접</Nav.Link>
      <Nav.Link href="/">자기PR</Nav.Link>
      <Nav.Link href="/">F&Q</Nav.Link>     
      <Nav.Link href="/">문의</Nav.Link>     
    </div>
  
  </div>
 
</div>);
}
   
   function closeNav(){ document.getElementById("myNav").style.width = "0%";} 



export default Navbar