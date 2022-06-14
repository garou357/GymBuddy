import React from 'react'
import{ Link } from 'react-router-dom'
import { Stack } from '@mui/material'; 
//Stack is a component that is used to create a stack of components

import Logo from '../assets/images/Logo.png';
const Navbar = () => {
  return (
    <Stack>
      <Link to="/">
        <img src={Logo} alt="logo" style={{width:'48px',height:'48px',margin: '0 20px'}}/>
      </Link>
    </Stack>
  )
}

export default Navbar