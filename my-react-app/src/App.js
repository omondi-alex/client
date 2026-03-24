import React, { useState } from "react";
import CssBaseline from '@mui/material/CssBaseline';
import Fab from '@mui/material/Fab';
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
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const theme = createTheme();

// ScrollToTop component
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function ScrollTopFab() {
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!show) return null;

  return (
    <Fab
      size={isMobile ? "small" : "medium"}
      aria-label="scroll back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      sx={{
        position: 'fixed',
        right: 16,
        bottom: 24,
        zIndex: 1300,
        background: 'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)',
        color: '#06121d',
        boxShadow: '0 10px 24px rgba(14, 165, 233, 0.35)',
        '&:hover': {
          background: 'linear-gradient(135deg, #16a34a 0%, #0ea5e9 100%)',
        }
      }}
    >
      <KeyboardArrowUpIcon />
    </Fab>
  );
}

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
        <ScrollToTop />
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
          <ScrollTopFab />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
