import React from 'react'
import {Container} from 'react-bootstrap';
import logo from "./assets/nba-logo.png"

const Header = () => {
  return (
    <div className='text-center mt-3'>
        <img src={logo} alt="" />
        <h1 className='head'>NBA Legends</h1>
   </div>
  )
}

export default Header;
