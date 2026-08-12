/* assets/animations.js */
document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    // 1. HERO SCROLL ANIMATION (Zoom + Darken)
    // The background image pins and zooms.
    // The overlay fades from opacity 0 to 1 as we scroll past the hero.
    const heroTl = gsap.timeline({
        scrollTrigger: {
            trigger: ".home-hero-wrap",
            start: "top top",
            end: "bottom top",
            scrub: true,
            pin: false // We don't pin the container, we let the fixed bg work
        }
    });

    heroTl.to(".home__hero-bg img", { scale: 1.2, ease: "none" }, 0)
          .to(".home__hero-overlay", { opacity: 1, ease: "none" }, 0) // Fade to solid black
          .to(".home__hero-main", { y: -100, opacity: 0, ease: "none" }, 0);

    // 2. BLUR TEXT REVEAL (Intro)
    const textElement = document.querySelector('.blur-reveal-text');
    if(textElement) {
        const textContent = textElement.textContent.trim();
        textElement.innerHTML = '';
        const words = textContent.split(/\s+/);
        words.forEach(word => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.classList.add('blur-word');
            textElement.appendChild(span);
        });

        gsap.to('.blur-word', {
            scrollTrigger: {
                trigger: '.home__intro-main',
                start: 'top 80%',
                end: 'bottom 40%',
                scrub: 1
            },
            filter: 'blur(0px)',
            opacity: 1,
            stagger: 0.05,
            duration: 1
        });
    }

    // 3. MARQUEE SCROLL (Directional + Scrub)
    const marqueeRows = document.querySelectorAll('.home__intro-service-marquee-wrap');
    marqueeRows.forEach((row, i) => {
        const dir = i % 2 === 0 ? -1 : 1; // Alternating direction
        gsap.to(row, {
            xPercent: 15 * dir,
            scrollTrigger: {
                trigger: ".home__intro-service",
                start: "top bottom",
                end: "bottom top",
                scrub: 0.5
            }
        });
    });

    // 4. PINNED PROJECT GALLERY (Sticky Logic - Desktop Only)
    // We use matchMedia to only enable pinning on large screens
    ScrollTrigger.matchMedia({
        // Desktop
        "(min-width: 993px)": function() {
            const projectSection = document.querySelector('.home__project-main');
            const projectImages = document.querySelectorAll('.project-img-item');
            const projectTitle = document.querySelector('.p-title');
            const projectYear = document.querySelector('.p-year');
            const projectRole = document.querySelector('.p-role');
            const projectDesc = document.querySelector('.p-desc');
            const indexTxt = document.querySelector('.current-index');

            const projectData = [
                { title: "BitMEX", year: "2023", role: "Head of Design & Brand", desc: "BitMEX is one of they key leader in centralized exchange, founded in 2014. As head of Design, I helped reposition their brand strategy." },
                { title: "Defichain", year: "2024", role: "Lead Product Designer", desc: "DefiScan is an ERC-20 explorer solution for DefiMetachain the ethereum blockchain solution for Defichain." },
                { title: "GoTyme", year: "2023", role: "Lead Product Designer", desc: "One of the fastest digital bank in SEA and Africa, Tyme Bank is an ambitious young bank." }
            ];

            if (projectSection) {
                ScrollTrigger.create({
                    trigger: ".home__project-main",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                    onUpdate: (self) => {
                        const progress = self.progress;
                        let activeIndex = 0;
                        
                        if (progress < 0.33) activeIndex = 0;
                        else if (progress < 0.66) activeIndex = 1;
                        else activeIndex = 2;

                        // Update Images
                        projectImages.forEach((img, i) => {
                            if (i === activeIndex) img.classList.add('active');
                            else img.classList.remove('active');
                        });

                        // Update Text
                        if (projectTitle.innerText !== projectData[activeIndex].title) {
                            projectTitle.innerText = projectData[activeIndex].title;
                            projectYear.innerText = projectData[activeIndex].year;
                            projectRole.innerText = projectData[activeIndex].role;
                            projectDesc.innerText = projectData[activeIndex].desc;
                            indexTxt.innerText = `0${activeIndex + 1}`;
                        }
                    }
                });
            }
        },
        // Mobile/Tablet
        "(max-width: 992px)": function() {
            // Kill any sticky triggers if they exist from a resize
            // On mobile, we might just want simple fade-in on scroll
            gsap.utils.toArray('.project-img-item').forEach((img, i) => {
                // Ensure all images are visible on mobile (or handled via CSS)
                // For this implementation, CSS handles the stacking, JS does nothing complex here
            });
        }
    });

    // 5. FOOTER PARALLAX
    gsap.from(".footer__marquee", {
        xPercent: -10,
        scrollTrigger: { trigger: ".footer-gradient", start: "top bottom", end: "bottom top", scrub: 1 }
    });
    
    // 6. CURSOR LOGIC
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    let mouseX = 0, mouseY = 0;

    window.addEventListener('mousemove', e => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        gsap.to(cursorDot, { x: mouseX, y: mouseY, duration: 0.1 });
        gsap.to(cursorCircle, { x: mouseX, y: mouseY, duration: 0.5 });
    });
});
