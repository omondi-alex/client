import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import fazitechImg from './imgs/fazitech.png';

const Topbar = ({ isMobile, onMenuClick }) => (
  <AppBar position="fixed" sx={{ zIndex: 1201, background: '#232e3c', boxShadow: 'none', height: 64 }}>
    <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src={fazitechImg} alt="User" sx={{ width: 40, height: 40 }} />
        {isMobile && (
          <IconButton color="inherit" edge="start" onClick={onMenuClick} sx={{ ml: 1 }}>
            <MenuIcon />
          </IconButton>
        )}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, lineHeight: 1 }}>Omondi Alex</Typography>
          <Typography variant="caption" sx={{ color: '#cfd8dc' }}>DevSecOps Engineer</Typography>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Topbar; 