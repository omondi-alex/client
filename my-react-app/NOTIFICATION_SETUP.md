# Calendar Meeting Request Setup Guide

This guide explains how the Calendar component works for scheduling meetings with Alex Omondi.

## Overview

The Calendar component provides a simple and effective way for visitors to your portfolio to schedule meetings:

1. **Fill out the meeting request form** with all necessary details
2. **Email client opens automatically** with a pre-filled message
3. **Send the email** to complete the meeting request
4. **Alex receives the email** with all meeting details

## How It Works

### 1. User Experience
- Visitor fills out the meeting request form
- Clicks "Send Meeting Request" button
- Their default email client opens with:
  - **To:** omondialex3517@gmail.com
  - **Subject:** "Meeting Request: [Subject]"
  - **Body:** Formatted message with all meeting details

### 2. Email Format
The email includes:
- Meeting subject and type
- Duration and preferred date/time
- Contact information (name, email, phone, company)
- Meeting description
- Professional formatting

### 3. Benefits of This Approach
- **No backend required** - works entirely in the browser
- **No API keys needed** - uses standard email protocols
- **No database setup** - emails are stored in your email inbox
- **No security concerns** - no sensitive data stored
- **Works immediately** - no configuration needed
- **Professional appearance** - maintains your portfolio's quality

## Email Template

The system generates emails in this format:

```
Dear Omondi Alex,

I would like to schedule a meeting with you. Here are the details:

Meeting Information:
- Subject: [Meeting Subject]
- Meeting Type: [Video Call/Phone Call/In-Person]
- Duration: [Duration]
- Preferred Date: [Date]
- Preferred Time: [Time]

My Information:
- Name: [Name]
- Email: [Email]
- Phone: [Phone]
- Company/Organization: [Company]

Meeting Description:
[Description]

Please let me know if this time works for you or suggest an alternative.

Best regards,
[Name]
```

## Customization Options

### 1. Email Address
To change the recipient email, update this line in `src/components/Calendar.js`:
```javascript
const mailtoLink = `mailto:YOUR_EMAIL@domain.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
```

### 2. Email Template
To modify the email format, update the `emailBody` template in the `handleBookingSubmit` function.

### 3. Available Time Slots
To change available times, update the `timeSlots` array:
```javascript
const timeSlots = [
  "09:00", "09:30", "10:00", "10:30", "11:00", "11:30",
  "12:00", "12:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00"
];
```

### 4. Meeting Types
To add or modify meeting types, update the `meetingTypes` array:
```javascript
const meetingTypes = [
  { value: "video", label: "Video Call", icon: <VideoCallIcon />, color: "#2563eb" },
  { value: "phone", label: "Phone Call", icon: <PhoneIcon />, color: "#10b981" },
  { value: "in-person", label: "In-Person", icon: <MeetingRoomIcon />, color: "#f59e0b" }
];
```

### 5. Duration Options
To change available durations, update the `durationOptions` array:
```javascript
const durationOptions = [
  { value: "15", label: "15 minutes" },
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "1 hour" },
  { value: "90", label: "1.5 hours" },
  { value: "120", label: "2 hours" }
];
```

## Browser Compatibility

This approach works with:
- **Desktop browsers** - Opens default email client (Outlook, Apple Mail, etc.)
- **Mobile browsers** - Opens mobile email apps
- **Web-based email** - Opens Gmail, Yahoo, etc. if set as default

## Testing

1. **Fill out the form** with test data
2. **Click "Send Meeting Request"**
3. **Verify email client opens** with correct details
4. **Check email formatting** and content
5. **Test on different devices** and browsers

## Advantages Over Complex Systems

### Simple Email Approach:
- ✅ **Zero setup time**
- ✅ **No monthly costs**
- ✅ **No API keys to manage**
- ✅ **No server maintenance**
- ✅ **Works immediately**
- ✅ **No security vulnerabilities**
- ✅ **Professional appearance**

### Complex Booking Systems:
- ❌ **Requires backend setup**
- ❌ **Monthly service costs**
- ❌ **API key management**
- ❌ **Server maintenance**
- ❌ **Security concerns**
- ❌ **Complex configuration**

## Alternative Enhancements

If you want to add more features later, consider:

### 1. Email Templates
Create different email templates for different meeting types.

### 2. Calendar Integration
Add a link to your Google Calendar availability.

### 3. Auto-responders
Set up email auto-responders for meeting requests.

### 4. Meeting Links
Include Zoom/Teams links for video calls.

## Support

This system requires no external services or APIs, so there's no technical support needed. The only requirement is that users have an email client configured on their device.

## Next Steps

1. **Test the form** with different scenarios
2. **Customize the email template** if needed
3. **Update contact information** if it changes
4. **Monitor your email** for meeting requests
5. **Respond promptly** to maintain professionalism

The email-based approach is perfect for a portfolio site - it's simple, professional, and requires zero maintenance while providing all the functionality needed for meeting scheduling. 