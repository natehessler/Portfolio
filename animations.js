// Scroll-triggered animations using Intersection Observer
class ScrollAnimations {
    constructor() {
        this.observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };
        
        this.init();
    }
    
    init() {
        // Add animation classes to elements
        this.addAnimationClasses();
        
        // Create observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, this.observerOptions);
        
        // Observe all elements with animation classes
        document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right, .scale-in').forEach(el => {
            observer.observe(el);
        });
    }
    
    addAnimationClasses() {
        // Add fade-in-up to sections
        document.querySelectorAll('section').forEach((section, index) => {
            if (!section.classList.contains('no-animate')) {
                section.classList.add('fade-in-up');
                section.style.animationDelay = `${index * 0.1}s`;
            }
        });
        
        // Add scale-in to cards
        document.querySelectorAll('.project-card, .experience-item, .skill-category').forEach((card, index) => {
            card.classList.add('scale-in');
            card.style.animationDelay = `${index * 0.05}s`;
        });
        
        // Add fade-in-left to profile sections
        document.querySelectorAll('.profile-section').forEach(el => {
            el.classList.add('fade-in-left');
        });
        
        // Add skill item animations
        document.querySelectorAll('.skill-item').forEach((item, index) => {
            item.classList.add('scale-in');
            item.style.animationDelay = `${index * 0.02}s`;
        });
    }
}

// Custom cursor effect
class CustomCursor {
    constructor() {
        this.cursor = document.createElement('div');
        this.cursorFollower = document.createElement('div');
        this.init();
    }
    
    init() {
        this.cursor.className = 'custom-cursor';
        this.cursorFollower.className = 'custom-cursor-follower';
        document.body.appendChild(this.cursor);
        document.body.appendChild(this.cursorFollower);
        
        let mouseX = 0, mouseY = 0;
        let followerX = 0, followerY = 0;
        
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            this.cursor.style.left = mouseX + 'px';
            this.cursor.style.top = mouseY + 'px';
        });
        
        // Smooth follower animation
        const animateFollower = () => {
            followerX += (mouseX - followerX) * 0.1;
            followerY += (mouseY - followerY) * 0.1;
            
            this.cursorFollower.style.left = followerX + 'px';
            this.cursorFollower.style.top = followerY + 'px';
            
            requestAnimationFrame(animateFollower);
        };
        animateFollower();
        
        // Add hover effect for links and buttons
        document.querySelectorAll('a, button').forEach(el => {
            el.addEventListener('mouseenter', () => {
                this.cursor.classList.add('cursor-hover');
                this.cursorFollower.classList.add('cursor-hover');
            });
            el.addEventListener('mouseleave', () => {
                this.cursor.classList.remove('cursor-hover');
                this.cursorFollower.classList.remove('cursor-hover');
            });
        });
    }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new ScrollAnimations();
    
    // Only enable custom cursor on desktop
    if (window.innerWidth > 768) {
        new CustomCursor();
    }
});
