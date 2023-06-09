import { Box, Typography, styled } from "@mui/material"


const Component = styled(Box)`
        display:flex;
        margin:55px 130px 0 130px;
        justify-content: space-between;
`
const Container = styled(Box)`
    padding:12px 8px;
    text-align:center;
`
const Text = styled(Typography)`
        font-size: 14px;
        font-weight:600;
        font-family:inherit; 
`

export {
    Component, Container, Text
}