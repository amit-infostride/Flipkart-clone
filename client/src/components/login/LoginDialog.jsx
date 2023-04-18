import styled from '@emotion/styled'
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { authenticateSignup } from '../../service/api'

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

const LoginDialog = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitalValues.login)
    }
    const accountInitalValues = {
        login: {
            view: 'login',
            heading: 'Login',
            subHeading: "Get access to your Orders, Wishlist and Recommendations"
        },
        signup: {
            view: 'signup',
            heading: "Looks like you're new here!",
            subHeading: 'Sign up with your mobile number to get started'
        }
    }

    const [account, toggleAccount] = useState(accountInitalValues.login)

    const toggleSignup = () => {
        toggleAccount(accountInitalValues.signup)
    }



    const signupInitialValues = {
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        phone: ''

    }
    const [signup, setSignup] = useState(signupInitialValues);

    const onInputchange = (e) => {
        setSignup({ ...setSignup, [e.target.name]: e.target.value })
        // console.log(signup)
    }

    const signupUser = async () => {
        let response = await authenticateSignup(signup)
        console.log(response);
    }

    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component>
                <Box style={{ display: "flex", height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant='standard' label='Enter Email/Mobile Number' />
                                <TextField variant='standard' label='Enter Password' />
                                <Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton>Login</LoginButton>
                                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                                <ReguestOTP>Request OTP</ReguestOTP>
                                <CreateAccount onClick={() => toggleSignup()}>New to Flipkart? Create an account</CreateAccount>
                            </Wrapper>
                            :
                            <Wrapper>
                                <TextField variant='standard' onChange={(e) => onInputchange(e)} name='firstname' label='Enter Firstname' />
                                <TextField variant='standard' onChange={(e) => onInputchange(e)} name='lastname' label='Enter Lastname' />
                                <TextField variant='standard' onChange={(e) => onInputchange(e)} name='username' label='Enter Username' />
                                <TextField variant='standard' onChange={(e) => onInputchange(e)} name='email' label='Enter Email' />
                                <TextField variant='standard' onChange={(e) => onInputchange(e)} name='password' label='Enter Password' />
                                <TextField variant='standard' onChange={(e) => onInputchange(e)} name='phone' label='Enter Phone' />
                                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
                            </Wrapper>
                    }
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog 