
import { Box, Dialog, TextField, Typography } from '@mui/material'
import { useState, useContext } from 'react'
import { authenticateLogin, authenticateSignup } from '../../service/api'
import { DataContext } from '../../context/DataProvider'
import { Component, CreateAccount, Error, Image, LoginButton, ReguestOTP, Text, Wrapper } from '../../themes/Login/Login'

 
 
const LoginDialog = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
        toggleAccount(accountInitalValues.login);
        setError(false)
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
        setSignup({ ...signup, [e.target.name]: e.target.value })
        // console.log(signup)
    }

    const signupUser = async () => {
        // console.log(signup)
        let response = await authenticateSignup(signup)
        // console.log(response);
        if (!response) return;
        handleClose();
        setAccount(signup.firstname);
    }

    const { setAccount } = useContext(DataContext)

    // pick values when person has entered details in login 

    const loginInitalValues = {
        username: '',
        password: ''
    }

    const [login, setLogin] = useState(loginInitalValues)
    const onValueChange = (event) => {
        setLogin({ ...login, [event.target.name]: event.target.value })

    }

    const loginUser = async () => {
        let response = await authenticateLogin(login)
        console.log(response);
        if (response.status === 200) {
            handleClose();
            // setAccount(login.username)
            setAccount(response.data.data.firstname)
        } else {
            setError(true);
        }
    }

    const [error, setError] = useState(false)


    return (
        <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unset' } }}>
            <Component  >
                <Box style={{ display: "flex", height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>{account.heading}</Typography>
                        <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
                    </Image>
                    {
                        account.view === 'login' ?
                            <Wrapper>
                                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label='Enter Username' />

                                {/* if  error is true the it will show  below line*/}
                                {
                                    error && <Error>Please Enter Valid Username or Password</Error>
                                }

                                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label='Enter Password' />

                                <Text >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
                                <LoginButton onClick={() => loginUser()}>Login</LoginButton>
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