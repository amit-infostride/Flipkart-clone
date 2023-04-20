import { Toolbar} from '@mui/material'
import React from 'react'


// components 
import Search from './Search'
import CustomButtons from './CustomButtons'
import { Component, CustomButtonWrapper, PlusImage, StyledHeader, SubHeading } from '../../themes/header/Header'
import { Box } from '@mui/system'

const Header = () => {

  const logoUrl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png';
  const subUrl = 'https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png';

  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: '55' }}>
        <Component>
          <img src={logoUrl} alt="logourl" style={{ width: "75px" }} />
          <Box style={{ display: 'flex' }}>
            <SubHeading>Explore &nbsp;
              <Box component='span' style={{ color: '#FFE500' }}>Plus</Box>
            </SubHeading>
            <PlusImage src={subUrl} alt="subUrl" />
          </Box>
        </Component>
        <Search /> 
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  )
}

export default Header