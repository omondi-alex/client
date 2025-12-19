import React from "react";
import { List, ListItemButton, ListItemIcon, ListItemText, Toolbar, Box, Typography } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import FolderIcon from '@mui/icons-material/Folder';
import ClassIcon from '@mui/icons-material/Class';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MicIcon from '@mui/icons-material/Mic';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const navItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/dashboard" },
  { text: "Profile", icon: <PersonIcon />, path: "/profile" },
  { text: "Projects", icon: <FolderIcon />, path: "/projects" },
  { text: "Publications", icon: <ClassIcon />, path: "/publications" },
  { text: "Engagements", icon: <MicIcon />, path: "/speaking" },
  { text: "Calendar", icon: <CalendarMonthIcon />, path: "/calendar" },
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
      <Toolbar sx={{ 
        minHeight: 72, 
        justifyContent: 'center', 
        background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Box sx={{ 
            width: 44, 
            height: 44, 
            borderRadius: '12px', 
            background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', 
            color: '#fff', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            fontWeight: 700, 
            fontSize: 24,
            boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
            border: '2px solid rgba(255, 255, 255, 0.2)',
          }}>
            A
          </Box>
          <Typography variant="h6" sx={{ 
            color: '#fff', 
            fontWeight: 700,
            fontSize: '1.25rem',
            background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            iiAcademy
          </Typography>
        </Box>
      </Toolbar>
      <List sx={{ mt: 2, px: 1 }}>
        {navItems.map((item, idx) => {
          const isActive = getActiveIndex() === idx;
          return (
            <ListItemButton 
              key={item.text} 
              selected={isActive} 
              onClick={() => handleNavigation(item.path)}
              sx={{
                background: isActive 
                  ? 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)' 
                  : 'transparent',
                color: isActive ? '#fff' : '#cbd5e1',
                borderRadius: 3,
                mx: 0.5,
                my: 0.75,
                minHeight: 52,
                px: 2,
                py: 1.5,
                position: 'relative',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isActive ? '0 4px 12px rgba(37, 99, 235, 0.3)' : 'none',
                '&::before': isActive ? {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: 4,
                  height: '60%',
                  background: 'rgba(255, 255, 255, 0.3)',
                  borderRadius: '0 4px 4px 0',
                } : {},
                '&:hover': { 
                  background: isActive 
                    ? 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)'
                    : 'rgba(37, 99, 235, 0.1)', 
                  color: '#fff',
                  transform: 'translateX(4px)',
                  boxShadow: isActive 
                    ? '0 6px 16px rgba(37, 99, 235, 0.4)'
                    : '0 2px 8px rgba(37, 99, 235, 0.15)',
                },
              }}
            >
              <ListItemIcon sx={{ 
                color: 'inherit', 
                minWidth: 40,
                '& svg': {
                  fontSize: 24,
                }
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText 
                primary={item.text} 
                primaryTypographyProps={{ 
                  fontWeight: isActive ? 700 : 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.02em',
                }} 
              />
            </ListItemButton>
          );
        })}
      </List>
    </>
  );
};

export default Sidebar; 