import React from 'react'
import { navData } from '../../constants/data'
import { Component, Container, Text } from '../../themes/Home/Navbar'
 

const Navbar = () => {
  return (
    <Component>
        {
              navData.map(data=>(
                  <Container>
                      <img src={data.url} alt='nav' style={{width:'64px'}}/>
                      <Text>{data.text}</Text>
                  </Container>
              ))
        }
    </Component>
  )
}

export default Navbar
