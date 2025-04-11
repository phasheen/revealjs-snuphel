// // Force HTTPS redirect script, no necessary if we publish it to claudeflare
// if (window.location.protocol !== 'https:' && 
//     window.location.hostname !== 'localhost' && 
//     !window.location.hostname.startsWith('127.0.0.') && 
//     !window.location.hostname.startsWith('192.168.')) {
//     window.location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
// }

// Presenter information variables
const presenterName = "Xianghui Xin";
const presenterDepartment = "Biosystems Engineering";
const presenterUniversity = "Seoul National University";
const presenterEmail = "phasheen@snu.ac.kr";
const sessionName = "Tutorials on Reveal.js SNUPHEL template";

// Automatically get and format the current date
const currentDate = new Date();
const presentationDate = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});

// Update presenter info on page load
document.addEventListener('DOMContentLoaded', function() {
    // Update all presenter name instances
    document.querySelectorAll('.presenter-name').forEach(el => {
        el.textContent = presenterName;
    });
    
    // Update all department instances
    document.querySelectorAll('.presenter-dept').forEach(el => {
        el.textContent = presenterDepartment;
    });
    
    // Update all university instances
    document.querySelectorAll('.presenter-univ').forEach(el => {
        el.textContent = presenterUniversity;
    });
    
    // Update all email instances
    document.querySelectorAll('.presenter-email').forEach(el => {
        el.textContent = presenterEmail;
    });
    
    // Update session name
    document.querySelectorAll('.session-name').forEach(el => {
        el.textContent = sessionName;
    });
    
    // Update date
    document.querySelectorAll('.presentation-date').forEach(el => {
        el.textContent = presentationDate;
    });
    
    // Add SVG background to first and last slides
    const firstSlide = document.querySelector('.slides > section:first-child');
    const lastSlide = document.querySelector('.slides > section:last-child');
    
    // if (firstSlide) {
    //     const bgDiv = document.createElement('div');
    //     bgDiv.className = 'first-last-slide-background';
    //     firstSlide.appendChild(bgDiv);
    // }
    
    if (lastSlide) {
        const bgDiv = document.createElement('div');
        bgDiv.className = 'first-last-slide-background';
        lastSlide.appendChild(bgDiv);
    }
    
    // Add logo to all slides except first and last
    // Clear approach: only add to actual content slides
    document.querySelectorAll('.slides section').forEach(function(slide) {
        // Skip the first and last slides
        if (slide === document.querySelector('.slides > section:first-child') || 
            slide === document.querySelector('.slides > section:last-child')) {
            return;
        }
        
        // Skip parent containers of vertical slides - only add to actual content slides
        if (slide.tagName === 'SECTION' && slide.parentNode.tagName === 'SECTION') {
            // This is an actual content slide in a vertical stack
            if (!slide.querySelector('.logo')) {
                const logo = document.createElement('img');
                logo.src = "resources/logo/snuphel-logo-sans-serif-bold-italic.svg";
                logo.className = "logo";
                slide.appendChild(logo);
            }
        } else if (!slide.querySelector('section')) {
            // This is a horizontal slide without nested sections
            if (!slide.querySelector('.logo')) {
                const logo = document.createElement('img');
                logo.src = "resources/logo/snuphel-logo-sans-serif-bold-italic.svg";
                logo.className = "logo";
                slide.appendChild(logo);
            }
        }
    });
});

// Initialize RevealJS after all scripts are loaded
window.addEventListener('load', function() {
    // Initialize Reveal.js with simplified configuration
    Reveal.initialize({
        hash: true,
        slideNumber: true,
        progress: true,
        transition: 'slide',
        width: 1400,
        height: 800,
        margin: 0.05,
        minScale: 0.2,
        maxScale: 1.5,
        center: false,
        
        // Auto-animate fragments
        autoPlayMedia: true,
        autoAnimateDuration: 1.0,
        autoAnimateEasing: 'ease-in-out',
        
        // Auto-play fragments when slide appears
        fragmentInURL: true,
        autoPlayFragments: true,
        fragmentAutoSlide: true,
        fragmentAutoSlideDelay: 500,
        
        // Basic zoom settings
        zoom: {
            pan: true,
            scale: true,
            activate: 'alt+click',
            maxScale: 5,
            minScale: 0.5
        },
        
        // Control options
        controls: true,	
        // Learn about plugins: https://revealjs.com/plugins/
        plugins: [RevealZoom, RevealNotes, RevealMarkdown, RevealHighlight, RevealMath.KaTeX ]
    });
    
    // Add event to automatically transition fragments
    Reveal.addEventListener('slidechanged', function(event) {
        // Get all fragments on the current slide
        const fragments = event.currentSlide.querySelectorAll('.fragment');
        if (fragments.length > 0) {
            // Set a timeout to start showing fragments
            setTimeout(function() {
                // Show each fragment in sequence with delays
                fragments.forEach((fragment, index) => {
                    setTimeout(function() {
                        fragment.classList.add('visible');
                    }, 500 * (index + 1));
                });
            }, 500); // Wait 0.5 second before starting animation
        }
    });

    // Image comparison slider functionality
    const container = document.querySelector('#image-comparison');
    if (container) {
        const slider = container.querySelector('.slider');
        
        // Handle normal input changes
        slider.addEventListener('input', (e) => {
            container.style.setProperty('--position', `${e.target.value}%`);
        });
        
        // Initialize slider position
        container.style.setProperty('--position', '50%');
        
        // Special handling for reveal.js slides
        Reveal.addEventListener('slidechanged', function(event) {
            // Check if our comparison slide is active
            if (event.currentSlide.contains(container)) {
                // Reset slider position when the slide becomes active
                container.style.setProperty('--position', '50%');
            }
        });
    }
}); 