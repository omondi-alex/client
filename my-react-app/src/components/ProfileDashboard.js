import React from "react";
import { Box, Card, CardContent, Avatar, Typography, Grid, Tabs, Tab, TextField, InputAdornment, Paper, Divider, IconButton, Chip, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
import ComputerIcon from '@mui/icons-material/Computer';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import SupportIcon from '@mui/icons-material/Support';
import BusinessIcon from '@mui/icons-material/Business';
import GroupIcon from '@mui/icons-material/Group';
import AssistantIcon from '@mui/icons-material/Assistant';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

const info = [
  { label: 'Full Name', value: 'Omondi Alex Omieno' },
  { label: 'Email', value: 'omondialex3517@gmail.com ' },
  { label: 'Alternate Email', value: 'alex.omondi@aims-senegal.org' },
  { label: 'Address', value: 'Nairobi, Kenya' },
  { label: 'WhatsApp', value: '+254 707 750879' },
  { label: 'LinkedIn', value: 'https://www.linkedin.com/in/omondi-alex/' },
];

const ProfileDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = parseInt(searchParams.get('tab') || '0');
  const [tab, setTab] = React.useState(initialTab);
  const isMobile = useMediaQuery('(max-width:1280px)');
  const isMediumLarge = useMediaQuery('(max-width:1440px)');

  // Update tab when URL params change
  React.useEffect(() => {
    const tabFromUrl = parseInt(searchParams.get('tab') || '0');
    setTab(tabFromUrl);
  }, [searchParams]);

  // Handle tab change and update URL
  const handleTabChange = (_, newValue) => {
    setTab(newValue);
    const newSearchParams = new URLSearchParams(searchParams);
    newSearchParams.set('tab', newValue.toString());
    setSearchParams(newSearchParams, { replace: true });
  };

  // Mobile Design (1280px and below)
  if (isMobile) {
    return (
      <Box sx={{ 
        minHeight: '100vh', 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        pt: 8,
        pb: 4
      }}>
        <Container maxWidth="sm">
          {/* Hero Profile Section */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                <Avatar 
                  src={fazitechImg} 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    border: '4px solid #fff', 
                    boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
                    mx: 'auto'
                  }} 
                />
              </Box>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: '#1f2937' }}>
                Omondi Alex
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                Cybersecurity, GRC & Software Engineering Specialist
              </Typography>
              
              {/* Quick Stats */}
              <Grid container spacing={2} sx={{ mb: 3 }}>
                <Grid item xs={6}>
                  <Box sx={{
                    background: 'white',
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
                    border: '1.5px solid #e0e7ef',
                    minHeight: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 2,
                    px: 1,
                    mb: { xs: 2, sm: 0 }
                  }}>
                    <Box sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1
                    }}>
                      <WorkIcon sx={{ fontSize: 22 }} />
                    </Box>
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#2563eb', mb: 0.5 }}>2+</Typography>
                    <Typography variant="caption" color="text.secondary">Years Experience</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{
                    background: 'white',
                    borderRadius: 3,
                    boxShadow: '0 4px 16px rgba(30, 64, 175, 0.08)',
                    border: '1.5px solid #e0e7ef',
                    minHeight: 110,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 2,
                    px: 1,
                    mb: { xs: 2, sm: 0 }
                  }}>
                    <Box sx={{
                      width: 38,
                      height: 38,
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 1
                    }}>
                      <SchoolIcon sx={{ fontSize: 22 }} />
                    </Box>
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#10b981', mb: 0.5 }}>MSc</Typography>
                    <Typography variant="caption" color="text.secondary">Education</Typography>
                  </Box>
                </Grid>
              </Grid>

              {/* Contact Buttons */}
              <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
                <IconButton 
                  href="mailto:omondialex3517@gmail.com"
                  sx={{ 
                    background: '#2563eb', 
                    color: 'white',
                    '&:hover': { background: '#1d4ed8' }
                  }}
                >
                  <EmailIcon />
                </IconButton>
                <IconButton 
                  href="https://wa.me/254707750879"
                  sx={{ 
                    background: '#25d366', 
                    color: 'white',
                    '&:hover': { background: '#128c7e' }
                  }}
                >
                  <WhatsAppIcon />
                </IconButton>
                <IconButton 
                  href="https://www.linkedin.com/in/omondi-alex/"
                  sx={{ 
                    background: '#0077b5', 
                    color: 'white',
                    '&:hover': { background: '#005885' }
                  }}
                >
                  <LinkedInIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>

          {/* Personal Information Card */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <PersonIcon />
                </Box>
                <Typography variant="h6" fontWeight={600} color="#1f2937">
                  Personal Information
                </Typography>
              </Box>
              
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box sx={{ 
                    background: '#f8fafc', 
                    borderRadius: 2, 
                    p: 3, 
                    mb: 2,
                    border: '1px solid #e2e8f0'
                  }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                      Full Name
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Omondi Alex Omieno
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    background: '#f8fafc', 
                    borderRadius: 2, 
                    p: 3, 
                    mb: 2,
                    border: '1px solid #e2e8f0'
                  }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                      Email
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      omondialex3517@gmail.com
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    background: '#f8fafc', 
                    borderRadius: 2, 
                    p: 3, 
                    mb: 2,
                    border: '1px solid #e2e8f0'
                  }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                      WhatsApp
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      +254 707 750879
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    background: '#f8fafc', 
                    borderRadius: 2, 
                    p: 3, 
                    mb: 2,
                    border: '1px solid #e2e8f0'
                  }}>
                    <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                      Address
                    </Typography>
                    <Typography variant="body1" fontWeight={500}>
                      Nairobi, Kenya
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Professional Bio Card */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <InfoOutlinedIcon />
                </Box>
                <Typography variant="h6" fontWeight={600} color="#1f2937">
                  Professional Bio
                </Typography>
              </Box>
              
              <Box sx={{ 
                background: 'linear-gradient(135deg, #f3f8ff 0%, #e0f2fe 100%)', 
                borderRadius: 3,
                p: 3,
                border: '1px solid #dbeafe'
              }}>
                <Typography variant="body1" sx={{ lineHeight: 1.7, color: '#374151' }}>
                Security & Software Engineer with over 2 years of experience building secure, scalable solutions. I specialize in cloud security frameworks, full-stack development, graphic design and GRC consulting. Beyond technical work, I'm passionate about education, lecturing at Kirinyaga University and mentoring young professionals. My approach combines rigorous security practices with innovative software engineering to deliver solutions that are both robust and user-friendly. Always open to collaborating on meaningful projects that make a difference.
                </Typography>
              </Box>
            </CardContent>
          </Card>

          {/* Work Experience Card */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <WorkIcon />
                </Box>
                <Typography variant="h6" fontWeight={600} color="#1f2937">
                  Work Experience
                </Typography>
              </Box>

                <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      background: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <WorkIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={600}>Lecturer</Typography>
                      <Typography variant="caption" color="text.secondary">Kirinyaga University • 2025-09 to date</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    • Web Development<br/>
                    • Object Oriented Analysis and Design
                  
                  </Typography>
                </AccordionDetails>
              </Accordion>

               <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      background: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <WorkIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={600}>Platforms Developer</Typography>
                      <Typography variant="caption" color="text.secondary">Agriwatt Hub Limited • 2025-08 to 2025-11</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    • Graphics Design<br/>
                    • Virtual Assistant<br/>
                    • Create data visualization dashboards for farm analytics<br/>
                    • Develop mobile data collection modules (online-first approach)<br/>
                    • Build farmer feedback systems (SMS/USSD platforms)<br/>
                    • Collaborate on website improvements and user experience enhancements
                  </Typography>
                </AccordionDetails>
              </Accordion>
              
              <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      background: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <WorkIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={600}>ICT Support Volunteer</Typography>
                      <Typography variant="caption" color="text.secondary">YPMP • 2024-01 to date</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    • Manage the website<br/>
                    • Design graphics<br/>
                    • Serve as a virtual assistant
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      background: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <WorkIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={600}>Software Security Engineer</Typography>
                      <Typography variant="caption" color="text.secondary">Enovise Group • 2024-02 to 2025-06</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    • Designed and implemented security solutions<br/>
                    • Created software tools for incident investigation<br/>
                    • Monitored security logs and responded to incidents<br/>
                    • Managed vulnerabilities and threat detection
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      background: '#2563eb',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <WorkIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={600}>ICT Officer</Typography>
                      <Typography variant="caption" color="text.secondary">Ministry of Education • 2023-01 to 2024-01</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    • Supported E-Learning and content development<br/>
                    • Trained teachers in digital literacy<br/>
                    • Provided technical support and maintenance<br/>
                    • Assisted with ICT integration in education
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          {/* Education Card */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <SchoolIcon />
                </Box>
                <Typography variant="h6" fontWeight={600} color="#1f2937">
                  Education
                </Typography>
              </Box>
              
              <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      background: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <SchoolIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={600}>Master's in Computer Security</Typography>
                      <Typography variant="caption" color="text.secondary">AIMS • 2023-10 to 2025-07</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    <strong>Thesis:</strong> A Cloud Computing Security Assessment Framework for FINTECHs in Kenya<br/>
                    <strong>Status:</strong> 2025-07 <br/>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box sx={{ 
                      width: 32, 
                      height: 32, 
                      borderRadius: '50%', 
                      background: '#10b981',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'white'
                    }}>
                      <SchoolIcon sx={{ fontSize: 16 }} />
                    </Box>
                    <Box>
                      <Typography fontWeight={600}>Bachelor's in Computer Science</Typography>
                      <Typography variant="caption" color="text.secondary">Kirinyaga University • 2018-09 to 2022-10</Typography>
                    </Box>
                  </Box>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                    <strong>Project:</strong> Garbage Management System<br/>
                    <strong>Award:</strong> Second Class Honours (Upper Division)
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </CardContent>
          </Card>

          {/* Certifications Card */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <VerifiedIcon />
                </Box>
                <Typography variant="h6" fontWeight={600} color="#1f2937">
                  Certifications
                </Typography>
              </Box>
              
              <Box sx={{ maxHeight: 400, overflowY: 'auto', pr: 1 }}>

                 <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        background: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={600}>Business Management</Typography>
                        <Typography variant="caption" color="text.secondary">IIAfrica • 2025-08</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Skills in business and data analytics, leadership, and problem-solving, equipping me with the tools to bridge technology, business strategy, and innovation.

                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        background: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={600}>Mentor in YPMP</Typography>
                        <Typography variant="caption" color="text.secondary">IYPMI • 2024-11</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Supporting Young People to Rethink, Refocus, and Succeed
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        background: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={600}>Virtual Assistant</Typography>
                        <Typography variant="caption" color="text.secondary">ALX - The Room • 2024-08</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Professional skills development for Virtual Assistant role
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        background: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={600}>Cyber Security</Typography>
                        <Typography variant="caption" color="text.secondary">Scratch and Script • 2024-04</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Cybersecurity Fundamentals, Threat Analysis, and Incident Response
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        background: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={600}>Mentorship Training</Typography>
                        <Typography variant="caption" color="text.secondary">IYPMI • 2023-11</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Supporting Young People to Rethink, Refocus, and Succeed
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        background: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={600}>Full Stack Software Engineering Program</Typography>
                        <Typography variant="caption" color="text.secondary">ALX Africa • 2023-11</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      A 12 month Software Engineering Programme with a specialization in Front-end
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion sx={{ mb: 2, borderRadius: 3, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                      <Box sx={{ 
                        width: 32, 
                        height: 32, 
                        borderRadius: '50%', 
                        background: '#f59e0b',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white'
                      }}>
                        <VerifiedIcon sx={{ fontSize: 16 }} />
                      </Box>
                      <Box>
                        <Typography fontWeight={600}>Android Development</Typography>
                        <Typography variant="caption" color="text.secondary">Google Africa Developer Training Program • 2023-06</Typography>
                      </Box>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
                      Mobile Apps development using Kotlin
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </Box>
            </CardContent>
          </Card>

          {/* Expertise Card */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'rgba(255,255,255,0.95)',
            backdropFilter: 'blur(10px)'
          }}>
            <CardContent sx={{ p: 4 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
                <Box sx={{ 
                  width: 40, 
                  height: 40, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white'
                }}>
                  <StarIcon />
                </Box>
                <Typography variant="h6" fontWeight={600} color="#1f2937">
                  Areas of Expertise
                </Typography>
              </Box>
              
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #f3f8ff 0%, #e0f2fe 100%)', 
                    borderRadius: 3,
                    p: 3,
                    border: '1px solid #dbeafe'
                  }}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2, color: '#2563eb' }}>
                      Industry Expertise
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      <Chip label="Software Security" size="small" sx={{ background: '#2563eb', color: 'white' }} />
                      <Chip label="Software Development" size="small" sx={{ background: '#2563eb', color: 'white' }} />
                      <Chip label="IT Support" size="small" sx={{ background: '#2563eb', color: 'white' }} />
                      <Chip label="Virtual Assistant" size="small" sx={{ background: '#2563eb', color: 'white' }} />
                      <Chip label="Graphics Design" size="small" sx={{ background: '#2563eb', color: 'white' }} />
                      <Chip label="GRC" size="small" sx={{ background: '#2563eb', color: 'white' }} />
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)', 
                    borderRadius: 3,
                    p: 3,
                    border: '1px solid #bbf7d0'
                  }}>
                    <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 2, color: '#10b981' }}>
                      Software Expertise
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      <Chip label="React Js" size="small" sx={{ background: '#10b981', color: 'white' }} />
                      <Chip label="Next Js" size="small" sx={{ background: '#10b981', color: 'white' }} />
                      <Chip label="Python" size="small" sx={{ background: '#10b981', color: 'white' }} />
                      <Chip label="Microsoft Office" size="small" sx={{ background: '#10b981', color: 'white' }} />
                      <Chip label="Kotlin" size="small" sx={{ background: '#10b981', color: 'white' }} />
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Container>
      </Box>
    );
  }

  // Desktop layout (fluid, responsive)
  return (
    <Container maxWidth="lg" sx={{ py: 4, mt: { xs: 8, md: 10 }, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Grid 
        container 
        spacing={isMobile ? 2 : 4} 
        justifyContent="center"
        alignItems="stretch" 
        direction={isMobile ? 'column' : 'row'}
      >
        <Grid item xs={12} md={4}>
          <Card sx={{
            width: '100%',
            borderRadius: 4,
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            p: { xs: 2, md: 3 },
            mb: { xs: 2, md: 0 },
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
            border: '1px solid rgba(226, 232, 240, 0.8)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
            }
          }}>
            <Box sx={{ 
              position: 'relative', 
              mb: 2,
              '&::after': {
                content: '""',
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: isMobile ? 80 : 110,
                height: isMobile ? 80 : 110,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)',
                zIndex: 0,
              }
            }}>
              <Avatar 
                src={fazitechImg} 
                sx={{ 
                  width: isMobile ? 70 : 100, 
                  height: isMobile ? 70 : 100, 
                  border: '4px solid #fff', 
                  boxShadow: '0 8px 24px rgba(102, 126, 234, 0.2)',
                  position: 'relative',
                  zIndex: 1,
                }} 
              />
            </Box>
            <Typography 
              variant="h6" 
              fontWeight={700} 
              align="center" 
              sx={{ 
                mb: 0.5, 
                fontSize: isMobile ? '1.1rem' : isMediumLarge ? '1.1rem' : '1.25rem',
                background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Omondi Alex Omieno
            </Typography>
            <Box sx={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 0.75,
              px: 1.5,
              py: 0.75,
              mb: 2,
              borderRadius: 2,
              background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
              border: '1px solid #bae6fd',
            }}>
              <EmailIcon sx={{ fontSize: isMobile ? 14 : 16, color: '#3b82f6' }} />
              <Typography 
                variant="body2" 
                align="center" 
                sx={{ 
                  mb: 0,
                  fontSize: isMobile ? '0.85rem' : isMediumLarge ? '0.95rem' : '1rem',
                  color: '#3b82f6',
                  fontWeight: 500,
                }}
              >
                omondialex3517@gmail.com
              </Typography>
            </Box>
            <Divider sx={{ my: 2, width: '100%', borderColor: 'rgba(226, 232, 240, 0.6)' }} />
            <Box sx={{ width: '100%' }}>
              <Typography 
                variant="subtitle1" 
                fontWeight={700} 
                mb={2} 
                align="left" 
                sx={{ 
                  fontSize: isMobile ? '1rem' : isMediumLarge ? '1rem' : '1.1rem',
                  color: '#1e293b',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                }}>
                  <InfoOutlinedIcon sx={{ fontSize: 16 }} />
                </Box>
                Bio
              </Typography>
              <Box sx={{
                p: 2,
                borderRadius: 2.5,
                background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                border: '1.5px solid #bfdbfe',
                minHeight: 'fit-content',
                boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
              }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: 1.8,
                    color: '#1e40af',
                    fontWeight: 400,
                    fontFamily: '"Inter", "Poppins", "Roboto", "Segoe UI", -apple-system, BlinkMacSystemFont, sans-serif',
                    letterSpacing: '0.01em',
                  }}
                >
              Security & Software Engineer with over 2 years of experience building secure, scalable solutions. I specialize in cloud security frameworks, full-stack development, graphic design and GRC consulting. Beyond technical work, I'm passionate about education, lecturing at Kirinyaga University and mentoring young professionals. My approach combines rigorous security practices with innovative software engineering to deliver solutions that are both robust and user-friendly. Always open to collaborating on meaningful projects that make a difference.                </Typography>
              </Box>
            </Box>
          </Card>
        </Grid>
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{
            borderRadius: 3,
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            p: 0,
          }}>
            <Tabs
              value={tab}
              onChange={handleTabChange}
              variant={isMobile ? 'scrollable' : 'standard'}
              scrollButtons={isMobile ? 'auto' : false}
              sx={{
                borderBottom: '2px solid #e2e8f0',
                px: isMediumLarge ? 1 : 2,
                pt: 2,
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: isMobile ? 'auto' : 'visible',
                background: 'linear-gradient(135deg, #f8fafc 0%, #ffffff 100%)',
                '& .MuiTabs-flexContainer': {
                  flexWrap: 'nowrap',
                  gap: 0.5,
                },
                '& .MuiTabs-scroller': {
                  overflowX: isMobile ? 'auto' : 'visible',
                },
                '& .MuiTabs-indicator': {
                  height: 3,
                  borderRadius: '3px 3px 0 0',
                  background: 'linear-gradient(90deg, #2563eb 0%, #1e40af 100%)',
                },
                '& .MuiTab-root': {
                  fontWeight: 600,
                  color: '#64748b',
                  minWidth: 80,
                  maxWidth: 140,
                  px: 2,
                  py: 1.5,
                  mx: 0.5,
                  borderRadius: '8px 8px 0 0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  fontSize: isMobile ? '0.85rem' : isMediumLarge ? '0.92rem' : '0.98rem',
                  lineHeight: 1.2,
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                  textTransform: 'none',
                  position: 'relative',
                  '&:hover': {
                    color: '#2563eb',
                    background: 'rgba(37, 99, 235, 0.05)',
                  },
                },
                '& .Mui-selected': {
                  color: '#2563eb !important',
                  background: 'rgba(37, 99, 235, 0.08)',
                  fontWeight: 700,
                },
              }}
            >
              <Tab label="Profile" />
              <Tab label="Work-Exp" />
              <Tab label="Education" />
              <Tab label="Certifications" />
              <Tab label="Expertise" />
            </Tabs>
            <TabPanel value={tab} index={0}>
              <Grid container spacing={3} sx={{ mt: 0.5 }}>
                <Grid item xs={12} md={6}>
                  {/* Full Name - Premium Card */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Full Name <span style={{color:'#2563eb'}}>*</span>
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        color: '#1e293b',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          boxShadow: '0 4px 12px rgba(37, 99, 235, 0.2)'
                        }}
                      >
                        <PersonIcon sx={{ fontSize: 24 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25 }}>
                          Omondi Alex Omieno
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                          Personal identification
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Alternative Email - Premium Card */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Alternative Email
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        color: '#1e293b',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          boxShadow: '0 4px 12px rgba(16, 185, 129, 0.2)'
                        }}
                      >
                        <EmailIcon sx={{ fontSize: 24 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25 }}>
                          alex.omondi@aims-senegal.org
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                          Secondary contact
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* LinkedIn Link - Premium Clickable Card */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      LinkedIn
                    </Typography>
                    <Box
                      component="a"
                      href="https://www.linkedin.com/in/omondi-alex/"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        textDecoration: 'none',
                        color: '#1e293b',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          transition: 'left 0.5s ease',
                        },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                          borderColor: '#0077b5',
                          transform: 'translateY(-3px) scale(1.01)',
                          boxShadow: '0 8px 24px rgba(0, 119, 181, 0.3)',
                          '&::before': {
                            left: '100%',
                          },
                          '& .link-icon-wrapper': { 
                            background: 'rgba(255, 255, 255, 0.2)',
                            transform: 'scale(1.1) rotate(5deg)'
                          },
                          '& .link-icon': { 
                            color: '#fff',
                            transform: 'scale(1.15)'
                          },
                          '& .link-text': { 
                            color: '#fff', 
                            fontWeight: 600 
                          },
                          '& .link-arrow': {
                            opacity: 1,
                            transform: 'translateX(4px)'
                          }
                        }
                      }}
                    >
                      <Box
                        className="link-icon-wrapper"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #0077b5 0%, #005885 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 4px 12px rgba(0, 119, 181, 0.2)'
                        }}
                      >
                        <LinkedInIcon className="link-icon" sx={{ fontSize: 24, transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography className="link-text" sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25, transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                          Connect on LinkedIn
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                          Professional network
                        </Typography>
                      </Box>
                      <Box 
                        className="link-arrow"
                        sx={{ 
                          opacity: 0.4,
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          color: 'inherit'
                        }}
                      >
                        →
                      </Box>
                    </Box>
                  </Box>

                  {/* Google Scholar Link - Premium Clickable Card */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Google Scholar
                    </Typography>
                    <Box
                      component="a"
                      href="https://scholar.google.com/citations?user=9_d4Jo8AAAAJ&hl=en&authuser=4"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        textDecoration: 'none',
                        color: '#1e293b',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          transition: 'left 0.5s ease',
                        },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #4285f4 0%, #1a73e8 100%)',
                          borderColor: '#4285f4',
                          transform: 'translateY(-3px) scale(1.01)',
                          boxShadow: '0 8px 24px rgba(66, 133, 244, 0.3)',
                          '&::before': {
                            left: '100%',
                          },
                          '& .link-icon-wrapper': { 
                            background: 'rgba(255, 255, 255, 0.2)',
                            transform: 'scale(1.1) rotate(-5deg)'
                          },
                          '& .link-icon': { 
                            color: '#fff',
                            transform: 'scale(1.15)'
                          },
                          '& .link-text': { 
                            color: '#fff', 
                            fontWeight: 600 
                          },
                          '& .link-arrow': {
                            opacity: 1,
                            transform: 'translateX(4px)'
                          }
                        }
                      }}
                    >
                      <Box
                        className="link-icon-wrapper"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #4285f4 0%, #1a73e8 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 4px 12px rgba(66, 133, 244, 0.2)'
                        }}
                      >
                        <GoogleIcon className="link-icon" sx={{ fontSize: 24, transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography className="link-text" sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25, transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                          View Research Profile
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                          Academic publications
                        </Typography>
                      </Box>
                      <Box 
                        className="link-arrow"
                        sx={{ 
                          opacity: 0.4,
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          color: 'inherit'
                        }}
                      >
                        →
                      </Box>
                    </Box>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  {/* Email - Premium Card */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Email <span style={{color:'#2563eb'}}>*</span>
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        color: '#1e293b',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          boxShadow: '0 4px 12px rgba(59, 130, 246, 0.2)'
                        }}
                      >
                        <EmailIcon sx={{ fontSize: 24 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25 }}>
                          omondialex3517@gmail.com
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                          Primary contact
                        </Typography>
                      </Box>
                    </Box>
                  </Box>

                  {/* Address - Premium Card */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      Address
                    </Typography>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        color: '#1e293b',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      }}
                    >
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)'
                        }}
                      >
                        <LocationOnIcon sx={{ fontSize: 24 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25 }}>
                          Nairobi, Kenya
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>
                          Location
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* GitHub Link - Premium Clickable Card */}
                  <Box sx={{ mb: 2.5 }}>
                    <Typography variant="caption" sx={{ color: 'text.secondary', mb: 1, display: 'block', fontWeight: 600, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                      GitHub
                    </Typography>
                    <Box
                      component="a"
                      href="https://github.com/omondi-alex"
                      target="_blank"
                      rel="noopener noreferrer"
                      sx={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: 2,
                        p: 2.5,
                        borderRadius: 3,
                        background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                        border: '2px solid #e2e8f0',
                        textDecoration: 'none',
                        color: '#1e293b',
                        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                        cursor: 'pointer',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                        position: 'relative',
                        overflow: 'hidden',
                        '&::before': {
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: '-100%',
                          width: '100%',
                          height: '100%',
                          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
                          transition: 'left 0.5s ease',
                        },
                        '&:hover': {
                          background: 'linear-gradient(135deg, #24292e 0%, #1a1e22 100%)',
                          borderColor: '#24292e',
                          transform: 'translateY(-3px) scale(1.01)',
                          boxShadow: '0 8px 24px rgba(36, 41, 46, 0.3)',
                          '&::before': {
                            left: '100%',
                          },
                          '& .link-icon-wrapper': { 
                            background: 'rgba(255, 255, 255, 0.2)',
                            transform: 'scale(1.1) rotate(5deg)'
                          },
                          '& .link-icon': { 
                            color: '#fff',
                            transform: 'scale(1.15)'
                          },
                          '& .link-text': { 
                            color: '#fff', 
                            fontWeight: 600 
                          },
                          '& .link-arrow': {
                            opacity: 1,
                            transform: 'translateX(4px)'
                          }
                        }
                      }}
                    >
                      <Box
                        className="link-icon-wrapper"
                        sx={{
                          width: 48,
                          height: 48,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #24292e 0%, #1a1e22 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          boxShadow: '0 4px 12px rgba(36, 41, 46, 0.2)'
                        }}
                      >
                        <GitHubIcon className="link-icon" sx={{ fontSize: 24, transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography className="link-text" sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25, transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                          Explore My Code
                        </Typography>
                        <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.75rem', transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)' }}>
                          Open source projects
                        </Typography>
                      </Box>
                      <Box 
                        className="link-arrow"
                        sx={{ 
                          opacity: 0.4,
                          transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                          color: 'inherit'
                        }}
                      >
                        →
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tab} index={1}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                  borderRadius: 3,
                  p: 3,
                  mb: 3,
                  border: '1.5px solid #bfdbfe',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
                }}>
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                    mr: 2,
                    flexShrink: 0,
                  }}>
                    <InfoOutlinedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={700} sx={{ color: '#1e40af', fontSize: 20, mb: 0.5 }}>
                      Work Experience
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1e40af', opacity: 0.85, fontSize: 15, lineHeight: 1.5 }}>
                      My professional experience starting with my most recent role.
                    </Typography>
                  </Box>
                </Box>
                
                {/* Years of Experience - Premium Card */}
                <Box sx={{ mb: 4 }}>
                  <Typography 
                    variant="caption" 
                    sx={{ 
                      color: 'text.secondary', 
                      mb: 1, 
                      display: 'block', 
                      fontWeight: 600, 
                      fontSize: '0.75rem', 
                      textTransform: 'uppercase', 
                      letterSpacing: '0.5px' 
                    }}
                  >
                    Years of Work Experience
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      p: 2.5,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '2px solid #e2e8f0',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    }}
                  >
                    <Box
                      sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                        flexShrink: 0,
                      }}
                    >
                      <WorkIcon sx={{ fontSize: 28 }} />
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '1.5rem', mb: 0.25, color: '#1e293b' }}>
                        2+
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary', fontSize: '0.85rem' }}>
                        Years of professional experience
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ maxHeight: 500, overflowY: 'auto', pr: 1 }}>
                  {/* Experience -1: Kirinyaga University (current) */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <SchoolIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Lecturer
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Kirinyaga University
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Chip 
                            label="Part-time" 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                              color: '#1e40af',
                              fontWeight: 600,
                              border: '1px solid #bfdbfe',
                            }} 
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                              Kirinyaga, Kenya
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2025-09 - To date
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1.5, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Key Responsibilities
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, listStyle: 'none' }}>
                        <Box component="li" sx={{ 
                          mb: 1, 
                          position: 'relative',
                          pl: 2,
                          '&::before': {
                            content: '"•"',
                            position: 'absolute',
                            left: 0,
                            color: '#2563eb',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                          }
                        }}>
                          <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                            Web Development
                          </Typography>
                        </Box>
                        <Box component="li" sx={{ 
                          mb: 1, 
                          position: 'relative',
                          pl: 2,
                          '&::before': {
                            content: '"•"',
                            position: 'absolute',
                            left: 0,
                            color: '#2563eb',
                            fontWeight: 'bold',
                            fontSize: '1.2rem',
                          }
                        }}>
                          <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                            Object-Oriented Analysis and Design
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Experience 1: ICT Support Volunteer (current) */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <SupportIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          ICT Support Volunteer
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Young Professional Mentorship Program (YPMP)
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Chip 
                            label="Volunteer" 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                              color: '#1e40af',
                              fontWeight: 600,
                              border: '1px solid #bfdbfe',
                            }} 
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                              Kampala, Uganda
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2024-01 - To date
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1.5, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Key Responsibilities
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, listStyle: 'none' }}>
                        {['Website Management', 'Graphics Design', 'Virtual Assistant'].map((item, idx) => (
                          <Box key={idx} component="li" sx={{ 
                            mb: 1, 
                            position: 'relative',
                            pl: 2,
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: '#2563eb',
                              fontWeight: 'bold',
                              fontSize: '1.2rem',
                            }
                          }}>
                            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>


                  {/* Experience 0: Platforms Developer at Agriwatt Hub Limited (current) */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <CodeIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Platforms Developer
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Agriwatt Hub Limited
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Chip 
                            label="Part-time" 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                              color: '#1e40af',
                              fontWeight: 600,
                              border: '1px solid #bfdbfe',
                            }} 
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                              Nairobi, Kenya
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2025-08 - 2025-11
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1.5, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Key Responsibilities
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, listStyle: 'none' }}>
                        {[
                          'Social Media Management',
                          'Graphic Design',
                          'Website Management',
                          'Sales and Marketing'
                        ].map((item, idx) => (
                          <Box key={idx} component="li" sx={{ 
                            mb: 1, 
                            position: 'relative',
                            pl: 2,
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: '#2563eb',
                              fontWeight: 'bold',
                              fontSize: '1.2rem',
                            }
                          }}>
                            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  {/* Experience 2: Software Security Engineer */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <SecurityIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Software Security Engineer
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Enovise Group
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Chip 
                            label="Full-time" 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                              color: '#1e40af',
                              fontWeight: 600,
                              border: '1px solid #bfdbfe',
                            }} 
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                              Nairobi, Kenya
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2024-03 - 2025-06
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1.5, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Key Responsibilities
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, listStyle: 'none' }}>
                        {[
                          'Designed and implemented security solutions to monitor and protect cloud and on-prem infrastructure',
                          'Created software tools to simplify and speed incident investigation',
                          'Monitored security logs and responded to security incidents',
                          'Analyzed, designed, developed, and delivered solutions to stop adversaries',
                          'Identified and automated threat detection',
                          'Managed vulnerabilities',
                          'Coordinated and conducted event collection, log management, event management, compliance automation, and identity monitoring activities',
                          'Developed custom content based on threat intelligence',
                          'Ensured SIEM technologies were integrated & utilized to protect cyber-related assets',
                          'Worked with development and operations teams to ensure security best practices were followed',
                          'Stayed up-to-date with the latest security trends and technologies'
                        ].map((item, idx) => (
                          <Box key={idx} component="li" sx={{ 
                            mb: 1, 
                            position: 'relative',
                            pl: 2,
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: '#2563eb',
                              fontWeight: 'bold',
                              fontSize: '1.2rem',
                            }
                          }}>
                            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* Experience 3: ICT Officer (older) */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <ComputerIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          ICT Officer
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Ministry of Education, State Department for Basic Education
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Chip 
                            label="Internship" 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                              color: '#1e40af',
                              fontWeight: 600,
                              border: '1px solid #bfdbfe',
                            }} 
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                              Kisumu, Kenya
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2023-01 - 2024-01
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1.5, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                        Key Responsibilities
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, listStyle: 'none' }}>
                        {[
                          'Supported E-Learning and content development in line with the schemes of work',
                          'Provided classroom support and trained School teachers in the use of digital literacy devices',
                          'Supported the implementation of the Digital Literacy Programme',
                          'Carried out innovations to enable schools to improve the use of digital learning',
                          'Provided support in the safe, secure, and ethical use of technology in learning',
                          'Assisted teachers by integrating ICT in the delivery of teaching, learning, assessment, and reporting',
                          'Supported school staff with the development and production of key school policies and procedures',
                          'Provided first-line support and maintenance of ICT services in the schools'
                        ].map((item, idx) => (
                          <Box key={idx} component="li" sx={{ 
                            mb: 1, 
                            position: 'relative',
                            pl: 2,
                            '&::before': {
                              content: '"•"',
                              position: 'absolute',
                              left: 0,
                              color: '#2563eb',
                              fontWeight: 'bold',
                              fontSize: '1.2rem',
                            }
                          }}>
                            <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                              {item}
                            </Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={tab} index={2}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                  borderRadius: 3,
                  p: 3,
                  mb: 3,
                  border: '1.5px solid #bfdbfe',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
                }}>
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                    mr: 2,
                    flexShrink: 0,
                  }}>
                    <InfoOutlinedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={700} sx={{ color: '#1e40af', fontSize: 20, mb: 0.5 }}>
                      Educational Levels
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1e40af', opacity: 0.85, fontSize: 15, lineHeight: 1.5 }}>
                      My academic history from the highest level achieved to the lowest.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ maxHeight: 500, overflowY: 'auto', pr: 1 }}>
                  {/* Education 1: Master's */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                        position: 'relative',
                      }}>
                        <SchoolIcon sx={{ fontSize: 24, position: 'absolute', top: '8px', left: '8px', zIndex: 1 }} />
                        <SchoolIcon sx={{ fontSize: 24, position: 'absolute', bottom: '8px', right: '8px', zIndex: 0, opacity: 0.9 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Master's in Computer Security
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          African Institute for Mathematical Sciences
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Chip 
                            label="Master's Degree" 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                              color: '#1e40af',
                              fontWeight: 600,
                              border: '1px solid #bfdbfe',
                            }} 
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                              Mbur, Senegal
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2023-10 - 2025-07
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Honors / Awards
                        </Typography>
                        <Chip 
                          label="Very Good Pass" 
                          size="small" 
                          sx={{ 
                            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                            color: '#166534',
                            fontWeight: 600,
                            border: '1px solid #bbf7d0',
                          }} 
                        />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Thesis / Project Title
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569', fontStyle: 'italic' }}>
                          A Cloud Computing Security Assessment Framework for FINTECHs in Kenya.
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* Education 2: Bachelor's */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <SchoolIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Bachelor's in Computer Science
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Kirinyaga University
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Chip 
                            label="Bachelor's Degree" 
                            size="small" 
                            sx={{ 
                              background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                              color: '#1e40af',
                              fontWeight: 600,
                              border: '1px solid #bfdbfe',
                            }} 
                          />
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: '#64748b' }}>
                            <LocationOnIcon sx={{ fontSize: 16 }} />
                            <Typography variant="caption" sx={{ fontSize: '0.85rem', fontWeight: 500 }}>
                              Kerugoya, Kenya
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2018-09 - 2022-10
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Honors / Awards
                        </Typography>
                        <Chip 
                          label="Second Class Honours (Upper Division)" 
                          size="small" 
                          sx={{ 
                            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
                            color: '#166534',
                            fontWeight: 600,
                            border: '1px solid #bbf7d0',
                          }} 
                        />
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Thesis / Project Title
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569', fontStyle: 'italic' }}>
                          Garbage Management System
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={tab} index={3}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                  borderRadius: 3,
                  p: 3,
                  mb: 3,
                  border: '1.5px solid #bfdbfe',
                  boxShadow: '0 2px 8px rgba(37, 99, 235, 0.08)',
                }}>
                  <Box sx={{
                    width: 48,
                    height: 48,
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    boxShadow: '0 4px 12px rgba(37, 99, 235, 0.25)',
                    mr: 2,
                    flexShrink: 0,
                  }}>
                    <InfoOutlinedIcon sx={{ fontSize: 24 }} />
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography fontWeight={700} sx={{ color: '#1e40af', fontSize: 20, mb: 0.5 }}>
                      Certifications
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#1e40af', opacity: 0.85, fontSize: 15, lineHeight: 1.5 }}>
                      All My relevant certifications from the most recent to the oldest.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ maxHeight: 500, overflowY: 'auto', pr: 1 }}>
                  {/* Certification 0 */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <BusinessIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Certificate in Business Management
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Industry Immersion Africa (IIAfrica)
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            Issued: 2025-08
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Description / Scope
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                          Skills in business and data analytics, leadership, and problem-solving, equipping me with the tools to bridge technology, business strategy, and innovation.
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Credential ID
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#64748b' }}>
                          N/A
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Verification Link
                        </Typography>
                        <Box
                          component="a"
                          href="https://drive.google.com/file/d/17VZcj5__krvtc4H54ratUZXlQwC0gOiB/view?usp=sharing"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            border: '1.5px solid #bae6fd',
                            textDecoration: 'none',
                            color: '#0369a1',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 4px rgba(3, 105, 161, 0.1)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                              borderColor: '#0369a1',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(3, 105, 161, 0.3)',
                              color: '#fff',
                            }
                          }}
                        >
                          View Certificate
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Certification 1 */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <GroupIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Mentor in the Young Professionals Mentorship Program
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Igoye Young Professional Mentorship Institute (IYPMI)
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            Issued: 2024-11
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Description / Scope
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                          Supporting Young People to Rethink, Refocus, and Succeed
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Credential ID
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#64748b' }}>
                          N/A
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Verification Link
                        </Typography>
                        <Box
                          component="a"
                          href="https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/OmondiAlex_MentorshipCert.png?alt=media&token=9d13a363-e60a-4385-bc84-4ee569bb65f7"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            border: '1.5px solid #bae6fd',
                            textDecoration: 'none',
                            color: '#0369a1',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 4px rgba(3, 105, 161, 0.1)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                              borderColor: '#0369a1',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(3, 105, 161, 0.3)',
                              color: '#fff',
                            }
                          }}
                        >
                          View Certificate
                        </Box>
                      </Box>
                    </Box>
                  </Box>

                  {/* Certification 2 */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <AssistantIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Virtual Assistant
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          ALX - The Room
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            Issued: 2024-08
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Description / Scope
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                          Designed to develop and practice professional skills that are most needed to be a successful Virtual Assistant
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Credential ID
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#64748b', fontFamily: 'monospace' }}>
                          cer-4845ee55-b8bd-4fcb-81a6-46dedea7
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Verification Link
                        </Typography>
                        <Box
                          component="a"
                          href="https://www.virtualbadge.io/certificate-validator?credential=cer-4845ee55-b8bd-4fcb-81a6-46dedea7"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            border: '1.5px solid #bae6fd',
                            textDecoration: 'none',
                            color: '#0369a1',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 4px rgba(3, 105, 161, 0.1)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                              borderColor: '#0369a1',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(3, 105, 161, 0.3)',
                              color: '#fff',
                            }
                          }}
                        >
                          View Certificate
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Certification 3 */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <SecurityIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Cyber Security
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Scratch and Script Limited, in Collaboration with ISACA and Data Privacy and Governance Society of Kenya
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            Issued: 2024-04
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Description / Scope
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                          Cybersecurity Fundamentals, Threat Analysis, and Incident Response
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Credential ID
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#64748b', fontFamily: 'monospace' }}>
                          IGN-8533838908-4209
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Verification Link
                        </Typography>
                        <Box
                          component="a"
                          href="https://certificate-verification.scratchandscript.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            border: '1.5px solid #bae6fd',
                            textDecoration: 'none',
                            color: '#0369a1',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 4px rgba(3, 105, 161, 0.1)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                              borderColor: '#0369a1',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(3, 105, 161, 0.3)',
                              color: '#fff',
                            }
                          }}
                        >
                          View Certificate
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* Certification 4 */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <PersonIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Mentorship Training
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Igoye Young Professional Mentorship Institute (IYPMI)
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            Issued: 2023-11
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Description / Scope
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                          Supporting Young People to Rethink, Refocus, and Succeed
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Credential ID
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#64748b' }}>
                          N/A
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Verification Link
                        </Typography>
                        <Box
                          component="a"
                          href="https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/YPMP.png?alt=media&token=bc46ed54-69bd-4c9a-a025-cf7af8027330"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            border: '1.5px solid #bae6fd',
                            textDecoration: 'none',
                            color: '#0369a1',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 4px rgba(3, 105, 161, 0.1)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                              borderColor: '#0369a1',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(3, 105, 161, 0.3)',
                              color: '#fff',
                            }
                          }}
                        >
                          View Certificate
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  {/* Certification 5 */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <CodeIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Full Stack Software Engineering Program
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          ALX Africa
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            Issued: 2023-11
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Description / Scope
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                          A 12 month Software Engineering Programme with a specialization in Front-end.
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Credential ID
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#64748b' }}>
                          N/A
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Verification Link
                        </Typography>
                        <Box
                          component="a"
                          href="https://savanna.alxafrica.com/certificates/pERFn8XCsc"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            border: '1.5px solid #bae6fd',
                            textDecoration: 'none',
                            color: '#0369a1',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 4px rgba(3, 105, 161, 0.1)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                              borderColor: '#0369a1',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(3, 105, 161, 0.3)',
                              color: '#fff',
                            }
                          }}
                        >
                          View Certificate
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  
                  {/* Certification 6 */}
                  <Box sx={{ 
                    borderRadius: 4, 
                    p: 3.5, 
                    mb: 3,
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 4px 16px rgba(0, 0, 0, 0.06)',
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
                    <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 2, mb: 3 }}>
                      <Box sx={{
                        width: 56,
                        height: 56,
                        borderRadius: '14px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        boxShadow: '0 4px 12px rgba(37, 99, 235, 0.3)',
                        flexShrink: 0,
                      }}>
                        <PhoneAndroidIcon sx={{ fontSize: 28 }} />
                      </Box>
                      <Box sx={{ flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '1.25rem', mb: 0.5, color: '#1e293b' }}>
                          Android Development
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Google Africa Developer Training Program
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, alignItems: 'center' }}>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            Issued: 2023-06
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                    <Box sx={{ 
                      pl: 1,
                      borderLeft: '2px solid #e2e8f0',
                      ml: 2,
                    }}>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Description / Scope
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#475569' }}>
                          Mobile Apps development using Kotlin
                        </Typography>
                      </Box>
                      <Box sx={{ mb: 2 }}>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Credential ID
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#64748b', fontFamily: 'monospace' }}>
                          CA3CEBA0F7F36E1
                        </Typography>
                      </Box>
                      <Box>
                        <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', mb: 1, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                          Verification Link
                        </Typography>
                        <Box
                          component="a"
                          href="https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/Android.png?alt=media&token=1bc27f22-c596-4120-9c07-f586bf7d282a"
                          target="_blank"
                          rel="noopener noreferrer"
                          sx={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: 0.75,
                            px: 2,
                            py: 1,
                            borderRadius: 2,
                            background: 'linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%)',
                            border: '1.5px solid #bae6fd',
                            textDecoration: 'none',
                            color: '#0369a1',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '0.9rem',
                            boxShadow: '0 2px 4px rgba(3, 105, 161, 0.1)',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #0369a1 0%, #075985 100%)',
                              borderColor: '#0369a1',
                              transform: 'translateY(-2px)',
                              boxShadow: '0 6px 16px rgba(3, 105, 161, 0.3)',
                              color: '#fff',
                            }
                          }}
                        >
                          View Certificate
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={tab} index={4}>
              <Box sx={{ mb: 3 }}>
                <Box sx={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  background: '#f3f8ff',
                  borderRadius: 2,
                  p: 2,
                  mb: 3,
                  borderLeft: '4px solid #2563eb',
                }}>
                  <InfoOutlinedIcon sx={{ color: '#2563eb', fontSize: 28, mt: 0.5, mr: 1.5 }} />
                  <Box>
                    <Typography fontWeight={700} sx={{ color: '#2563eb', fontSize: 18 }}>Areas of Expertise</Typography>
                    <Typography variant="body2" sx={{ color: '#2563eb', opacity: 0.8, fontSize: 15 }}>
                      My strongest and most relevant skills.
                    </Typography>
                  </Box>
                </Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                    <Box sx={{
                      flex: 1,
                      background: '#f9fafb',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(30, 64, 175, 0.07)',
                      minHeight: 260,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      py: 2,
                      px: 1.5,
                    }}>
                      <Typography fontWeight={600} sx={{ mb: 1 }}>Industry Expertise</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1, justifyContent: 'center' }}>
                        <Chip label="Software Security" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Software Development" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="IT Support" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Virtual Assistant" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Graphics Design" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="GRC" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                    <Box sx={{
                      flex: 1,
                      background: '#f9fafb',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(30, 64, 175, 0.07)',
                      minHeight: 260,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      py: 2,
                      px: 1.5,
                    }}>
                      <Typography fontWeight={600} sx={{ mb: 1 }}>Software Expertise</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1, justifyContent: 'center' }}>
                        <Chip label="React Js" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Next Js" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Python" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Microsoft Office" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Kotlin" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch' }}>
                    <Box sx={{
                      flex: 1,
                      background: '#f9fafb',
                      borderRadius: 2,
                      boxShadow: '0 2px 8px rgba(30, 64, 175, 0.07)',
                      minHeight: 260,
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      py: 2,
                      px: 1.5,
                    }}>
                      <Typography fontWeight={600} sx={{ mb: 1 }}>Other Expertise</Typography>
                      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, flex: 1, justifyContent: 'center' }}>
                        <Chip label="Mentorship" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                        <Chip label="Tutoring" color="primary" variant="outlined" sx={{ fontWeight: 500, fontSize: 15, borderRadius: 1 }} />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </TabPanel>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProfileDashboard; 