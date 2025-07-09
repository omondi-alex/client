import React from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MicIcon from '@mui/icons-material/Mic';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const navItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Profile", icon: <PersonIcon />, path: "/profile" },
  { text: "Projects", icon: <SchoolIcon />, path: "/projects" },
  { text: "Publications", icon: <ClassIcon />, path: "/publications" },
  { text: "Calendar", icon: <CalendarMonthIcon />, path: "/calendar" },
  { text: "Speaking & Events", icon: <MicIcon />, path: "/speaking" },
  // { text: "Announcements", icon: <AnnouncementIcon />, path: "/announcements" }, // Temporarily hidden as requested
];

const Sidebar = ({ onNavigate }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getActiveIndex = () => {
    const path = location.pathname;
    const index = navItems.findIndex(item => item.path === path);
    return index >= 0 ? index : 1; // Default to Profile (index 1)
  };

  const handleNavigation = (path) => {
    navigate(path);
    if (onNavigate) onNavigate(); // Close drawer on mobile
  };

  return (
    <>
      <Toolbar sx={{ minHeight: 64, justifyContent: 'center', background: '#232e3c', fontWeight: 700, fontSize: 20 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 36, height: 36, borderRadius: '50%', background: '#2563eb', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 22 }}>A</Box>
          <Typography variant="h6" sx={{ color: '#fff', fontWeight: 700, ml: 1 }}>iiAcademy</Typography>
        </Box>
      </Toolbar>
      <List sx={{ mt: 2 }}>
        {navItems.map((item, idx) => (
          <ListItemButton 
            key={item.text} 
            selected={getActiveIndex() === idx} 
            onClick={() => handleNavigation(item.path)}
            sx={{
              background: getActiveIndex() === idx ? '#2563eb' : 'inherit',
              color: getActiveIndex() === idx ? '#fff' : '#cfd8dc',
              '&:hover': { background: '#23304a', color: '#fff' },
              borderRadius: 2,
              mx: 1,
              my: 0.5,
              minHeight: 44,
            }}
          >
            <ListItemIcon sx={{ color: 'inherit', minWidth: 36 }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: getActiveIndex() === idx ? 700 : 500 }} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

export default Sidebar; 