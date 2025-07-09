import React from "react";
import { Box, Card, CardContent, Avatar, Typography, Grid, Tabs, Tab, TextField, InputAdornment } from "@mui/material";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import fazitechImg from './imgs/fazitech.png';

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 2 }}>{children}</Box>}
    </div>
  );
}

const ProfileDashboard = () => {
  const [tab, setTab] = React.useState(0);
  return (
    <Box sx={{ flexGrow: 1, mt: 10, ml: 28, pr: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <Card sx={{ p: 3, borderRadius: 3, boxShadow: 2 }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
              <img
                src={fazitechImg}
                alt="Profile"
                style={{
                  width: 90,
                  height: 90,
                  marginBottom: 8,
                  borderRadius: 12,
                  boxShadow: '0 2px 8px rgba(30, 64, 175, 0.07)',
                  border: '2px solid #e5e7eb',
                  objectFit: 'cover'
                }}
              />
              <Typography variant="h6" fontWeight={700}>Alex Omieno Omondi</Typography>
              <Typography variant="body2" color="text.secondary">alex.omondi@aims-senegal.org</Typography>
            </Box>
            <CardContent sx={{ p: 0 }}>
              <Typography variant="subtitle1" fontWeight={600} mb={1}>Personal Info</Typography>
              <Box sx={{ mb: 1 }}>
                <Typography variant="body2"><b>Full Name:</b> Alex Omieno Omondi</Typography>
                <Typography variant="body2"><b>Email:</b> omondialex3517@gmail.com</Typography>
                <Typography variant="body2"><b>Alternate Email:</b> alex.omondi@aims-senegal.org</Typography>
                <Typography variant="body2"><b>Address:</b> Nairobi, Kenya</Typography>
                <Typography variant="body2"><b>WhatsApp:</b> +254 707 750879</Typography>
                <Typography variant="body2"><b>LinkedIn:</b> LINKED</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <Tabs value={tab} onChange={(_, v) => setTab(v)} sx={{ borderBottom: 1, borderColor: 'divider', px: 2 }}>
              <Tab label="Profile" />
              <Tab label="Bio" />
              <Tab label="Work-Exp" />
              <Tab label="Education" />
              <Tab label="Certifications" />
              <Tab label="Expertise" />
            </Tabs>
            <TabPanel value={tab} index={0}>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <TextField label="Full Name" fullWidth margin="dense" value="Alex Omieno Omondi" />
                  <TextField label="LinkedIn Link" fullWidth margin="dense" value="https://www.linkedin.com/in/omondi-alex/" InputProps={{ startAdornment: <InputAdornment position="start"><LinkedInIcon /></InputAdornment> }} />
                  <TextField label="Alternative Email" fullWidth margin="dense" value="omondialex5719@gmail.com" InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }} />
                  <TextField label="Facebook Link" fullWidth margin="dense" placeholder="Enter Facebook profile link" />
                  <TextField label="Instagram Link" fullWidth margin="dense" placeholder="Enter Instagram profile link" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label="Email" fullWidth margin="dense" value="alex.omondi@aims-senegal.org" />
                  <TextField label="WhatsApp Number" fullWidth margin="dense" value="+254 707 750879" InputProps={{ startAdornment: <InputAdornment position="start"><WhatsAppIcon /></InputAdornment> }} />
                  <TextField label="Address" fullWidth margin="dense" value="Nairobi, Kenya" InputProps={{ startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment> }} />
                  <TextField label="Twitter Link" fullWidth margin="dense" placeholder="Enter Twitter profile link" />
                </Grid>
              </Grid>
            </TabPanel>
            {/* Add more TabPanels for other tabs as needed */}
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfileDashboard; 