import React, { useState } from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  Typography, 
  Grid, 
  Chip, 
  Button, 
  Avatar,
  Tabs,
  Tab,
  CardMedia,
  CardActions,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  useMediaQuery,
  Container
} from "@mui/material";
import { 
  GitHub as GitHubIcon,
  Language as LanguageIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  Storage as StorageIcon,
  PhoneAndroid as MobileIcon,
  Web as WebIcon,
  Close as CloseIcon,
  CheckCircle as CheckCircleIcon,
  Star as StarIcon,
  People as PeopleIcon,
  Download as DownloadIcon
} from "@mui/icons-material";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const isMobile = useMediaQuery('(max-width:1280px)');

  const categories = [
    { label: "All Projects", icon: <CodeIcon /> },
    { label: "Cybersecurity", icon: <SecurityIcon /> },
    { label: "AI & Healthcare", icon: <StorageIcon /> },
    { label: "Web & Digital Solutions", icon: <WebIcon /> },
    { label: "Community & Impact", icon: <PeopleIcon /> },
  ];

  const handleDownload = (pdfUrl, filename) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const projects = [
    {
      id: 1,
      title: "A Cloud Computing Security Assessment Framework for FINTECHs in Kenya",
      category: "Cybersecurity",
      description: "A framework I developed this year for assessing cloud security in Kenyan fintechs.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      technologies: ["Cloud Security", "FinTech", "Framework"],
      features: [
        "Custom security assessment methodology",
        "Tailored for Kenyan fintechs",
        "Covers compliance, risk, and technical controls",
        "Validated with real organizations"
      ],
      live: "",
      github: "",
      status: "Completed",
      rating: 5.0,
      year: 2024,
      pdfUrl: "/papers/A Cloud Computing Security Assessment Framework for FINTECHs in Kenya.pdf"
    },
    {
      id: 14,
      title: "BoneHealth AI",
      category: "AI & Healthcare",
      description: "BoneHealth AI leverages cutting-edge artificial intelligence to predict osteoporosis risk, enabling early detection and prevention of this silent but devastating disease.",
      image: "/assets/imgs/boneAI.png",
      technologies: ["AI", "Healthcare", "Machine Learning", "Osteoporosis"],
      features: [
        "AI-powered risk analysis",
        "Early detection capabilities",
        "Data-driven insights",
        "Healthcare provider support"
      ],
      live: "https://bonehealth-ai.vercel.app/",
      github: "",
      status: "Completed",
      rating: 4.9,
      year: 2024
    },
    {
      id: 13,
      title: "ThreatSeal SOC Platform",
      category: "Cybersecurity",
      description: "AI powered SOC platform.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80",
      technologies: ["AI", "SOC", "Cybersecurity"],
      features: [
        "AI-powered threat detection",
        "Security operations automation",
        "Real-time monitoring"
      ],
      live: "https://demo.threatseal.com/",
      github: "",
      status: "Completed",
      rating: 4.9,
      year: 2024
    },
    {
      id: 12,
      title: "BetaAfya Cloud Care",
      category: "AI & Healthcare",
      description: "Modern healthcare record management. Secure, cloud-based EHR system.",
      image: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&w=600&q=80",
      technologies: ["Healthcare", "Cloud", "EHR"],
      features: [
        "Electronic health records",
        "Cloud-based workflow",
        "Secure data management"
      ],
      live: "https://www.betaafya-cloud-care.com/",
      github: "",
      status: "Completed",
      rating: 4.8,
      year: 2024
    },
    {
      id: 2,
      title: "FaziLabs Dev",
      category: "Web & Digital Solutions",
      description: "FaziLabs delivers professional software services from custom platforms to CMS-based websites. Let our passionate trio bring your vision to life.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "CMS", "Custom Platforms"],
      features: [
        "Custom web platforms",
        "CMS-based websites",
        "Professional software services"
      ],
      live: "https://dev.fazilabs.com/",
      github: "",
      status: "Completed",
      rating: 4.9,
      year: 2024
    },
    {
      id: 3,
      title: "FaziLabs Portfolio",
      category: "Web & Digital Solutions",
      description: "Portfolio for Brian Murithi: I craft exceptional digital experiences through innovative web applications, scalable backend systems, and modern user interfaces. Let's build something amazing together.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80",
      technologies: ["React", "Node.js", "UI/UX", "Backend"],
      features: [
        "Modern web applications",
        "Scalable backend systems",
        "Innovative user interfaces"
      ],
      live: "https://fazilabs.com/",
      github: "",
      status: "Completed",
      rating: 4.8,
      year: 2024
    },
    {
      id: 4,
      title: "Trio Hub Women",
      category: "Community & Impact",
      description: "Empowering girls and women for a resilient and equitable community.",
      image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=600&q=80",
      technologies: ["Community", "Empowerment", "Education"],
      features: [
        "Menstrual hygiene education",
        "FGM eradication advocacy",
        "Teen pregnancy prevention",
        "Eco-friendly menstrual products"
      ],
      live: "https://triohubwomen.org/",
      github: "",
      status: "Completed",
      rating: 4.9,
      year: 2024
    },
    {
      id: 6,
      title: "TripTick Travels",
      category: "Web & Digital Solutions",
      description: "Plan Your Dream Adventure Today! Let us help you create unforgettable memories on your next trip.",
      image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=600&q=80",
      technologies: ["Travel", "Adventure", "Booking"],
      features: [
        "Trip planning",
        "Adventure tours",
        "Travel booking"
      ],
      live: "https://tripticktravels.com/",
      github: "",
      status: "Completed",
      rating: 4.8,
      year: 2024
    },
    {
      id: 7,
      title: "Young Professional Mentorship Program",
      category: "Community & Impact",
      description: "Supporting young people to Rethink, Refocus & Succeed.",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
      technologies: ["Mentorship", "Youth", "Career"],
      features: [
        "Mentorship sessions",
        "Career development",
        "Leadership training"
      ],
      live: "https://youngprofessionalmentorshipprogram.com/",
      github: "",
      status: "Completed",
      rating: 4.9,
      year: 2024
    },
    {
      id: 8,
      title: "SM Fundraising & Business Development Consultants",
      category: "Web & Digital Solutions",
      description: "Your one-stop solution for successful organizational fundraising and business development.",
      image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
      technologies: ["Fundraising", "Business Development", "Consulting"],
      features: [
        "Grant writing",
        "Donor relationship management",
        "Strategy development"
      ],
      live: "https://smfundraisingconsultants.com/",
      github: "",
      status: "Completed",
      rating: 4.7,
      year: 2024
    },
    {
      id: 9,
      title: "SG Big Data",
      category: "Web & Digital Solutions",
      description: "Providing Insight Beyond Tomorrow. Empowering organizations to turn data into smarter decisions.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      technologies: ["Big Data", "Analytics", "Automation"],
      features: [
        "Data strategy",
        "Governance",
        "Analytics",
        "Automation"
      ],
      live: "https://sgbigdata.com/",
      github: "",
      status: "In Development",
      rating: 4.8,
      year: 2024
    },
    {
      id: 10,
      title: "Celebrating Our Stories",
      category: "Community & Impact",
      description: "A platform for sharing and celebrating personal stories.",
      image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=600&q=80",
      technologies: ["Storytelling", "Community", "Web Platform"],
      features: [
        "Story sharing",
        "Community engagement",
        "Personal growth"
      ],
      live: "https://celebratingourstories.com/",
      github: "",
      status: "Completed",
      rating: 4.7,
      year: 2024
    },
    {
      id: 11,
      title: "TechDJ",
      category: "Web & Digital Solutions",
      description: "Discover, Download & Enjoy. Connect your Spotify account and unlock a world of music.",
      image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=600&q=80",
      technologies: ["Music", "Spotify", "Web App"],
      features: [
        "Spotify integration",
        "Music downloads",
        "Playlist management"
      ],
      live: "https://techdj.fazilabs.com/login",
      github: "",
      status: "Completed",
      rating: 4.8,
      year: 2024
    },
  ];

  const filteredProjects = selectedCategory === 0 
    ? projects 
    : projects.filter(project => {
        const categoryName = categories[selectedCategory].label;
        return project.category === categoryName;
      });

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProject(null);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed": return "success";
      case "In Progress": return "warning";
      case "Planning": return "info";
      default: return "default";
    }
  };

  return (
    <>
      {/* Mobile Design (1280px and below) */}
      {isMobile && (
        <Box sx={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          pt: 8,
          pb: 4
        }}>
          <Container maxWidth="sm">
            {/* Hero Header */}
            <Card sx={{ 
              borderRadius: 4, 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
              mb: 3,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)'
            }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ 
                  width: 80, 
                  height: 80, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  mx: 'auto',
                  mb: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <CodeIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: '#1f2937' }}>
                  My Projects
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                  Showcasing innovative solutions across cybersecurity, web development, and mobile applications
                </Typography>
                
                {/* Quick Stats */}
                <Grid container spacing={2} sx={{ mb: 3, flexWrap: 'wrap' }}>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ 
                      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                      borderRadius: 3, 
                      p: 2, 
                      color: 'white',
                      textAlign: 'center',
                      minWidth: 0
                    }}>
                      <Typography variant="h5" fontWeight={700} sx={{ minWidth: 0, overflowWrap: 'break-word' }}>{projects.length}</Typography>
                      <Typography variant="caption" sx={{ minWidth: 0, overflowWrap: 'break-word' }}>Total Projects</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ 
                      background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                      borderRadius: 3, 
                      p: 2, 
                      color: 'white',
                      textAlign: 'center',
                      minWidth: 0
                    }}>
                      <Typography variant="h5" fontWeight={700} sx={{ minWidth: 0, overflowWrap: 'break-word' }}>{projects.filter(p => p.status === 'Completed').length}</Typography>
                      <Typography variant="caption" sx={{ minWidth: 0, overflowWrap: 'break-word' }}>Completed</Typography>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={4}>
                    <Box sx={{ 
                      background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                      borderRadius: 3, 
                      p: 2, 
                      color: 'white',
                      textAlign: 'center',
                      minWidth: 0
                    }}>
                      <Typography variant="h5" fontWeight={700} sx={{ minWidth: 0, overflowWrap: 'break-word' }}>{categories.length - 1}</Typography>
                      <Typography variant="caption" sx={{ minWidth: 0, overflowWrap: 'break-word' }}>Categories</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Category Sections */}
            {categories.slice(1).map((category, categoryIndex) => {
              const categoryProjects = projects.filter(project => project.category === category.label);
              if (categoryProjects.length === 0) return null;
              
              return (
                <Card key={categoryIndex} sx={{ 
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
                        {category.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" fontWeight={600} color="#1f2937">
                          {category.label}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {categoryProjects.length} project{categoryProjects.length !== 1 ? 's' : ''}
                        </Typography>
                      </Box>
                    </Box>
                    
                    <Grid container spacing={2}>
                      {categoryProjects.map((project) => (
                        <Grid item xs={12} key={project.id}>
                          <Card 
                            sx={{ 
                              borderRadius: 3, 
                              boxShadow: '0 4px 12px rgba(0,0,0,0.05)', 
                              border: '1px solid #e2e8f0',
                              transition: 'all 0.3s ease',
                              cursor: 'pointer',
                              '&:hover': {
                                transform: 'translateY(-2px)',
                                boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
                              }
                            }}
                            onClick={() => handleProjectClick(project)}
                          >
                            <CardMedia
                              component="img"
                              height="160"
                              image={project.image}
                              alt={project.title}
                              sx={{ objectFit: 'cover' }}
                            />
                            <CardContent sx={{ p: 3 }}>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                                <Typography variant="h6" fontWeight={600} sx={{ color: '#1f2937', flex: 1, fontSize: '1rem' }}>
                                  {project.title}
                                </Typography>
                                <Chip 
                                  label={project.status} 
                                  size="small" 
                                  color={getStatusColor(project.status)}
                                  sx={{ ml: 1, fontSize: '0.7rem' }}
                                />
                              </Box>
                              <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, fontSize: '0.9rem' }}>
                                {project.description}
                              </Typography>
                              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                {project.technologies.slice(0, 2).map((tech, index) => (
                                  <Chip 
                                    key={index} 
                                    label={tech} 
                                    size="small" 
                                    variant="outlined"
                                    sx={{ fontSize: '0.65rem' }}
                                  />
                                ))}
                                {project.technologies.length > 2 && (
                                  <Chip 
                                    label={`+${project.technologies.length - 2} more`} 
                                    size="small" 
                                    variant="outlined"
                                    sx={{ fontSize: '0.65rem' }}
                                  />
                                )}
                              </Box>
                              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Typography variant="caption" color="text.secondary">
                                  {project.year}
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                                  {project.live && (
                                    <Button 
                                      size="small" 
                                      variant="outlined"
                                      startIcon={<LanguageIcon sx={{ fontSize: 16 }} />}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(project.live, '_blank');
                                      }}
                                      sx={{ 
                                        fontSize: '0.7rem',
                                        borderColor: '#2563eb', 
                                        color: '#2563eb',
                                        '&:hover': {
                                          borderColor: '#1d4ed8',
                                          color: '#1d4ed8',
                                        }
                                      }}
                                    >
                                      View Live
                                    </Button>
                                  )}
                                  {project.pdfUrl && (
                                    <Button 
                                      size="small" 
                                      variant="outlined"
                                      startIcon={<DownloadIcon sx={{ fontSize: 16 }} />}
                                      onClick={(e) => {
                                        e.stopPropagation();
                                        handleDownload(project.pdfUrl, project.title);
                                      }}
                                      sx={{ 
                                        fontSize: '0.7rem',
                                        borderColor: '#10b981', 
                                        color: '#10b981',
                                        '&:hover': {
                                          borderColor: '#059669',
                                          color: '#059669',
                                        }
                                      }}
                                    >
                                      View Framework
                                    </Button>
                                  )}
                                </Box>
                              </Box>
                            </CardContent>
                          </Card>
                        </Grid>
                      ))}
                    </Grid>
                  </CardContent>
                </Card>
              );
            })}
          </Container>
        </Box>
      )}

      {/* Desktop Design (fluid, responsive) */}
      {!isMobile && (
        <Container maxWidth="lg" sx={{ py: 4, mt: 10, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Header */}
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', mb: 4 }}>
                <Typography variant="h3" fontWeight={700} sx={{ mb: 2, color: '#1f2937' }}>
                  My Projects
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                  Showcasing innovative solutions across cybersecurity, web development, and mobile applications
                </Typography>
              </Box>
            </Grid>

            {/* Category Tabs */}
            <Grid item xs={12}>
              <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 4 }}>
                <Tabs 
                  value={selectedCategory} 
                  onChange={(_, newValue) => setSelectedCategory(newValue)}
                  variant="scrollable"
                  scrollButtons="auto"
                  sx={{
                    '& .MuiTabs-indicator': { backgroundColor: '#2563eb', height: 3 },
                    '& .MuiTab-root': {
                      fontWeight: 600,
                      color: '#94a3b8',
                      opacity: 0.7,
                      minWidth: 120,
                      px: 3,
                      transition: 'color 0.2s, opacity 0.2s',
                    },
                    '& .Mui-selected': {
                      color: '#2563eb !important',
                      opacity: 1,
                    },
                  }}
                >
                  {categories.map((category, index) => (
                    <Tab 
                      key={index} 
                      label={category.label} 
                      icon={category.icon}
                      iconPosition="start"
                    />
                  ))}
                </Tabs>
              </Box>
            </Grid>

            {/* Projects Grid */}
            <Grid item xs={12}>
              <Grid container spacing={3}>
                {filteredProjects.map((project) => (
                  <Grid item xs={12} md={6} lg={4} key={project.id}>
                    <Card 
                      sx={{ 
                        height: '100%', 
                        borderRadius: 3, 
                        boxShadow: 2,
                        transition: 'all 0.3s ease',
                        cursor: 'pointer',
                        width: '100%',
                        '&:hover': {
                          transform: 'translateY(-8px)',
                          boxShadow: 4,
                        }
                      }}
                      onClick={() => handleProjectClick(project)}
                    >
                      <CardMedia
                        component="img"
                        height="200"
                        image={project.image}
                        alt={project.title}
                        sx={{ objectFit: 'cover' }}
                      />
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Typography variant="h6" fontWeight={600} sx={{ color: '#1f2937', flex: 1 }}>
                            {project.title}
                          </Typography>
                          <Chip 
                            label={project.status} 
                            size="small" 
                            color={getStatusColor(project.status)}
                            sx={{ ml: 1 }}
                          />
                        </Box>
                        <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6 }}>
                          {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                          {project.technologies.slice(0, 3).map((tech, index) => (
                            <Chip 
                              key={index} 
                              label={tech} 
                              size="small" 
                              variant="outlined"
                              sx={{ fontSize: '0.75rem' }}
                            />
                          ))}
                          {project.technologies.length > 3 && (
                            <Chip 
                              label={`+${project.technologies.length - 3} more`} 
                              size="small" 
                              variant="outlined"
                              sx={{ fontSize: '0.75rem' }}
                            />
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      )}

      {/* Project Details Dialog */}
      <Dialog 
        open={openDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight={600}>
                  {selectedProject.title}
                </Typography>
                <IconButton onClick={handleCloseDialog}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ pt: 0 }}>
              <CardMedia
                component="img"
                height="250"
                image={selectedProject.image}
                alt={selectedProject.title}
                sx={{ borderRadius: 2, mb: 3, objectFit: 'cover' }}
              />
              <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                {selectedProject.description}
              </Typography>
              
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Key Features
              </Typography>
              <List dense sx={{ mb: 3 }}>
                {selectedProject.features.map((feature, index) => (
                  <ListItem key={index} sx={{ px: 0 }}>
                    <ListItemIcon sx={{ minWidth: 32 }}>
                      <CheckCircleIcon sx={{ color: '#10b981', fontSize: 20 }} />
                    </ListItemIcon>
                    <ListItemText primary={feature} />
                  </ListItem>
                ))}
              </List>

              <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                Technologies Used
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {selectedProject.technologies.map((tech, index) => (
                  <Chip 
                    key={index} 
                    label={tech} 
                    variant="outlined"
                    sx={{ fontWeight: 500 }}
                  />
                ))}
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                {selectedProject.live && (
                  <Button 
                    variant="outlined" 
                    startIcon={<LanguageIcon />}
                    onClick={() => window.open(selectedProject.live, '_blank')}
                    sx={{ borderColor: '#2563eb', color: '#2563eb' }}
                  >
                    Live Demo
                  </Button>
                )}
                {selectedProject.pdfUrl && (
                  <Button 
                    variant="outlined" 
                    startIcon={<DownloadIcon />}
                    onClick={() => handleDownload(selectedProject.pdfUrl, selectedProject.title)}
                    sx={{ borderColor: '#10b981', color: '#10b981' }}
                  >
                    View Framework
                  </Button>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Projects; 