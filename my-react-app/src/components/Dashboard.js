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

  const services = [
    { title: "Cybersecurity Solutions", description: "Protect your digital assets with advanced security frameworks", icon: "🔒" },
    { title: "Software Development", description: "Custom applications built with modern technologies", icon: "💻" },
    { title: "IT Support & Training", description: "Comprehensive technical support and digital literacy training", icon: "🛠️" },
    { title: "Virtual Assistance", description: "Professional administrative and technical support services", icon: "📋" },
    { title: "Graphic Design", description: "Creative graphic design for branding, marketing, and digital presence", icon: "🎨" },
    { title: "GRC Consulting", description: "Governance, Risk, and Compliance advisory for secure, compliant organizations.", icon: "🛡️" },
  ];

  // Carousel state for large screens
  const [carouselServices, setCarouselServices] = React.useState(services);
  const [isSliding, setIsSliding] = React.useState(false);
  React.useEffect(() => {
    if (!isMobile) {
      const interval = setInterval(() => {
        setIsSliding(true);
        setTimeout(() => {
          setCarouselServices((prev) => {
            const next = [...prev];
            next.push(next.shift()); // move first to end
            return next;
          });
          setIsSliding(false);
        }, 600); // match transition duration
      }, 3500);
      return () => clearInterval(interval);
    }
  }, [isMobile]);

  const quickStats = [
    { label: "Years Experience", value: "2+", icon: <WorkIcon />, color: "#2563eb" },
    { label: "Education Level", value: "MSc", icon: <SchoolIcon />, color: "#10b981" },
    { label: "Certifications", value: "6", icon: <VerifiedIcon />, color: "#f59e0b" },
    { label: "Expertise Areas", value: services.length, icon: <StarIcon />, color: "#8b5cf6" },
  ];

  const quickActions = [
    { title: "View Full Profile", description: "Explore complete professional background", path: "/profile", icon: <PersonIcon />, tab: 0 },
    { title: "Work Experience", description: "See proven track record", path: "/profile", icon: <WorkIcon />, tab: 1 },
    { title: "Education", description: "Review academic credentials", path: "/profile", icon: <SchoolIcon />, tab: 2 },
    { title: "Expertise", description: "Discover my skills and areas of expertise", path: "/profile", icon: <StarIcon />, tab: 4 },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: { xs: 8, md: 10 }, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Grid container spacing={{ xs: 2, md: 4 }} justifyContent="center">
        {/* Hero Section */}
        <Grid item xs={12}>
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(102, 126, 234, 0.25)', 
            background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 50%, #7c3aed 100%)', 
            color: 'white',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              right: 0,
              width: '50%',
              height: '100%',
              background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
              pointerEvents: 'none',
            }
          }}>
            <CardContent sx={{ p: { xs: 3, md: 4 }, position: 'relative', zIndex: 1 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 2, md: 3 }, mb: 3 }}>
                {!isMobile && (
                  <Box sx={{
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      inset: -4,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, rgba(255,255,255,0.3), rgba(255,255,255,0.1))',
                      zIndex: -1,
                    }
                  }}>
                    <img
                      src={fazitechImg}
                      alt="Profile"
                      style={{
                        width: 100,
                        height: 100,
                        borderRadius: '50%',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
                        border: '4px solid rgba(255,255,255,0.4)',
                        objectFit: 'cover'
                      }}
                    />
                  </Box>
                )}
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h4" fontWeight={700} sx={{ 
                    mb: 1, 
                    fontSize: { xs: '1.75rem', md: '2.5rem' },
                    textShadow: '0 2px 8px rgba(0,0,0,0.2)',
                    background: 'linear-gradient(135deg, #ffffff 0%, #e0e7ff 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>
                    Omondi Alex
                  </Typography>
                  <Typography variant="h6" sx={{ 
                    opacity: 0.95, 
                    mb: 2, 
                    fontSize: { xs: '1.1rem', md: '1.35rem' },
                    fontWeight: 500,
                    textShadow: '0 1px 4px rgba(0,0,0,0.15)',
                  }}>
                    Security & Software Engineer
                  </Typography>
                  <Typography variant="body1" sx={{ 
                    opacity: 0.9, 
                    mb: 3, 
                    fontSize: { xs: '0.95rem', md: '1.1rem' },
                    lineHeight: 1.7,
                    maxWidth: '90%',
                  }}>
                    Transforming digital challenges into secure, innovative solutions. 
                    Ready to collaborate on your next project.
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 2,
                      flexWrap: 'wrap',
                      flexDirection: isMobile ? 'column' : 'row',
                      alignItems: 'center',
                      justifyContent: isMobile ? 'center' : 'flex-start',
                      width: '100%',
                      mt: 2,
                    }}
                  >
                    <Button
                      variant="contained"
                      startIcon={<EmailIcon />}
                      size={isMobile ? "small" : "medium"}
                      sx={{
                        background: 'rgba(255,255,255,0.25)',
                        color: 'white',
                        border: '2px solid rgba(255,255,255,0.4)',
                        width: isMobile ? '100%' : 'auto',
                        mb: isMobile ? 1.5 : 0,
                        px: 3,
                        py: 1.5,
                        fontWeight: 600,
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          background: 'rgba(255,255,255,0.35)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(0,0,0,0.2)',
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
                        borderColor: 'rgba(255,255,255,0.6)',
                        borderWidth: 2,
                        color: 'white',
                        width: isMobile ? '100%' : 'auto',
                        px: 3,
                        py: 1.5,
                        fontWeight: 600,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: 'white',
                          background: 'rgba(255,255,255,0.15)',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
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
          <Typography variant="h5" fontWeight={700} sx={{ 
            mb: 3, 
            color: '#1e293b', 
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}>
            <Box sx={{
              width: 4,
              height: 32,
              borderRadius: 2,
              background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
            }} />
            Professional Credentials
          </Typography>
          <Grid container spacing={3}>
            {quickStats.map((stat, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ 
                  borderRadius: 4, 
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)', 
                  height: '100%',
                  background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                  border: '2px solid #e2e8f0',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                  },
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: `linear-gradient(180deg, ${stat.color} 0%, ${stat.color}dd 100%)`,
                  }
                }}>
                  <CardContent sx={{ p: { xs: 2.5, md: 3.5 }, textAlign: 'center' }}>
                    {!isMobile && (
                      <Box sx={{ 
                        width: 64, 
                        height: 64, 
                        borderRadius: '16px', 
                        background: `linear-gradient(135deg, ${stat.color} 0%, ${stat.color}dd 100%)`, 
                        color: 'white', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mx: 'auto', 
                        mb: 2.5,
                        boxShadow: `0 4px 12px ${stat.color}40`,
                      }}>
                        {stat.icon}
                      </Box>
                    )}
                    <Typography variant="h4" fontWeight={700} sx={{ 
                      color: stat.color, 
                      mb: 1, 
                      fontSize: { xs: '2rem', md: '2.5rem' },
                      textShadow: `0 2px 4px ${stat.color}20`,
                    }}>
                      {stat.value}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      color: '#64748b',
                      fontWeight: 500,
                    }}>
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
          <Typography variant="h5" fontWeight={700} sx={{ 
            mb: 3, 
            color: '#1e293b', 
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}>
            <Box sx={{
              width: 4,
              height: 32,
              borderRadius: 2,
              background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
            }} />
            Services I Offer
          </Typography>
          {isMobile ? (
            <Grid container spacing={3}>
              {services.map((service, index) => (
                <Grid item xs={12} sm={6} md={3} lg={2.4} key={index}>
                  <Card
                    sx={{
                      borderRadius: 4,
                      boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                      height: '100%',
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '2px solid #e2e8f0',
                      transition: 'all 0.3s ease',
                      position: 'relative',
                      overflow: 'hidden',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '4px',
                        height: '100%',
                        background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
                      },
                      '&:hover': {
                        transform: 'translateY(-6px)',
                        boxShadow: '0 12px 32px rgba(37, 99, 235, 0.15)',
                        borderColor: '#2563eb',
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
          ) : (
            <Box sx={{ width: '100%', overflow: 'hidden', position: 'relative' }}>
              <Box
                sx={{
                  display: 'flex',
                  transition: isSliding ? 'transform 0.6s cubic-bezier(0.4,0.2,0.2,1)' : 'none',
                  transform: isSliding ? 'translateX(-16.66%)' : 'translateX(0)',
                  width: '120%',
                }}
              >
                {carouselServices.map((service, index) => (
                  <Box key={index} sx={{ flex: '0 0 16.66%', maxWidth: '16.66%', px: 1 }}>
                    <Card
                      sx={{
                        borderRadius: 4,
                        boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
                        height: '100%',
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        transition: 'all 0.3s ease',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          width: '4px',
                          height: '100%',
                          background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
                        },
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 12px 32px rgba(37, 99, 235, 0.15)',
                          borderColor: '#2563eb',
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
                  </Box>
                ))}
              </Box>
            </Box>
          )}
        </Grid>

        {/* Quick Actions */}
        <Grid item xs={12}>
          <Typography variant="h5" fontWeight={700} sx={{ 
            mb: 3, 
            color: '#1e293b', 
            fontSize: { xs: '1.5rem', md: '1.75rem' },
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
          }}>
            <Box sx={{
              width: 4,
              height: 32,
              borderRadius: 2,
              background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
            }} />
            Learn More About Me
          </Typography>
          <Grid container spacing={3}>
            {quickActions.map((action, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card 
                  sx={{ 
                    borderRadius: 4, 
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)', 
                    height: '100%', 
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '4px',
                      height: '100%',
                      background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
                    },
                    '&:hover': {
                      transform: 'translateY(-6px)',
                      boxShadow: '0 12px 32px rgba(37, 99, 235, 0.15)',
                      borderColor: '#2563eb',
                    }
                  }}
                  onClick={() => navigate(`${action.path}?tab=${action.tab}`)}
                >
                  <CardContent sx={{ 
                    p: { xs: 2.5, md: 3.5 }, 
                    textAlign: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                  }}>
                    {!isMobile && (
                      <Box sx={{ 
                        width: 64, 
                        height: 64, 
                        borderRadius: '16px', 
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', 
                        color: 'white', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center', 
                        mx: 'auto', 
                        mb: 2.5,
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                      }}>
                        {action.icon}
                      </Box>
                    )}
                    <Typography variant="h6" fontWeight={700} sx={{ 
                      mb: 1, 
                      color: '#1e293b', 
                      fontSize: { xs: '1.1rem', md: '1.25rem' } 
                    }}>
                      {action.title}
                    </Typography>
                    <Typography variant="body2" sx={{ 
                      mb: 2.5, 
                      fontSize: { xs: '0.875rem', md: '0.95rem' },
                      color: '#64748b',
                      lineHeight: 1.6,
                      flex: 1,
                    }}>
                      {action.description}
                    </Typography>
                    <Button 
                      variant="outlined" 
                      endIcon={<ArrowForwardIcon />}
                      size={isMobile ? "small" : "medium"}
                      sx={{ 
                        borderColor: '#2563eb', 
                        borderWidth: 2,
                        color: '#2563eb',
                        fontWeight: 600,
                        px: 2.5,
                        mt: 'auto',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          borderColor: '#1d4ed8',
                          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                          transform: 'translateX(4px)',
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
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08)',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '2px solid #e2e8f0',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              width: '4px',
              height: '100%',
              background: 'linear-gradient(180deg, #2563eb 0%, #1e40af 100%)',
            }
          }}>
            <CardContent sx={{ p: { xs: 3, md: 4 } }}>
              <Box sx={{ 
                p: { xs: 3, md: 4 }, 
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', 
                borderRadius: 3, 
                textAlign: 'center',
                border: '1.5px solid #bfdbfe',
              }}>
                <Typography variant="h6" fontWeight={700} sx={{ 
                  mb: 2, 
                  color: '#1e40af', 
                  fontSize: { xs: '1.25rem', md: '1.5rem' } 
                }}>
                  Ready to Collaborate?
                </Typography>
                <Typography variant="body1" sx={{ 
                  mb: 3, 
                  fontSize: { xs: '0.95rem', md: '1.1rem' },
                  color: '#1e40af',
                  opacity: 0.9,
                  lineHeight: 1.7,
                }}>
                  I'm always open to discussing new opportunities, projects, and partnerships. 
                  Let's connect and explore how we can work together.
                </Typography>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                  <Button 
                    variant="contained" 
                    startIcon={<EmailIcon />}
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                      color: 'white',
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        background: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 6px 20px rgba(37, 99, 235, 0.4)',
                      }
                    }}
                    onClick={() => window.open('mailto:omondialex3517@gmail.com', '_blank')}
                  >
                    Send Email
                  </Button>
                  <Button 
                    variant="outlined" 
                    startIcon={<WhatsAppIcon />}
                    size={isMobile ? "small" : "medium"}
                    sx={{ 
                      borderColor: '#25d366', 
                      borderWidth: 2,
                      color: '#25d366',
                      px: 3,
                      py: 1.5,
                      fontWeight: 600,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: '#20b858',
                        background: 'rgba(37, 211, 102, 0.1)',
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 12px rgba(37, 211, 102, 0.2)',
                      }
                    }}
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