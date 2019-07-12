import React from 'react'
import './Header.css'
import menuimg from './menu1.png'
import {Figure} from "react-bootstrap"

const Header =()=>{
   
    return (<div>
        <div class="navbar">
        <a onClick={openNav}><Figure.Image width={20} height={20} src={menuimg}/></a>
        <div class="btn_home">
        <a href="/">    Home</a>
        </div>
  <div class="dropdown">
    <button class="dropbtn">My 
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div> 
</div>
    </div>
    );
}
function openNav(){ document.getElementById("myNav").style.width = "100%";}
export default Header;