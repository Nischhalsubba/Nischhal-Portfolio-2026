/* js/components/cursor.js */
export function initCursor() {
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    const waterCards = document.querySelectorAll('.water-card, .btn, .nav-link, .service-tile, .filter-chip');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        waterCards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = mouseX - rect.left;
            const y = mouseY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        if (e.target.closest('a, button, .water-card, input, textarea')) {
            document.body.classList.add('hovering');
        } else {
            document.body.classList.remove('hovering');
        }
    });

    function animateCursor() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        cursorX += distX * 0.15;
        cursorY += distY * 0.15;
        
        if (cursorDot && cursorCircle) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
            cursorCircle.style.left = `${cursorX}px`;
            cursorCircle.style.top = `${cursorY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) animateCursor();
    else {
        if(cursorDot) cursorDot.style.display = 'none';
        if(cursorCircle) cursorCircle.style.display = 'none';
    }
}