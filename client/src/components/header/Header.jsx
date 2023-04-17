import { AppBar, Box, Toolbar, Typography, styled } from '@mui/material'
import React from 'react'


// components 
import Search from './Search'
import CustomButtons from './CustomButtons'

const StyledHeader = styled(AppBar)`
    background :#2874f0;
    height :60px
`
const Component = styled(Box)`
    margin-left :12%;
    line-heignt :0
`
const SubHeading = styled(Typography)`
    font-size :10px;
    font-style:italic
`
const PlusImage = styled('img')({
  width: 10,
  height: 10,
  marginLeft: 4
})

const CustomButtonWrapper = styled(Box)`
    margin: 0 5% 0 auto;
`

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