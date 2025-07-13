import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  TextField,
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
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  useMediaQuery,
  Container
} from "@mui/material";
import {
  Mic as MicIcon,
  School as SchoolIcon,
  Event as EventIcon,
  LocationOn as LocationIcon,
  CalendarToday as CalendarIcon,
  Group as GroupIcon,
  Send as SendIcon,
  Close as CloseIcon,
  Add as AddIcon,
  VideoCall as VideoCallIcon,
  MeetingRoom as MeetingRoomIcon,
  Online as OnlineIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  Business as BusinessIcon,
  TrendingUp as TrendingIcon,
  Star as StarIcon,
  People as PeopleIcon,
  Schedule as ScheduleIcon,
  Email as EmailIcon
} from "@mui/icons-material";
import iyqnaImg from './imgs/image.png';
import ieeeImg from './imgs/ieee.png';
import indabaImg from './imgs/indaba.png';
import image2 from './imgs/image2.png';
import image3 from './imgs/image3.png';
import image4 from './imgs/image4.png';
import image5 from './imgs/image5.png';
import image6 from './imgs/image6.png';
import { keyframes } from '@mui/system';

// Fireworks animation keyframes
const fireworks = keyframes`
  0% { opacity: 0; transform: scale(0.5) translateY(0); }
  40% { opacity: 1; transform: scale(1.2) translateY(-20px); }
  60% { opacity: 1; transform: scale(1) translateY(-30px); }
  100% { opacity: 0; transform: scale(0.8) translateY(-40px); }
`;

function Firework({ left, delay, color }) {
  return (
    <Box
      sx={{
        position: 'absolute',
        left: `${left}%`,
        top: 0,
        width: 18,
        height: 18,
        borderRadius: '50%',
        background: color,
        opacity: 0,
        zIndex: 1,
        animation: `${fireworks} 1.2s ${delay}s linear infinite`,
        boxShadow: `0 0 16px 4px ${color}`,
      }}
    />
  );
}

const SpeakingEvents = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openInviteDialog, setOpenInviteDialog] = useState(false);
  const [inviteForm, setInviteForm] = useState({
    name: "",
    email: "",
    organization: "",
    eventType: "conference",
    topic: "",
    audience: "",
    date: "",
    location: "",
    duration: "60",
    customDuration: "",
    description: "",
    budget: "",
    contactPhone: ""
  });
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });
  const [openImageDialog, setOpenImageDialog] = useState(false);
  const [dialogImageSrc, setDialogImageSrc] = useState("");
  const isMobile = useMediaQuery('(max-width:1280px)');

  // Event types
  const eventTypes = [
    { value: "conference", label: "Conference/Summit", icon: <MicIcon />, color: "#2563eb" },
    { value: "workshop", label: "Workshop/Training", icon: <SchoolIcon />, color: "#10b981" },
    { value: "university", label: "University Lecture", icon: <SchoolIcon />, color: "#8b5cf6" },
    { value: "corporate", label: "Corporate Training", icon: <BusinessIcon />, color: "#f59e0b" },
    { value: "mentorship", label: "Mentorship Session", icon: <PeopleIcon />, color: "#ef4444" },
    { value: "webinar", label: "Webinar/Online", icon: <VideoCallIcon />, color: "#06b6d4" }
  ];

  // Duration options
  const durationOptions = [
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour" },
    { value: "90", label: "1.5 hours" },
    { value: "120", label: "2 hours" },
    { value: "180", label: "3 hours" },
    { value: "240", label: "4 hours" },
    { value: "480", label: "Full day" },
    { value: "3360", label: "1 week" },
    { value: "custom", label: "Custom duration" }
  ];

  // All events (past and upcoming)
  const allEvents = [
    // --- Past events (static, with date or endDate in the past) ---
    {
      id: 0,
      title: "SCHOLARSHIP MENTORSHIP Q&A Session",
      type: "mentorship",
      organization: "Igoye Young Professional Mentorship Institute (IYPMI)",
      location: "Online / Uganda",
      date: "2025-06-15",
      audience: "Young Professionals, Scholarship Seekers",
      topic: "Scholarship Mentorship",
      image: iyqnaImg,
      description: `Thrilled to have been part of the Young Professional Mentorship Program (YPMP) panel as a speaker, sharing insights alongside brilliant minds like Pech Lim Gatluak, Robert Omwa, Esther Chebijira, and Olivia Brendah.\n\nAs an alumnus of YPMP, it was a full-circle moment to give back to a community that played a pivotal role in my growth. We dove into scholarship opportunities, General Scholarship Information, Academic Requirements & Preparation, Local Scholarships (Africa), International Scholarships, Application Process, Language Requirements, Financial Considerations, Field of Study Considerations, The wait (weight) after the application, Support and Resources, Alternative Funding Options, Special Circumstances, Technology and Digital Literacy. Because success is sweeter when we lift others along the way.\n\nHuge thanks to Agnes Igoye (Chief Mentor) for the incredible platform. To every young person: Never settle, keep going, keep growing! 🌱`,
      highlights: [
        "Panel Speaker",
        "Scholarship Opportunities",
        "Academic Preparation",
        "Mentorship Matters",
        "Alumni Impact"
      ]
    },
    {
      id: 1,
      title: "A Cloud Computing Security Assessment Framework for FINTECHs in Kenya - Cyber Carnival 2025",
      type: "conference",
      organization: "Africa Cyber Defense Forum, ACDF®",
      location: "Nairobi Street Kitchen & Kalamata Restaurant, Nairobi, Kenya",
      date: "2025-06-12",
      audience: "Industry Leaders, Policymakers, Technologists, Business Leaders",
      topic: "Cloud Security & FinTech",
      image: image2,
      description: `On June 12th, 2025, I had the incredible opportunity to present my research on \"A Cloud Computing Security Assessment Framework for FINTECHs in Kenya\" at the Cyber Carnival 2025, hosted by the Africa Cyber Defense Forum, ACDF®, at Nairobi Street Kitchen & Kalamata Restaurant. This framework addresses the critical gap in tailored cloud security standards for Kenyan FinTechs, integrating global 🌍 best practices with local regulatory requirements like Kenya’s Data Protection Act! 📜. Through surveys and experimental simulations using OwnCloud☁️, the study highlights key vulnerabilities, such as insider threats and data retention risks, and proposes actionable metrics to strengthen cloud security. The response from industry leaders and peers was overwhelmingly positive, reinforcing the urgent need for scalable, context-aware solutions in our rapidly evolving digital landscape...\n\nA heartfelt thank you to Africa Cyber Defense Forum, ACDF®, for this transformative platform, where policymakers, technologists, and business leaders collaborate to shape Africa’s cybersecurity future 💡. Special gratitude to the attendees whose insights enriched the discussion. As cyber threats in East Africa surge by 50 %+ 📈, frameworks like this are vital to safeguarding financial innovation while fostering trust 🛡️...\n\nLet’s keep the conversation going, reach out if you’d like to explore how this framework can empower your organization or collaborate on securing Africa’s digital economy🤝 ...`,
      highlights: [
        "Conference Speaker",
        "Cloud Security Research",
        "FinTech Innovation",
        "Cybersecurity Frameworks",
        "Industry Collaboration"
      ]
    },
    {
      id: 2,
      title: "Kirinyaga University 8th Annual International Conference",
      type: "conference",
      organization: "Kirinyaga University",
      location: "Virtual (Kenya)",
      date: "2025-03-26",
      audience: "Academics, Researchers, Industry Experts, Policy Makers",
      topic: "Innovation & Technology",
      image: image3,
      description: `I’m thrilled to share my experience at the Kirinyaga University 8th Annual International Conference, held virtually on March 26-27, 2025, under the theme \"Integration of Innovation and Technology for Sustainable Interdisciplinary Collaboration.\"\n\nThe conference kicked off with an inspiring keynote by Benson MULEMI, PhD, who delved into \"Grants Mobilization as a Catalyst for Innovation: Leveraging Multidisciplinary Collaboration for Sustainable Research Impact.\" His insights underscored the transformative power of cross-disciplinary partnerships in securing grants and driving impactful research, a timely reminder of how collaboration fuels progress in our fast-evolving technological landscape.\n\nI was honored to present two research papers in the ICT and Digital Transformation category, addressing critical challenges and solutions in Kenya’s FinTech sector:\n\n👨🏽‍💻 Development and Evaluation of a Cloud Security Framework for Kenyan FinTechs (https://lnkd.in/e-6TxGSp)\n\n👨🏽‍💻 Cloud Security Challenges and Assessment Framework for Kenyan FinTechs (https://lnkd.in/eDGHc2gm)\n\nThese papers explore actionable frameworks to bolster cybersecurity resilience in FinTech, a sector pivotal to Kenya’s digital economy. The discussions that followed were incredibly enriching, with peers and experts sharing perspectives on scalability, regulatory alignment, and emerging threats like AI-driven fraud.\n\nBeyond my presentations, I had the privilege of engaging with groundbreaking work across diverse fields:\n\n🍎 AI in Agriculture: Innovative machine learning models aimed at boosting crop productivity and sustainability, showcasing how technology can revolutionize farming in Africa.\n\n🩺 Health Tech Breakthroughs: Researchers demonstrated how tech can bridge gaps in healthcare access and quality from low-cost malaria diagnostics to AI-driven nursing education advancements.\n\n💰 Sustainable Finance: Dynamic panel debates explored the intersection of green investments, regulatory frameworks, and ethical financial practices, which are critical topics for emerging economies.\n\nA huge thank you to Kirinyaga University for organizing such an insightful hybrid conference, proving that virtual platforms can foster deep, global collaboration.\n\nAs we navigate the Fourth Industrial Revolution, conferences like these are vital for bridging academia, industry, and policy, turning research into real-world solutions. Grateful for the chance to contribute and learn! ...`,
      highlights: [
        "Conference Speaker",
        "Cloud Security Research",
        "AI in Agriculture",
        "Health Tech Breakthroughs",
        "Sustainable Finance"
      ]
    },
    {
      id: 3,
      title: "YPMP INFO SESSION",
      type: "mentorship",
      organization: "Young Professional Mentorship Program (YPMP)",
      location: "Online",
      date: "2024-12-27",
      audience: "Young Professionals, Students",
      topic: "Mentorship & Info Session",
      image: image4,
      description: `Participated as a speaker in the YPMP Info Session, sharing insights and guidance with young professionals and students on career development, mentorship, and opportunities within the YPMP community. The session fostered engagement, Q&A, and networking among attendees, supporting the next generation of leaders.`,
      highlights: [
        "Info Session Speaker",
        "Mentorship Guidance",
        "Career Development",
        "Community Engagement",
        "Q&A Session"
      ]
    },
    {
      id: 4,
      title: "Is the YPMP Program Worth my Time?",
      type: "mentorship",
      organization: "Young Professional Mentorship Program (YPMP)",
      location: "Online",
      date: "2023-12-02",
      audience: "Young Professionals, Students",
      topic: "Mentorship Experience",
      image: image5,
      description: `Served as a panelist and mentor in the YPMP session titled 'Is the YPMP Program Worth my Time?', sharing personal experiences, program benefits, and answering questions from prospective and current members. The session provided valuable insights into the impact and opportunities offered by YPMP, helping attendees make informed decisions about their mentorship journey.`,
      highlights: [
        "Panelist & Mentor",
        "Mentorship Experience",
        "Program Impact",
        "Q&A Session",
        "Community Engagement"
      ]
    },
    {
      id: 5,
      title: "Digital Literacy",
      type: "training",
      organization: "Ministry of Education, State Department for Basic Education",
      location: "Kenya (Various Schools)",
      date: "2023",
      audience: "Teachers, Pupils, Training Participants",
      topic: "ICT Training & Digital Literacy",
      image: image6,
      description: `In 2023, I offered transformative ICT training and Digital Literacy programs, empowering teachers, pupils, and training participants to navigate the ever-evolving landscape of technology with confidence and mastery. These initiatives enabled schools to improve their use of digital learning and helped participants unlock the limitless potential of the digital age.`,
      highlights: [
        "ICT Training Facilitator",
        "Digital Literacy Program",
        "Teacher Empowerment",
        "Pupil Engagement",
        "School Improvement"
      ]
    },
    // --- Upcoming events (dynamic, will move to past when endDate/date is in the past) ---
    {
      id: 6,
      title: "IEEE Tech Ignite Summer School",
      type: "workshop",
      organization: "IEEE & Strathmore University",
      location: "Strathmore University, Nairobi, Kenya",
      startDate: "2025-08-12",
      endDate: "2025-08-15",
      audience: "Students, Researchers, Young Professionals",
      status: "Upcoming",
      image: ieeeImg,
      description: `The IEEE Tech Ignite Summer School is a five-day program designed to equip students, researchers, and young professionals with cutting-edge knowledge and hands-on experience in emerging technologies driving Africa’s digital transformation. Hosted at Strathmore University, Nairobi, this event will bring together experts, industry leaders, and innovators to explore key advancements in sensors, electronics, artificial intelligence, robotics, and digital systems integration.`
    },
    {
      id: 7,
      title: "Deep Learning Indaba 2025",
      type: "conference",
      organization: "Deep Learning Indaba",
      location: "Kigali, Rwanda",
      startDate: "2025-08-17",
      endDate: "2025-08-22",
      audience: "African Machine Learning and AI Community",
      status: "Upcoming",
      image: indabaImg,
      description: `The Deep Learning Indaba is the annual meeting of the African machine learning and AI community with the mission to Strengthen African AI. In 2025, the Indaba and Africa’s artificial intelligence community will meet for a week-long event of learning, research exchange, ideation, and debate around the state of the art in machine learning and artificial intelligence in Kigali, Rwanda from the 17th to the 22nd August 2025.`
    },
  ];

  // Split events into past and upcoming based on today's date
  const today = new Date();
  const pastEvents = allEvents.filter(event => {
    // Use endDate if present, otherwise date
    const end = event.endDate || event.date;
    if (!end) return false;
    // If only a year, treat as past if year < current year
    if (/^\d{4}$/.test(end)) return parseInt(end) < today.getFullYear();
    // Otherwise, compare date
    return new Date(end) < today;
  });
  const upcomingEvents = allEvents.filter(event => {
    // Use endDate if present, otherwise date
    const end = event.endDate || event.date;
    if (!end) return false;
    // If only a year, treat as upcoming if year >= current year
    if (/^\d{4}$/.test(end)) return parseInt(end) >= today.getFullYear();
    // Otherwise, compare date
    return new Date(end) >= today;
  });

  // Helper function to render event date or date range
  const renderEventDate = (event) => {
    // If event has startDate and endDate, show as range
    if (event.startDate && event.endDate) {
      const start = new Date(event.startDate);
      const end = new Date(event.endDate);
      const startStr = start.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      const endStr = end.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      return `${startStr} – ${endStr}`;
    }
    // If event.date is only a year (e.g., '2023'), return as is
    if (event.date && /^\d{4}$/.test(event.date)) return event.date;
    // Otherwise, format as locale date
    if (event.date) return new Date(event.date).toLocaleDateString();
    return '';
  };

  const handleInviteSubmit = () => {
    // Validate form
    if (!inviteForm.name || !inviteForm.email || !inviteForm.organization || !inviteForm.topic || !inviteForm.date) {
      setSnackbar({
        open: true,
        message: "Please fill in all required fields",
        severity: "error"
      });
      return;
    }

    // Validate custom duration if selected
    if (inviteForm.duration === "custom" && !inviteForm.customDuration.trim()) {
      setSnackbar({
        open: true,
        message: "Please specify the custom duration",
        severity: "error"
      });
      return;
    }

    // Get duration label
    let durationLabel;
    if (inviteForm.duration === "custom") {
      durationLabel = inviteForm.customDuration;
    } else {
      durationLabel = durationOptions.find(d => d.value === inviteForm.duration)?.label || "1 hour";
    }

    // Compose email
    const emailSubject = `Speaking Invitation: ${inviteForm.topic}`;
    const emailBody = `
Dear Omondi Alex,

I would like to invite you to speak at our event. Here are the details:

Event Information:
- Event Type: ${eventTypes.find(t => t.value === inviteForm.eventType)?.label}
- Topic: ${inviteForm.topic}
- Date: ${inviteForm.date}
- Duration: ${durationLabel}
- Location: ${inviteForm.location}
- Expected Audience: ${inviteForm.audience}

Organization Details:
- Name: ${inviteForm.name}
- Organization: ${inviteForm.organization}
- Email: ${inviteForm.email}
- Phone: ${inviteForm.contactPhone || 'Not provided'}

Event Description:
${inviteForm.description}

Budget Range: ${inviteForm.budget || 'To be discussed'}

Please let me know if you're available and interested in this opportunity.

Best regards,
${inviteForm.name}
    `.trim();

    // Open email client
    const mailtoLink = `mailto:omondialex3517@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink, '_blank');

    // Show success message
    setSnackbar({
      open: true,
      message: "Email client opened! Please send the invitation to complete your request.",
      severity: "success"
    });

    // Close dialog and reset form
    setOpenInviteDialog(false);
    setInviteForm({
      name: "", email: "", organization: "", eventType: "conference", topic: "",
      audience: "", date: "", location: "", duration: "60", customDuration: "", description: "", budget: "", contactPhone: ""
    });
  };

  const getEventTypeIcon = (type) => {
    return eventTypes.find(t => t.value === type)?.icon || <EventIcon />;
  };

  const getEventTypeColor = (type) => {
    return eventTypes.find(t => t.value === type)?.color || "#6b7280";
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "confirmed": return "success";
      case "pending": return "warning";
      default: return "default";
    }
  };

  return (
    <Box sx={{ flexGrow: 1, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      {isMobile ? (
        // Mobile Layout
        <Container maxWidth="sm" sx={{ px: 2, mt: 10 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h4" fontWeight={700} sx={{ mb: 2, color: '#1f2937' }}>
              Speaking & Events
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
              Cybersecurity talks, lectures, mentorship, and upcoming engagements
            </Typography>
            <Button
              variant="contained"
              size="large"
              onClick={() => setOpenInviteDialog(true)}
              startIcon={<AddIcon />}
              sx={{ 
                background: '#2563eb',
                px: 4,
                py: 1.5,
                fontSize: '1rem'
              }}
            >
              Invite Me to Speak
            </Button>
          </Box>

          {/* Quick Stats */}
          <Card sx={{ borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', mb: 3, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#1f2937' }}>
                Speaking Statistics
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', 
                    borderRadius: 3, 
                    p: 2, 
                    color: 'white'
                  }}>
                    <Typography variant="h5" fontWeight={700}>{pastEvents.length}</Typography>
                    <Typography variant="caption">Past Events</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', 
                    borderRadius: 3, 
                    p: 2, 
                    color: 'white'
                  }}>
                    <Typography variant="h5" fontWeight={700}>{upcomingEvents.length}</Typography>
                    <Typography variant="caption">Upcoming</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', 
                    borderRadius: 3, 
                    p: 2, 
                    color: 'white'
                  }}>
                    <Typography variant="h5" fontWeight={700}>5+</Typography>
                    <Typography variant="caption">Topics</Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box sx={{ 
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', 
                    borderRadius: 3, 
                    p: 2, 
                    color: 'white'
                  }}>
                    <Typography variant="h5" fontWeight={700}>5+</Typography>
                    <Typography variant="caption">Event Types</Typography>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* Speaking Topics */}
          <Card sx={{ borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', mb: 3, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#1f2937' }}>
                Speaking Topics
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: '#f8fafc', borderRadius: 2 }}>
                  <SecurityIcon sx={{ color: '#2563eb' }} />
                  <Typography variant="body1" fontWeight={500}>Cybersecurity Fundamentals</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: '#f8fafc', borderRadius: 2 }}>
                  <TrendingIcon sx={{ color: '#10b981' }} />
                  <Typography variant="body1" fontWeight={500}>Machine Learning in Security</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: '#f8fafc', borderRadius: 2 }}>
                  <CodeIcon sx={{ color: '#8b5cf6' }} />
                  <Typography variant="body1" fontWeight={500}>Software Security</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: '#f8fafc', borderRadius: 2 }}>
                  <BusinessIcon sx={{ color: '#f59e0b' }} />
                  <Typography variant="body1" fontWeight={500}>Career Development in Tech</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: '#f8fafc', borderRadius: 2 }}>
                  <SchoolIcon sx={{ color: '#ef4444' }} />
                  <Typography variant="body1" fontWeight={500}>Digital Forensics</Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>

          {/* Event Types */}
          <Card sx={{ borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', mb: 3, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
            <CardContent sx={{ p: 4 }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#1f2937' }}>
                Event Types
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {eventTypes.map((type) => (
                  <Box key={type.value} sx={{ display: 'flex', alignItems: 'center', gap: 2, p: 2, background: '#f8fafc', borderRadius: 2 }}>
                    <Box sx={{ color: type.color }}>{type.icon}</Box>
                    <Typography variant="body1" fontWeight={500}>{type.label}</Typography>
                  </Box>
                ))}
              </Box>
            </CardContent>
          </Card>

          {/* Tabs */}
          <Paper elevation={3} sx={{ borderRadius: 4, overflow: 'hidden', mb: 3 }}>
            <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} variant="fullWidth">
              <Tab label="Past Events" icon={<EventIcon />} />
              <Tab label="Upcoming Events" icon={<ScheduleIcon />} />
            </Tabs>

            {/* Past Events Tab */}
            {activeTab === 0 && (
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#1f2937' }}>
                  Recent Speaking Engagements
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {pastEvents.map((event) => (
                    <Card key={event.id} sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                      {/* Event image */}
                      {event.image && (
                        <Box sx={{ width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', borderBottom: '2px solid #2563eb', cursor: 'pointer' }}
                          onClick={() => { setDialogImageSrc(event.image); setOpenImageDialog(true); }}
                        >
                          <img
                            src={event.image}
                            alt={event.title}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                              display: 'block',
                              margin: '0 auto',
                            }}
                          />
                        </Box>
                      )}
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar sx={{ bgcolor: getEventTypeColor(event.type), width: 40, height: 40 }}>
                            {getEventTypeIcon(event.type)}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5, fontSize: '1.1rem' }}>
                              {event.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                              {event.organization}
                            </Typography>
                          </Box>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <LocationIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {event.location}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {renderEventDate(event)}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <GroupIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {event.audience}
                          </Typography>
                        </Box>
                        
                        <Chip 
                          label={event.topic} 
                          size="small"
                          color="primary"
                          variant="outlined"
                          sx={{ mb: 2 }}
                        />
                        
                        <Typography variant="body2" sx={{ mb: 2, lineHeight: 1.6, color: '#374151' }}>
                          {event.description.length > 200 ? `${event.description.substring(0, 200)}...` : event.description}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {event.highlights.slice(0, 3).map((highlight, index) => (
                            <Chip 
                              key={index} 
                              label={highlight} 
                              size="small" 
                              variant="outlined"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          ))}
                          {event.highlights.length > 3 && (
                            <Chip 
                              label={`+${event.highlights.length - 3} more`} 
                              size="small" 
                              variant="outlined"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          )}
                        </Box>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}

            {/* Upcoming Events Tab */}
            {activeTab === 1 && (
              <Box sx={{ p: 3 }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 3, color: '#1f2937' }}>
                  Upcoming Engagements
                </Typography>
                <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, minHeight: 80 }}>
                  {/* Fireworks Animation */}
                  <Firework left={10} delay={0} color="#f59e0b" />
                  <Firework left={30} delay={0.3} color="#ef4444" />
                  <Firework left={50} delay={0.6} color="#2563eb" />
                  <Firework left={70} delay={0.9} color="#10b981" />
                  <Firework left={90} delay={1.1} color="#8b5cf6" />
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => setOpenInviteDialog(true)}
                    startIcon={<AddIcon />}
                    sx={{
                      background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
                      color: '#fff',
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 700,
                      borderRadius: 3,
                      boxShadow: '0 6px 32px 0 rgba(37,99,235,0.18)',
                      letterSpacing: 0.5,
                      textTransform: 'uppercase',
                      zIndex: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        background: 'linear-gradient(90deg, #10b981 0%, #2563eb 100%)',
                        transform: 'scale(1.05)',
                        boxShadow: '0 8px 40px 0 rgba(16,185,129,0.18)',
                      },
                    }}
                  >
                    Invite Me to Speak
                  </Button>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                  {upcomingEvents.map((event) => (
                    <Card key={event.id} sx={{ borderRadius: 3, boxShadow: '0 8px 32px rgba(0,0,0,0.1)', overflow: 'hidden' }}>
                      {event.image && (
                        <Box
                          sx={{ width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', borderBottom: '2px solid #2563eb', cursor: 'pointer' }}
                          onClick={() => { setDialogImageSrc(event.image); setOpenImageDialog(true); }}
                        >
                          <img
                            src={event.image}
                            alt={event.title}
                            style={{
                              maxWidth: '100%',
                              maxHeight: '100%',
                              objectFit: 'contain',
                              display: 'block',
                              margin: '0 auto',
                            }}
                          />
                        </Box>
                      )}
                      <CardContent sx={{ p: 3 }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                          <Avatar sx={{ bgcolor: getEventTypeColor(event.type), width: 40, height: 40 }}>
                            {getEventTypeIcon(event.type)}
                          </Avatar>
                          <Box sx={{ flex: 1 }}>
                            <Typography variant="h6" fontWeight={600} sx={{ mb: 0.5, fontSize: '1.1rem' }}>
                              {event.title}
                            </Typography>
                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                              {event.organization}
                            </Typography>
                          </Box>
                          <Chip 
                            label={event.status} 
                            size="small"
                            color={getStatusColor(event.status)}
                          />
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <LocationIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {event.location}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <CalendarIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {renderEventDate(event)}
                          </Typography>
                        </Box>
                        
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                          <GroupIcon sx={{ fontSize: 16, color: 'text.secondary' }} />
                          <Typography variant="body2" color="text.secondary" sx={{ fontSize: '0.9rem' }}>
                            {event.audience}
                          </Typography>
                        </Box>
                        
                        <Typography variant="body2" sx={{ lineHeight: 1.6, color: '#374151' }}>
                          {event.description}
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
              </Box>
            )}
          </Paper>

          {/* Contact for Speaking */}
          <Card sx={{ borderRadius: 4, boxShadow: '0 20px 40px rgba(0,0,0,0.1)', mb: 3, background: 'rgba(255,255,255,0.95)', backdropFilter: 'blur(10px)' }}>
            <CardContent sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" fontWeight={600} sx={{ mb: 2, color: '#1f2937' }}>
                Invite Me to Speak
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Looking for a speaker for your event? I'm is available for conferences, workshops, university lectures, and corporate training.
              </Typography>
              <Button
                variant="contained"
                fullWidth
                onClick={() => setOpenInviteDialog(true)}
                startIcon={<EmailIcon />}
                sx={{ 
                  background: '#2563eb',
                  py: 1.5,
                  fontSize: '1rem'
                }}
              >
                Send Speaking Invitation
              </Button>
            </CardContent>
          </Card>
        </Container>
      ) : (
        // Desktop Layout (fluid, responsive)
        <Container maxWidth="lg" sx={{ py: 4, mt: 10, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
          <Grid container spacing={4} justifyContent="center">
          {/* Header */}
          <Grid item xs={12}>
            <Box sx={{ textAlign: 'center', mb: 4 }}>
              <Typography variant="h3" fontWeight={700} sx={{ mb: 2, color: '#1f2937' }}>
                Speaking & Events
              </Typography>
              <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
                Cybersecurity talks, lectures, mentorship, and upcoming engagements
              </Typography>
              <Button
                variant="contained"
                size="large"
                onClick={() => setOpenInviteDialog(true)}
                startIcon={<AddIcon />}
                sx={{ 
                  background: '#2563eb',
                  px: 4,
                  py: 1.5,
                  fontSize: '1.1rem'
                }}
              >
                Invite Me to Speak
              </Button>
            </Box>
          </Grid>

          {/* Main Content */}
          <Grid item xs={12} md={8}>
            <Paper elevation={3} sx={{ borderRadius: 3, p: { xs: 2, md: 4 }, width: '100%' }}>
              <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} sx={{ mb: 3 }}>
                <Tab label="Past Events" icon={<EventIcon />} />
                <Tab label="Upcoming Events" icon={<ScheduleIcon />} />
              </Tabs>

              {/* Past Events Tab */}
              {activeTab === 0 && (
                <Box>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                    Recent Speaking Engagements
                  </Typography>
                  <Grid container spacing={3}>
                    {pastEvents.map((event) => (
                      <Grid item xs={12} key={event.id}>
                        <Card sx={{ borderRadius: 3, boxShadow: 4, overflow: 'hidden' }}>
                          {/* Show event image as a large banner if present */}
                          {event.image && (
                            <Box sx={{ width: '100%', height: 340, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', borderBottom: '3px solid #2563eb', boxShadow: '0 8px 32px rgba(30,64,175,0.13)', cursor: 'pointer' }}
                              onClick={() => { setDialogImageSrc(event.image); setOpenImageDialog(true); }}
                            >
                              <img
                                src={event.image}
                                alt={event.title}
                                style={{
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                  display: 'block',
                                  margin: '0 auto',
                                  borderRadius: 0,
                                }}
                              />
                            </Box>
                          )}
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: getEventTypeColor(event.type) }}>
                                  {getEventTypeIcon(event.type)}
                                </Avatar>
                                <Box>
                                  <Typography variant="h6" fontWeight={600}>
                                    {event.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {event.organization} • {event.location}
                                  </Typography>
                                </Box>
                              </Box>
                              <Chip 
                                label={event.topic} 
                                size="small"
                                color="primary"
                                variant="outlined"
                              />
                            </Box>
                            
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              {renderEventDate(event)} • {event.audience}
                            </Typography>
                            
                            <Typography variant="body1" sx={{ mb: 2 }}>
                              {event.description}
                            </Typography>
                            
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {event.highlights.map((highlight, index) => (
                                <Chip 
                                  key={index} 
                                  label={highlight} 
                                  size="small" 
                                  variant="outlined"
                                  sx={{ fontSize: '0.75rem' }}
                                />
                              ))}
                            </Box>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}

              {/* Upcoming Events Tab */}
              {activeTab === 1 && (
                <Box>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 3 }}>
                    Upcoming Engagements
                  </Typography>
                  <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 4, minHeight: 80 }}>
                    {/* Fireworks Animation */}
                    <Firework left={10} delay={0} color="#f59e0b" />
                    <Firework left={30} delay={0.3} color="#ef4444" />
                    <Firework left={50} delay={0.6} color="#2563eb" />
                    <Firework left={70} delay={0.9} color="#10b981" />
                    <Firework left={90} delay={1.1} color="#8b5cf6" />
                    <Button
                      variant="contained"
                      size="large"
                      onClick={() => setOpenInviteDialog(true)}
                      startIcon={<AddIcon />}
                      sx={{
                        background: 'linear-gradient(90deg, #2563eb 0%, #10b981 100%)',
                        color: '#fff',
                        px: 5,
                        py: 2.2,
                        fontSize: '1.25rem',
                        fontWeight: 700,
                        borderRadius: 3,
                        boxShadow: '0 6px 32px 0 rgba(37,99,235,0.18)',
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        zIndex: 2,
                        transition: 'transform 0.2s',
                        '&:hover': {
                          background: 'linear-gradient(90deg, #10b981 0%, #2563eb 100%)',
                          transform: 'scale(1.07)',
                          boxShadow: '0 8px 40px 0 rgba(16,185,129,0.18)',
                        },
                      }}
                    >
                      Invite Me to Speak
                    </Button>
                  </Box>
                  <Grid container spacing={3}>
                    {upcomingEvents.map((event) => (
                      <Grid item xs={12} key={event.id}>
                        <Card sx={{ borderRadius: 2, boxShadow: 2, overflow: 'hidden' }}>
                          {event.image && (
                            <Box
                              sx={{ width: '100%', height: 200, display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#fff', borderBottom: '2px solid #2563eb', cursor: 'pointer' }}
                              onClick={() => { setDialogImageSrc(event.image); setOpenImageDialog(true); }}
                            >
                              <img
                                src={event.image}
                                alt={event.title}
                                style={{
                                  maxWidth: '100%',
                                  maxHeight: '100%',
                                  objectFit: 'contain',
                                  display: 'block',
                                  margin: '0 auto',
                                }}
                              />
                            </Box>
                          )}
                          <CardContent>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                              <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                                <Avatar sx={{ bgcolor: getEventTypeColor(event.type) }}>
                                  {getEventTypeIcon(event.type)}
                                </Avatar>
                                <Box>
                                  <Typography variant="h6" fontWeight={600}>
                                    {event.title}
                                  </Typography>
                                  <Typography variant="body2" color="text.secondary">
                                    {event.organization} • {event.location}
                                  </Typography>
                                </Box>
                              </Box>
                              <Chip 
                                label={event.status} 
                                size="small"
                                color={getStatusColor(event.status)}
                              />
                            </Box>
                            
                            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                              {renderEventDate(event)} • {event.audience}
                            </Typography>
                            
                            <Typography variant="body1">
                              {event.description}
                            </Typography>
                          </CardContent>
                        </Card>
                      </Grid>
                    ))}
                  </Grid>
                </Box>
              )}
            </Paper>
          </Grid>

          {/* Sidebar */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Speaking Topics */}
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    Speaking Topics
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SecurityIcon sx={{ color: '#2563eb' }} />
                      <Typography variant="body2">Cybersecurity Fundamentals</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <TrendingIcon sx={{ color: '#10b981' }} />
                      <Typography variant="body2">Machine Learning in Security</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <CodeIcon sx={{ color: '#8b5cf6' }} />
                      <Typography variant="body2">Software Security</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <BusinessIcon sx={{ color: '#f59e0b' }} />
                      <Typography variant="body2">Career Development in Tech</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <SchoolIcon sx={{ color: '#ef4444' }} />
                      <Typography variant="body2">Digital Forensics</Typography>
                    </Box>
                  </Box>
                </CardContent>
              </Card>

              {/* Event Types */}
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    Event Types
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    {eventTypes.map((type) => (
                      <Box key={type.value} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Box sx={{ color: type.color }}>{type.icon}</Box>
                        <Typography variant="body2">{type.label}</Typography>
                      </Box>
                    ))}
                  </Box>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    Speaking Statistics
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={6}>
                      <Typography variant="h4" fontWeight={700} sx={{ color: '#2563eb' }}>
                        {pastEvents.length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Past Events
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h4" fontWeight={700} sx={{ color: '#10b981' }}>
                        {upcomingEvents.length}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Upcoming
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h4" fontWeight={700} sx={{ color: '#8b5cf6' }}>
                        5+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Topics
                      </Typography>
                    </Grid>
                    <Grid item xs={6}>
                      <Typography variant="h4" fontWeight={700} sx={{ color: '#f59e0b' }}>
                        5+
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Topics
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>

              {/* Contact for Speaking */}
              <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                    Invite Me to Speak
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    Looking for a speaker for your event? I'm available for conferences, workshops, university lectures, and corporate training.
                  </Typography>
                  <Button
                    variant="outlined"
                    fullWidth
                    onClick={() => setOpenInviteDialog(true)}
                    startIcon={<EmailIcon />}
                    sx={{ borderColor: '#2563eb', color: '#2563eb' }}
                  >
                    Send Speaking Invitation
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </Grid>
          </Grid>
        </Container>
      )}

      {/* Invite Dialog */}
      <Dialog 
        open={openInviteDialog} 
        onClose={() => setOpenInviteDialog(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        <DialogTitle sx={{ pb: 1 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography variant="h5" fontWeight={600}>
              Invite Me to Speak
            </Typography>
            <IconButton onClick={() => setOpenInviteDialog(false)}>
              <CloseIcon />
            </IconButton>
          </Box>
        </DialogTitle>
        <DialogContent>
          <Alert severity="info" sx={{ mb: 3 }}>
            <Typography variant="body2">
              Fill out the form below and we'll open your email client with a pre-filled invitation. Simply send the email to complete your request.
            </Typography>
          </Alert>

          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Your Name *"
                value={inviteForm.name}
                onChange={(e) => setInviteForm({...inviteForm, name: e.target.value})}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Email Address *"
                type="email"
                value={inviteForm.email}
                onChange={(e) => setInviteForm({...inviteForm, email: e.target.value})}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Organization *"
                value={inviteForm.organization}
                onChange={(e) => setInviteForm({...inviteForm, organization: e.target.value})}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                label="Phone Number"
                value={inviteForm.contactPhone}
                onChange={(e) => setInviteForm({...inviteForm, contactPhone: e.target.value})}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth sx={{ mb: 2 }}>
                <InputLabel>Event Type *</InputLabel>
                <Select
                  value={inviteForm.eventType}
                  onChange={(e) => setInviteForm({...inviteForm, eventType: e.target.value})}
                  label="Event Type *"
                >
                  {eventTypes.map((type) => (
                    <MenuItem key={type.value} value={type.value}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        {type.icon}
                        {type.label}
                      </Box>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <TextField
                fullWidth
                label="Speaking Topic *"
                value={inviteForm.topic}
                onChange={(e) => setInviteForm({...inviteForm, topic: e.target.value})}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                label="Expected Audience"
                value={inviteForm.audience}
                onChange={(e) => setInviteForm({...inviteForm, audience: e.target.value})}
                sx={{ mb: 2 }}
              />

              <FormControl fullWidth>
                <InputLabel>Duration</InputLabel>
                <Select
                  value={inviteForm.duration}
                  onChange={(e) => setInviteForm({...inviteForm, duration: e.target.value})}
                  label="Duration"
                >
                  {durationOptions.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {inviteForm.duration === "custom" && (
                <TextField
                  fullWidth
                  label="Custom Duration *"
                  value={inviteForm.customDuration}
                  onChange={(e) => setInviteForm({...inviteForm, customDuration: e.target.value})}
                  placeholder="e.g., 2.5 hours, 3 days, 1 week intensive"
                  sx={{ mt: 2 }}
                  helperText="Please specify the exact duration (e.g., '2.5 hours', '3 days', '1 week intensive')"
                />
              )}
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Event Date *"
                type="date"
                value={inviteForm.date}
                onChange={(e) => setInviteForm({...inviteForm, date: e.target.value})}
                InputLabelProps={{ shrink: true }}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Location/Venue"
                value={inviteForm.location}
                onChange={(e) => setInviteForm({...inviteForm, location: e.target.value})}
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Budget Range"
                value={inviteForm.budget}
                onChange={(e) => setInviteForm({...inviteForm, budget: e.target.value})}
                placeholder="e.g., $500-1000, To be discussed"
                sx={{ mb: 2 }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Event Description"
                multiline
                rows={4}
                value={inviteForm.description}
                onChange={(e) => setInviteForm({...inviteForm, description: e.target.value})}
                placeholder="Please describe your event, audience, and what you're looking for in a speaker..."
                sx={{ mb: 3 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions sx={{ p: 3, pt: 0 }}>
          <Button 
            onClick={() => setOpenInviteDialog(false)}
            sx={{ color: '#6b7280' }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            onClick={handleInviteSubmit}
            startIcon={<SendIcon />}
            sx={{ background: '#2563eb' }}
          >
            Send Invitation
          </Button>
        </DialogActions>
      </Dialog>

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

      {/* Image Dialog Popup */}
      <Dialog
        open={openImageDialog}
        onClose={() => setOpenImageDialog(false)}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3, p: 0, background: '#000a', boxShadow: 8 } }}
      >
        <DialogTitle sx={{ p: 1, background: '#fff', display: 'flex', justifyContent: 'flex-end' }}>
          <IconButton onClick={() => setOpenImageDialog(false)}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent sx={{ p: 0, background: '#111', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <img
            src={dialogImageSrc}
            alt="Event Full Size"
            style={{
              width: '100%',
              maxWidth: 900,
              maxHeight: '80vh',
              objectFit: 'contain',
              borderRadius: 8,
              background: '#fff',
              margin: '0 auto',
              display: 'block',
            }}
          />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default SpeakingEvents; 