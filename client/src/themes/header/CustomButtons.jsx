import { Box, Button, styled } from "@mui/material"

const Wrapper = styled(Box)`
    display:flex;
    margin:0 3% 0 auto;
    & > button ,& >p, &>div {
        margin-right:40px;
        font-size: 16px;
        align-items:center;
    }
`
const Container = styled(Box)`
        display:flex
`
const LoginButton = styled(Button)`
        color:#2874f0;
        background:#fff;
        text-transform:none;
        padding:5px 40px;
        border-radius :2px;
        box-shadow:none;
        font-weight:600;
        height:32px
`

export {

    Wrapper, Container, LoginButton
}