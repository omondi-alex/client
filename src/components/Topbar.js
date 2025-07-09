import React from "react";
import { AppBar, Toolbar, Typography, Box, Avatar, Breadcrumbs, Link } from "@mui/material";

const Topbar = () => (
  <AppBar position="fixed" sx={{ zIndex: 1201, background: '#232e3c', boxShadow: 'none' }}>
    <Toolbar sx={{ justifyContent: 'space-between', minHeight: 64 }}>
      <Breadcrumbs aria-label="breadcrumb" sx={{ color: '#cfd8dc' }}>
        <Link underline="hover" color="inherit" href="#">Home</Link>
        <Link underline="hover" color="inherit" href="#">Dashboard</Link>
        <Typography color="#fff">Profile</Typography>
      </Breadcrumbs>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="User" />
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="subtitle1" sx={{ color: '#fff', fontWeight: 600, lineHeight: 1 }}>Alex Omieno Omondi</Typography>
          <Typography variant="caption" sx={{ color: '#cfd8dc' }}>Student</Typography>
        </Box>
      </Box>
    </Toolbar>
  </AppBar>
);

export default Topbar; 