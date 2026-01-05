/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. WATER-LIKE CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        // Add hover class to body
        if (e.target.closest('a, button, .project-row, input')) {
            document.body.classList.add('hovering');
        } else {
            document.body.classList.remove('hovering');
        }
    });

    function animateCursor() {
        // Linear interpolation for "water/lag" effect
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        
        cursorX += distX * 0.1; // 0.1 is the lag factor (lower = slower)
        cursorY += distY * 0.1;
        
        if (cursorDot && cursorCircle) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
            
            cursorCircle.style.left = `${cursorX}px`;
            cursorCircle.style.top = `${cursorY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    
    // Only animate on desktop/non-reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (!prefersReducedMotion && !isTouch) {
        animateCursor();
    } else {
        if(cursorDot) cursorDot.style.display = 'none';
        if(cursorCircle) cursorCircle.style.display = 'none';
    }

    // --- 2. MOBILE MENU ---
    // (Preserved from previous logic)
    const mobileToggle = document.querySelector('.mobile-toggle'); // You need to add this to HTML if missing
    // ... logic for mobile menu if implemented in HTML
});