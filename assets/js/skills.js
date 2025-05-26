/**
 * Skills JavaScript file
 */
document.addEventListener('DOMContentLoaded', function() {
    initSkills();
    setupProjectFilter();
});

/**
 * Initialize skills section functionality
 */
function initSkills() {
    // Get all skill items
    const skillItems = document.querySelectorAll('.skill-item');
    
    // Set up animation triggers
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target.querySelector('.skill-progress');
                const percentage = entry.target.getAttribute('data-percentage');
                
                // Set the progress bar width based on percentage
                progressBar.style.setProperty('--percent', `${percentage}%`);
                
                // Add animation class
                progressBar.classList.add('animate');
            }
        });
    }, { threshold: 0.1 });
    
    // Observe each skill item
    skillItems.forEach(item => {
        observer.observe(item);
    });
}

/**
 * Set up project filtering
 */
function setupProjectFilter() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterBtns.length || !projectCards.length) return;
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.getAttribute('data-filter');
            
            // Filter projects
            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                // Show all or filter by category
                if (filter === 'all' || filter === category) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.classList.add('show');
                    }, 10);
                } else {
                    card.classList.remove('show');
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Show all projects by default
    projectCards.forEach(card => {
        card.classList.add('show');
    });
}