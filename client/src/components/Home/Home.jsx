import React from 'react'


// components
import Navbar from './Navbar'
import Banner from './Banner'
import { Box, styled } from '@mui/material'


const Component = styled(Box)`
    padding: 10px;
    background: #F2F2F2;
`
const Home = () => {
  return (
    <div>
        <Navbar />
        <Component>
        <Banner />
        </Component>
    </div>
  )
}

export default Home