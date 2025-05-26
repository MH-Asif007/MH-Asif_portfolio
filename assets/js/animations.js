/**
 * Animations JavaScript file
 */
document.addEventListener('DOMContentLoaded', function() {
    initAnimations();
});

/**
 * Initialize animations
 */
function initAnimations() {
    // Animate skill bars when in viewport
    const skillSection = document.getElementById('skills');
    
    if (skillSection) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const skillBars = skillSection.querySelectorAll('.skill-progress');
                    skillBars.forEach(bar => {
                        bar.classList.add('animate');
                    });
                    // Unobserve once animated
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(skillSection);
    }
    
    // Add reveal animations to all sections
    const revealElements = document.querySelectorAll('.reveal');
    
    if (revealElements.length) {
        const revealObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });
        
        revealElements.forEach(element => {
            revealObserver.observe(element);
        });
    }
    
    // Stagger animation for timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (timelineItems.length) {
        const timelineObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Add staggered delay based on index
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 200);
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });
        
        timelineItems.forEach(item => {
            item.classList.add('reveal');
            timelineObserver.observe(item);
        });
    }
    
    // Project card hover effects
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('hovered');
        });
        
        card.addEventListener('mouseleave', function() {
            this.classList.remove('hovered');
        });
    });
}