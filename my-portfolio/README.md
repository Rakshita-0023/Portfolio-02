# Modern Portfolio Website

A dynamic, responsive portfolio website built with React.js featuring smooth animations, dark/light mode toggle, and modern design.

## 🚀 Features

### ✨ Dynamic Hero Section
- Animated typing effect with multiple roles
- Professional branding with gradient text
- Call-to-action buttons with hover effects
- Social media links with animations

### 🎯 Interactive Timeline
- Career milestones with detailed descriptions
- Project highlights with live demos and code links
- Achievement lists for each position
- Responsive timeline design

### 💻 Skills & Technologies Section
- Categorized skills (Frontend, Backend, Tools)
- Interactive progress bars with animations
- Hover effects on skill categories
- Visual skill level indicators

### 🎨 Projects Showcase
- Live demo links and GitHub repositories
- Detailed project descriptions
- Technology tags for each project
- Challenge descriptions and solutions
- Hover animations and card effects

### 📚 Experience & Education
- Professional experience timeline
- Educational background with relevant coursework
- Certifications display
- Achievement highlights

### 📞 Contact & Call to Action
- Interactive contact form with validation
- Contact information display
- Social media integration
- Form submission feedback

### 🎨 Design & User Experience
- **Responsive Design**: Mobile-friendly and adapts to all screen sizes
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Smooth Navigation**: Sticky header with smooth scrolling
- **Hover Effects**: Interactive elements throughout the site
- **Modern Animations**: Framer Motion powered animations

## 🛠️ Technical Stack

- **Frontend Framework**: React.js
- **Styling**: Pure CSS with CSS Variables
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Typing Effect**: React Typed
- **Data Management**: Centralized data structure

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx      # Navigation with theme toggle
│   ├── Hero.jsx           # Hero section with typing animation
│   ├── About.jsx          # About section with features
│   ├── Skills.jsx         # Skills with progress bars
│   ├── Projects.jsx       # Projects showcase
│   ├── Experience.jsx     # Timeline and education
│   ├── Contact.jsx        # Contact form and info
│   └── Footer.jsx         # Footer with social links
├── data/
│   └── portfolioData.js   # Centralized data storage
├── index.css              # Global styles and theme
├── App.js                 # Main app component
└── index.js               # App entry point
```

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm start
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Customization

### Personal Information
Edit `src/data/portfolioData.js` to update:
- Personal details (name, email, bio, etc.)
- Social media links
- Skills and proficiency levels
- Project information
- Work experience
- Education and certifications

### Styling
Modify `src/index.css` to customize:
- Color scheme (CSS variables)
- Typography
- Spacing and layout
- Animations and transitions

### Components
Each component is modular and can be easily customized:
- Add new sections
- Modify existing layouts
- Update animations
- Change content structure

## 🎨 Theme Customization

The portfolio uses CSS variables for easy theme customization:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  --accent-color: #06b6d4;
  /* ... more variables */
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (< 768px)

## 🔧 Performance Optimizations

- Lazy loading for animations
- Optimized images and assets
- Minimal bundle size
- Efficient re-renders with React best practices

## 📈 SEO Ready

- Semantic HTML structure
- Meta tags optimization
- Accessible design
- Fast loading times

## 🚀 Deployment

The portfolio can be deployed to:
- **Netlify**: Drag and drop the build folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use the build folder
- **AWS S3**: Upload build files to S3 bucket

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you have suggestions for improvements, please open an issue or submit a pull request.

## 📞 Support

If you need help customizing this portfolio, feel free to reach out through the contact form or social media links.

---

**Happy Coding!** 🚀