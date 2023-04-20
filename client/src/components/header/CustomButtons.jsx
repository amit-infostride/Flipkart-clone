import { Typography } from '@mui/material'
import { ShoppingCart } from '@mui/icons-material';
import { useState, useContext } from 'react'


// components
import LoginDialog from '../login/LoginDialog';
import { DataContext } from '../../context/DataProvider';
import Profile from './Profile';
import { Container, LoginButton, Wrapper } from '../../themes/header/CustomButtons';


const CustomButtons = () => {

    const [open, setOpen] = useState(false);
    const openDialog = () => {
        setOpen(true);
    }

    const { account, setAccount } = useContext(DataContext)


    return (
        <Wrapper>
            {
                // if value is there is account then show typography else login component
                account ? <Profile account={account} setAccount={setAccount} /> :
                    <LoginButton variant='contained' onClick={() => openDialog()}>Login</LoginButton>
            }

            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3 }}>More</Typography>


            <Container>
                <ShoppingCart />
                <Typography>Cart</Typography>
            </Container>
            <LoginDialog open={open} setOpen={setOpen} />
        </Wrapper>
    )
}

export default CustomButtons