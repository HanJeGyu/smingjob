import React from 'react';
import '../App.css';
import Navbar from '../navbar/Nav'
import Footer from '../footer/Footer'

import {routerConfig} from '../routers'
import {Route} from 'react-router-dom'
/* import ND from '../notice/NoticeDetail' */

function App() {
  return (
    <div className='wrapper'>
      <Navbar/>
   {/*    <ND/> */}
      {routerConfig.map(route => (<Route path={route.path} exact={route.exact} component={route.component}/>))}
      <Footer/>
    </div>
  );
}

export default App;