import React,{useState} from "react";
import "../../style/HeaderStyle.css";
import {AppBar, Typography, Box, Toolbar, IconButton, Drawer, Divider} from "@mui/material";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import {Link} from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu"
const Hader = () => {
  const [mobileOpen,setMobileOPen] =useState(false)
  //handle menuc click
  const handleDrawerToggle =() =>{
    setMobileOPen(!mobileOpen)
  }
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
    <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{flexGrow: 1,my:2}}
            >
              <FastfoodIcon />
              My Resturent
            </Typography>
          <Divider/>
              <ul className="mobile-navigation">
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/About"}>About</Link>
                </li>
                <li>
                  <Link to={"/Contect"}>Contect</Link>
                </li>
              </ul>
          
          
    
    </Box>
  )

  return (
    <>
      <Box>
        
        <AppBar component={"nav"} sx={{bgcolor: "black"}}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{mr: 2, display: {sm: "none"}}}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              color={"goldenrod"}
              variant="h6"
              component="div"
              sx={{flexGrow: 1}}
            >
              <FastfoodIcon />
              My Resturent
            </Typography>
            <Box sx={{display: {xs: "none", sm: "block"}}}>
              <ul className="navigation-menu">
                <li>
                  <Link to={"/home"}>Home</Link>
                </li>
                <li>
                  <Link to={"/Menu"}>Menu</Link>
                </li>
                <li>
                  <Link to={"/About"}>About</Link>
                </li>
                <li>
                  <Link to={"/Contect"}>Contect</Link>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer variant="temporary" open={mobileOpen} onClose={handleDrawerToggle}
          sx={{display:{xs:'block',sm:'none'},
          "& .MuiDrawer-paper":{
            boxSizing:'border-box',width:"240px",}}}>  
{drawer}
          </Drawer>
        </Box>
        <Box > 

        <Toolbar/>
        </Box>
      </Box>
    </>
  );
};

export default Hader;
