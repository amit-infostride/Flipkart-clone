import { Box, InputBase, styled } from "@mui/material"

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

export {
    SerachContainer, InputSearchBase, SearchIconWrapper
}