# Portfolio Website 🌐

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a sleek dark/light theme toggle, interactive contact form with email integration, and multiple professional pages showcasing skills and achievements.

## 🎨 Features

- **Responsive Design** - Mobile-first approach with media queries for all devices
- **Dark/Light Theme Toggle** - Smooth animated switch between dark and light modes with localStorage persistence
- **Interactive Contact Form** - Real-time form validation with EmailJS integration for sending emails
- **Professional Styling** - Modern UI with cyan accent colors and smooth animations
- **Multi-page Navigation** - Separate pages for Home, About, Skills, and Contact
- **Smooth Animations** - Fade-in effects, hover transitions, and scroll animations
- **Form Validation** - Client-side validation with error notifications
- **Social Links** - Quick links to GitHub, LinkedIn, and Instagram

## 📁 Project Structure

```
Portfolio Website/
├── Home.html              # Main landing page
├── about.html             # About me page with stats and expertise
├── skills.html            # Skills, achievements, and certifications
├── contact.html           # Contact form with EmailJS integration
├── index.html             # Alternative home page
├── style.css              # Main stylesheet with CSS variables
├── theme.js               # Dark/light theme toggle functionality
├── contact.js             # Contact form validation and EmailJS handler
└── README.md              # Project documentation
```

## 🚀 Pages

### Home (Home.html)
- Hero section with introduction
- Call-to-action buttons (View Work & Get In Touch)
- Quick about section
- Professional footer

### About (about.html)
- Detailed introduction
- Professional statistics (years of experience, projects, technologies)
- Education timeline
- Technical expertise cards

### Skills (skills.html)
- Technical skills with progress bars
- Professional achievements with icons
- Extracurricular activities
- Certifications section

### Contact (contact.html)
- Contact information section
- Social media links (GitHub, LinkedIn, Instagram)
- Interactive contact form with validation
- EmailJS integration for email sending
- Success/error notifications

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Modern styling with CSS custom properties (variables)
- **JavaScript** - Form validation, theme toggle, and interactions

### Email Service
- **EmailJS** - For sending contact form emails

### Features Implementation
- **Theme System** - CSS variables with dark/light mode toggle
- **Form Validation** - Real-time field validation with error states
- **Notifications** - Toast-style notifications for form submission
- **Smooth Animations** - CSS keyframes for transitions and effects

## 📋 Features Breakdown

### 1. Dark/Light Theme Toggle
- Smooth sliding switch animation
- Persistent theme preference using localStorage
- CSS custom properties for easy color switching
- Icons: 🌙 (dark mode) and ☀️ (light mode)

### 2. Contact Form with EmailJS
- Real-time field validation
- Email format verification
- Required field checking
- Message length validation
- Success and error notifications
- Loading state during submission

### 3. Responsive Design
- Mobile-first approach
- Breakpoint: 768px for tablet/mobile devices
- Flexible grid layouts
- Responsive typography
- Touch-friendly buttons and forms

### 4. Professional Styling
- Color Scheme:
  - Dark Mode: #0a0a0a to #2d2d2d backgrounds, #00d4ff accent
  - Light Mode: #ffffff to #e0e0e0 backgrounds, #0084d4 accent
- Smooth transitions (0.3s ease)
- Box shadows for depth
- Border radius for modern look
- Gradient backgrounds

## ⚙️ Setup & Installation

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Internet connection (for EmailJS service)

### Local Setup
1. Clone or download the repository
2. Open any `.html` file in your browser
3. No build process or dependencies required!

### EmailJS Configuration
1. Visit [emailjs.com](https://www.emailjs.com/)
2. Create a free account
3. Set up an Email Service (Gmail recommended)
4. Create an Email Template with these variables:
   ```
   {{name}} - Sender's name
   {{email}} - Sender's email
   {{subject}} - Message subject
   {{message}} - Message content
   ```
5. Get your credentials:
   - Service ID
   - Template ID
   - Public Key
6. Update `contact.js` with your credentials:
   ```javascript
   const EMAILJS_SERVICE_ID = 'your_service_id';
   const EMAILJS_TEMPLATE_ID = 'your_template_id';
   const EMAILJS_PUBLIC_KEY = 'your_public_key';
   ```

## 📱 Browser Compatibility

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📊 Form Validation Rules

| Field | Rules |
|-------|-------|
| Name | Minimum 2 characters |
| Email | Valid email format |
| Subject | Minimum 3 characters |
| Message | Minimum 10 characters |

## 🎯 Key Sections

### Header/Navigation
- Responsive navbar with theme toggle
- Logo with hover effects
- Mobile-friendly navigation links

### Color Scheme (CSS Variables)
```css
/* Dark Theme (default) */
--bg-primary: #0a0a0a
--bg-secondary: #0f0f0f
--bg-tertiary: #1a1a1a
--bg-quaternary: #2d2d2d
--accent: #00d4ff (cyan)

/* Light Theme */
--bg-primary: #ffffff
--accent: #0084d4 (blue)
```

## 🔧 Customization

### Change Colors
Edit CSS variables in `style.css`:
```css
:root {
    --accent: #your-color;
    --accent-dark: #your-dark-color;
}
```

### Update Personal Information
- Replace name in all `.html` files
- Update social links in `contact.html`
- Modify stats in `about.html`
- Edit skills in `skills.html`

### Modify Content
- Edit section content in respective HTML files
- Update education timeline in `about.html`
- Add/remove achievement cards in `skills.html`

## 📞 Contact Form Testing

1. Fill out the contact form
2. See real-time validation feedback
3. Submit successfully receives:
   - Success notification
   - Email sent to your inbox via EmailJS
   - Form clears automatically

## 🚀 Deployment

### GitHub Pages
1. Push code to GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source branch to `main`
4. Access at `https://username.github.io/portfolio`

### Other Hosting
- Netlify: Drag & drop folder
- Vercel: Connect GitHub repository
- Any static host (AWS S3, etc.)

## 📝 Recent Updates

- ✅ Added dark/light theme toggle with smooth animations
- ✅ Integrated EmailJS for contact form emails
- ✅ Implemented form validation with error messages
- ✅ Added responsive design for mobile devices
- ✅ Created professional About page with stats
- ✅ Added Skills page with achievements
- ✅ Implemented notification system
- ✅ Added smooth scroll animations

## 📧 Contact Information

- **Email**: jeevanraj05022008@example.com
- **Phone**: +91 93441 08864
- **GitHub**: [Flame-Phoneix](https://github.com/Flame-Phoneix)
- **LinkedIn**: [Jeevan Raj](https://www.linkedin.com/in/jeevan-raj-b690b136b/)

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this repository and use it as a template for your own portfolio!

## ⭐ Future Enhancements

- [ ] Add project showcase with filtering
- [ ] Implement blog section
- [ ] Add testimonials section
- [ ] Create timeline for experience
- [ ] Add downloadable resume/CV
- [ ] Implement search functionality
- [ ] Add social media integrations
- [ ] Create admin dashboard

## 📝 Notes

- All styling uses CSS custom properties for easy theming
- JavaScript is vanilla (no frameworks)
- Fully responsive without external CSS frameworks
- EmailJS requires valid credentials for form submission

---

**Created by**: Jeevan  
**Date**: 2025  