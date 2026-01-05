/* js/main.js */
import { initTheme } from './components/theme.js';
import { initCursor } from './components/cursor.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCursor();
    
    // Mobile Menu
    const menuBtn = document.querySelector('.mobile-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    if(menuBtn) {
        menuBtn.addEventListener('click', () => mobileMenu.classList.add('active'));
        if(closeMenu) closeMenu.addEventListener('click', () => mobileMenu.classList.remove('active'));
    }
    
    // Copy Email
    const copyBtn = document.getElementById('copyEmail');
    if(copyBtn) {
        copyBtn.addEventListener('click', () => {
            navigator.clipboard.writeText("nischhal@example.com");
            const originalText = copyBtn.textContent;
            copyBtn.textContent = "Copied!";
            setTimeout(() => copyBtn.textContent = originalText, 1500);
        });
    }

    // Work Filter & Search logic
    const filters = document.querySelectorAll('.filter-chip');
    const searchInput = document.getElementById('searchInput');
    const projects = document.querySelectorAll('.project-card');
    
    let activeFilter = 'all';
    let searchTerm = '';

    function filterProjects() {
        projects.forEach(proj => {
            if(!proj.dataset.category) return;
            const categories = proj.dataset.category.split(' ');
            const title = proj.querySelector('h3') ? proj.querySelector('h3').textContent.toLowerCase() : '';
            const desc = proj.querySelector('p') ? proj.querySelector('p').textContent.toLowerCase() : '';
            const textContent = title + ' ' + desc;

            const matchesCategory = activeFilter === 'all' || categories.includes(activeFilter);
            const matchesSearch = textContent.includes(searchTerm);

            if (matchesCategory && matchesSearch) {
                proj.classList.remove('hidden');
            } else {
                proj.classList.add('hidden');
            }
        });
        if(window.ScrollTrigger) ScrollTrigger.refresh();
    }

    if(filters.length) {
        filters.forEach(filter => {
            filter.addEventListener('click', () => {
                filters.forEach(f => f.classList.remove('active'));
                filter.classList.add('active');
                activeFilter = filter.dataset.filter;
                filterProjects();
            });
        });
    }

    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchTerm = e.target.value.toLowerCase();
            filterProjects();
        });
    }
    
    // Modal
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modalOverlay = document.querySelector('.modal-overlay');
    const modalClose = document.querySelector('.close-modal');
    
    if(modalOverlay && modalTriggers.length) {
        modalTriggers.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                modalOverlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        });
        
        const closeModalFunc = () => {
            modalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        };

        if(modalClose) modalClose.addEventListener('click', closeModalFunc);
        modalOverlay.addEventListener('click', (e) => {
            if(e.target === modalOverlay) closeModalFunc();
        });
    }
});