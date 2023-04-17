import styled from '@emotion/styled'
import { Box, InputBase } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const SerachContainer = styled(Box)`
background:#fff;
width:36%;
border-radius :2px;
margin-left:10px;
display:flex;
 
`

const InputSearchBase = styled(InputBase)`
padding-left:20px;
width:100%;
font-size:unset;
`

const SearchIconWrapper = styled(Box)`
  margin-left: auto;
  padding: 5px;
  display: flex;
  color: blue;
`

const Search = () => {
    return (
        <SerachContainer>

            <InputSearchBase placeholder='Search for products, brands and more ' />
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SerachContainer>
    )
}

export default Search