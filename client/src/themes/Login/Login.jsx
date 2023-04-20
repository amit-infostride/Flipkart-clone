import styled from "@emotion/styled"
import { Button, Typography } from "@mui/material"
import { Box } from "@mui/system"

const Component = styled(Box)`
   height: 70vh;
    width: 90vh;
    padding: 0;
    padding-top: 0;
`

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:79%;
    width:28%;
    padding:45px 35px;
    & >p , &>h5 {
        color:#fff;
        font-weight:600
    }
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
    padding:25px 35px;
    flex:1;
    &>div, &>button, &>p{
        margin-top:6px
    }
`
const LoginButton = styled(Button)`
    text-transform:none;
    background: #FB641B;
    color: #fff;
    height:48px;
    border-radius:2px;
`
const ReguestOTP = styled(Button)`
    text-transform:none;
    background: #fff;
    color: #2874f0;
    height:48px;
    border-radius:2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`

const Text = styled(Typography)`
    font-size: 12px;
    color:#878787
`

const CreateAccount = styled(Typography)`
      margin: auto 0 5px 0;
        font-size:14px;
        text-align:center;
        color:#2874f0;
        font-weight:600;
        cursor:pointer;
`

const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height:0;
    margin-top:10px;
    font-weight:600;
`

export {
    Component, Image, Wrapper, LoginButton, ReguestOTP, Text, CreateAccount, Error
}