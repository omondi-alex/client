import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
  IconButton,
  Chip,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Alert,
  Snackbar,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Avatar,
  Tabs,
  Tab,
  Container,
  useMediaQuery
} from "@mui/material";
import {
  CalendarToday as CalendarIcon,
  Schedule as ScheduleIcon,
  Email as EmailIcon,
  Phone as PhoneIcon,
  LocationOn as LocationIcon,
  Add as AddIcon,
  VideoCall as VideoCallIcon,
  MeetingRoom as MeetingRoomIcon,
  Notifications as NotificationsIcon,
  AccessTime as AccessTimeIcon,
  Send as SendIcon
} from "@mui/icons-material";

const Calendar = () => {
  const isMobile = useMediaQuery('(max-width:1280px)');
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    meetingType: "video",
    duration: "30",
    date: "",
    time: "",
    subject: "",
    description: "",
  });
  const [activeTab, setActiveTab] = useState(0);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Available time slots (9 AM to 5 PM, 30-minute intervals)
  const timeSlots = [
    "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
    "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
    "15:00", "15:30", "16:00", "16:30", "17:00"
  ];

  // Meeting types
  const meetingTypes = [
    { value: "video", label: "Video Call", icon: <VideoCallIcon />, color: "#2563eb" },
    { value: "phone", label: "Phone Call", icon: <PhoneIcon />, color: "#10b981" },
    { value: "in-person", label: "In-Person", icon: <MeetingRoomIcon />, color: "#f59e0b" }
  ];

  // Duration options
  const durationOptions = [
    { value: "15", label: "15 minutes" },
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour" },
    { value: "90", label: "1.5 hours" },
    { value: "120", label: "2 hours" }
  ];

  const handleBookingSubmit = () => {
    // Validate form
    if (!bookingForm.name || !bookingForm.email || !bookingForm.subject || !bookingForm.date || !bookingForm.time) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error"
      });
      return;
    }

    // Compose email
    const emailSubject = `Meeting Request: ${bookingForm.subject}`;
    const emailBody = `
Dear Omondi Alex,

I would like to schedule a meeting with you. Here are the details:

Meeting Information:
- Subject: ${bookingForm.subject}
- Meeting Type: ${meetingTypes.find(t => t.value === bookingForm.meetingType)?.label}
- Duration: ${durationOptions.find(d => d.value === bookingForm.duration)?.label}
- Preferred Date: ${bookingForm.date}
- Preferred Time: ${bookingForm.time}

My Information:
- Name: ${bookingForm.name}
- Email: ${bookingForm.email}
- Phone: ${bookingForm.phone || 'Not provided'}
- Company/Organization: ${bookingForm.company || 'Not provided'}

Meeting Description:
${bookingForm.description || 'No description provided'}

Please let me know if this time works for you or suggest an alternative.

Best regards,
${bookingForm.name}
    `.trim();

    // Open email client
    const mailtoLink = `mailto:omondialex3517@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');

    // Show success message
    setSnackbar({
      open: true,
      message: "Email client opened! Please send the email to complete your meeting request.",
      severity: "success"
    });

    // Reset form
    setBookingForm({
      name: "", email: "", phone: "", company: "", meetingType: "video",
      duration: "30", date: "", time: "", subject: "", description: ""
    });
  };

  const getMeetingTypeIcon = (type) => {
    return meetingTypes.find(t => t.value === type)?.icon || <ScheduleIcon />;
  };

  const getMeetingTypeColor = (type) => {
    return meetingTypes.find(t => t.value === type)?.color || "#6b7280";
  };

  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: { xs: 8, md: 10 }, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Grid 
        container 
        spacing={isMobile ? 2 : 4} 
        justifyContent="center"
        direction={isMobile ? 'column' : 'row'}
        alignItems="stretch"
      >
        {/* Header */}
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2, color: '#1f2937' }}>
              Schedule a Meeting
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Book a consultation or meeting with Me
            </Typography>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8} sx={{ width: '100%' }}>
          <Paper elevation={3} sx={{ borderRadius: 3, p: isMobile ? 2 : 4, width: '100%' }}>
            <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} sx={{ mb: 3 }}>
              <Tab label="Book Meeting" icon={<AddIcon />} />
              <Tab label="My Availability" icon={<ScheduleIcon />} />
            </Tabs>

            {/* Book Meeting Tab */}
            {activeTab === 0 && (
              <Box>
                <Alert severity="info" sx={{ mb: 3 }}>
                  <Typography variant="body2">
                    <strong>How it works:</strong> Fill out the form below and we'll open your email client with a pre-filled message. Simply send the email to complete your meeting request.<br />
                    <strong>Available Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM (EAT)<br />
                    <strong>Response Time:</strong> Within 24 hours for meeting confirmations
                  </Typography>
                </Alert>

                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextField
                      fullWidth
                      label="Full Name *"
                      value={bookingForm.name}
                      onChange={(e) => setBookingForm({...bookingForm, name: e.target.value})}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Email Address *"
                      type="email"
                      value={bookingForm.email}
                      onChange={(e) => setBookingForm({...bookingForm, email: e.target.value})}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Phone Number"
                      value={bookingForm.phone}
                      onChange={(e) => setBookingForm({...bookingForm, phone: e.target.value})}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Company/Organization"
                      value={bookingForm.company}
                      onChange={(e) => setBookingForm({...bookingForm, company: e.target.value})}
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel>Meeting Type</InputLabel>
                      <Select
                        value={bookingForm.meetingType}
                        onChange={(e) => setBookingForm({...bookingForm, meetingType: e.target.value})}
                        label="Meeting Type"
                      >
                        {meetingTypes.map((type) => (
                          <MenuItem key={type.value} value={type.value}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                              {type.icon}
                              {type.label}
                            </Box>
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <FormControl fullWidth sx={{ mb: 2 }}>
                      <InputLabel>Duration</InputLabel>
                      <Select
                        value={bookingForm.duration}
                        onChange={(e) => setBookingForm({...bookingForm, duration: e.target.value})}
                        label="Duration"
                      >
                        {durationOptions.map((option) => (
                          <MenuItem key={option.value} value={option.value}>
                            {option.label}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>

                    <TextField
                      fullWidth
                      label="Preferred Date *"
                      type="date"
                      value={bookingForm.date}
                      onChange={(e) => setBookingForm({...bookingForm, date: e.target.value})}
                      InputLabelProps={{ shrink: true }}
                      sx={{ mb: 2 }}
                    />

                    <FormControl fullWidth>
                      <InputLabel>Preferred Time *</InputLabel>
                      <Select
                        value={bookingForm.time}
                        onChange={(e) => setBookingForm({...bookingForm, time: e.target.value})}
                        label="Preferred Time *"
                      >
                        {timeSlots.map((time) => (
                          <MenuItem key={time} value={time}>
                            {time}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      label="Meeting Subject *"
                      value={bookingForm.subject}
                      onChange={(e) => setBookingForm({...bookingForm, subject: e.target.value})}
                      sx={{ mb: 2 }}
                    />
                    <TextField
                      fullWidth
                      label="Meeting Description"
                      multiline
                      rows={4}
                      value={bookingForm.description}
                      onChange={(e) => setBookingForm({...bookingForm, description: e.target.value})}
                      placeholder="Please describe what you'd like to discuss..."
                      sx={{ mb: 3 }}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      variant="contained"
                      size="large"
                      onClick={handleBookingSubmit}
                      startIcon={<SendIcon />}
                      sx={{ 
                        background: '#2563eb',
                        px: 4,
                        py: 1.5,
                        fontSize: '1.1rem'
                      }}
                    >
                      Send Meeting Request
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            )}

            {/* My Availability Tab */}
            {activeTab === 1 && (
              <Box>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                  My Availability
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                      <CardContent>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                          <AccessTimeIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                          Working Hours
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemText 
                              primary="Monday - Friday" 
                              secondary="9:00 AM - 5:00 PM (EAT)"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Saturday" 
                              secondary="10:00 AM - 2:00 PM (EAT)"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemText 
                              primary="Sunday" 
                              secondary="Closed"
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <Card sx={{ borderRadius: 2, boxShadow: 2 }}>
                      <CardContent>
                        <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                          <NotificationsIcon sx={{ mr: 1, verticalAlign: 'middle' }} />
                          Contact Information
                        </Typography>
                        <List dense>
                          <ListItem>
                            <ListItemIcon>
                              <EmailIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Email" 
                              secondary="omondialex3517@gmail.com"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <PhoneIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Phone" 
                              secondary="+254 707 750879"
                            />
                          </ListItem>
                          <ListItem>
                            <ListItemIcon>
                              <LocationIcon color="primary" />
                            </ListItemIcon>
                            <ListItemText 
                              primary="Location" 
                              secondary="Nairobi, Kenya"
                            />
                          </ListItem>
                        </List>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            )}
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4} sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Meeting Types */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Meeting Types
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {meetingTypes.map((type) => (
                    <Box key={type.value} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Box sx={{ color: type.color }}>{type.icon}</Box>
                      <Typography variant="body2">{type.label}</Typography>
                    </Box>
                  ))}
                </Box>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Contact Information
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <EmailIcon color="primary" />
                    <Typography variant="body2">omondialex3517@gmail.com</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <PhoneIcon color="primary" />
                    <Typography variant="body2">+254 707 750879</Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <LocationIcon color="primary" />
                    <Typography variant="body2">Nairobi, Kenya</Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            {/* Quick Info */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Quick Info
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <Box>
                    <Typography variant="body2" fontWeight={500} color="primary">
                      Response Time
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Within 24 hours
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={500} color="primary">
                      Time Zone
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      East Africa Time (EAT)
                    </Typography>
                  </Box>
                  <Box>
                    <Typography variant="body2" fontWeight={500} color="primary">
                      Languages
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      English, Swahili
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert 
          onClose={() => setSnackbar({ ...snackbar, open: false })} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Calendar; 