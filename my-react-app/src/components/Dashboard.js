import React from "react";
import { Box, Card, CardContent, Typography, Grid, Chip, Button, useMediaQuery, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import fazitechImg from './imgs/fazitech.png';

const Dashboard = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:1280px)');

  const quickStats = [
    { label: "Years Experience", value: "3+", icon: <WorkIcon />, color: "#2563eb" },
    { label: "Education Level", value: "MSc", icon: <SchoolIcon />, color: "#10b981" },
    { label: "Certifications", value: "6", icon: <VerifiedIcon />, color: "#f59e0b" },
    { label: "Expertise Areas", value: "5", icon: <StarIcon />, color: "#8b5cf6" },
  ];

  const quickActions = [
    { title: "View Full Profile", description: "Explore complete professional background", path: "/profile", icon: <PersonIcon />, tab: 0 },
    { title: "Work Experience", description: "See proven track record", path: "/profile", icon: <WorkIcon />, tab: 2 },
    { title: "Education", description: "Review academic credentials", path: "/profile", icon: <SchoolIcon />, tab: 3 },
    { title: "Certifications", description: "Check professional qualifications", path: "/profile", icon: <VerifiedIcon />, tab: 4 },
  ];

  const services = [
    { title: "Cybersecurity Solutions", description: "Protect your digital assets with advanced security frameworks", icon: "🔒" },
    { title: "Software Development", description: "Custom applications built with modern technologies", icon: "💻" },
    { title: "IT Support & Training", description: "Comprehensive technical support and digital literacy training", icon: "🛠️" },
    { title: "Virtual Assistance", description: "Professional administrative and technical support services", icon: "📋" },
    { title: "Graphic Design", description: "Creative graphic design for branding, marketing, and digital presence", icon: "🎨" },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: { xs: 8, md: 10 }, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
        {/* Hero Section */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: 3, background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, mb: 3 }}>
                {!isMobile && (
                  <img
                    src={fazitechImg}
                    alt="Profile"
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      boxShadow: '0 2px 8px rgba(30, 64, 175, 0.07)',
                      border: '3px solid rgba(255,255,255,0.3)',
                      objectFit: 'cover'
                    }}
                  />
                )}
                <Box>
                  <Typography variant="h4" fontWeight={700} sx={{ mb: 1, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                    Omondi Alex
                  </Typography>
                  <Typography variant="h6" sx={{ opacity: 0.9, mb: 2, fontSize: { xs: '1rem', md: '1.25rem' } }}>
                    Cybersecurity & Software Engineering Specialist
                  </Typography>
                  <Typography variant="body1" sx={{ opacity: 0.8, mb: 3, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                    Transforming digital challenges into secure, innovative solutions. 
                    Ready to collaborate on your next project.
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                    <Button 
                      variant="contained" 
                      startIcon={<EmailIcon />}
                      size={isMobile ? "small" : "medium"}
                      sx={{ 
                        background: 'rgba(255,255,255,0.2)', 
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.3)',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.3)',
                        }
                      }}
                      onClick={() => window.open('mailto:omondialex3517@gmail.com', '_blank')}
                    >
                      Get In Touch
                    </Button>
                    <Button 
                      variant="outlined" 
                      startIcon={<LinkedInIcon />}
                      size={isMobile ? "small" : "medium"}
                      sx={{ 
                        borderColor: 'rgba(255,255,255,0.5)', 
                        color: 'white',
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255,255,255,0.1)',
                        }
                      }}
                      onClick={() => window.open('https://www.linkedin.com/in/omondi-alex/', '_blank')}
                    >
                      Connect on LinkedIn
                    </Button>
                  </Box>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Professional Overview */}
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: '#1f2937', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            Professional Credentials
          </Typography>
          <Grid container spacing={3}>
            {quickStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ borderRadius: 3, boxShadow: 2, height: '100%' }}>
                  <CardContent sx={{ p: { xs: 2, md: 3 }, textAlign: 'center' }}>
                    {!isMobile && (
                      <Box sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '50%', 
                        background: stat.color, 
                        color: 'white', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mx: 'auto', 
                        mb: 2 
                      }}>
                        {stat.icon}
                      </Box>
                    )}
                    <Typography variant="h4" fontWeight={700} sx={{ color: stat.color, mb: 1, fontSize: { xs: '1.5rem', md: '2.125rem' } }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Services Offered */}
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: '#1f2937', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            Services I Offer
          </Typography>
          <Grid container spacing={3}>
            {services.map((service, index) => (
              <Grid item xs={12} sm={6} md={3} lg={2.4} key={index}>
                <Card
                  sx={{
                    borderRadius: 3,
                    boxShadow: 2,
                    height: '100%',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    },
                    ...(index === 4 && {
                      animation: 'wiggle 2s infinite',
                      '@keyframes wiggle': {
                        '0%': { transform: 'rotate(-4deg)' },
                        '20%': { transform: 'rotate(4deg)' },
                        '40%': { transform: 'rotate(-4deg)' },
                        '60%': { transform: 'rotate(4deg)' },
                        '80%': { transform: 'rotate(-4deg)' },
                        '100%': { transform: 'rotate(0deg)' },
                      },
                    }),
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3 }, textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        mb: 2,
                        fontSize: { xs: 40, md: 56 },
                        display: 'inline-block',
                        ...(index === 0 && {
                          animation: 'pulseLock 1.8s infinite',
                          '@keyframes pulseLock': {
                            '0%': { transform: 'scale(1)' },
                            '50%': { transform: 'scale(1.12)' },
                            '100%': { transform: 'scale(1)' },
                          },
                        }),
                        ...(index === 1 && {
                          animation: 'blinkLaptop 1.2s infinite',
                          '@keyframes blinkLaptop': {
                            '0%': { opacity: 1 },
                            '40%': { opacity: 0.5 },
                            '60%': { opacity: 1 },
                            '100%': { opacity: 1 },
                          },
                        }),
                        ...(index === 2 && {
                          animation: 'rotateGear 2.5s linear infinite',
                          '@keyframes rotateGear': {
                            '0%': { transform: 'rotate(0deg)' },
                            '100%': { transform: 'rotate(360deg)' },
                          },
                        }),
                        ...(index === 3 && {
                          animation: 'bounceClip 1.6s infinite',
                          '@keyframes bounceClip': {
                            '0%': { transform: 'translateY(0)' },
                            '30%': { transform: 'translateY(-10px)' },
                            '50%': { transform: 'translateY(0)' },
                            '70%': { transform: 'translateY(-6px)' },
                            '100%': { transform: 'translateY(0)' },
                          },
                        }),
                      }}
                    >
                      {service.icon}
                    </Typography>
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#1f2937', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={600} sx={{ mb: 3, color: '#1f2937', fontSize: { xs: '1.25rem', md: '1.5rem' } }}>
            Learn More About Me
          </Typography>
          <Grid container spacing={3}>
            {quickActions.map((action, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    borderRadius: 3, 
                    boxShadow: 2, 
                    height: '100%', 
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-4px)',
                      boxShadow: 4,
                    }
                  }}
                  onClick={() => navigate(`${action.path}?tab=${action.tab}`)}
                >
                  <CardContent sx={{ p: { xs: 2, md: 3 }, textAlign: 'center' }}>
                    {!isMobile && (
                      <Box sx={{ 
                        width: 50, 
                        height: 50, 
                        borderRadius: '50%', 
                        background: '#f3f4f6', 
                        color: '#6b7280', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mx: 'auto', 
                        mb: 2 
                      }}>
                        {action.icon}
                      </Box>
                    )}
                    <Typography variant="h6" fontWeight={600} sx={{ mb: 1, color: '#1f2937', fontSize: { xs: '1rem', md: '1.25rem' } }}>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: { xs: '0.75rem', md: '0.875rem' } }}>
                      {action.description}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      endIcon={<ArrowForwardIcon />}
                      size={isMobile ? "small" : "medium"}
                      sx={{ 
                        borderColor: '#2563eb', 
                        color: '#2563eb',
                        '&:hover': {
                          borderColor: '#1d4ed8',
                          background: '#f8fafc'
                        }
                      }}
                    >
                      Explore
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>

        {/* Current Status */}
        <Grid item xs={12}>
          <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box sx={{ p: { xs: 2, md: 3 }, background: '#f8fafc', borderRadius: 2, textAlign: 'center' }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#1f2937', fontSize: { xs: '1.125rem', md: '1.25rem' } }}>
                  Ready to Collaborate?
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: { xs: '0.875rem', md: '1rem' } }}>
                  I'm always open to discussing new opportunities, projects, and partnerships. 
                  Let's connect and explore how we can work together.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    startIcon={<EmailIcon />}
                    size={isMobile ? "small" : "medium"}
                    sx={{ background: '#2563eb' }}
                    onClick={() => window.open('mailto:omondialex3517@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                  <Button 
                    variant="outlined" 
                    startIcon={<WhatsAppIcon />}
                    size={isMobile ? "small" : "medium"}
                    sx={{ borderColor: '#25d366', color: '#25d366' }}
                    onClick={() => window.open('https://wa.me/254707750879', '_blank')}
                  >
                    WhatsApp
                  </Button>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard; 