 
import {  MenuItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import { Component, Logout } from '../../themes/header/Profile';




const Profile = ({account,setAccount}) => {

    const [open,setOpen] = useState(false)

    const handleClick =(event)=>{
        setOpen(event.currentTarget)
    }
    const handleClose =()=>{
        setOpen(false)
    }

    const logoutUser =()=>{
        setAccount('')
    }

  return (
     <>
            <Box onClick={handleClick}>

          <Typography style={{marginTop:2, cursor :'pointer'}}>{account}</Typography> 
              <Component
                  id="basic-menu"
                  anchorEl={open}
                  open={Boolean(open)}
                  onClose={handleClose}
                 
              >
                  <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
                    <PowerSettingsNewIcon color='primary' fontSize='small' />
                      <Logout>Logout</Logout>
                  </MenuItem>
                
              </Component>


            </Box>
     </>
  )
}

export default Profile