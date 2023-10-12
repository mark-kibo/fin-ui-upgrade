'use client'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import TextField from '@mui/material/TextField';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ConnectWithoutContactRoundedIcon from '@mui/icons-material/ConnectWithoutContactRounded';
import InfoRoundedIcon from '@mui/icons-material/InfoRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';
import {useProSidebar } from "react-pro-sidebar"
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcCallSharpIcon from '@mui/icons-material/AddIcCallSharp';
import LockResetSharpIcon from '@mui/icons-material/LockResetSharp';
import LockOpenSharpIcon from '@mui/icons-material/LockOpenSharp';
import Tooltip from '@mui/material/Tooltip';
import { useRouter } from 'next/navigation';
import { SideBarContext } from '@/context/SideBarContext';
import FeedSharpIcon from '@mui/icons-material/FeedSharp';

export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const router=useRouter()
  const {toggleSidebar, collapseSidebar, toggled, broken } = useProSidebar();
  const toggle = ()=>{
    toggleSidebar();
    toggled ? collapseSidebar() : collapseSidebar()

}
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
    
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
   
  };
  const handleLogout=()=>{
    setAnchorEl(null);
    router.push('/login')
  }
  
  const iconstyle="black"
  const {state, setState} = React.useContext(SideBarContext)
  const anchor="left"
 
  return (
    <div className='fixed top-0 w-full z-10 text-black '>
    <Box sx={{ flexGrow: 1 }}>
    
      <AppBar position="static" style={{backgroundColor: "#FFFFFF", color:"black",  display:"flex", justifyContent:"space-between", marginBottom:"10px"}} className='flex justify-between'>
    
        <Toolbar className='flex justify-between'>
          
        <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=> setState({ ...state, [anchor]: true })}
                color="inherit"
              >
                <MenuIcon  className={iconstyle}/>
              </IconButton>
             

          
          
          {auth && (
            <div className="flex">
              
          <Typography fontSize={14}  component="div" >
          <Tooltip title="Help" arrow className='text-blue'>
            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >         
            <HelpOutlineRoundedIcon className={iconstyle} />
            
          </IconButton>
          
          </Tooltip>
        
          </Typography>
          <Typography fontSize={14} component="div" >
            <Tooltip title= "Contact us" arrow className= "text-blue">
      
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <AddIcCallSharpIcon/>
          </IconButton>
          </Tooltip>
          
          </Typography>
          <Typography fontSize={14} component="div" >
            <Tooltip title= "About" arrow className= "text-blue">

            <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <FeedSharpIcon className={iconstyle} />
          </IconButton>
          </Tooltip>
          
          </Typography>
          <Typography  fontSize ={14} component="div" >
            <Tooltip title= "Change password" arrow className= "text-blue">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <LockOpenSharpIcon className={iconstyle} />
          </IconButton>
          </Tooltip>
          
          </Typography>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle className={iconstyle}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Log out</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>

      </AppBar>

    </Box>
    </div>
  );
}
