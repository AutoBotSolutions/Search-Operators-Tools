// Animation initialization and management
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeScrollReveal();
    initializeParallax();
});

// Initialize all animations
function initializeAnimations() {
    // Add fade-in animations to hero text
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        const fadeElements = heroText.querySelectorAll('h2, p');
        fadeElements.forEach((el, index) => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.classList.add('fade-in');
        });
    }

    // Add stagger animation to tool cards
    const toolCards = document.querySelectorAll('.tool-card');
    toolCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });

    // Add stagger animation to feature items
    const featureItems = document.querySelectorAll('.feature-item');
    featureItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('fade-in');
    });

    // Add stagger animation to doc links
    const docLinks = document.querySelectorAll('.doc-link');
    docLinks.forEach((link, index) => {
        link.style.animationDelay = `${index * 0.1}s`;
        link.classList.add('fade-in');
    });
}

// Scroll reveal animation
function initializeScrollReveal() {
    const revealElements = document.querySelectorAll('.tool-card, .feature-item, .doc-link');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-reveal', 'revealed');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => {
        el.classList.add('scroll-reveal');
        revealObserver.observe(el);
    });
}

// Parallax effect for background
function initializeParallax() {
    const stars = document.querySelector('.stars');
    const gridOverlay = document.querySelector('.grid-overlay');
    
    if (stars && gridOverlay) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            stars.style.transform = `translateY(${scrolled * 0.3}px)`;
            gridOverlay.style.transform = `translateY(${scrolled * 0.1}px)`;
        });
    }
}

// Glitch text effect enhancement
function enhanceGlitchText() {
    const glitchTexts = document.querySelectorAll('.glitch-text');
    
    glitchTexts.forEach(text => {
        text.addEventListener('mouseenter', () => {
            text.classList.add('glitch-enhanced');
        });
        
        text.addEventListener('mouseleave', () => {
            text.classList.remove('glitch-enhanced');
        });
    });
}

// Hologram animation control
function initializeHologram() {
    const hologramContainer = document.querySelector('.hologram-container');
    
    if (hologramContainer) {
        hologramContainer.addEventListener('mouseenter', () => {
            const rings = hologramContainer.querySelectorAll('.hologram-ring');
            rings.forEach(ring => {
                ring.style.animationDuration = '2s';
            });
        });
        
        hologramContainer.addEventListener('mouseleave', () => {
            const rings = hologramContainer.querySelectorAll('.hologram-ring');
            rings.forEach((ring, index) => {
                ring.style.animationDuration = `${8 - index * 2}s`;
            });
        });
    }
}

// Particle effect on click
function createParticleEffect(x, y) {
    const particleCount = 20;
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${x}px`;
        particle.style.top = `${y}px`;
        
        const angle = (Math.PI * 2 * i) / particleCount;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);
        
        container.appendChild(particle);
        
        setTimeout(() => {
            particle.remove();
        }, 1000);
    }
}

// Add particle effect to buttons
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.cta-button, .download-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const rect = button.getBoundingClientRect();
            const x = e.clientX;
            const y = e.clientY;
            createParticleEffect(x, y);
        });
    });
});

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link, a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            if (href.startsWith('#') && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// Header scroll effect
function initializeHeaderScroll() {
    const header = document.querySelector('.main-header');
    
    if (header) {
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            
            if (scrolled > 100) {
                header.style.background = 'rgba(5, 5, 8, 0.98)';
                header.style.padding = '1rem 5%';
            } else {
                header.style.background = 'linear-gradient(180deg, rgba(10, 10, 15, 0.95) 0%, rgba(10, 10, 15, 0.8) 100%)';
                header.style.padding = '2rem 5%';
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', initializeHeaderScroll);

// Card hover effects
function initializeCardEffects() {
    const cards = document.querySelectorAll('.tool-card, .feature-item, .doc-link');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('pulse-glow');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('pulse-glow');
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeCardEffects);

// Typing effect for subtitle (optional)
function typeWriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Matrix rain effect (optional background)
function createMatrixRain() {
    const canvas = document.createElement('canvas');
    canvas.className = 'matrix-rain';
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '-1';
    
    document.body.appendChild(canvas);
    
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const chars = '01';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops = [];
    
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -100;
    }
    
    function draw() {
        ctx.fillStyle = 'rgba(10, 10, 15, 0.05)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00ffff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < drops.length; i++) {
            const text = chars[Math.floor(Math.random() * chars.length)];
            ctx.fillText(text, i * fontSize, drops[i] * fontSize);
            
            if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                drops[i] = 0;
            }
            
            drops[i]++;
        }
    }
    
    setInterval(draw, 50);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

// Uncomment to enable matrix rain effect
// createMatrixRain();

// Energy wave effect on cards
function initializeEnergyWave() {
    const cards = document.querySelectorAll('.tool-card');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const wave = document.createElement('div');
            wave.style.position = 'absolute';
            wave.style.left = `${x}px`;
            wave.style.top = `${y}px`;
            wave.style.pointerEvents = 'none';
            wave.classList.add('energy-wave');
            
            this.style.position = 'relative';
            this.appendChild(wave);
            
            setTimeout(() => {
                wave.remove();
            }, 2000);
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeEnergyWave);

// Loading animation
function showLoading() {
    const loader = document.createElement('div');
    loader.className = 'loading-spinner';
    loader.style.position = 'fixed';
    loader.style.top = '50%';
    loader.style.left = '50%';
    loader.style.transform = 'translate(-50%, -50%)';
    loader.style.zIndex = '10000';
    
    document.body.appendChild(loader);
    
    return loader;
}

function hideLoading(loader) {
    if (loader) {
        loader.remove();
    }
}

// Progress bar animation for sections
function initializeProgressBar() {
    const sections = document.querySelectorAll('section');
    
    const progressObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = document.createElement('div');
                progressBar.className = 'progress-bar';
                progressBar.style.position = 'absolute';
                progressBar.style.top = '0';
                progressBar.style.left = '0';
                progressBar.style.width = '100%';
                progressBar.style.zIndex = '-1';
                
                entry.target.style.position = 'relative';
                entry.target.insertBefore(progressBar, entry.target.firstChild);
            }
        });
    }, {
        threshold: 0.5
    });
    
    sections.forEach(section => {
        progressObserver.observe(section);
    });
}

// Initialize all on load
document.addEventListener('DOMContentLoaded', function() {
    enhanceGlitchText();
    initializeHologram();
    initializeProgressBar();
});
