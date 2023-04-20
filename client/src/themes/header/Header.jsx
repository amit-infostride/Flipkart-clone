import { AppBar, Box, Typography, styled } from "@mui/material"

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

export {
    StyledHeader, Component, SubHeading, PlusImage, CustomButtonWrapper

}