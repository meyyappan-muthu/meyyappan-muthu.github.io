// ==========================================
// Dynamic Years of Experience Calculator
// ==========================================
function calculateYearsOfExperience() {
    const careerStartDate = new Date('2013-05-01'); // May 2013
    const currentDate = new Date();
    const years = currentDate.getFullYear() - careerStartDate.getFullYear();
    const months = currentDate.getMonth() - careerStartDate.getMonth();
    
    // Calculate total years (adjust if months are negative)
    let totalYears = years;
    if (months < 0) {
        totalYears -= 1;
    }
    
    return `${totalYears}+`;
}

// Update all elements with years of experience
function updateExperienceYears() {
    const yearsText = calculateYearsOfExperience();
    const elements = document.querySelectorAll('.years-experience');
    
    elements.forEach(element => {
        element.textContent = yearsText;
    });
    
    console.log(`✓ Experience updated: ${yearsText} years`);
}

// Run on page load
document.addEventListener('DOMContentLoaded', updateExperienceYears);

// Update footer year
document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('currentYear');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});

// ==========================================
// Font Loading Verification
// ==========================================
if (document.fonts) {
    document.fonts.ready.then(() => {
        console.log('✓ All fonts loaded successfully');
    });
}

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
// Smooth fade-in for hero images only
function handleImageLoad() {
    // Only apply fade-in to hero images
    const heroImages = document.querySelectorAll('.hero-image');
    
    heroImages.forEach(img => {
        // Add fade-in class
        img.classList.add('fade-in');
        
        // If image is already complete (cached), show it immediately
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
        } else {
            // Add load event listener for images not yet loaded
            img.addEventListener('load', function() {
                this.classList.add('loaded');
            });
            
            img.addEventListener('error', function() {
                console.log('Image failed to load:', this.src);
                // Still show with reduced opacity
                this.classList.add('loaded');
                this.style.opacity = '0.5';
            });
        }
    });
    
    // Ensure all other images are visible (no fade-in)
    const allOtherImages = document.querySelectorAll('img:not(.hero-image)');
    allOtherImages.forEach(img => {
        // Make sure they're visible
        img.style.opacity = '1';
        
        // Log if any image fails to load
        img.addEventListener('error', function() {
            console.log('Image failed to load:', this.src);
        });
    });
    
    // Stop shimmer effect on about image when loaded
    const aboutImage = document.querySelector('.about-image');
    const aboutImageContainer = document.querySelector('.about-image-container');
    
    if (aboutImage && aboutImageContainer) {
        if (aboutImage.complete && aboutImage.naturalHeight !== 0) {
            // Image already loaded
            aboutImageContainer.classList.add('loaded');
        } else {
            // Wait for image to load
            aboutImage.addEventListener('load', function() {
                aboutImageContainer.classList.add('loaded');
            });
            
            aboutImage.addEventListener('error', function() {
                // Stop shimmer even on error
                aboutImageContainer.classList.add('loaded');
            });
        }
    }
}

// Run on DOM ready
document.addEventListener('DOMContentLoaded', handleImageLoad);

// Also run immediately for any images that loaded before DOMContentLoaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleImageLoad);
} else {
    handleImageLoad();
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

// ==========================================
// Testimonials Carousel
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    const track = document.getElementById('testimonialsTrack');
    const prevBtn = document.getElementById('testimonialPrev');
    const nextBtn = document.getElementById('testimonialNext');
    const dotsContainer = document.getElementById('testimonialDots');
    
    if (!track || !prevBtn || !nextBtn || !dotsContainer) {
        return;
    }
    
    const cards = track.querySelectorAll('.testimonial-card');
    const dots = dotsContainer.querySelectorAll('.testimonial-dot');
    
    let currentIndex = 0;
    let cardsPerView = getCardsPerView();
    let maxIndex = Math.max(0, cards.length - cardsPerView);
    
    function getCardsPerView() {
        return 1; // One card at a time for all screen sizes
    }
    
    function updateCarousel() {
        if (cards.length === 0) return;
        
        // Get the exact pixel width of the visible container
        const containerWidth = track.parentElement.offsetWidth;
        
        // Set each card to exactly the container width (no CSS percentage ambiguity)
        cards.forEach(card => {
            card.style.width = containerWidth + 'px';
        });
        
        // Slide offset = index * container width (no gap/margin math needed)
        const offset = -(currentIndex * containerWidth);
        track.style.transform = `translateX(${offset}px)`;
        
        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
        
        // Update button states
        prevBtn.classList.toggle('disabled', currentIndex === 0);
        nextBtn.classList.toggle('disabled', currentIndex >= maxIndex);
    }
    
    function goToSlide(index) {
        currentIndex = Math.max(0, Math.min(index, maxIndex));
        updateCarousel();
    }
    
    prevBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex > 0) {
            goToSlide(currentIndex - 1);
        }
    });
    
    nextBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (currentIndex < maxIndex) {
            goToSlide(currentIndex + 1);
        }
    });
    
    // Dot navigation
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function(e) {
            e.preventDefault();
            goToSlide(index);
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'ArrowLeft') {
            prevBtn.click();
        } else if (e.key === 'ArrowRight') {
            nextBtn.click();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            cardsPerView = getCardsPerView();
            maxIndex = Math.max(0, cards.length - cardsPerView);
            currentIndex = Math.min(currentIndex, maxIndex);
            updateCarousel();
        }, 250);
    });
    
    // Initialize with a slight delay to ensure DOM is fully rendered
    setTimeout(() => {
        updateCarousel();
    }, 100);
});

// ==========================================
// Flowing Particles Network Animation
// ==========================================
(function() {
    const canvas = document.getElementById('particleCanvas');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouseX = -1000;
    let mouseY = -1000;
    
    // Configuration
    const config = {
        particleCount: 75,
        particleSize: { min: 1, max: 3 },
        speed: { min: 0.2, max: 0.6 },
        connectionDistance: 120,
        mouseRadius: 200,          // Larger area of effect
        mouseForce: 0.15,          // Stronger push force
        // Theme-specific settings
        dark: {
            particleOpacity: 0.6,
            lineOpacity: 0.2
        },
        light: {
            particleOpacity: 0.7,
            lineOpacity: 0.25        // Increased for light theme visibility
        }
    };
    
    // Get theme colors - Option A: Cyan for dark, Indigo for light
    function getColors() {
        const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            return {
                particle: '34, 211, 238',    // Cyan-400 (#22D3EE)
                line: '96, 165, 250',        // Blue-400 (keeping lines blue)
                particleOpacity: config.dark.particleOpacity,
                lineOpacity: config.dark.lineOpacity
            };
        } else {
            return {
                particle: '79, 70, 229',     // Indigo-600 (#4F46E5)
                line: '99, 102, 241',        // Indigo-500 (lines slightly lighter)
                particleOpacity: config.light.particleOpacity,
                lineOpacity: config.light.lineOpacity
            };
        }
    }
    
    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }
        
        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = config.particleSize.min + Math.random() * (config.particleSize.max - config.particleSize.min);
            // Store base speed so particle returns to gentle drift
            this.baseSpeedX = (Math.random() - 0.5) * config.speed.max;
            this.baseSpeedY = (Math.random() - 0.5) * config.speed.max;
            this.speedX = this.baseSpeedX;
            this.speedY = this.baseSpeedY;
            this.opacity = 0.3 + Math.random() * 0.4;
        }
        
        update() {
            // Gentle floating movement
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Soft boundary - push particles back when near edges
            const margin = 50;
            const pushBack = 0.5;
            
            if (this.x < margin) {
                this.speedX += pushBack;
            } else if (this.x > canvas.width - margin) {
                this.speedX -= pushBack;
            }
            
            if (this.y < margin) {
                this.speedY += pushBack;
            } else if (this.y > canvas.height - margin) {
                this.speedY -= pushBack;
            }
            
            // Hard boundary - keep particles on screen
            this.x = Math.max(5, Math.min(canvas.width - 5, this.x));
            this.y = Math.max(5, Math.min(canvas.height - 5, this.y));
            
            // Strong mouse interaction - particles push away dramatically
            const dx = this.x - mouseX;
            const dy = this.y - mouseY;
            const dist = Math.sqrt(dx * dx + dy * dy);
            
            if (dist < config.mouseRadius && dist > 0) {
                // Exponential force - stronger when closer
                const force = Math.pow((config.mouseRadius - dist) / config.mouseRadius, 2) * config.mouseForce;
                const pushX = (dx / dist) * force * 50;
                const pushY = (dy / dist) * force * 50;
                
                this.x += pushX;
                this.y += pushY;
                
                // Add some velocity for momentum effect (reduced)
                this.speedX += pushX * 0.05;
                this.speedY += pushY * 0.05;
            }
            
            // Gradually return to original gentle drift speed
            this.speedX += (this.baseSpeedX - this.speedX) * 0.02;
            this.speedY += (this.baseSpeedY - this.speedY) * 0.02;
            
            // Clamp speed to prevent runaway
            const maxSpeed = config.speed.max * 2;
            this.speedX = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedX));
            this.speedY = Math.max(-maxSpeed, Math.min(maxSpeed, this.speedY));
        }
        
        draw(colors) {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${colors.particle}, ${this.opacity * colors.particleOpacity})`;
            ctx.fill();
            
            // Add subtle glow effect for contrast particles
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size * 2, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${colors.particle}, ${this.opacity * colors.particleOpacity * 0.2})`;
            ctx.fill();
        }
    }
    
    // Draw connections between nearby particles
    function drawConnections(colors) {
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < config.connectionDistance) {
                    let opacity = (1 - dist / config.connectionDistance) * colors.lineOpacity;
                    let lineWidth = 0.5;
                    
                    // Brighten connections near mouse
                    const midX = (particles[i].x + particles[j].x) / 2;
                    const midY = (particles[i].y + particles[j].y) / 2;
                    const mouseDist = Math.sqrt(Math.pow(midX - mouseX, 2) + Math.pow(midY - mouseY, 2));
                    
                    if (mouseDist < config.mouseRadius) {
                        const boost = 1 + (1 - mouseDist / config.mouseRadius) * 2;
                        opacity *= boost;
                        lineWidth = 0.5 + (1 - mouseDist / config.mouseRadius) * 1;
                    }
                    
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.strokeStyle = `rgba(${colors.line}, ${Math.min(opacity, 0.8)})`;
                    ctx.lineWidth = lineWidth;
                    ctx.stroke();
                }
            }
        }
    }
    
    // Initialize particles
    function initParticles() {
        particles = [];
        const count = Math.min(config.particleCount, Math.floor((canvas.width * canvas.height) / 15000));
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    
    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const colors = getColors();
        
        // Update and draw particles
        particles.forEach(p => {
            p.update();
            p.draw(colors);
        });
        
        // Draw connections
        drawConnections(colors);
        
        animationId = requestAnimationFrame(animate);
    }
    
    // Resize handler
    function resize() {
        const hero = canvas.parentElement;
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
        initParticles();
    }
    
    // Mouse tracking
    function handleMouseMove(e) {
        const rect = canvas.getBoundingClientRect();
        mouseX = e.clientX - rect.left;
        mouseY = e.clientY - rect.top;
    }
    
    function handleMouseLeave() {
        mouseX = -1000;
        mouseY = -1000;
    }
    
    // Touch support for mobile
    function handleTouchStart(e) {
        if (e.touches.length > 0) {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.touches[0].clientX - rect.left;
            mouseY = e.touches[0].clientY - rect.top;
        }
    }
    
    function handleTouchMove(e) {
        if (e.touches.length > 0) {
            const rect = canvas.getBoundingClientRect();
            mouseX = e.touches[0].clientX - rect.left;
            mouseY = e.touches[0].clientY - rect.top;
        }
    }
    
    function handleTouchEnd() {
        // Keep the last touch position for a moment, then fade out
        setTimeout(() => {
            mouseX = -1000;
            mouseY = -1000;
        }, 300);
    }
    
    // Initialize
    function init() {
        resize();
        animate();
        
        // Mouse interaction (desktop)
        canvas.parentElement.addEventListener('mousemove', handleMouseMove);
        canvas.parentElement.addEventListener('mouseleave', handleMouseLeave);
        
        // Touch interaction (mobile)
        canvas.parentElement.addEventListener('touchstart', handleTouchStart, { passive: true });
        canvas.parentElement.addEventListener('touchmove', handleTouchMove, { passive: true });
        canvas.parentElement.addEventListener('touchend', handleTouchEnd, { passive: true });
    }
    
    // Event listeners
    window.addEventListener('resize', debounce(resize, 200));
    
    // Start when DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        setTimeout(init, 50);
    }
    
    // Cleanup
    window.addEventListener('beforeunload', () => {
        if (animationId) cancelAnimationFrame(animationId);
    });
    
    console.log('✓ Gradient + Particles background initialized');
})();
