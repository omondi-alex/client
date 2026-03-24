import React from "react";
import { Box, Card, CardContent, Avatar, Typography, Grid, Tabs, Tab, Paper, Divider, IconButton, Chip, useMediaQuery, Accordion, AccordionSummary, AccordionDetails, Container } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
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

const ProfileDashboard = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialTab = parseInt(searchParams.get('tab') || '0');
  const [tab, setTab] = React.useState(initialTab);
  const isMobile = useMediaQuery('(max-width:1280px)');
  const isMediumLarge = useMediaQuery('(max-width:1440px)');
  const mobileWorkExperience = [
    {
      title: "Tutorial Fellow - Information Technology",
      company: "Zetech University",
      roleType: "Full-time",
      location: "Kenya",
      period: "2026-02 - To date",
      sectionTitle: "Allocated Units",
      icon: SchoolIcon,
      accent: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
      badgeBg: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      badgeColor: "#1e40af",
      items: [
        "Cyber Security",
        "Network Design and Administration",
        "Database Systems",
        "Cyber Law",
        "Routing and Switching",
        "Ethical Hacking",
      ],
    },
    {
      title: "Lecturer",
      company: "Kirinyaga University",
      roleType: "Part-time",
      location: "Kirinyaga, Kenya",
      period: "2025-09 - To date",
      sectionTitle: "Allocated Units",
      icon: SchoolIcon,
      accent: "linear-gradient(135deg, #0f766e 0%, #0d9488 100%)",
      badgeBg: "linear-gradient(135deg, #ecfeff 0%, #ccfbf1 100%)",
      badgeColor: "#115e59",
      items: [
        "Computer System Engineering Project Management",
        "Object-Oriented Analysis and Design",
        "Computer System Security",
        "Computer Architecture",
        "Web Development",
      ],
    },
    {
      title: "Platforms Developer",
      company: "Agriwatt Hub Limited",
      roleType: "Part-time",
      location: "Nairobi, Kenya",
      period: "2025-08 - 2025-11",
      sectionTitle: "Key Contributions",
      icon: CodeIcon,
      accent: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
      badgeBg: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)",
      badgeColor: "#5b21b6",
      items: [
        "Graphics Design",
        "Virtual Assistant",
        "Create data visualization dashboards for farm analytics",
        "Develop mobile data collection modules (online-first approach)",
        "Build farmer feedback systems (SMS/USSD platforms)",
        "Collaborate on website improvements and user experience enhancements",
      ],
    },
    {
      title: "ICT Support Volunteer",
      company: "Young Professional Mentorship Program (YPMP)",
      roleType: "Volunteer",
      location: "Kampala, Uganda",
      period: "2024-01 - To date",
      sectionTitle: "Key Responsibilities",
      icon: SupportIcon,
      accent: "linear-gradient(135deg, #ea580c 0%, #f97316 100%)",
      badgeBg: "linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)",
      badgeColor: "#9a3412",
      items: [
        "Website Management",
        "Graphics Design",
        "Virtual Assistant",
      ],
    },
    {
      title: "Software Security Engineer",
      company: "Enovise Group",
      roleType: "Full-time",
      location: "Kenya",
      period: "2024-03 - 2025-06",
      sectionTitle: "Key Responsibilities",
      icon: SecurityIcon,
      accent: "linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)",
      badgeBg: "linear-gradient(135deg, #fef2f2 0%, #fee2e2 100%)",
      badgeColor: "#991b1b",
      items: [
        "Designed and implemented security solutions",
        "Created software tools for incident investigation",
        "Monitored security logs and responded to incidents",
        "Managed vulnerabilities and threat detection",
      ],
    },
    {
      title: "ICT Officer",
      company: "Ministry of Education",
      roleType: "Full-time",
      location: "Kenya",
      period: "2023-01 - 2024-01",
      sectionTitle: "Key Responsibilities",
      icon: ComputerIcon,
      accent: "linear-gradient(135deg, #475569 0%, #334155 100%)",
      badgeBg: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)",
      badgeColor: "#334155",
      items: [
        "Supported E-Learning and content development",
        "Trained teachers in digital literacy",
        "Provided technical support and maintenance",
        "Assisted with ICT integration in education",
      ],
    },
  ];
  const mobileEducation = [
    {
      title: "Master's in Computer Security",
      institution: "AIMS",
      period: "2023-10 - 2025-07",
      status: "Completed",
      accent: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
      badgeBg: "linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)",
      badgeColor: "#065f46",
      details: [
        "Thesis: A Cloud Computing Security Assessment Framework for FINTECHs in Kenya",
        "Focus: Applied cloud security, risk assessment, and fintech resilience",
      ],
    },
    {
      title: "Bachelor's in Computer Science",
      institution: "Kirinyaga University",
      period: "2018-09 - 2022-10",
      status: "Upper Division",
      accent: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
      badgeBg: "linear-gradient(135deg, #f0fdfa 0%, #ccfbf1 100%)",
      badgeColor: "#115e59",
      details: [
        "Project: Garbage Management System",
        "Award: Second Class Honours (Upper Division)",
      ],
    },
  ];
  const mobileCertifications = [
    {
      title: "Business Management",
      issuer: "IIAfrica",
      date: "2025-08",
      focus: "Business and data analytics, leadership, and problem-solving for innovation.",
    },
    {
      title: "Mentor in YPMP",
      issuer: "IYPMI",
      date: "2024-11",
      focus: "Supporting young people to rethink, refocus, and succeed.",
    },
    {
      title: "Virtual Assistant",
      issuer: "ALX - The Room",
      date: "2024-08",
      focus: "Professional skills development for virtual assistant practice.",
    },
    {
      title: "Cyber Security",
      issuer: "Scratch and Script",
      date: "2024-04",
      focus: "Cybersecurity fundamentals, threat analysis, and incident response.",
    },
    {
      title: "Mentorship Training",
      issuer: "IYPMI",
      date: "2023-11",
      focus: "Practical mentorship support for young professionals.",
    },
    {
      title: "Full Stack Software Engineering Program",
      issuer: "ALX Africa",
      date: "2023-11",
      focus: "A 12-month software engineering program with front-end specialization.",
    },
    {
      title: "Android Development",
      issuer: "Google Africa Developer Training Program",
      date: "2023-06",
      focus: "Mobile application development using Kotlin.",
    },
  ];
  const mobileExpertiseGroups = [
    {
      title: "Industry Expertise",
      accent: "linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)",
      border: "#bfdbfe",
      titleColor: "#1d4ed8",
      chips: [
        "Software Security",
        "Software Development",
        "IT Support",
        "Virtual Assistant",
        "Graphics Design",
        "GRC",
      ],
    },
    {
      title: "Software Expertise",
      accent: "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)",
      border: "#bbf7d0",
      titleColor: "#047857",
      chips: [
        "React Js",
        "Next Js",
        "Python",
        "Microsoft Office",
        "Kotlin",
      ],
    },
    {
      title: "Security & Delivery Focus",
      accent: "linear-gradient(135deg, #faf5ff 0%, #ede9fe 100%)",
      border: "#ddd6fe",
      titleColor: "#6d28d9",
      chips: [
        "Threat Detection",
        "Incident Response",
        "Cloud Security",
        "API Security",
        "UI Delivery",
        "Mentorship",
      ],
    },
  ];
  const mobilePersonalInfo = [
    {
      label: "Full Name",
      value: "Omondi Alex Omieno",
      icon: PersonIcon,
      accent: "linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)",
    },
    {
      label: "Primary Email",
      value: "omondialex3517@gmail.com",
      icon: EmailIcon,
      accent: "linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)",
    },
    {
      label: "WhatsApp",
      value: "+254 707 750879",
      icon: WhatsAppIcon,
      accent: "linear-gradient(135deg, #22c55e 0%, #16a34a 100%)",
    },
    {
      label: "Location",
      value: "Nairobi, Kenya",
      icon: LocationOnIcon,
      accent: "linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%)",
    },
  ];

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
        background: 'radial-gradient(900px 400px at 10% -20%, rgba(14, 165, 233, 0.25), transparent 60%), linear-gradient(135deg, #0b1120 0%, #0f172a 55%, #111827 100%)',
        pt: 8,
        pb: 4,
        width: '100%',
        maxWidth: '100vw',
        overflowX: 'hidden'
      }}>
        <Container maxWidth="sm" sx={{ width: '100%', maxWidth: '100%', overflowX: 'hidden' }}>
          {/* Hero Profile Section */}
          <Card sx={{ 
            borderRadius: 4, 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
            mb: 3,
            background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.95) 0%, rgba(17, 24, 39, 0.95) 100%)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(14, 165, 233, 0.25)',
            position: 'relative',
            overflow: 'hidden',
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1px, transparent 1px)',
              backgroundSize: '22px 22px',
              opacity: 0.35,
              pointerEvents: 'none',
            },
            '& > *': {
              position: 'relative',
              zIndex: 1,
            }
          }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Box sx={{ position: 'relative', display: 'inline-block', mb: 3 }}>
                <Avatar 
                  src={fazitechImg} 
                  sx={{ 
                    width: 120, 
                    height: 120, 
                    border: '3px solid rgba(14, 165, 233, 0.6)', 
                    boxShadow: '0 8px 32px rgba(14, 165, 233, 0.25)',
                    mx: 'auto'
                  }} 
                />
              </Box>
              <Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: '#e2e8f0', fontFamily: '"Space Grotesk", "Sora", "Montserrat", sans-serif' }}>
                Omondi Alex
              </Typography>
              <Typography variant="body1" sx={{ mb: 3, fontSize: '1.1rem', color: '#94a3b8' }}>
                Security & Software Engineer
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

              <Box sx={{ display: 'grid', gap: 1.4 }}>
                {mobilePersonalInfo.map((item) => {
                  const ItemIcon = item.icon;
                  const isEmail = item.label === "Primary Email";
                  return (
                    <Box
                      key={item.label}
                      sx={{
                        width: '100%',
                        maxWidth: 280,
                        mx: 'auto',
                        borderRadius: 4,
                        px: 2,
                        py: 0,
                        minHeight: 86,
                        background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.96) 100%)',
                        border: '1px solid rgba(148, 163, 184, 0.18)',
                        boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)',
                        display: 'flex',
                        alignItems: 'center',
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 1.3, alignItems: 'center', minWidth: 0, width: '100%' }}>
                        <Box
                          sx={{
                            width: 40,
                            height: 40,
                            borderRadius: '12px',
                            background: item.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            flexShrink: 0,
                            boxShadow: '0 8px 18px rgba(37, 99, 235, 0.18)',
                          }}
                        >
                          <ItemIcon sx={{ fontSize: 19 }} />
                        </Box>
                        <Box
                          sx={{
                            minWidth: 0,
                            flex: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            gap: 0.35,
                            py: 1.15,
                          }}
                        >
                          <Typography sx={{ fontSize: '0.74rem', lineHeight: 1.1, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#64748b', mb: 0 }}>
                            {item.label}
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: isEmail ? '0.9rem' : '0.98rem',
                              lineHeight: 1.2,
                              fontWeight: 700,
                              color: '#0f172a',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              pr: 0.25,
                              mb: 0,
                            }}
                          >
                            {item.value}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </Box>
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

              <Box
                sx={{
                  borderRadius: 4,
                  overflow: 'hidden',
                  background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.96) 100%)',
                  border: '1px solid rgba(14, 165, 233, 0.16)',
                  boxShadow: '0 14px 28px rgba(15, 23, 42, 0.07)',
                }}
              >
                <Box sx={{ p: 2.25 }}>
                  <Typography variant="body1" sx={{ lineHeight: 1.85, color: '#334155', fontSize: '0.97rem' }}>
                    Security & Software Engineer with over 2 years of experience building secure, scalable solutions. I specialize in cloud security frameworks, full-stack development, graphic design, and GRC consulting. Beyond technical work, I am passionate about education, lecturing at Kirinyaga University and Zetech University, and mentoring young professionals. My approach combines rigorous security practices with innovative software engineering to deliver solutions that are both robust and user-friendly. I am always open to collaborating on meaningful projects that make a difference.
                  </Typography>
                </Box>
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

              {mobileWorkExperience.map((experience) => {
                const ExperienceIcon = experience.icon;
                return (
                  <Accordion
                    key={`${experience.company}-${experience.title}`}
                    disableGutters
                    sx={{
                      mb: 2,
                      borderRadius: '22px !important',
                      overflow: 'hidden',
                      border: '1px solid rgba(148, 163, 184, 0.18)',
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.96) 100%)',
                      boxShadow: '0 14px 28px rgba(15, 23, 42, 0.08)',
                      '&::before': { display: 'none' },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: '#475569' }} />}
                      sx={{
                        px: 2.25,
                        py: 1.25,
                        alignItems: 'flex-start',
                        '& .MuiAccordionSummary-content': {
                          my: 0,
                        },
                      }}
                    >
                      <Box sx={{ display: 'flex', gap: 1.5, width: '100%', alignItems: 'flex-start' }}>
                        <Box
                          sx={{
                            width: 42,
                            height: 42,
                            borderRadius: '14px',
                            background: experience.accent,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            boxShadow: '0 8px 18px rgba(37, 99, 235, 0.2)',
                            flexShrink: 0,
                          }}
                        >
                          <ExperienceIcon sx={{ fontSize: 20 }} />
                        </Box>
                        <Box sx={{ minWidth: 0, flex: 1 }}>
                          <Typography sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.35, mb: 0.4 }}>
                            {experience.title}
                          </Typography>
                          <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: '#2563eb', mb: 1 }}>
                            {experience.company}
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8, alignItems: 'center' }}>
                            <Chip
                              label={experience.roleType}
                              size="small"
                              sx={{
                                height: 24,
                                background: experience.badgeBg,
                                color: experience.badgeColor,
                                fontWeight: 700,
                                border: '1px solid rgba(148, 163, 184, 0.18)',
                              }}
                            />
                            <Chip
                              icon={<LocationOnIcon sx={{ fontSize: '0.9rem !important', color: '#64748b !important' }} />}
                              label={experience.location}
                              size="small"
                              variant="outlined"
                              sx={{
                                height: 24,
                                color: '#475569',
                                borderColor: '#cbd5e1',
                                '& .MuiChip-label': {
                                  px: 1,
                                  fontWeight: 500,
                                },
                              }}
                            />
                          </Box>
                          <Typography variant="caption" sx={{ display: 'block', mt: 1.1, color: '#64748b', fontWeight: 600 }}>
                            {experience.period}
                          </Typography>
                        </Box>
                      </Box>
                    </AccordionSummary>
                    <AccordionDetails sx={{ px: 2.25, pt: 0, pb: 2.25 }}>
                      <Box
                        sx={{
                          borderRadius: 3,
                          p: 1.8,
                          background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)',
                          border: '1px solid #e2e8f0',
                        }}
                      >
                        <Typography
                          sx={{
                            fontWeight: 700,
                            fontSize: '0.76rem',
                            mb: 1.2,
                            color: '#475569',
                            textTransform: 'uppercase',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {experience.sectionTitle}
                        </Typography>
                        <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none' }}>
                          {experience.items.map((item, idx) => (
                            <Box
                              key={idx}
                              component="li"
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-start',
                                gap: 1,
                                mb: idx === experience.items.length - 1 ? 0 : 1.1,
                              }}
                            >
                              <Box
                                sx={{
                                  width: 8,
                                  height: 8,
                                  mt: '8px',
                                  borderRadius: '50%',
                                  background: experience.badgeColor,
                                  flexShrink: 0,
                                }}
                              />
                              <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#334155' }}>
                                {item}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                );
              })}
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
              <Box sx={{ display: 'grid', gap: 2 }}>
                {mobileEducation.map((education) => (
                  <Box
                    key={`${education.institution}-${education.title}`}
                    sx={{
                      borderRadius: 4,
                      p: 2.25,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(248,250,252,0.95) 100%)',
                      border: '1px solid rgba(16, 185, 129, 0.16)',
                      boxShadow: '0 14px 28px rgba(15, 23, 42, 0.08)',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 1.5, alignItems: 'flex-start', mb: 1.75 }}>
                      <Box
                        sx={{
                          width: 42,
                          height: 42,
                          borderRadius: '14px',
                          background: education.accent,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          flexShrink: 0,
                          boxShadow: '0 8px 20px rgba(16, 185, 129, 0.18)',
                        }}
                      >
                        <SchoolIcon sx={{ fontSize: 20 }} />
                      </Box>
                      <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.35, mb: 0.35 }}>
                          {education.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.92rem', fontWeight: 600, color: '#0f766e', mb: 1 }}>
                          {education.institution}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.8 }}>
                          <Chip
                            label={education.status}
                            size="small"
                            sx={{
                              height: 24,
                              background: education.badgeBg,
                              color: education.badgeColor,
                              fontWeight: 700,
                            }}
                          />
                        </Box>
                        <Typography variant="caption" sx={{ display: 'block', mt: 1.1, color: '#64748b', fontWeight: 600 }}>
                          {education.period}
                        </Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        borderRadius: 3,
                        p: 1.7,
                        background: 'linear-gradient(135deg, #f8fafc 0%, #f0fdf4 100%)',
                        border: '1px solid #dcfce7',
                      }}
                    >
                      <Typography sx={{ fontWeight: 700, fontSize: '0.76rem', mb: 1.2, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                        Highlights
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 0, listStyle: 'none' }}>
                        {education.details.map((detail, idx) => (
                          <Box key={idx} component="li" sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: idx === education.details.length - 1 ? 0 : 1.1 }}>
                            <Box sx={{ width: 8, height: 8, mt: '8px', borderRadius: '50%', background: education.badgeColor, flexShrink: 0 }} />
                            <Typography sx={{ fontSize: '0.92rem', lineHeight: 1.6, color: '#334155' }}>{detail}</Typography>
                          </Box>
                        ))}
                      </Box>
                    </Box>
                  </Box>
                ))}
              </Box>
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
              <Box sx={{ display: 'grid', gap: 1.4, maxHeight: 460, overflowY: 'auto', pr: 0.5 }}>
                {mobileCertifications.map((certification) => (
                  <Box
                    key={`${certification.issuer}-${certification.title}`}
                    sx={{
                      borderRadius: 4,
                      p: 2,
                      background: 'linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(255,251,235,0.95) 100%)',
                      border: '1px solid rgba(245, 158, 11, 0.18)',
                      boxShadow: '0 10px 24px rgba(15, 23, 42, 0.06)',
                    }}
                  >
                    <Box sx={{ display: 'flex', gap: 1.3, alignItems: 'flex-start' }}>
                      <Box
                        sx={{
                          width: 38,
                          height: 38,
                          borderRadius: '12px',
                          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          flexShrink: 0,
                        }}
                      >
                        <VerifiedIcon sx={{ fontSize: 18 }} />
                      </Box>
                      <Box sx={{ minWidth: 0, flex: 1 }}>
                        <Typography sx={{ fontWeight: 700, color: '#0f172a', lineHeight: 1.35, mb: 0.35 }}>
                          {certification.title}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', color: '#b45309', fontWeight: 600 }}>
                          {certification.issuer}
                        </Typography>
                        <Typography variant="caption" sx={{ display: 'block', mt: 0.75, mb: 1.1, color: '#78716c', fontWeight: 600 }}>
                          {certification.date}
                        </Typography>
                        <Typography sx={{ fontSize: '0.9rem', lineHeight: 1.6, color: '#44403c' }}>
                          {certification.focus}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                ))}
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
              <Box sx={{ display: 'grid', gap: 2 }}>
                {mobileExpertiseGroups.map((group) => (
                  <Box
                    key={group.title}
                    sx={{
                      borderRadius: 4,
                      p: 2.3,
                      background: group.accent,
                      border: `1px solid ${group.border}`,
                      boxShadow: '0 10px 24px rgba(15, 23, 42, 0.05)',
                    }}
                  >
                    <Typography sx={{ fontWeight: 700, fontSize: '0.98rem', mb: 1.5, color: group.titleColor }}>
                      {group.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.9 }}>
                      {group.chips.map((chip) => (
                        <Chip
                          key={chip}
                          label={chip}
                          size="small"
                          sx={{
                            background: 'rgba(255,255,255,0.8)',
                            color: '#1e293b',
                            fontWeight: 700,
                            border: '1px solid rgba(255,255,255,0.65)',
                            backdropFilter: 'blur(8px)',
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                ))}
              </Box>
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
            boxShadow: '0 12px 40px rgba(15, 23, 42, 0.45)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            height: '100%',
            p: { xs: 2, md: 3 },
            mb: { xs: 2, md: 0 },
            background: 'linear-gradient(180deg, #0b1120 0%, #0f172a 100%)',
            border: '1px solid rgba(14, 165, 233, 0.3)',
            position: 'relative',
            overflow: 'hidden',
            '&::before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: '4px',
              background: 'linear-gradient(90deg, #22c55e 0%, #0ea5e9 100%)',
            },
            '&::after': {
              content: '""',
              position: 'absolute',
              inset: 0,
              backgroundImage: 'linear-gradient(rgba(14, 165, 233, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(14, 165, 233, 0.08) 1px, transparent 1px)',
              backgroundSize: '24px 24px',
              opacity: 0.35,
              pointerEvents: 'none',
            },
            '& > *': {
              position: 'relative',
              zIndex: 1,
            },
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
                background: 'radial-gradient(circle, rgba(14, 165, 233, 0.25) 0%, rgba(34, 197, 94, 0.1) 60%, transparent 70%)',
                zIndex: 0,
              }
            }}>
              <Avatar 
                src={fazitechImg} 
                sx={{ 
                  width: isMobile ? 70 : 100, 
                  height: isMobile ? 70 : 100, 
                  border: '3px solid rgba(14, 165, 233, 0.7)', 
                  boxShadow: '0 10px 28px rgba(14, 165, 233, 0.25)',
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
                color: '#e2e8f0',
                fontFamily: '"Space Grotesk", "Sora", "Montserrat", sans-serif',
                letterSpacing: '0.02em',
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
              background: 'rgba(14, 165, 233, 0.12)',
              border: '1px solid rgba(14, 165, 233, 0.45)',
              maxWidth: '100%',
              minWidth: 0,
            }}>
              <EmailIcon sx={{ fontSize: isMobile ? 14 : 16, color: '#7dd3fc' }} />
              <Typography 
                variant="body2" 
                align="center" 
                sx={{ 
                  mb: 0,
                  fontSize: isMobile ? '0.85rem' : isMediumLarge ? '0.95rem' : '1rem',
                  color: '#7dd3fc',
                  fontWeight: 500,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minWidth: 0,
                  maxWidth: '100%',
                }}
              >
                omondialex3517@gmail.com
              </Typography>
            </Box>
            <Divider sx={{ my: 2, width: '100%', borderColor: 'rgba(148, 163, 184, 0.35)' }} />
            <Box sx={{ width: '100%' }}>
              <Typography 
                variant="subtitle1" 
                fontWeight={700} 
                mb={2} 
                align="left" 
                sx={{ 
                  fontSize: isMobile ? '1rem' : isMediumLarge ? '1rem' : '1.1rem',
                  color: '#e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                }}
              >
                <Box sx={{
                  width: 28,
                  height: 28,
                  borderRadius: '8px',
                  background: 'linear-gradient(135deg, #22c55e 0%, #0ea5e9 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 4px 12px rgba(34, 197, 94, 0.3)',
                }}>
                  <InfoOutlinedIcon sx={{ fontSize: 16 }} />
                </Box>
                Bio
              </Typography>
              <Box sx={{
                p: 2,
                borderRadius: 2.5,
                background: 'rgba(15, 23, 42, 0.7)',
                border: '1.5px solid rgba(14, 165, 233, 0.35)',
                minHeight: 'fit-content',
                boxShadow: '0 2px 12px rgba(14, 165, 233, 0.12)',
              }}>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    fontSize: isMobile ? '0.85rem' : '0.9rem',
                    lineHeight: 1.8,
                    color: '#cbd5f5',
                    fontWeight: 400,
                    fontFamily: '"IBM Plex Sans", "Space Grotesk", "Sora", sans-serif',
                    letterSpacing: '0.01em',
                  }}
                >
              Security & Software Engineer with over 2 years of experience building secure, scalable solutions. I specialize in cloud security frameworks, full-stack development, graphic design, and GRC consulting. Beyond technical work, I'm passionate about education, lecturing at Kirinyaga University and Zetech University, and mentoring young professionals. My approach combines rigorous security practices with innovative software engineering to deliver solutions that are both robust and user-friendly. Always open to collaborating on meaningful projects that make a difference.                </Typography>
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
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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
                      <Box sx={{ flex: 1, minWidth: 0 }}>
                        <Typography sx={{ fontWeight: 600, fontSize: '0.95rem', mb: 0.25, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
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

                {/* Hiring-Ready Highlights */}
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
                    Core Security & Software Skills
                  </Typography>
                  <Box
                    sx={{
                      p: 2.5,
                      borderRadius: 3,
                      background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)',
                      border: '2px solid #e2e8f0',
                      boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 1,
                    }}
                  >
                    {[
                      'Cloud Security',
                      'SIEM & Log Analysis',
                      'Threat Detection',
                      'Vulnerability Management',
                      'Incident Response',
                      'Secure SDLC',
                      'API Security',
                      'Network Security',
                      'Full-Stack Development',
                      'GRC & Compliance'
                    ].map((skill, idx) => (
                      <Chip
                        key={idx}
                        label={skill}
                        size="small"
                        sx={{
                          background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
                          color: '#1e40af',
                          fontWeight: 600,
                          border: '1px solid #bfdbfe',
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Box sx={{ maxHeight: 500, overflowY: 'auto', pr: 1 }}>
                  {/* Experience -2: Tutorial Fellow (current) */}
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
                          Tutorial Fellow - Information Technology
                        </Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: '1rem', mb: 1, color: '#2563eb' }}>
                          Zetech University
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
                              Kenya
                            </Typography>
                          </Box>
                          <Typography variant="caption" sx={{ color: '#64748b', fontSize: '0.85rem', fontWeight: 500 }}>
                            2026-02 - To date
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
                        Allocated Units
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2.5, listStyle: 'none' }}>
                        {[
                          'Cyber Security',
                          'Network Design and Administration',
                          'Database Systems',
                          'Cyber Law',
                          'Routing and Switching',
                          'Ethical Hacking'
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
                        Allocated Units
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
                            Computer System Engineering Project Management
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
                            Computer System Security
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
                            Computer Architecture
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
                            Web Development
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
