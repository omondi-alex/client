import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Chip,
  Paper,
  Avatar,
  Tabs,
  Tab,
  Divider,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
  Snackbar,
  Badge,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar
} from "@mui/material";
import {
  Announcement as AnnouncementIcon,
  Article as ArticleIcon,
  Event as EventIcon,
  Info as InfoIcon,
  TrendingUp as TrendingIcon,
  Star as StarIcon,
  CalendarToday as CalendarIcon,
  Person as PersonIcon,
  Category as CategoryIcon,
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon,
  Share as ShareIcon,
  Bookmark as BookmarkIcon,
  BookmarkBorder as BookmarkBorderIcon,
  Close as CloseIcon,
  Send as SendIcon,
  Security as SecurityIcon,
  Code as CodeIcon,
  Business as BusinessIcon,
  School as SchoolIcon,
  Work as WorkIcon,
  EmojiEvents as AwardIcon
} from "@mui/icons-material";

const Announcements = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [openPostDialog, setOpenPostDialog] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: "", severity: "success" });

  // Categories
  const categories = [
    { value: "all", label: "All Posts", icon: <ArticleIcon />, color: "#2563eb" },
    { value: "cybersecurity", label: "Cybersecurity", icon: <SecurityIcon />, color: "#dc2626" },
    { value: "career", label: "Career Updates", icon: <WorkIcon />, color: "#059669" },
    { value: "education", label: "Education", icon: <SchoolIcon />, color: "#7c3aed" },
    { value: "projects", label: "Project Updates", icon: <CodeIcon />, color: "#ea580c" },
    { value: "events", label: "Events", icon: <EventIcon />, color: "#db2777" },
    { value: "general", label: "General Info", icon: <InfoIcon />, color: "#6b7280" }
  ];

  // Sample blog posts and announcements
  const posts = [
    {
      id: 1,
      title: "New Cybersecurity Certification Achieved",
      category: "cybersecurity",
      type: "achievement",
      content: "I'm excited to share that I've recently obtained my Cybersecurity Fundamentals certification from Scratch and Script Limited, in collaboration with ISACA and Data Privacy and Governance Society of Kenya. This certification covers essential cybersecurity concepts, threat analysis, and incident response methodologies that are crucial in today's digital landscape.",
      excerpt: "Recently obtained Cybersecurity Fundamentals certification covering threat analysis and incident response...",
      author: "Alex Omondi",
      date: "2024-11-15",
      readTime: "3 min read",
      featured: true,
      tags: ["Cybersecurity", "Certification", "ISACA"],
      views: 245,
      likes: 18
    },
    {
      id: 2,
      title: "Starting My Master's Journey in Computer Security",
      category: "education",
      type: "update",
      content: "I'm thrilled to announce that I've been accepted into the Master's program in Computer Security at the African Institute for Mathematical Sciences (AIMS) in Senegal. This is a significant milestone in my academic journey, and I'm looking forward to deepening my knowledge in cybersecurity, particularly focusing on cloud computing security for financial technology companies in Kenya.",
      excerpt: "Accepted into Master's program in Computer Security at AIMS Senegal, focusing on cloud security for fintech...",
      author: "Alex Omondi",
      date: "2023-10-01",
      readTime: "4 min read",
      featured: true,
      tags: ["Education", "Master's Degree", "AIMS"],
      views: 189,
      likes: 23
    },
    {
      id: 3,
      title: "New Project: Cloud Security Assessment Framework",
      category: "projects",
      type: "project",
      content: "I'm currently working on developing a comprehensive Cloud Computing Security Assessment Framework specifically designed for FINTECH companies in Kenya. This project aims to address the unique security challenges faced by financial technology companies operating in cloud environments, providing them with practical tools and methodologies to assess and improve their security posture.",
      excerpt: "Developing a cloud security assessment framework for Kenyan FINTECH companies...",
      author: "Alex Omondi",
      date: "2024-12-01",
      readTime: "5 min read",
      featured: false,
      tags: ["Cloud Security", "FINTECH", "Research"],
      views: 156,
      likes: 12
    },
    {
      id: 4,
      title: "Upcoming Speaking Engagement: Africa Tech Summit",
      category: "events",
      type: "event",
      content: "I'm honored to announce that I'll be speaking at the Africa Tech Summit in Lagos, Nigeria, in February 2025. My presentation will focus on 'AI and Cybersecurity: The Future of Digital Defense,' where I'll discuss the intersection of artificial intelligence and cybersecurity in modern digital defense strategies. This is a great opportunity to share insights with fellow professionals in the African tech ecosystem.",
      excerpt: "Speaking at Africa Tech Summit 2025 on AI and Cybersecurity in digital defense...",
      author: "Alex Omondi",
      date: "2024-12-10",
      readTime: "2 min read",
      featured: false,
      tags: ["Speaking", "AI", "Cybersecurity"],
      views: 98,
      likes: 15
    },
    {
      id: 5,
      title: "Career Update: Software Security Engineer Role",
      category: "career",
      type: "career",
      content: "I'm pleased to share that I've joined Enovise Group as a Software Security Engineer. In this role, I'll be responsible for designing and implementing security solutions to monitor and protect cloud and on-premises infrastructure. I'll also be creating software tools to simplify incident investigation and working closely with development and operations teams to ensure security best practices are followed.",
      excerpt: "Joined Enovise Group as Software Security Engineer, focusing on cloud and infrastructure security...",
      author: "Alex Omondi",
      date: "2024-02-01",
      readTime: "3 min read",
      featured: false,
      tags: ["Career", "Security Engineering", "Enovise"],
      views: 203,
      likes: 31
    },
    {
      id: 6,
      title: "Mentorship Program: Supporting Young Professionals",
      category: "general",
      type: "info",
      content: "I'm actively involved in the Young Professional Mentorship Program (YPMP) where I mentor young professionals in career development and leadership skills. This program, run by the Igoye Young Professional Mentorship Institute, aims to support young people in rethinking, refocusing, and succeeding in their professional journeys. It's incredibly rewarding to help others grow and develop their potential.",
      excerpt: "Mentoring young professionals through YPMP program focused on career development and leadership...",
      author: "Alex Omondi",
      date: "2024-01-15",
      readTime: "3 min read",
      featured: false,
      tags: ["Mentorship", "Leadership", "Career Development"],
      views: 134,
      likes: 19
    }
  ];

  // Filter posts based on selected category
  const filteredPosts = selectedCategory === "all" 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  // Get featured posts
  const featuredPosts = posts.filter(post => post.featured);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setOpenPostDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenPostDialog(false);
    setSelectedPost(null);
  };

  const getCategoryIcon = (category) => {
    return categories.find(c => c.value === category)?.icon || <InfoIcon />;
  };

  const getCategoryColor = (category) => {
    return categories.find(c => c.value === category)?.color || "#6b7280";
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Box sx={{ flexGrow: 1, mt: 10, minHeight: '90vh', display: 'flex', alignItems: 'flex-start', justifyContent: 'center' }}>
      <Grid container spacing={4} sx={{ maxWidth: 1200 }}>
        {/* Header */}
        <Grid item xs={12}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" fontWeight={700} sx={{ mb: 2, color: '#1f2937' }}>
              Announcements & Blog
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ mb: 4 }}>
              Stay updated with my latest news, achievements, and insights
            </Typography>
          </Box>
        </Grid>

        {/* Main Content */}
        <Grid item xs={12} md={8}>
          <Paper elevation={3} sx={{ borderRadius: 3, p: 4 }}>
            {/* Category Tabs */}
            <Box sx={{ mb: 4 }}>
              <Tabs 
                value={activeTab} 
                onChange={(_, newValue) => setActiveTab(newValue)}
                variant="scrollable"
                scrollButtons="auto"
                sx={{ mb: 3 }}
              >
                <Tab label="All Posts" />
                <Tab label="Featured" />
                <Tab label="Recent" />
                <Tab label="Popular" />
              </Tabs>

              {/* Category Filter */}
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {categories.map((category) => (
                  <Chip
                    key={category.value}
                    label={category.label}
                    icon={category.icon}
                    onClick={() => setSelectedCategory(category.value)}
                    color={selectedCategory === category.value ? "primary" : "default"}
                    variant={selectedCategory === category.value ? "filled" : "outlined"}
                    sx={{ 
                      '& .MuiChip-icon': { color: category.color },
                      fontWeight: selectedCategory === category.value ? 600 : 500
                    }}
                  />
                ))}
              </Box>
            </Box>

            {/* Featured Posts Section */}
            {activeTab === 1 && (
              <Box sx={{ mb: 4 }}>
                <Typography variant="h5" fontWeight={600} sx={{ mb: 3 }}>
                  Featured Posts
                </Typography>
                <Grid container spacing={3}>
                  {featuredPosts.map((post) => (
                    <Grid item xs={12} key={post.id}>
                      <Card sx={{ borderRadius: 2, boxShadow: 2, cursor: 'pointer' }} onClick={() => handlePostClick(post)}>
                        <CardContent>
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Avatar sx={{ bgcolor: getCategoryColor(post.category) }}>
                                {getCategoryIcon(post.category)}
                              </Avatar>
                              <Box>
                                <Typography variant="h6" fontWeight={600}>
                                  {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                  {post.author} • {formatDate(post.date)} • {post.readTime}
                                </Typography>
                              </Box>
                            </Box>
                            <StarIcon sx={{ color: '#fbbf24' }} />
                          </Box>
                          
                          <Typography variant="body1" sx={{ mb: 2 }}>
                            {post.excerpt}
                          </Typography>
                          
                          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                              {post.tags.map((tag, index) => (
                                <Chip 
                                  key={index} 
                                  label={tag} 
                                  size="small" 
                                  variant="outlined"
                                  sx={{ fontSize: '0.75rem' }}
                                />
                              ))}
                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                              <Typography variant="body2" color="text.secondary">
                                {post.views} views
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {post.likes} likes
                              </Typography>
                            </Box>
                          </Box>
                        </CardContent>
                      </Card>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            )}

            {/* All Posts Grid */}
            {activeTab === 0 && (
              <Grid container spacing={3}>
                {filteredPosts.map((post) => (
                  <Grid item xs={12} key={post.id}>
                    <Card sx={{ borderRadius: 2, boxShadow: 2, cursor: 'pointer' }} onClick={() => handlePostClick(post)}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ bgcolor: getCategoryColor(post.category) }}>
                              {getCategoryIcon(post.category)}
                            </Avatar>
                            <Box>
                              <Typography variant="h6" fontWeight={600}>
                                {post.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {post.author} • {formatDate(post.date)} • {post.readTime}
                              </Typography>
                            </Box>
                          </Box>
                          {post.featured && <StarIcon sx={{ color: '#fbbf24' }} />}
                        </Box>
                        
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {post.excerpt}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {post.tags.map((tag, index) => (
                              <Chip 
                                key={index} 
                                label={tag} 
                                size="small" 
                                variant="outlined"
                                sx={{ fontSize: '0.75rem' }}
                              />
                            ))}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                              {post.views} views
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {post.likes} likes
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Recent Posts */}
            {activeTab === 2 && (
              <Grid container spacing={3}>
                {posts.slice(0, 5).map((post) => (
                  <Grid item xs={12} key={post.id}>
                    <Card sx={{ borderRadius: 2, boxShadow: 2, cursor: 'pointer' }} onClick={() => handlePostClick(post)}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ bgcolor: getCategoryColor(post.category) }}>
                              {getCategoryIcon(post.category)}
                            </Avatar>
                            <Box>
                              <Typography variant="h6" fontWeight={600}>
                                {post.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {post.author} • {formatDate(post.date)} • {post.readTime}
                              </Typography>
                            </Box>
                          </Box>
                          {post.featured && <StarIcon sx={{ color: '#fbbf24' }} />}
                        </Box>
                        
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {post.excerpt}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {post.tags.map((tag, index) => (
                              <Chip 
                                key={index} 
                                label={tag} 
                                size="small" 
                                variant="outlined"
                                sx={{ fontSize: '0.75rem' }}
                              />
                            ))}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                              {post.views} views
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {post.likes} likes
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}

            {/* Popular Posts */}
            {activeTab === 3 && (
              <Grid container spacing={3}>
                {posts.sort((a, b) => b.views - a.views).slice(0, 5).map((post) => (
                  <Grid item xs={12} key={post.id}>
                    <Card sx={{ borderRadius: 2, boxShadow: 2, cursor: 'pointer' }} onClick={() => handlePostClick(post)}>
                      <CardContent>
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Avatar sx={{ bgcolor: getCategoryColor(post.category) }}>
                              {getCategoryIcon(post.category)}
                            </Avatar>
                            <Box>
                              <Typography variant="h6" fontWeight={600}>
                                {post.title}
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                {post.author} • {formatDate(post.date)} • {post.readTime}
                              </Typography>
                            </Box>
                          </Box>
                          <TrendingIcon sx={{ color: '#10b981' }} />
                        </Box>
                        
                        <Typography variant="body1" sx={{ mb: 2 }}>
                          {post.excerpt}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                            {post.tags.map((tag, index) => (
                              <Chip 
                                key={index} 
                                label={tag} 
                                size="small" 
                                variant="outlined"
                                sx={{ fontSize: '0.75rem' }}
                              />
                            ))}
                          </Box>
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                              {post.views} views
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                              {post.likes} likes
                            </Typography>
                          </Box>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            )}
          </Paper>
        </Grid>

        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            {/* Quick Stats */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent sx={{ textAlign: 'center' }}>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Blog Statistics
                </Typography>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="h4" fontWeight={700} sx={{ color: '#2563eb' }}>
                      {posts.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Posts
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" fontWeight={700} sx={{ color: '#10b981' }}>
                      {featuredPosts.length}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Featured
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" fontWeight={700} sx={{ color: '#8b5cf6' }}>
                      {posts.reduce((sum, post) => sum + post.views, 0)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Views
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="h4" fontWeight={700} sx={{ color: '#f59e0b' }}>
                      {posts.reduce((sum, post) => sum + post.likes, 0)}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Total Likes
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>

            {/* Categories */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Categories
                </Typography>
                <List dense>
                  {categories.slice(1).map((category) => (
                    <ListItem key={category.value} sx={{ px: 0 }}>
                      <ListItemIcon sx={{ color: category.color, minWidth: 36 }}>
                        {category.icon}
                      </ListItemIcon>
                      <ListItemText 
                        primary={category.label}
                        primaryTypographyProps={{ fontWeight: 500 }}
                      />
                      <Chip 
                        label={posts.filter(p => p.category === category.value).length}
                        size="small"
                        color="primary"
                        variant="outlined"
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Recent Posts */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Recent Posts
                </Typography>
                <List dense>
                  {posts.slice(0, 3).map((post) => (
                    <ListItem key={post.id} sx={{ px: 0, cursor: 'pointer' }} onClick={() => handlePostClick(post)}>
                      <ListItemAvatar>
                        <Avatar sx={{ bgcolor: getCategoryColor(post.category), width: 32, height: 32 }}>
                          {getCategoryIcon(post.category)}
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText 
                        primary={post.title}
                        secondary={formatDate(post.date)}
                        primaryTypographyProps={{ fontSize: '0.875rem', fontWeight: 500 }}
                        secondaryTypographyProps={{ fontSize: '0.75rem' }}
                      />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>

            {/* Subscribe */}
            <Card sx={{ borderRadius: 3, boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                  Stay Updated
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  Get notified about new posts, achievements, and updates.
                </Typography>
                <TextField
                  fullWidth
                  label="Email Address"
                  type="email"
                  size="small"
                  sx={{ mb: 2 }}
                />
                <Button
                  variant="contained"
                  fullWidth
                  startIcon={<SendIcon />}
                  sx={{ background: '#2563eb' }}
                >
                  Subscribe
                </Button>
              </CardContent>
            </Card>
          </Box>
        </Grid>
      </Grid>

      {/* Post Detail Dialog */}
      <Dialog 
        open={openPostDialog} 
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: { borderRadius: 3 }
        }}
      >
        {selectedPost && (
          <>
            <DialogTitle sx={{ pb: 1 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar sx={{ bgcolor: getCategoryColor(selectedPost.category) }}>
                    {getCategoryIcon(selectedPost.category)}
                  </Avatar>
                  <Box>
                    <Typography variant="h5" fontWeight={600}>
                      {selectedPost.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {selectedPost.author} • {formatDate(selectedPost.date)} • {selectedPost.readTime}
                    </Typography>
                  </Box>
                </Box>
                <IconButton onClick={handleCloseDialog}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>
            <DialogContent>
              <Box sx={{ mb: 3 }}>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                  {selectedPost.tags.map((tag, index) => (
                    <Chip 
                      key={index} 
                      label={tag} 
                      size="small" 
                      color="primary"
                      variant="outlined"
                    />
                  ))}
                </Box>
                <Typography variant="body1" sx={{ lineHeight: 1.8 }}>
                  {selectedPost.content}
                </Typography>
              </Box>
              
              <Divider sx={{ my: 2 }} />
              
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    {selectedPost.views} views
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {selectedPost.likes} likes
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <IconButton size="small">
                    <BookmarkBorderIcon />
                  </IconButton>
                  <IconButton size="small">
                    <ShareIcon />
                  </IconButton>
                </Box>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 3, pt: 0 }}>
              <Button 
                onClick={handleCloseDialog}
                sx={{ color: '#6b7280' }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                startIcon={<ShareIcon />}
                sx={{ background: '#2563eb' }}
              >
                Share Post
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Snackbar */}
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
    </Box>
  );
};

export default Announcements; 