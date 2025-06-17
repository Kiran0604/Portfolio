// Node.js Express Server for Portfolio Website
// This demonstrates the "N" (Node.js) and "E" (Express) parts of the MERN stack

const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// API Routes
app.get('/api/portfolio-data', (req, res) => {
    const portfolioData = {
        personalInfo: {
            name: "Kiran R Aithal",
            title: "Full Stack Developer | MERN Stack Specialist",
            email: "kiran.aithal@email.com",
            linkedin: "https://linkedin.com/in/kiranraithal",
            github: "https://github.com/kiranaithal"
        },
        about: {
            description: "Passionate Full Stack Developer with expertise in the MERN stack...",
            stats: [
                { label: "Years Experience", value: "2+" },
                { label: "Projects Completed", value: "15+" },
                { label: "Technologies", value: "10+" }
            ]
        },
        skills: [
            {
                category: "Frontend",
                technologies: ["React.js", "JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Responsive Design"]
            },
            {
                category: "Backend", 
                technologies: ["Node.js", "Express.js", "RESTful APIs", "Authentication & Authorization"]
            },
            {
                category: "Database",
                technologies: ["MongoDB", "MySQL", "PostgreSQL", "Mongoose ODM"]
            },
            {
                category: "Tools",
                technologies: ["Git & GitHub", "Docker", "AWS", "Postman", "VS Code"]
            }
        ],
        experience: [
            {
                title: "Full Stack Developer",
                company: "Tech Solutions Inc.",
                period: "2023 - Present",
                responsibilities: [
                    "Developed and maintained full-stack web applications using MERN stack",
                    "Collaborated with cross-functional teams to deliver high-quality software solutions",
                    "Implemented responsive UI components and optimized application performance"
                ]
            }
        ],
        projects: [
            {
                title: "E-Commerce MERN Application",
                description: "Full-stack e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
                technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe API"],
                features: ["User Authentication", "Product Catalog", "Shopping Cart", "Payment Processing"]
            }
        ]
    };

    res.json(portfolioData);
});

// Contact form endpoint
app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real application, you would:
    // 1. Validate the input
    // 2. Save to database (MongoDB)
    // 3. Send email notification
    // 4. Handle errors properly
    
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ 
        success: true, 
        message: 'Thank you for your message! I will get back to you soon.' 
    });
});

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Portfolio website is available at http://localhost:${PORT}`);
});

module.exports = app;
