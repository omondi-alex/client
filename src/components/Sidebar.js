import React from "react";
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Toolbar, Box } from "@mui/material";
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import ClassIcon from '@mui/icons-material/Class';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StarIcon from '@mui/icons-material/Star';
import AnnouncementIcon from '@mui/icons-material/Announcement';

const navItems = [
  { text: "Dashboard", icon: <DashboardIcon /> },
  { text: "Profile", icon: <PersonIcon /> },
  { text: "Enrolled Courses", icon: <SchoolIcon /> },
  { text: "Class", icon: <ClassIcon /> },
  { text: "Calendar", icon: <CalendarMonthIcon /> },
  { text: "Tutor Rating", icon: <StarIcon /> },
  { text: "Announcements", icon: <AnnouncementIcon /> },
];

const Sidebar = ({ activeIndex = 1 }) => (
  <Drawer
    variant="permanent"
    sx={{
      width: 220,
      flexShrink: 0,
      [`& .MuiDrawer-paper`]: {
        width: 220,
        boxSizing: 'border-box',
        background: '#232e3c',
        color: '#fff',
        borderRight: 0,
      },
    }}
  >
    <Toolbar sx={{ minHeight: 64, justifyContent: 'center', background: '#1a2230', fontWeight: 700, fontSize: 20 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 32, height: 32, borderRadius: '50%', background: '#fff', color: '#232e3c', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700 }}>A</Box>
        iiAcademy
      </Box>
    </Toolbar>
    <List>
      {navItems.map((item, idx) => (
        <ListItem button key={item.text} selected={activeIndex === idx} sx={{
          background: activeIndex === idx ? '#2563eb' : 'inherit',
          color: activeIndex === idx ? '#fff' : '#cfd8dc',
          '&:hover': { background: '#1e293b', color: '#fff' },
          borderRadius: 2,
          mx: 1,
          my: 0.5,
        }}>
          <ListItemIcon sx={{ color: 'inherit' }}>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  </Drawer>
);

export default Sidebar; 