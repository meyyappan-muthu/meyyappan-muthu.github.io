// ==========================================
// Theme Toggle
// ==========================================
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

// Check for saved theme preference or default to light mode
const currentTheme = localStorage.getItem('theme') || 'light';
html.setAttribute('data-theme', currentTheme);

themeToggle.addEventListener('click', () => {
    const theme = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
});

// ==========================================
// Mobile Navigation Toggle
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            
            // Animate hamburger icon
            const spans = navToggle.querySelectorAll('span');
            if (navMenu.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    }
    
    // Close mobile menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        if (navToggle && navMenu) {
            const isClickInsideNav = navToggle.contains(event.target) || navMenu.contains(event.target);
            
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const spans = navToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    });
});

// ==========================================
// Typewriter Effect
// ==========================================
const typewriter = document.getElementById('typewriter');
const texts = ['Meyyappan Muthu'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 150;

function type() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typewriter.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingDelay = 75;
    } else {
        typewriter.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingDelay = 150;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        // Finished typing, don't delete for portfolio name
        return;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingDelay = 500;
    }
    
    setTimeout(type, typingDelay);
}

// Start typewriter effect
if (typewriter) {
    setTimeout(type, 500);
}

// ==========================================
// Animated Counters
// ==========================================
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const speed = 50; // Lower is faster
    
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        let count = 0;
        
        const updateCount = () => {
            const increment = target / speed;
            
            if (count < target) {
                count += increment;
                counter.textContent = Math.ceil(count);
                setTimeout(updateCount, 30);
            } else {
                counter.textContent = target;
            }
        };
        
        updateCount();
    });
}

// Trigger counter animation when stats come into view
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const heroStats = document.querySelector('.hero-stats');
if (heroStats) {
    statsObserver.observe(heroStats);
}

// ==========================================
// Expandable Experience Sections
// ==========================================
window.toggleExpand = function(button) {
    // Find the timeline-content container
    const timelineContent = button.closest('.timeline-content');
    const expandableContent = timelineContent.querySelector('.expandable-content');
    
    button.classList.toggle('expanded');
    expandableContent.classList.toggle('expanded');
    
    // Update button text
    const btnText = button.querySelector('.pill-text');
    if (expandableContent.classList.contains('expanded')) {
        btnText.textContent = 'Read';
    } else {
        btnText.textContent = 'Read More';
    }
};

// ==========================================
// Navbar Scroll Effect
// ==========================================
let lastScrollTop = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add shadow and show logo on scroll
    if (scrollTop > 50) {
        nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        nav.classList.add('scrolled');
    } else {
        nav.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
        nav.classList.remove('scrolled');
    }
    
    lastScrollTop = scrollTop;
});

// ==========================================
// Active Navigation Link Highlighting
// ==========================================
const sections = document.querySelectorAll('section[id]');
const navLinksForHighlight = document.querySelectorAll('.nav-link');

function highlightNavLink() {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinksForHighlight.forEach(link => {
                link.classList.remove('active');
                
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

window.addEventListener('scroll', highlightNavLink);

// ==========================================
// Smooth Scroll with Offset for Fixed Nav
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const navHeight = nav.offsetHeight;
            const targetPosition = targetElement.offsetTop - navHeight - 20;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Intersection Observer for Fade-in Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const fadeInObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll(
        '.expertise-card, .timeline-item, .contact-card, .tech-item, .highlight-card'
    );
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        fadeInObserver.observe(element);
    });
});

// ==========================================
// Contact Form Handling
// ==========================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        // If using Formspree, it will handle submission
        // If you want custom handling, uncomment below and handle
        
        // e.preventDefault();
        // const formData = new FormData(contactForm);
        // Add your custom form submission logic here
    });
}

// ==========================================
// Presentation Background Image Loader
// ==========================================
const heroBgImage = document.querySelector('.hero-bg-image');
if (heroBgImage) {
    const bgImageUrl = heroBgImage.style.backgroundImage;
    
    if (bgImageUrl && bgImageUrl !== 'none' && bgImageUrl !== 'url()') {
        // Image is set, ensure it's loaded
        const img = new Image();
        const url = bgImageUrl.replace(/url\(['"]?([^'"]+)['"]?\)/gi, '$1');
        
        img.onload = function() {
            heroBgImage.style.opacity = '0.15';
        };
        
        img.onerror = function() {
            console.log('Presentation background image failed to load');
            heroBgImage.style.display = 'none';
        };
        
        img.src = url;
    }
}

// ==========================================
// Handle External Links
// ==========================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if (!link.hasAttribute('rel')) {
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ==========================================
// Performance: Debounce Scroll Events
// ==========================================
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll handlers
window.addEventListener('scroll', debounce(highlightNavLink, 10));

// ==========================================
// Parallax Effect for Hero Background (Optional)
// ==========================================
const hero = document.querySelector('.hero');
if (hero && heroBgImage) {
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * 0.5;
        heroBgImage.style.transform = `translate3d(0, ${rate}px, 0)`;
    });
}

// ==========================================
// Tech Marquee Pause on Hover
// ==========================================
const techMarquee = document.querySelector('.tech-marquee');
if (techMarquee) {
    techMarquee.addEventListener('mouseenter', function() {
        const marqueeContent = this.querySelectorAll('.tech-marquee-content');
        marqueeContent.forEach(content => {
            content.style.animationPlayState = 'paused';
        });
    });
    
    techMarquee.addEventListener('mouseleave', function() {
        const marqueeContent = this.querySelectorAll('.tech-marquee-content');
        marqueeContent.forEach(content => {
            content.style.animationPlayState = 'running';
        });
    });
}

// ==========================================
// Loading Animation for Images
// ==========================================
const profileImage = document.querySelector('.hero-image');
if (profileImage) {
    profileImage.addEventListener('load', function() {
        this.style.opacity = '1';
    });
    
    profileImage.addEventListener('error', function() {
        console.log('Profile image failed to load, using placeholder gradient');
    });
}

// ==========================================
// Scroll to Top on Logo Click
// ==========================================
const logo = document.querySelector('.nav-logo');
if (logo) {
    logo.addEventListener('click', function(e) {
        if (this.getAttribute('href') === '#home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
    });
}

// ==========================================
// Initialize on Page Load
// ==========================================
window.addEventListener('load', function() {
    // Remove any loading classes if present
    document.body.classList.add('loaded');
    
    // Log readiness
    console.log('🚀 Portfolio loaded successfully!');
    console.log('💼 Meyyappan Muthu - Staff Software Engineer');
});

// ==========================================
// Keyboard Navigation Enhancement
// ==========================================
document.addEventListener('keydown', function(e) {
    // Press 'T' to toggle theme
    if (e.key === 't' || e.key === 'T') {
        if (!document.activeElement || document.activeElement.tagName !== 'INPUT' && document.activeElement.tagName !== 'TEXTAREA') {
            themeToggle.click();
        }
    }
});

// ==========================================
// Service Worker Registration (Optional - for PWA)
// ==========================================
if ('serviceWorker' in navigator) {
    // Uncomment to enable service worker for offline capability
    // navigator.serviceWorker.register('/sw.js')
    //     .then(reg => console.log('Service Worker registered', reg))
    //     .catch(err => console.log('Service Worker registration failed', err));
}

// ==========================================
// Performance Monitoring
// ==========================================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`⚡ Page load time: ${pageLoadTime}ms`);
        }, 0);
    });
}

