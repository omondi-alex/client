import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import ProfileDashboard from "./components/ProfileDashboard";
import Dashboard from "./components/Dashboard";
import Projects from "./components/Projects";
import Publications from "./components/Publications";
import Calendar from "./components/Calendar";
import SpeakingEvents from "./components/SpeakingEvents";
import Announcements from "./components/Announcements";
import { Box, useMediaQuery, Drawer } from '@mui/material';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';

const theme = createTheme();

function App() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const drawerSx = {
    width: 220,
    boxSizing: 'border-box',
    background: '#1a2230',
    color: '#fff',
    borderRight: 0,
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
  };

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div style={{ display: 'flex', minHeight: '100vh', background: '#e7edf5' }}>
          <CssBaseline />
          {/* Sidebar: permanent on desktop, Drawer on mobile */}
          {isMobile ? (
            <Drawer
              open={drawerOpen}
              onClose={() => setDrawerOpen(false)}
              variant="temporary"
              ModalProps={{ keepMounted: true }}
              sx={{
                [`& .MuiDrawer-paper`]: drawerSx,
              }}
            >
              <Sidebar onNavigate={() => setDrawerOpen(false)} />
            </Drawer>
          ) : (
            <Drawer
              variant="permanent"
              sx={{
                width: 220,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: drawerSx,
              }}
              open
            >
              <Sidebar />
            </Drawer>
          )}
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Topbar isMobile={isMobile} onMenuClick={() => setDrawerOpen(true)} />
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/profile" element={<ProfileDashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/speaking" element={<SpeakingEvents />} />
              <Route path="/announcements" element={<Announcements />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </Box>
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
