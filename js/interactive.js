// Interactive elements and user interactions
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeToolCards();
    initializeSearchFunctionality();
    initializeThemeToggle();
    initializeSmoothScroll();
    initializeMobileMenu();
    initializeCopyToClipboard();
    initializeLazyLoading();
});

// Navigation functionality
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Update active nav link on scroll
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Tool card interactions
function initializeToolCards() {
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        // 3D tilt effect
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
        });
        
        // Click ripple effect
        card.addEventListener('click', function(e) {
            const ripple = document.createElement('div');
            ripple.style.position = 'absolute';
            ripple.style.width = '20px';
            ripple.style.height = '20px';
            ripple.style.background = 'rgba(0, 255, 255, 0.3)';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'scale(0)';
            ripple.style.animation = 'rippleEffect 0.6s ease-out';
            ripple.style.pointerEvents = 'none';
            
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            ripple.style.left = `${x - 10}px`;
            ripple.style.top = `${y - 10}px`;
            
            card.style.position = 'relative';
            card.style.overflow = 'hidden';
            card.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
    
    // Add ripple animation keyframes
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(20);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Search functionality
function initializeSearchFunctionality() {
    // Add search bar if needed
    const searchInput = document.querySelector('#search-input');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            const cards = document.querySelectorAll('.tool-card, .doc-link');
            
            cards.forEach(card => {
                const text = card.textContent.toLowerCase();
                if (text.includes(query)) {
                    card.style.display = '';
                    card.classList.add('fade-in');
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
}

// Theme toggle (for future enhancement)
function initializeThemeToggle() {
    // Placeholder for theme toggle functionality
    // Can be expanded to include light/dark mode or different color themes
}

// Smooth scroll enhancement
function initializeSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu
function initializeMobileMenu() {
    const header = document.querySelector('.main-header');
    
    // Create mobile menu button if screen is small
    if (window.innerWidth <= 768) {
        const menuButton = document.createElement('button');
        menuButton.className = 'mobile-menu-button';
        menuButton.innerHTML = '☰';
        menuButton.style.cssText = `
            display: none;
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 1001;
            background: rgba(0, 255, 255, 0.1);
            border: 1px solid var(--primary-color);
            color: var(--primary-color);
            padding: 10px 15px;
            font-size: 1.5rem;
            cursor: pointer;
            border-radius: 5px;
        `;
        
        header.appendChild(menuButton);
        
        const nav = document.querySelector('.main-nav');
        nav.style.cssText = `
            display: none;
            position: fixed;
            top: 70px;
            right: 20px;
            background: rgba(10, 10, 15, 0.98);
            border: 1px solid var(--primary-color);
            border-radius: 10px;
            padding: 20px;
            flex-direction: column;
            z-index: 1000;
        `;
        
        menuButton.style.display = 'block';
        
        menuButton.addEventListener('click', () => {
            nav.style.display = nav.style.display === 'none' ? 'flex' : 'none';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!nav.contains(e.target) && !menuButton.contains(e.target)) {
                nav.style.display = 'none';
            }
        });
    }
}

// Copy to clipboard functionality
function initializeCopyToClipboard() {
    const copyButtons = document.querySelectorAll('.copy-button');
    
    copyButtons.forEach(button => {
        button.addEventListener('click', async () => {
            const textToCopy = button.getAttribute('data-copy');
            
            try {
                await navigator.clipboard.writeText(textToCopy);
                
                // Show feedback
                const originalText = button.textContent;
                button.textContent = 'Copied!';
                button.style.background = 'rgba(0, 255, 0, 0.2)';
                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                }, 2000);
            } catch (err) {
                console.error('Failed to copy:', err);
            }
        });
    });
}

// Lazy loading for images
function initializeLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Tooltip functionality
function initializeTooltips() {
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', (e) => {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = element.getAttribute('data-tooltip');
            tooltip.style.cssText = `
                position: absolute;
                background: rgba(10, 10, 15, 0.95);
                border: 1px solid var(--primary-color);
                color: var(--text-primary);
                padding: 8px 12px;
                border-radius: 5px;
                font-size: 0.85rem;
                z-index: 10000;
                pointer-events: none;
                white-space: nowrap;
            `;
            
            const rect = element.getBoundingClientRect();
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.top = `${rect.top - 40}px`;
            tooltip.style.transform = 'translateX(-50%)';
            
            document.body.appendChild(tooltip);
            
            element.addEventListener('mouseleave', () => {
                tooltip.remove();
            }, { once: true });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeTooltips);

// Modal functionality
function initializeModals() {
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');
    
    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const modalId = trigger.getAttribute('data-modal');
            const modal = document.getElementById(modalId);
            
            if (modal) {
                modal.style.display = 'flex';
                document.body.style.overflow = 'hidden';
            }
        });
    });
    
    modals.forEach(modal => {
        const closeButtons = modal.querySelectorAll('.modal-close');
        
        closeButtons.forEach(button => {
            button.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeModals);

// Accordion functionality
function initializeAccordions() {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(accordion => {
        const header = accordion.querySelector('.accordion-header');
        const content = accordion.querySelector('.accordion-content');
        
        header.addEventListener('click', () => {
            const isOpen = content.style.maxHeight;
            
            // Close all other accordions
            accordions.forEach(other => {
                const otherContent = other.querySelector('.accordion-content');
                otherContent.style.maxHeight = null;
                other.classList.remove('active');
            });
            
            // Toggle current accordion
            if (!isOpen) {
                content.style.maxHeight = content.scrollHeight + 'px';
                accordion.classList.add('active');
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeAccordions);

// Tab functionality
function initializeTabs() {
    const tabContainers = document.querySelectorAll('.tab-container');
    
    tabContainers.forEach(container => {
        const tabs = container.querySelectorAll('.tab');
        const contents = container.querySelectorAll('.tab-content');
        
        tabs.forEach((tab, index) => {
            tab.addEventListener('click', () => {
                // Remove active class from all tabs and contents
                tabs.forEach(t => t.classList.remove('active'));
                contents.forEach(c => c.classList.remove('active'));
                
                // Add active class to clicked tab and corresponding content
                tab.classList.add('active');
                contents[index].classList.add('active');
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeTabs);

// Form validation
function initializeFormValidation() {
    const forms = document.querySelectorAll('form[data-validate]');
    
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            let isValid = true;
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('error');
                    
                    const error = document.createElement('span');
                    error.className = 'error-message';
                    error.textContent = 'This field is required';
                    error.style.cssText = `
                        color: var(--secondary-color);
                        font-size: 0.85rem;
                        margin-top: 5px;
                    `;
                    
                    input.parentNode.appendChild(error);
                } else {
                    input.classList.remove('error');
                    const errorMessage = input.parentNode.querySelector('.error-message');
                    if (errorMessage) errorMessage.remove();
                }
            });
            
            if (isValid) {
                form.submit();
            }
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeFormValidation);

// Keyboard navigation
function initializeKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Escape key to close modals
        if (e.key === 'Escape') {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
        
        // Arrow keys for navigation
        if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
            const focusedElement = document.activeElement;
            const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
            const currentIndex = Array.from(focusableElements).indexOf(focusedElement);
            
            if (currentIndex !== -1) {
                e.preventDefault();
                const nextIndex = e.key === 'ArrowDown' 
                    ? (currentIndex + 1) % focusableElements.length
                    : (currentIndex - 1 + focusableElements.length) % focusableElements.length;
                
                focusableElements[nextIndex].focus();
            }
        }
    });
}

document.addEventListener('DOMContentLoaded', initializeKeyboardNavigation);

// Performance monitoring
function initializePerformanceMonitoring() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            const perfData = performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            const connectTime = perfData.responseEnd - perfData.requestStart;
            const renderTime = perfData.domComplete - perfData.domLoading;
            
            console.log('Performance Metrics:');
            console.log(`Page Load Time: ${pageLoadTime}ms`);
            console.log(`Connection Time: ${connectTime}ms`);
            console.log(`Render Time: ${renderTime}ms`);
        });
    }
}

document.addEventListener('DOMContentLoaded', initializePerformanceMonitoring);

// Error handling
function initializeErrorHandling() {
    window.addEventListener('error', (e) => {
        console.error('Error occurred:', e.error);
    });
    
    window.addEventListener('unhandledrejection', (e) => {
        console.error('Unhandled promise rejection:', e.reason);
    });
}

document.addEventListener('DOMContentLoaded', initializeErrorHandling);

// Accessibility improvements
function initializeAccessibility() {
    // Add ARIA labels where needed
    const buttons = document.querySelectorAll('button:not([aria-label])');
    buttons.forEach(button => {
        if (!button.textContent.trim()) {
            button.setAttribute('aria-label', 'Button');
        }
    });
    
    // Ensure all images have alt text
    const images = document.querySelectorAll('img:not([alt])');
    images.forEach(img => {
        img.setAttribute('alt', 'Image');
    });
    
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');
    focusableElements.forEach(el => {
        el.addEventListener('focus', () => {
            el.style.outline = '2px solid var(--primary-color)';
            el.style.outlineOffset = '2px';
        });
        
        el.addEventListener('blur', () => {
            el.style.outline = '';
            el.style.outlineOffset = '';
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeAccessibility);

// Console welcome message
console.log('%c🚀 Search Operator Tools', 'color: #00ffff; font-size: 20px; font-weight: bold;');
console.log('%cAdvanced Search Interfaces for the Digital Age', 'color: #ff00ff; font-size: 14px;');
console.log('%cBuilt with ❤️ using PyQt5 and modern web technologies', 'color: #00ff00; font-size: 12px;');
