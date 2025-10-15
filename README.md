# Habinash Yadav - Portfolio Landing Page

A modern, responsive portfolio landing page built with Node.js, Express.js, and EJS templating. Features a dark theme with purple accents, matching the design aesthetic from the provided Figma reference.

## Features

- **Modern Dark Theme**: Beautiful dark background with purple gradient accents
- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive Elements**: Smooth animations, hover effects, and transitions
- **Project Showcase**: Displays all major projects from your resume
- **Skills Visualization**: Interactive skill icons with hover effects
- **Contact Information**: Easy access to all your professional links
- **Smooth Scrolling**: Seamless navigation between sections

## Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Templating**: EJS
- **Icons**: Font Awesome
- **Fonts**: Google Fonts (Inter)

## Project Structure

```
portfolio/
├── server.js              # Express server configuration
├── package.json           # Dependencies and scripts
├── views/
│   └── index.ejs         # Main HTML template
├── public/
│   ├── css/
│   │   └── style.css     # Main stylesheet
│   ├── js/
│   │   └── script.js     # Interactive JavaScript
│   └── images/           # Image assets (if needed)
└── README.md             # This file
```

## Installation & Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Server**:
   ```bash
   npm start
   ```
   
   Or for development with auto-restart:
   ```bash
   npm run dev
   ```

3. **Access the Portfolio**:
   Open your browser and navigate to `http://localhost:3000`

## Portfolio Sections

### Hero Section
- Personal introduction with animated typing effect
- Avatar placeholder with glowing effects
- Mission statement and role description
- Interactive skill icons arranged in orbital pattern

### About Section
- Education details from your resume
- Professional certifications
- Clean, organized layout with hover effects

### Projects Section
- Heart Disease Prediction (ML project)
- DarkEye (Cybersecurity tool)
- Spam/Ham Classifier (Email classification)
- Movie-Lens (Recommendation system)
- Direct links to GitHub repositories

### Contact Section
- Email and phone contact information
- GitHub and LinkedIn profiles
- Coding platform profiles (HackerRank, LeetCode)

## Customization

### Personal Information
Edit the `views/index.ejs` file to update:
- Name and title
- Contact information
- Project descriptions
- Skills and technologies

### Styling
Modify `public/css/style.css` to customize:
- Color scheme (currently purple theme)
- Typography
- Layout and spacing
- Animation effects

### Functionality
Update `public/js/script.js` to add:
- New interactive features
- Additional animations
- Custom JavaScript functionality

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Features

- Optimized CSS with efficient selectors
- Smooth animations using CSS transforms
- Lazy loading for better performance
- Responsive images and icons
- Minimal JavaScript for fast loading

## Deployment

The portfolio can be deployed to any Node.js hosting platform:

1. **Heroku**: Connect your GitHub repository
2. **Vercel**: Deploy with zero configuration
3. **Netlify**: Use the build command `npm start`
4. **DigitalOcean**: Deploy using their Node.js droplet

## License

MIT License - Feel free to use this template for your own portfolio!

## Contact

**Gotte Thiru Habinash Yadav**
- Email: gthy@gmail.com
- Phone: (+91) 7013595450
- GitHub: [@habinash21](https://github.com/habinash21)
- LinkedIn: [/habinash-yadav](https://linkedin.com/in/habinash-yadav)

---

*Built with ❤️ using modern web technologies*
