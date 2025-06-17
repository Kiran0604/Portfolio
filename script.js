// Enhanced portfolio functionality - Professional MERN Stack Portfolio

console.log('🚀 Kiran R Aithal Portfolio - Loaded Successfully!');

// Smooth scrolling enhancement
document.addEventListener('DOMContentLoaded', function() {
    // Add loading animation
    const loader = document.createElement('div');
    loader.className = 'page-loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-spinner"></div>
            <p>Loading Portfolio...</p>
        </div>
    `;
    document.body.appendChild(loader);
    
    // Remove loader after React loads
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.remove(), 300);
    }, 1500);
    
    // Enhanced scroll behavior
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };
    
    // Track page views (placeholder for analytics)
    console.log('📊 Portfolio Analytics: Page viewed at', new Date().toISOString());
    
    // Performance monitoring
    window.addEventListener('load', () => {
        console.log('⚡ Portfolio Performance: Loaded in', 
            (performance.now() / 1000).toFixed(2), 'seconds');
    });
});

// Project showcase animation trigger
const observeProjects = () => {
    const projectCards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
            }
        });
    });
    
    projectCards.forEach(card => observer.observe(card));
};

// GitHub link validation
const validateGitHubLinks = () => {
    const githubLinks = document.querySelectorAll('a[href*="github.com"]');
    githubLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            console.log('🔗 GitHub Repository accessed:', link.href);
        });
    });
};

// Contact form enhancement (if needed)
const enhanceContactForm = () => {
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            console.log('📧 Contact form submitted');
            // Add form validation and submission logic here
        });
    }
};

// Portfolio statistics
const portfolioStats = {
    projects: 6,
    technologies: ['React', 'Node.js', 'Python', 'Machine Learning', 'Apache Spark', 'MongoDB'],
    achievements: 6,
    internships: 3,
    initTime: new Date()
};

console.log('📈 Portfolio Stats:', portfolioStats);

// Initialize enhancements after React components load
setTimeout(() => {
    observeProjects();
    validateGitHubLinks();
    enhanceContactForm();
}, 2000);

// Export for potential use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { portfolioStats, smoothScroll };
}
