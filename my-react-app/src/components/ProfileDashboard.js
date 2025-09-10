import React from "react";
import { Box, Card, CardContent, Avatar, Typography, Grid, Tabs, Tab, TextField, InputAdornment, Paper, Divider, IconButton, Chip, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import PersonIcon from '@mui/icons-material/Person';
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
  const [searchParams] = useSearchParams();
  const initialTab = parseInt(searchParams.get('tab') || '0');
  const [tab, setTab] = React.useState(initialTab);
  const isMobile = useMediaQuery('(max-width:1280px)');
  const isMediumLarge = useMediaQuery('(max-width:1440px)');

  // Update tab when URL params change
  React.useEffect(() => {
    const tabFromUrl = parseInt(searchParams.get('tab') || '0');
    setTab(tabFromUrl);
  }, [searchParams]);

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
                    <Typography variant="h5" fontWeight={700} sx={{ color: '#2563eb', mb: 0.5 }}>3+</Typography>
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
                  I am a dynamic technology professional who thrives at the intersection of innovation, security, and empowerment. Whether I'm architecting a secure cloud application, mentoring aspiring talent, publishing research, or streamlining operations, my core mission is to build robust, efficient, and impactful solutions. I bring a unique blend of deep technical expertise in software engineering and cybersecurity, a proven academic foundation, and a passionate, collaborative spirit to every project and team. Let's connect and create something remarkable together.
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
                      <Typography variant="caption" color="text.secondary">Agriwatt Hub Limited • 2025-08 to date</Typography>
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
            borderRadius: 3,
            boxShadow: 3,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            p: { xs: 2, md: 3 },
            mb: { xs: 2, md: 0 },
          }}>
            <Box sx={{ position: 'relative', mb: 2 }}>
              <Avatar src={fazitechImg} sx={{ width: isMobile ? 70 : 100, height: isMobile ? 70 : 100, border: '3px solid #e5e7eb', boxShadow: 2 }} />
            </Box>
            <Typography variant="h6" fontWeight={700} align="center" sx={{ mb: 0.5, fontSize: isMobile ? '1.1rem' : isMediumLarge ? '1.1rem' : '1.25rem' }}>Omondi Alex Omieno</Typography>
            <Typography variant="body2" color="text.secondary" align="center" sx={{ mb: 2, fontSize: isMobile ? '0.85rem' : isMediumLarge ? '0.95rem' : '1rem' }}>omondialex3517@gmail.com</Typography>
            <Divider sx={{ my: 2, width: '100%' }} />
            <Typography variant="subtitle1" fontWeight={600} mb={2} align="left" sx={{ fontSize: isMobile ? '1rem' : isMediumLarge ? '1rem' : '1.1rem' }}>Personal Info</Typography>
            <Box sx={{ width: '100%' }}>
              <Grid container spacing={1.2}>
                {info.map((item, i) => (
                  <React.Fragment key={item.label}>
                    <Grid item xs={5}>
                      <Typography variant="body2" color="text.primary" sx={{ fontWeight: 600, py: 0.5, fontSize: isMobile ? '0.85rem' : '1rem' }}>{item.label}</Typography>
                    </Grid>
                    <Grid item xs={7}>
                      {item.label === 'LinkedIn' ? (
                        <IconButton
                          href={item.value}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small"
                          sx={{ color: '#2563eb', p: 0.5, ml: 3 }}
                        >
                          <LinkedInIcon fontSize="medium" />
                        </IconButton>
                      ) : item.label === 'Email' ? (
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400, py: 0.5, fontSize: isMobile ? '0.85rem' : '1rem', wordBreak: 'break-all', overflowWrap: 'anywhere' }}>{item.value}</Typography>
                      ) : (
                        <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 400, py: 0.5, fontSize: isMobile ? '0.85rem' : '1rem' }}>{item.value}</Typography>
                      )}
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
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
              onChange={(_, v) => setTab(v)}
              variant={isMobile ? 'scrollable' : 'standard'}
              scrollButtons={isMobile ? 'auto' : false}
              sx={{
                borderBottom: 1,
                borderColor: 'divider',
                px: isMediumLarge ? 1 : 2,
                pt: 2,
                display: 'flex',
                flexWrap: 'nowrap',
                overflowX: isMobile ? 'auto' : 'visible',
                '& .MuiTabs-flexContainer': {
                  flexWrap: 'nowrap',
                },
                '& .MuiTabs-scroller': {
                  overflowX: isMobile ? 'auto' : 'visible',
                },
                '& .MuiTab-root': {
                  fontWeight: 600,
                  color: '#94a3b8',
                  opacity: 0.7,
                  minWidth: 80,
                  maxWidth: 140,
                  px: 1,
                  mx: 0.2,
                  transition: 'color 0.2s, opacity 0.2s',
                  fontSize: isMobile ? '0.85rem' : isMediumLarge ? '0.92rem' : '0.98rem',
                  lineHeight: 1.1,
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  overflow: 'hidden',
                },
                '& .Mui-selected': {
                  color: '#2563eb !important',
                  opacity: 1,
                },
              }}
            >
              <Tab label="Profile" />
              <Tab label="Bio" />
              <Tab label="Work-Exp" />
              <Tab label="Education" />
              <Tab label="Certifications" />
              <Tab label="Expertise" />
            </Tabs>
            <TabPanel value={tab} index={0}>
              <Grid container spacing={3} sx={{ mt: 0.5 }}>
                <Grid item xs={12} md={6}>
                  <TextField label={<><b>Full Name</b> <span style={{color:'#2563eb'}}>*</span></>} fullWidth margin="normal" value="Omondi Alex Omieno" />
                  <TextField label="LinkedIn Link" fullWidth margin="normal" value="https://www.linkedin.com/in/omondi-alex/" InputProps={{ startAdornment: <InputAdornment position="start"><LinkedInIcon /></InputAdornment> }} />
                  <TextField label="Alternative Email" fullWidth margin="normal" value="alex.omondi@aims-senegal.org" InputProps={{ startAdornment: <InputAdornment position="start"><EmailIcon /></InputAdornment> }} />
                  <TextField label="Facebook Link" fullWidth margin="normal" placeholder="Enter Facebook profile link" />
                  <TextField label="Instagram Link" fullWidth margin="normal" placeholder="Enter Instagram profile link" />
                </Grid>
                <Grid item xs={12} md={6}>
                  <TextField label={<><b>Email</b> <span style={{color:'#2563eb'}}>*</span></>} fullWidth margin="normal" value="omondialex3517@gmail.com" />
                  <TextField label={<><b>WhatsApp Number</b> <span style={{color:'#2563eb'}}>*</span></>} fullWidth margin="normal" value="+254 707 750879" InputProps={{ startAdornment: <InputAdornment position="start"><WhatsAppIcon /></InputAdornment> }} />
                  <TextField label="Address" fullWidth margin="normal" value="Nairobi, Kenya" InputProps={{ startAdornment: <InputAdornment position="start"><LocationOnIcon /></InputAdornment> }} />
                  <TextField label="Twitter Link" fullWidth margin="normal" placeholder="Enter Twitter profile link" />
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value={tab} index={1}>
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
                    <Typography fontWeight={700} sx={{ color: '#2563eb', fontSize: 18 }}>Bio</Typography>
                    <Typography variant="body2" sx={{ color: '#2563eb', opacity: 0.8, fontSize: 15 }}>
                      A brief professional bio about Me.
                    </Typography>
                  </Box>
                </Box>
                <Typography fontWeight={600} sx={{ mb: 1 }}>Bio</Typography>
                <TextField
                  fullWidth
                  multiline
                  minRows={4}
                  maxRows={8}
                  variant="outlined"
                  value={
                    "Hello, I'm Omondi Alex, a highly skilled and versatile ICT professional with a strong focus on cybersecurity and software development. I combine practical security solutions with a passion for education. My academic background includes an MSc in Computer Security from The African Institute for Mathematical Sciences Senegal (AIMS-SN), a Bachelor of Computer Science from Kirinyaga University, Kenya, and various certifications from ALX Africa and the Google Africa Developer Training Program."
                  }
                  sx={{ mb: 3, background: '#fff' }}
                />
              </Box>
            </TabPanel>
            <TabPanel value={tab} index={2}>
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
                    <Typography fontWeight={700} sx={{ color: '#2563eb', fontSize: 18 }}>Work Experience</Typography>
                    <Typography variant="body2" sx={{ color: '#2563eb', opacity: 0.8, fontSize: 15 }}>
                      My professional experience starting with my most recent role.
                    </Typography>
                  </Box>
                </Box>
                <Typography fontWeight={600} sx={{ mb: 1, mt: 2, ml: 1 }}>Years of Work Experience</Typography>
                <TextField
                  type="text"
                  value="3+"
                  inputProps={{ style: { textAlign: 'left' } }}
                  fullWidth
                  sx={{
                    mb: 3,
                    background: '#fff',
                    borderRadius: 2,
                    '& .MuiOutlinedInput-root': {
                      borderRadius: 2,
                    },
                  }}
                  InputProps={{ readOnly: true }}
                />
                <Box sx={{ maxHeight: 420, overflowY: 'auto', pr: 1 }}>

                   {/* Experience -1: Kirinyaga University (current) */}

                   <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Job Title</Typography>
                        <TextField fullWidth value="Lecturer" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employer</Typography>
                        <TextField fullWidth value="Kirinyaga University" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employment Type</Typography>
                        <TextField fullWidth value="Part-time" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Location</Typography>
                        <TextField fullWidth value="Kirinyaga, Kenya" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Start Date</Typography>
                        <TextField fullWidth value="2025-09" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>End Date</Typography>
                        <TextField fullWidth value="To date" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Key Responsibilities</Typography>
                        <Box sx={{ pl: 2 }}>
                          <ul style={{ margin: 0, paddingLeft: 18 }}>
                            <li>Web Development</li>
                            <li>Object-Oriented Analysis and Design</li>
                           
                          </ul>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Experience 0: Platforms Developer at Agriwatt Hub Limited (current) */}

                   <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Job Title</Typography>
                        <TextField fullWidth value="Platforms Developer" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employer</Typography>
                        <TextField fullWidth value="Agriwatt Hub Limited" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employment Type</Typography>
                        <TextField fullWidth value="Part-time" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Location</Typography>
                        <TextField fullWidth value="Nairobi, Kenya" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Start Date</Typography>
                        <TextField fullWidth value="2025-08" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>End Date</Typography>
                        <TextField fullWidth value="To date" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Key Responsibilities</Typography>
                        <Box sx={{ pl: 2 }}>
                          <ul style={{ margin: 0, paddingLeft: 18 }}>
                            <li>Graphics Design</li>
                            <li>Virtual Assistant</li>
                            <li>Create data visualization dashboards for farm analytics</li>
                            <li>Develop mobile data collection modules (online-first approach)</li>
                            <li>Collaborate on website improvements and user experience enhancement</li>
                            <li>Build farmer feedback systems (SMS/USSD platforms)</li>

                          </ul>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Experience 1: ICT Support Volunteer (current) */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Job Title</Typography>
                        <TextField fullWidth value="ICT Support Volunteer" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employer</Typography>
                        <TextField fullWidth value="Young Professional Mentorship Program(YPMP)" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employment Type</Typography>
                        <TextField fullWidth value="Volunteer" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Location</Typography>
                        <TextField fullWidth value="Kampala, Uganda" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Start Date</Typography>
                        <TextField fullWidth value="2024-01" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>End Date</Typography>
                        <TextField fullWidth value="To date" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Key Responsibilities</Typography>
                        <Box sx={{ pl: 2 }}>
                          <ul style={{ margin: 0, paddingLeft: 18 }}>
                            <li>Manage the website</li>
                            <li>Design graphics</li>
                            <li>Serve as a virtual assistant</li>
                          </ul>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Experience 2: Software Security Engineer (recent ended) */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Job Title</Typography>
                        <TextField fullWidth value="Software Security Engineer" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employer</Typography>
                        <TextField fullWidth value="Enovise Group" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employment Type</Typography>
                        <TextField fullWidth value="Full-time" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Location</Typography>
                        <TextField fullWidth value="Nairobi,Kenya" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Start Date</Typography>
                        <TextField fullWidth value="2024-03" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>End Date</Typography>
                        <TextField fullWidth value="2025-06" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Key Responsibilities</Typography>
                        <Box sx={{ pl: 2 }}>
                          <ul style={{ margin: 0, paddingLeft: 18 }}>
                            <li>Designed and implemented security solutions to monitor and protect cloud and on-prem infrastructure.</li>
                            <li>Created software tools to simplify and speed incident investigation.</li>
                            <li>Monitored security logs and responded to security incidents.</li>
                            <li>Analyzed, designed, developed, and delivered solutions to stop adversaries.</li>
                            <li>Identified and automated threat detection.</li>
                            <li>Managed vulnerabilities.</li>
                            <li>Coordinated and conducted event collection, log management, event management, compliance automation, and identity monitoring activities.</li>
                            <li>Developed custom content based on threat intelligence.</li>
                            <li>Ensured SIEM technologies were integrated & utilized to protect cyber-related assets.</li>
                            <li>Worked with development and operations teams to ensure security best practices were followed.</li>
                            <li>Stayed up-to-date with the latest security trends and technologies.</li>
                            
                          </ul>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Experience 3: ICT Officer (older) */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Job Title</Typography>
                        <TextField fullWidth value="ICT Officer" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employer</Typography>
                        <TextField fullWidth value="Ministry of Education, State Department for Basic Education" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Employment Type</Typography>
                        <TextField fullWidth value="Internship" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Location</Typography>
                        <TextField fullWidth value="Kisumu, Kenya" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Start Date</Typography>
                        <TextField fullWidth value="2023-01" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>End Date</Typography>
                        <TextField fullWidth value="2024-01" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Key Responsibilities</Typography>
                        <Box sx={{ pl: 2 }}>
                          <ul style={{ margin: 0, paddingLeft: 18 }}>
                            <li>Supported E-Learning and content development in line with the schemes of work.</li>
                            <li>Provided classroom support and trained School teachers in the use of digital literacy devices.</li>
                            <li>Supported the implementation of the Digital Literacy Programme.</li>
                            <li>Carryied out innovations to enable schools to improve the use of digital learning</li>
                            <li>Provided support in the safe, secure, and ethical use of technology in learning.</li>
                            <li>Assisted teachers by integrating ICT in the delivery of teaching, learning, assessment, and reporting.</li>
                            <li>Supported school staff with the development and production of key school policies and procedures.</li>
                            <li>Provided first-line support and maintenance of ICT services in the schools.</li>
                          </ul>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={tab} index={3}>
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
                    <Typography fontWeight={700} sx={{ color: '#2563eb', fontSize: 18 }}>Educational Levels</Typography>
                    <Typography variant="body2" sx={{ color: '#2563eb', opacity: 0.8, fontSize: 15 }}>
                      My academic history from the highest level achieved to the lowest.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ maxHeight: 420, overflowY: 'auto', pr: 1 }}>
                  {/* Education 1 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Degree / Qualification</Typography>
                        <TextField fullWidth value="Master's" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Field of Study / Major</Typography>
                        <TextField fullWidth value="Computer Security" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Institution Name</Typography>
                        <TextField fullWidth value="African Institute for Mathematical Sciences" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Location</Typography>
                        <TextField fullWidth value="Mbur, Senegal" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Start Date</Typography>
                        <TextField fullWidth value="2023-10" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>End Date</Typography>
                        <TextField fullWidth value="2025-07" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Honors / Awards</Typography>
                        <TextField fullWidth value="Very Good Pass" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Thesis / Project Title</Typography>
                        <TextField fullWidth value="A Cloud Computing Security Assessment
Framework for FINTECHs in Kenya." sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Education 2 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Degree / Qualification</Typography>
                        <TextField fullWidth value="Bachelor's" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Field of Study / Major</Typography>
                        <TextField fullWidth value="Computer Science" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Institution Name</Typography>
                        <TextField fullWidth value="Kirinyaga University" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Location</Typography>
                        <TextField fullWidth value="Kerugoya, Kenya" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Start Date</Typography>
                        <TextField fullWidth value="2018-09" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>End Date</Typography>
                        <TextField fullWidth value="2022-10" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Honors / Awards</Typography>
                        <TextField fullWidth value="Second Class Honours(Upper Division)" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Thesis / Project Title</Typography>
                        <TextField fullWidth value="Gabage Management System " sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                    </Grid>
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
                    <Typography fontWeight={700} sx={{ color: '#2563eb', fontSize: 18 }}>Certifications</Typography>
                    <Typography variant="body2" sx={{ color: '#2563eb', opacity: 0.8, fontSize: 15 }}>
                      All My relevant certifications from the most recent to the oldest.
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ maxHeight: 420, overflowY: 'auto', pr: 1 }}>
                  {/* Certification 0 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Certification Title</Typography>
                        <TextField fullWidth value="Certificate in Business Management" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issuing Organization</Typography>
                        <TextField fullWidth value="Industry Immersion Africa (IIAfrica)" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issue Date</Typography>
                        <TextField fullWidth value="2025-08" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Description / Scope</Typography>
                        <TextField fullWidth value="Skills in business and data analytics, leadership, and problem-solving, equipping me with the tools to bridge technology, business strategy, and innovation." sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential ID / License Number</Typography>
                        <TextField fullWidth value="N/A" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential URL/Verification Link</Typography>
                        <TextField
                          fullWidth
                          value="https://drive.google.com/file/d/17VZcj5__krvtc4H54ratUZXlQwC0gOiB/view?usp=sharing"
                          InputProps={{ readOnly: true }}
                          sx={{ 
                            cursor: 'pointer',
                            mb: 2,
                            '& .MuiInputBase-input': {
                              color: '#2563eb',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#1d4ed8',
                                textDecoration: 'underline',
                              }
                            }
                          }}
                          onClick={() => window.open('https://drive.google.com/file/d/17VZcj5__krvtc4H54ratUZXlQwC0gOiB/view?usp=sharing', '_blank', 'noopener,noreferrer')}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                  {/* Certification 1 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Certification Title</Typography>
                        <TextField fullWidth value="Mentor in the Young Professionals Mentorship Program" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issuing Organization</Typography>
                        <TextField fullWidth value="Igoye Young Professional Mentorship Institute (IYPMI)" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issue Date</Typography>
                        <TextField fullWidth value="2024-11" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Description / Scope</Typography>
                        <TextField fullWidth value="Supporting Young People to Rethink, Refocus, and Succeed" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential ID / License Number</Typography>
                        <TextField fullWidth value="N/A" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential URL/Verification Link</Typography>
                        <TextField
                          fullWidth
                          value="https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/OmondiAlex_MentorshipCert.png?alt=media&token=9d13a363-e60a-4385-bc84-4ee569bb65f7"
                          InputProps={{ readOnly: true }}
                          sx={{ 
                            cursor: 'pointer',
                            mb: 2,
                            '& .MuiInputBase-input': {
                              color: '#2563eb',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#1d4ed8',
                                textDecoration: 'underline',
                              }
                            }
                          }}
                          onClick={() => window.open('https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/OmondiAlex_MentorshipCert.png?alt=media&token=9d13a363-e60a-4385-bc84-4ee569bb65f7', '_blank', 'noopener,noreferrer')}
                        />
                      </Grid>
                    </Grid>
                  </Box>

                   {/* Certification 2 */}
                   <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Certification Title</Typography>
                        <TextField fullWidth value="Virtual Assistant" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issuing Organization</Typography>
                        <TextField fullWidth value="ALX - The Room" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issue Date</Typography>
                        <TextField fullWidth value="2024-08" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Description / Scope</Typography>
                        <TextField fullWidth value="Designed to develop and practice professional skills that are most needed to be a successful Virtual Assistant" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential ID / License Number</Typography>
                        <TextField fullWidth value="cer-4845ee55-b8bd-4fcb-81a6-46dedea7" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential URL/Verification Link</Typography>
                        <TextField
                          fullWidth
                          value="https://www.virtualbadge.io/certificate-validator?credential=cer-4845ee55-b8bd-4fcb-81a6-46dedea7"
                          InputProps={{ readOnly: true }}
                          sx={{ 
                            cursor: 'pointer',
                            mb: 2,
                            '& .MuiInputBase-input': {
                              color: '#2563eb',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#1d4ed8',
                                textDecoration: 'underline',
                              }
                            }
                          }}
                          onClick={() => window.open('https://www.virtualbadge.io/certificate-validator?credential=cer-4845ee55-b8bd-4fcb-81a6-46dedea7', '_blank', 'noopener,noreferrer')}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Certification 3 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Certification Title</Typography>
                        <TextField fullWidth value="Cyber Security" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issuing Organization</Typography>
                        <TextField fullWidth value="Scratch and Script Limited, in Collaboration with ISACA  and Data Privacy and Governance Society of Kenya" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issue Date</Typography>
                        <TextField fullWidth value="2024-04" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Description / Scope</Typography>
                        <TextField fullWidth value="Cybersecurity Fundamentals, Threat Analysis, and Incident Response" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential ID / License Number</Typography>
                        <TextField fullWidth value="IGN-8533838908-4209" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential URL/Verification Link</Typography>
                        <TextField
                          fullWidth
                          value="https://certificate-verification.scratchandscript.com/"
                          InputProps={{ readOnly: true }}
                          sx={{ 
                            cursor: 'pointer',
                            mb: 2,
                            '& .MuiInputBase-input': {
                              color: '#2563eb',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#1d4ed8',
                                textDecoration: 'underline',
                              }
                            }
                          }}
                          onClick={() => window.open('https://certificate-verification.scratchandscript.com/', '_blank', 'noopener,noreferrer')}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Certification 4 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Certification Title</Typography>
                        <TextField fullWidth value="Mentorship Training" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issuing Organization</Typography>
                        <TextField fullWidth value="Igoye Young Professional Mentorship Institute(IYPMI)" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issue Date</Typography>
                        <TextField fullWidth value="2023-11" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Description / Scope</Typography>
                        <TextField fullWidth value="Supporting Young People to Rethink, Refocus, and Succed." sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential ID / License Number</Typography>
                        <TextField fullWidth value="N/A" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential URL/Verification Link</Typography>
                        <TextField
                          fullWidth
                          value="https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/YPMP.png?alt=media&token=bc46ed54-69bd-4c9a-a025-cf7af8027330"
                          InputProps={{ readOnly: true }}
                          sx={{ 
                            cursor: 'pointer',
                            mb: 2,
                            '& .MuiInputBase-input': {
                              color: '#2563eb',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#1d4ed8',
                                textDecoration: 'underline',
                              }
                            }
                          }}
                          onClick={() => window.open('https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/YPMP.png?alt=media&token=bc46ed54-69bd-4c9a-a025-cf7af8027330', '_blank', 'noopener,noreferrer')}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Certification 5 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Certification Title</Typography>
                        <TextField fullWidth value="Full Stack Software Engineering Program" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issuing Organization</Typography>
                        <TextField fullWidth value="ALX Africa" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issue Date</Typography>
                        <TextField fullWidth value="2023-11" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Description / Scope</Typography>
                        <TextField fullWidth value="A 12 month Software Engineering Programme with a specialization in Front-end." sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential ID / License Number</Typography>
                        <TextField fullWidth value="N/A" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential URL/Verification Link</Typography>
                        <TextField
                          fullWidth
                          value="https://savanna.alxafrica.com/certificates/pERFn8XCsc"
                          InputProps={{ readOnly: true }}
                          sx={{ 
                            cursor: 'pointer',
                            mb: 2,
                            '& .MuiInputBase-input': {
                              color: '#2563eb',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#1d4ed8',
                                textDecoration: 'underline',
                              }
                            }
                          }}
                          onClick={() => window.open('https://savanna.alxafrica.com/certificates/pERFn8XCsc', '_blank', 'noopener,noreferrer')}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                  {/* Certification 6 */}
                  <Box sx={{ border: '1.5px solid #cbd5e1', borderRadius: 2, p: 3, mb: 4 }}>
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Certification Title</Typography>
                        <TextField fullWidth value="Android Development" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issuing Organization</Typography>
                        <TextField fullWidth value="Google Africa Developer Training Program" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Issue Date</Typography>
                        <TextField fullWidth value="2023-06" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Description / Scope</Typography>
                        <TextField fullWidth value="Mobile Apps development using Kotling" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential ID / License Number</Typography>
                        <TextField fullWidth value="CA3CEBA0F7F36E1" sx={{ mb: 2 }} InputProps={{ readOnly: true }} />
                      </Grid>
                      <Grid item xs={12} md={6}>
                        <Typography fontWeight={600} sx={{ mb: 0.5 }}>Credential URL/Verification Link</Typography>
                        <TextField
                          fullWidth
                          value="https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/Android.png?alt=media&token=1bc27f22-c596-4120-9c07-f586bf7d282a"
                          InputProps={{ readOnly: true }}
                          sx={{ 
                            cursor: 'pointer',
                            mb: 2,
                            '& .MuiInputBase-input': {
                              color: '#2563eb',
                              textDecoration: 'underline',
                              cursor: 'pointer',
                              '&:hover': {
                                color: '#1d4ed8',
                                textDecoration: 'underline',
                              }
                            }
                          }}
                          onClick={() => window.open('https://firebasestorage.googleapis.com/v0/b/portfolio-95467.appspot.com/o/Android.png?alt=media&token=1bc27f22-c596-4120-9c07-f586bf7d282a', '_blank', 'noopener,noreferrer')}
                        />
                      </Grid>
                    </Grid>
                  </Box>
                </Box>
              </Box>
            </TabPanel>
            <TabPanel value={tab} index={5}>
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