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
  CardMedia,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper,
  TextField,
  Snackbar,
  Alert,
  MenuItem,
  useMediaQuery,
  Container
} from "@mui/material";
import { 
  Article as ArticleIcon,
  Download as DownloadIcon,
  Visibility as ViewIcon,
  Close as CloseIcon,
  School as SchoolIcon,
  CalendarToday as CalendarIcon,
  Language as LanguageIcon,
  Description as DescriptionIcon,
  Star as StarIcon,
  TrendingUp as TrendingIcon,
  Security as SecurityIcon,
  Cloud as CloudIcon,
  CheckCircle as CheckCircleIcon,
  ArrowForward as ArrowForwardIcon,
  Send as SendIcon
} from "@mui/icons-material";

const Publications = () => {
  const [selectedPublication, setSelectedPublication] = useState(null);
  const [openContactDialog, setOpenContactDialog] = useState(false);
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);
  const isMobile = useMediaQuery('(max-width:1280px)');
  // Get in Touch form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    organization: "",
    phone: "",
    collabType: "Research Collaboration",
    subject: "",
    message: "",
    otherCollabType: ""
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Function to handle PDF download
  const handleDownloadPDF = (pdfUrl, title) => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = `${title}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const publications = [
    {
      id: 1,
      title: "Development and Evaluation of a Cloud Security Framework for Kenyan FinTechs",
      authors: ["Omondi, A."],
      abstract: `Validating a security measurement framework tailored for Kenyan FinTechs operating in cloud environments. The research objectives were to create a hands-on security measurement framework index combining essential security parameters for cloud security operations and to validate the framework's usefulness for FinTechs in Kenya. Using the Goal-Question-Metric (GQM) methodology, the study developed a framework that integrates security metrics and sub-metrics to assess cloud security performance. The framework was validated against international standards such as COBIT, ITIL, and ISO, and its effectiveness was tested through experimental analysis and questionnaire-based data collection. The target population consisted of all 51 FinTech companies in Kenya registered with the Central Bank of Kenya as of 2024. The results demonstrated that the framework successfully addressed key cloud security challenges, including internal threats, data destruction, and regulatory compliance. The study concludes that the framework provides a practical tool for FinTechs to measure and improve their cloud security performance, ensuring alignment with global standards and local regulatory requirements. Recommendations include the implementation of the framework, continuous monitoring, and collaboration with cloud service providers to enhance security.`,
      journal: "International Journal of Research Publications (IJRP)",
      year: 2025,
      url: "https://ijrp.org/paper-detail/7544",
      presentedAt: [
        "Cyber Carnival (June 11-13, 2025)",
        "Kirinyaga University 8th Annual International Conference (March 26-27, 2025)"
      ],
      keywords: ["Cloud Security", "FinTech", "Kenya", "Security Framework"],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
      citations: 0,
      downloads: 0,
      impact: "High",
      category: "Cybersecurity",
      volume: "166",
      issue: "1",
      pages: "",
      publishedDate: "14 February 2025",
      doi: "10.47119/IJRP1001661220257565",
      methodology: [
        `The research design employed a mixed-method approach, integrating descriptive research with experimental designs. The information gathered from participants for this descriptive research enabled better comprehension of cloud security challenges that affect Kenyan FinTech organizations. Research data collection was achieved through questionnaires that reached employees from the involved FinTech organizations. Scientists implemented experimental research methods to understand technical issues in cloud computing. An investigation using a private cloud service platform called OwnCloud in a FinTech environment detected vulnerabilities that users might face during operation. The research used the Goal-Question-Metric (GQM) approach to build an assessment system designed for cloud security measurements. This methodology allowed scientists to build an assessment framework that measured security strengths across cloud systems. Given the absence of universally recognized cloud security metrics, the framework underwent customizing to address FinTech business requirements through goal-oriented metric alignment.`
      ],
      findings: [
        "The developed security measurement framework successfully addresses key cloud security challenges for Kenyan FinTechs, including internal threats, data destruction, and regulatory compliance.",
        "Internal threats, especially rogue administrators, are a significant risk. The ability of administrators to reset user passwords without exposing password visibility was identified as a critical vulnerability.",
        "Deleted files can remain accessible in the cloud for up to 30 days, posing privacy and security risks, especially for sensitive financial data.",
        "The framework is organized into five primary domains: Identify, Protect, Detect, Respond, and Recover. Each domain includes specific metrics and sub-metrics to measure cloud security effectiveness.",
        "The framework introduces a Security Index (SecIndex) calculated using the maximum value among key security metrics, providing a clear indicator of whether a FinTech’s cloud environment is secure.",
        "The framework was validated against global security standards (COBIT, ITIL, ISO) and tested through experimental analysis and questionnaire-based data collection.",
        "The framework provides a step-by-step process for FinTechs to: understand the framework and metrics, identify critical systems and assets, compute their Security Index, implement high-priority sub-metrics, and develop and execute an action plan for continuous improvement.",
        "Recommendations: FinTechs should implement the framework to measure and improve cloud security; continuous monitoring and collaboration with cloud providers are essential; training and awareness programs are recommended to minimize internal threats and ensure compliance."
      ],
      pdfUrl: "/papers/Development and Evaluation of a Cloud Security Framework for Kenyan FinTechs.pdf",
      abstractUrl: "https://ijrp.org/paper-detail/7544"
    },
    {
      id: 2,
      title: "Cloud Security Challenges and Assessment Framework for Kenyan FinTechs",
      authors: ["Omondi, A."],
      abstract: `The rapid adoption of cloud computing by FINTECHs in Kenya has brought significant operational advantages, but it has also exposed these organizations to serious security challenges. This study addresses the critical security issues faced by Kenyan FINTECHs, focusing on internal threats and data destruction. The research objectives were to investigate the cloud security challenges Kenyan FINTECHs faced and develop a security assessment framework to address these challenges. Using a mixed-method approach, the study collected data through questionnaires and experimental analysis of the OwnCloud platform. The findings revealed that internal threats, such as rogue administrators, and data destruction issues, such as incomplete deletion, are major concerns. A security assessment framework was developed and validated against international standards like NIST CSF 2.0, COBIT, ITIL, and ISO. The framework provides a structured approach to identifying and mitigating cloud security risks, offering a practical tool for FINTECHs to enhance their cloud security infrastructure. The study recommends increased awareness and training for employees, improved collaboration with cloud providers, and the implementation of robust security policies to address these challenges.`,
      journal: "International Journal of Research and Innovation in Applied Science (IJRAS)",
      year: 2025,
      url: "https://rsisinternational.org/journals/ijrias/articles/cloud-security-challenges-and-framework-development-for-kenyan-fintechs/",
      presentedAt: [
        "Cyber Carnival (June 11-13, 2025)",
        "Kirinyaga University 8th Annual International Conference (March 26-27, 2025)"
      ],
      keywords: ["Cloud Security", "FinTech", "Kenya", "Assessment Framework"],
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
      citations: 0,
      downloads: 0,
      impact: "High",
      category: "Cybersecurity",
      volume: "X",
      issue: "II",
      pages: "409-424",
      publishedDate: "13 March 2025",
      doi: "10.51584/IJRIAS.2025.10020037",
      methodology: [
        "The research design employed a mixed-method approach which integrated descriptive research with experimental designs. The information gathered from participants for this descriptive research enabled better comprehension of cloud security challenges that affect Kenyan FinTech organizations.",
        "Research data collection was achieved through questionnaires that reached employees from the involved fintech organizations. Scientists employed a descriptive survey type because it let them collect mass-scale assessments about cloud security matters from survey participants.",
        "The target population consisted of all 51 Fintech companies in Kenya registered with the Central Bank of Kenya as of 2024. The participants in the study were selected from five different departments within the Fintech companies, with one individual from each department providing insights through questionnaires.",
        "This research employed a census approach. All 51 Fintech companies registered by the Central Bank of Kenya (CBK) was included in this study. One representative from each company was chosen from five key departments, resulting in a total sample size of 255 participants (51 companies × 5 departments).",
        "Given the challenge of accessing backend cloud security threats directly, the study simulated a private cloud environment using OwnCloud, a widely accepted SaaS platform for cloud computing.",
        "Analysis took place across two distinct phases of the research study. This study presents simulation results from OwnCloud-based cloud security tests that led to experimental outcomes. A descriptive statistics approach analyzed all gathered participant data obtained through questionnaire surveys during phase two of the analysis.",
        "The researchers demonstrated the results through textual and numeric representations, including graphs and tables alongside charts along with frequencies and percentages. GQM techniques led to the development of the framework that generated crucial information about the FINTECH sector cloud security status."
      ],
      findings: [
        "The research objective examined data file operations in cloud environments while identifying security threats from cloud providers. The experiment was conducted using OwnCloud version 10.15, with different individuals receiving separate user accounts to use the OwnCloud client software version 5.3.1.",
        "Cloud security faces serious threats because internal misbehaving employees and system administrators exploit their access privileges to sensitive information. Three types of stakeholders exist who pose an insider threat: cloud provider employees as well as their clients and independent partners who work within cloud operations.",
        "OwnCloud allows administrators to reset user passwords without exposing password visibility to themselves. Internal personnel access remains the main security risk this scenario demonstrates. The ability to reset a user password by an administrator allows their entry into affected systems as that user while giving them unrestricted access to data and system security vulnerability potential.",
        "Users received immediate loss of files following their cloud upload and deletion process on their local computer, but those files still existed in the cloud storage for another 30 days. Cloud-based files became visible in the cloud storage for thirty days until complete deletion occurred. Security and privacy risks develop because files stay inside the cloud system accessible to unauthorized users during the thirty-day catchment period.",
        "The research distributed 255 questionnaires which were sent to employees from each of the 51 FinTech organizations validated by the Central Bank of Kenya by 2024. Out of the distributed questionnaires, 74.2% (189) were filled up and returned for assessment, achieving a very good response rate according to established standards.",
        "A study on Kenyan fintech companies reveals significant cloud security challenges, with participants highlighting major concerns such as data accessibility risks due to internet outages, unauthorized access by malicious cloud administrators, and insufficient password security measures, emphasizing the need for multifactor authentication and advanced protection techniques.",
        "Respondents also expressed unease over cloud vendors' uncontrolled data management practices, lack of transparency in data deletion, and inadequate incident response responsibilities, underscoring the necessity for stronger vendor supervision, compliance measures, and improved security defenses.",
        "The research findings align with recent cybersecurity reports highlighting threats in Kenya's fintech industry, including over 860 million cyberattacks reported in the past year and vulnerabilities in public and private entities like Kenya Power and Kenya Railways.",
        "The implementation of cloud computing provides Fintech organizations with substantial advantages to both develop innovative approaches and achieve market expansion. However, past implementations show that the many advantages Fintechs gain require managing serious security challenges.",
        "The research provides Fintechs with a definitive methodology to implement secure cloud services that emphasize stages necessary for optimization and security enhancement. By implementing the structured framework developed in this research, Fintechs can create trusted cloud platform operations."
      ],
      pdfUrl: "/papers/Cloud Security Challenges and Framework Development for Kenyan.pdf",
    },
  ];

  const handlePublicationClick = (publication) => {
    setSelectedPublication(publication);
    setOpenDetailsDialog(true);
  };

  const handleCloseDetailsDialog = () => {
    setOpenDetailsDialog(false);
    setSelectedPublication(null);
  };

  const getImpactColor = (impact) => {
    switch (impact) {
      case "Very High": return "error";
      case "High": return "warning";
      case "Medium": return "info";
      default: return "default";
    }
  };

  const getCategoryIcon = (category) => {
    switch (category) {
      case "Cybersecurity": return <SecurityIcon />;
      case "Machine Learning": return <TrendingIcon />;
      default: return <ArticleIcon />;
    }
  };

  // Get in Touch Modal submit handler
  const handleContactSubmit = (e) => {
    e.preventDefault();
    const { name, email, message, collabType, otherCollabType } = contactForm;
    if (!name || !email || !message || (collabType === 'Other' && !otherCollabType)) {
      setSnackbar({ open: true, message: "Please fill in all required fields.", severity: "error" });
      return;
    }
    const collabTypeText = collabType === 'Other' ? `Other: ${otherCollabType}` : collabType;
    const mailto = `mailto:omondialex3517@gmail.com?subject=${encodeURIComponent(contactForm.subject || 'Portfolio Contact from ' + name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AOrganization: ${encodeURIComponent(contactForm.organization)}%0APhone: ${encodeURIComponent(contactForm.phone)}%0ACollaboration Type: ${encodeURIComponent(collabTypeText)}%0A%0A${encodeURIComponent(message)}`;
    window.location.href = mailto;
    setOpenContactDialog(false);
    setContactForm({ name: "", email: "", organization: "", phone: "", collabType: "Research Collaboration", subject: "", message: "", otherCollabType: "" });
    setTimeout(() => setSnackbar({ open: true, message: "Thank you for reaching out! I will get back to you soon.", severity: "success" }), 400);
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
                  <SecurityIcon sx={{ fontSize: 40 }} />
                </Box>
                <Typography variant="h4" fontWeight={700} sx={{ mb: 1, color: '#1f2937' }}>
                  Publications
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, fontSize: '1.1rem' }}>
                  Research contributions in cybersecurity, machine learning, and digital forensics
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
                        <SecurityIcon sx={{ fontSize: 22 }} />
                      </Box>
                      <Typography variant="h5" fontWeight={700} sx={{ color: '#2563eb', mb: 0.5 }}>{publications.length}</Typography>
                      <Typography variant="caption" color="text.secondary">Publications</Typography>
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
                        background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                        color: 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mb: 1
                      }}>
                        <CalendarIcon sx={{ fontSize: 22 }} />
                      </Box>
                      <Typography variant="h5" fontWeight={700} sx={{ color: '#f59e0b', mb: 0.5 }}>{publications[0]?.year || 2025}</Typography>
                      <Typography variant="caption" color="text.secondary">Latest Year</Typography>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Publications List */}
            <Grid container spacing={2}>
              {publications.map((publication) => (
                <Grid item xs={12} key={publication.id}>
                  <Card 
                    sx={{ 
                      borderRadius: 4, 
                      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
                      background: 'rgba(255,255,255,0.95)',
                      backdropFilter: 'blur(10px)',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer',
                      '&:hover': {
                        transform: 'translateY(-4px)',
                        boxShadow: '0 25px 50px rgba(0,0,0,0.15)',
                      }
                    }}
                    onClick={() => handlePublicationClick(publication)}
                  >
                    <CardMedia
                      component="img"
                      height="200"
                      image={publication.image}
                      alt={publication.title}
                      sx={{ objectFit: 'cover' }}
                    />
                    <CardContent sx={{ p: 3 }}>
                      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          {getCategoryIcon(publication.category)}
                          <Chip 
                            label={publication.category} 
                            size="small" 
                            color="primary"
                            sx={{ fontSize: '0.7rem' }}
                          />
                        </Box>
                        <Chip 
                          label={publication.impact} 
                          size="small" 
                          color={getImpactColor(publication.impact)}
                          sx={{ fontSize: '0.7rem' }}
                        />
                      </Box>
                      
                      <Typography variant="h6" fontWeight={600} sx={{ color: '#1f2937', mb: 1, fontSize: '1rem', lineHeight: 1.3 }}>
                        {publication.title}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontSize: '0.9rem' }}>
                        {publication.journal} • {publication.year}
                      </Typography>
                      
                      <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.6, fontSize: '0.9rem' }}>
                        {publication.abstract.length > 150 ? `${publication.abstract.substring(0, 150)}...` : publication.abstract}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                        {publication.keywords.slice(0, 3).map((keyword, index) => (
                          <Chip 
                            key={index} 
                            label={keyword} 
                            size="small" 
                            variant="outlined"
                            sx={{ fontSize: '0.65rem' }}
                          />
                        ))}
                        {publication.keywords.length > 3 && (
                          <Chip 
                            label={`+${publication.keywords.length - 3} more`} 
                            size="small" 
                            variant="outlined"
                            sx={{ fontSize: '0.65rem' }}
                          />
                        )}
                      </Box>
                      
                      {/* Presented At timeline */}
                      {publication.presentedAt && (
                        <Box sx={{ mb: 2 }}>
                          <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 1, display: 'flex', alignItems: 'center', gap: 1, fontSize: '0.8rem' }}>
                            <CalendarIcon sx={{ fontSize: 16, color: '#2563eb' }} /> Presented At
                          </Typography>
                          <Box sx={{ pl: 2, borderLeft: '2px solid #e0e7ef', ml: 1 }}>
                            {publication.presentedAt.slice(0, 2).map((event, idx) => (
                              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                <Box sx={{ width: 6, height: 6, borderRadius: '50%', background: '#2563eb', mr: 1 }} />
                                <Typography variant="caption" sx={{ color: '#2563eb', fontWeight: 500, fontSize: '0.75rem' }}>{event}</Typography>
                              </Box>
                            ))}
                            {publication.presentedAt.length > 2 && (
                              <Typography variant="caption" color="text.secondary" sx={{ fontSize: '0.7rem' }}>
                                +{publication.presentedAt.length - 2} more events
                              </Typography>
                            )}
                          </Box>
                        </Box>
                      )}
                      
                      <Box sx={{ display: 'flex', gap: 1, mt: 3 }}>
                        <Button 
                          variant="contained"
                          size="small"
                          sx={{ 
                            background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
                            color: '#fff',
                            fontWeight: 600,
                            borderRadius: 2,
                            px: 2,
                            py: 0.8,
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            flex: 1
                          }}
                          onClick={e => { e.stopPropagation(); handlePublicationClick(publication); }}
                        >
                          View Details
                        </Button>
                        <Button 
                          variant="outlined" 
                          size="small"
                          startIcon={<LanguageIcon sx={{ fontSize: 16 }} />} 
                          href={publication.url} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          sx={{ 
                            borderColor: '#2563eb', 
                            color: '#2563eb', 
                            fontWeight: 600, 
                            borderRadius: 2, 
                            px: 2, 
                            py: 0.8, 
                            fontSize: '0.75rem',
                            textTransform: 'none',
                            flex: 1
                          }}
                          onClick={e => e.stopPropagation()}
                        >
                          View Paper
                        </Button>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>

            {/* Get in Touch Section */}
            <Card sx={{ 
              borderRadius: 4, 
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)', 
              mt: 3,
              background: 'rgba(255,255,255,0.95)',
              backdropFilter: 'blur(10px)'
            }}>
              <CardContent sx={{ p: 4, textAlign: 'center' }}>
                <Box sx={{ 
                  width: 60, 
                  height: 60, 
                  borderRadius: '50%', 
                  background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  mx: 'auto',
                  mb: 3,
                  boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
                }}>
                  <SendIcon sx={{ fontSize: 30 }} />
                </Box>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#1f2937' }}>
                  Get in Touch
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 3, fontSize: '0.95rem' }}>
                  For project/research collaboration or assistance
                </Typography>
                <Button 
                  variant="contained" 
                  size="large" 
                  sx={{ 
                    background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
                    fontWeight: 600, 
                    borderRadius: 3, 
                    px: 4, 
                    py: 1.5, 
                    fontSize: '1rem',
                    textTransform: 'none',
                    boxShadow: '0 8px 32px rgba(37, 99, 235, 0.3)'
                  }} 
                  onClick={() => setOpenContactDialog(true)}
                >
                  Contact Me
                </Button>
              </CardContent>
            </Card>
          </Container>
        </Box>
      )}

      {/* Desktop Design (fluid, responsive) */}
      {!isMobile && (
        <Container maxWidth="lg" sx={{ py: 4, mt: 10, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Grid container spacing={4} justifyContent="center">
            {/* Header */}
            <Grid item xs={12}>
              <Box sx={{ textAlign: 'center', mb: 6, mt: 2 }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <SecurityIcon sx={{ fontSize: 38, color: '#2563eb', mr: 1 }} />
                    <Typography variant="h3" fontWeight={800} sx={{ color: '#1f2937', letterSpacing: -1 }}>
                      Publications
                    </Typography>
                  </Box>
                  <Typography variant="h6" color="text.secondary" sx={{ mb: 2, maxWidth: 700 }}>
                    Research contributions in cybersecurity, machine learning, and digital forensics
                  </Typography>
                  <Box sx={{ width: 80, height: 5, background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)', borderRadius: 2, mb: 1 }} />
                </Box>
              </Box>
            </Grid>

            {/* Publications Grid */}
            <Grid item xs={12}>
              <Grid container spacing={4}>
                {publications.map((publication) => (
                  <Grid item xs={12} lg={6} key={publication.id}>
                    <Box sx={{ position: 'relative', height: '100%' }}>
                      <Card 
                        sx={{ 
                          height: '100%', 
                          borderRadius: 4, 
                          boxShadow: 3,
                          borderLeft: '6px solid #2563eb',
                          pt: 6,
                          pb: 2,
                          px: 0,
                          overflow: 'visible',
                          transition: 'box-shadow 0.2s, transform 0.2s',
                          cursor: 'pointer',
                          background: '#fff',
                          '&:hover': {
                            boxShadow: 8,
                            transform: 'translateY(-6px) scale(1.01)',
                          },
                        }}
                        onClick={() => handlePublicationClick(publication)}
                      >
                        {/* Overlapping image badge */}
                        <Box sx={{ position: 'absolute', top: -36, left: 32, zIndex: 2, boxShadow: 2, borderRadius: 2, overflow: 'hidden', border: '3px solid #fff' }}>
                          <img
                            src={publication.image}
                            alt={publication.title}
                            style={{ width: 80, height: 80, objectFit: 'cover', borderRadius: 12 }}
                          />
                        </Box>
                        <CardContent sx={{ pt: 2, pb: 2, px: 4 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                            {getCategoryIcon(publication.category)}
                            <Chip 
                              label={publication.category} 
                              size="small" 
                              color="primary"
                              variant="filled"
                              sx={{ fontWeight: 600, fontSize: 13, borderRadius: 1 }}
                            />
                          </Box>
                          <Typography variant="h5" fontWeight={700} sx={{ mb: 1.5, color: '#1f2937', lineHeight: 1.2 }}>
                            {publication.title}
                          </Typography>
                          <Typography variant="subtitle2" sx={{ color: '#64748b', mb: 2, fontWeight: 500 }}>
                            {publication.journal} &bull; {publication.year}
                          </Typography>
                          <Typography variant="body2" color="text.secondary" sx={{ mb: 2, lineHeight: 1.7, minHeight: 60 }}>
                            {publication.abstract.substring(0, 220)}...
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.2, mb: 2 }}>
                            {publication.keywords.map((keyword, index) => (
                              <Chip 
                                key={index} 
                                label={keyword} 
                                size="small" 
                                sx={{ fontSize: '0.8rem', background: '#e0e7ff', color: '#3730a3', borderRadius: 2, fontWeight: 600 }}
                              />
                            ))}
                          </Box>
                          {/* Presented At timeline */}
                          {publication.presentedAt && (
                            <Box sx={{ mb: 2 }}>
                              <Typography variant="body2" color="text.secondary" sx={{ fontWeight: 600, mb: 0.5, display: 'flex', alignItems: 'center', gap: 1 }}>
                                <CalendarIcon sx={{ fontSize: 18, color: '#2563eb' }} /> Presented At
                              </Typography>
                              <Box sx={{ pl: 2, borderLeft: '2px solid #e0e7ef', ml: 1 }}>
                                {publication.presentedAt.map((event, idx) => (
                                  <Box key={idx} sx={{ display: 'flex', alignItems: 'center', mb: 0.5 }}>
                                    <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: '#2563eb', mr: 1 }} />
                                    <Typography variant="caption" sx={{ color: '#2563eb', fontWeight: 500 }}>{event}</Typography>
                                  </Box>
                                ))}
                              </Box>
                            </Box>
                          )}
                          {/* Action buttons */}
                          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                            <Button 
                              variant="contained"
                              size="medium"
                              endIcon={<ArrowForwardIcon />}
                              sx={{ 
                                background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
                                color: '#fff',
                                boxShadow: '0 2px 8px rgba(30, 64, 175, 0.10)',
                                fontWeight: 600,
                                borderRadius: 2,
                                px: 2.5,
                                py: 1.2,
                                textTransform: 'none',
                                transition: 'background 0.2s, box-shadow 0.2s',
                                '&:hover': {
                                  background: 'linear-gradient(90deg, #1d4ed8 0%, #6366f1 100%)',
                                  boxShadow: '0 4px 16px rgba(30, 64, 175, 0.18)',
                                }
                              }}
                              onClick={e => { e.stopPropagation(); handlePublicationClick(publication); }}
                            >
                              View Details
                            </Button>
                            <Button 
                              variant="outlined" 
                              startIcon={<LanguageIcon />} 
                              href={publication.url} 
                              target="_blank" 
                              rel="noopener noreferrer" 
                              sx={{ borderColor: '#2563eb', color: '#2563eb', fontWeight: 600, borderRadius: 2, px: 2.5, py: 1.2, textTransform: 'none' }}
                              onClick={e => e.stopPropagation()}
                            >
                              View Publication
                            </Button>
                          </Box>
                        </CardContent>
                      </Card>
                    </Box>
                  </Grid>
                ))}
              </Grid>
            </Grid>
            {/* Get in Touch Section - now inside the grid container for perfect alignment */}
            <Grid item xs={12}>
              <Box sx={{ mt: 6, display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                <Box sx={{ background: '#fff', boxShadow: 2, borderRadius: 3, px: { xs: 2, md: 8 }, py: 4, minWidth: 0, width: '100%', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <Typography variant="h5" fontWeight={700} sx={{ mb: 2, color: '#1e293b' }}>
                    Get in Touch for Project/Research Collaboration or Assistance
                  </Typography>
                  <Button variant="contained" color="primary" size="large" sx={{ fontWeight: 700, borderRadius: 2, px: 4, py: 1.2, fontSize: 18 }} onClick={() => setOpenContactDialog(true)}>
                    Get in Touch
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      )}

      {/* Get in Touch Modal */}
      <Dialog 
        open={openContactDialog} 
        onClose={() => { setOpenContactDialog(false); setContactForm({ name: "", email: "", organization: "", phone: "", collabType: "Research Collaboration", subject: "", message: "", otherCollabType: "" }); }}
        maxWidth="lg"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3 } }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight={600}>
              Get in Touch
            </Typography>
            <IconButton onClick={() => { setOpenContactDialog(false); setContactForm({ name: "", email: "", organization: "", phone: "", collabType: "Research Collaboration", subject: "", message: "", otherCollabType: "" }); }}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Fill out the form below and we'll open your email client with a pre-filled message. Simply send the email to complete your request.
            </Typography>
          </Alert>
          <Grid container spacing={3}>
            {/* Row 1: Name | Collaboration Type */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Your Name *"
                value={contactForm.name}
                onChange={e => setContactForm(f => ({ ...f, name: e.target.value }))}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                select
                fullWidth
                label="Collaboration Type"
                value={contactForm.collabType}
                onChange={e => setContactForm(f => ({ ...f, collabType: e.target.value, otherCollabType: e.target.value !== 'Other' ? '' : f.otherCollabType }))}
                sx={{ mb: contactForm.collabType === 'Other' ? 0 : 2 }}
              >
                <MenuItem value="Research Collaboration">Research Collaboration</MenuItem>
                <MenuItem value="Project Assistance">Project Assistance</MenuItem>
                <MenuItem value="Mentorship">Mentorship</MenuItem>
                <MenuItem value="Other">Other</MenuItem>
              </TextField>
              {contactForm.collabType === 'Other' && (
                <TextField
                  fullWidth
                  required
                  label="Please specify"
                  value={contactForm.otherCollabType}
                  onChange={e => setContactForm(f => ({ ...f, otherCollabType: e.target.value }))}
                  sx={{ mt: 2, mb: 2 }}
                />
              )}
            </Grid>
            {/* Row 2: Email | Organization */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Email Address *"
                type="email"
                value={contactForm.email}
                onChange={e => setContactForm(f => ({ ...f, email: e.target.value }))}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Organization"
                value={contactForm.organization}
                onChange={e => setContactForm(f => ({ ...f, organization: e.target.value }))}
                sx={{ mb: 2 }}
              />
            </Grid>
            {/* Row 3: Phone | Subject */}
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Phone Number"
                value={contactForm.phone}
                onChange={e => setContactForm(f => ({ ...f, phone: e.target.value }))}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Subject"
                value={contactForm.subject}
                onChange={e => setContactForm(f => ({ ...f, subject: e.target.value }))}
                sx={{ mb: 2 }}
              />
            </Grid>
            {/* Row 4: Message (full width) */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message *"
                multiline
                rows={4}
                value={contactForm.message}
                onChange={e => setContactForm(f => ({ ...f, message: e.target.value }))}
                placeholder="How can I help you?"
                sx={{ mb: 3 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button 
            onClick={() => { setOpenContactDialog(false); setContactForm({ name: "", email: "", organization: "", phone: "", collabType: "Research Collaboration", subject: "", message: "", otherCollabType: "" }); }}
            sx={{ color: '#6b7280' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleContactSubmit}
            startIcon={<SendIcon />}
            sx={{ background: '#2563eb' }}
          >
            Send
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar for feedback */}
      <Snackbar open={snackbar.open} autoHideDuration={6000} onClose={() => setSnackbar({ ...snackbar, open: false })}>
        <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      {/* Publication Details Dialog */}
      <Dialog 
        open={openDetailsDialog} 
        onClose={handleCloseDetailsDialog}
        maxWidth="lg"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        {selectedPublication && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h5" fontWeight={600}>
                  Publication Details
                </Typography>
                <IconButton onClick={handleCloseDetailsDialog}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent sx={{ pt: 0 }}>
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <CardMedia
                    component="img"
                    height="300"
                    image={selectedPublication.image}
                    alt={selectedPublication.title}
                    sx={{ borderRadius: 2, mb: 3, objectFit: 'cover' }}
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <Typography variant="h4" fontWeight={600} sx={{ mb: 2, color: '#1f2937' }}>
                    {selectedPublication.title}
                  </Typography>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                    {getCategoryIcon(selectedPublication.category)}
                    <Chip 
                      label={selectedPublication.category} 
                      color="primary"
                      variant="outlined"
                    />
                  </Box>

                  <Typography variant="body1" color="text.secondary" sx={{ mb: 3, lineHeight: 1.7 }}>
                    {selectedPublication.abstract}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                    {selectedPublication.keywords.map((keyword, index) => (
                      <Chip 
                        key={index} 
                        label={keyword} 
                        variant="outlined"
                        sx={{ fontWeight: 500 }}
                      />
                    ))}
                  </Box>

                  <Button 
                    variant="contained" 
                    startIcon={<LanguageIcon />} 
                    href={selectedPublication.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    sx={{ mt: 2, background: '#2563eb' }}
                  >
                    View Publication
                  </Button>

                  {selectedPublication.presentedAt && (
                    <Box sx={{ mt: 3 }}>
                      <Typography variant="subtitle1" fontWeight={600} sx={{ mb: 1 }}>Presented At</Typography>
                      <List dense>
                        {selectedPublication.presentedAt.map((event, idx) => (
                          <ListItem key={idx} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}><CalendarIcon sx={{ color: '#2563eb' }} /></ListItemIcon>
                            <ListItemText primary={event} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  )}
                </Grid>

                <Grid item xs={12}>
                  <Divider sx={{ my: 3 }} />
                  
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                        Publication Information
                      </Typography>
                      <List dense>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <SchoolIcon sx={{ color: '#2563eb' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Journal" 
                            secondary={selectedPublication.journal}
                          />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CalendarIcon sx={{ color: '#2563eb' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Year" 
                            secondary={selectedPublication.year}
                          />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <DescriptionIcon sx={{ color: '#2563eb' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="Volume/Issue/Pages" 
                            secondary={`Vol. ${selectedPublication.volume}, Issue ${selectedPublication.issue}, pp. ${selectedPublication.pages}`}
                          />
                        </ListItem>
                        <ListItem sx={{ px: 0 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <LanguageIcon sx={{ color: '#2563eb' }} />
                          </ListItemIcon>
                          <ListItemText 
                            primary="DOI" 
                            secondary={selectedPublication.doi}
                          />
                        </ListItem>
                      </List>
                    </Grid>

                    <Grid item xs={12} md={6}>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                        Research Methodology
                      </Typography>
                      <List dense>
                        {selectedPublication.methodology.map((method, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <CheckCircleIcon sx={{ color: '#10b981', fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary={method} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>

                    <Grid item xs={12}>
                      <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                        Key Findings
                      </Typography>
                      <List dense>
                        {selectedPublication.findings.map((finding, index) => (
                          <ListItem key={index} sx={{ px: 0 }}>
                            <ListItemIcon sx={{ minWidth: 32 }}>
                              <StarIcon sx={{ color: '#fbbf24', fontSize: 20 }} />
                            </ListItemIcon>
                            <ListItemText primary={finding} />
                          </ListItem>
                        ))}
                      </List>
                    </Grid>
                  </Grid>

                  <Box sx={{ display: 'flex', gap: 2, mt: 3, flexWrap: 'wrap' }}>
                    <Button 
                      variant="contained" 
                      startIcon={<DownloadIcon />}
                      onClick={() => handleDownloadPDF(selectedPublication.pdfUrl, selectedPublication.title)}
                      sx={{ background: '#2563eb' }}
                    >
                      Download PDF
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Publications; 