import styled from '@emotion/styled'
import { Box, Button, Dialog, TextField, Typography } from '@mui/material'
import React from 'react'


const Component = styled(Box)`
    height:70vh;
    width:90vh;
`

const Image = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height:100%;
    width:40%;
    padding:45px 35px
`

const Wrapper = styled(Box)`
    display:flex;
    flex-direction:column;
`

const LoginDialog = ({ open, setOpen }) => {
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Dialog open={open} onClose={handleClose}>
            <Component>
                <Box style={{ display: "flex", height: '100%' }}>
                    <Image>
                        <Typography variant='h5'>Login</Typography>
                        <Typography style={{ marginTop: '20px' }}>Get access to your Orders, Wishlist and Recommendations</Typography>
                    </Image>
                    <Wrapper>
                        <TextField variant='standard' label='Enter Email/Mobile Number' />
                        <TextField variant='standard' label='Enter Password' />
                        <TextField >By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</TextField>
                        <Button>Login</Button>
                        <Typography>OR</Typography>
                        <Button>Request OTP</Button>
                        <Typography>New to Flipkart? Create an account</Typography>
                    </Wrapper>
                </Box>
            </Component>
        </Dialog>
    )
}

export default LoginDialog 