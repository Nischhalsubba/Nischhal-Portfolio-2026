/* js/main.js */
document.addEventListener('DOMContentLoaded', () => {
    // --- 0. SIGNAL OVER NOISE ---
    const signalAnchor = document.querySelector('.home__intro-service');
    if (signalAnchor && !document.querySelector('[data-signal-system]')) {
        const refreshSignalLayout = () => {
            window.requestAnimationFrame(() => window.ScrollTrigger?.refresh());
        };

        let signalStyle = document.querySelector('link[data-signal-style]');
        if (!signalStyle) {
            signalStyle = document.createElement('link');
            signalStyle.rel = 'stylesheet';
            signalStyle.href = 'assets/signal.css';
            signalStyle.dataset.signalStyle = 'true';
            signalStyle.addEventListener('load', refreshSignalLayout, { once: true });
            document.head.appendChild(signalStyle);
        }

        signalAnchor.insertAdjacentHTML('afterend', `
            <section class="signal-system" id="signal-system" data-signal-system aria-labelledby="signal-system-title">
                <div class="container grid signal-system__intro">
                    <span class="signal-system__label">(How I think)</span>
                    <h2 class="heading upper fw-bold" id="signal-system-title">Signal over noise</h2>
                    <p>Good product design is usually the same job: find the logic, expose the important state, and make the next decision easier.</p>
                </div>
                <div class="container">
                    <div class="signal-stage" aria-describedby="signal-system-description">
                        <p class="sr-only" id="signal-system-description">An interactive portrait diagram showing Intent, Product Logic, Important State, and Decision orbiting a central Signal representing useful user truth.</p>
                        <div class="signal-grid-layer" aria-hidden="true"></div>
                        <div class="signal-reasoning" aria-hidden="true"></div>
                        <div class="signal-portrait" role="img" aria-label="Portrait of Nischhal Raj Subba integrated into a product-thinking diagram"></div>
                        <svg class="signal-orbits" viewBox="0 0 100 100" aria-hidden="true">
                            <ellipse class="signal-orbit signal-orbit--main" pathLength="1" cx="60" cy="43" rx="35" ry="29" transform="rotate(-9 60 43)"></ellipse>
                            <ellipse class="signal-orbit" pathLength="1" cx="56" cy="47" rx="31" ry="34" transform="rotate(31 56 47)"></ellipse>
                            <line class="signal-connector" pathLength="1" x1="13" y1="52" x2="13" y2="52"></line>
                            <circle class="signal-halo" cx="13" cy="52" r="2.5"></circle>
                        </svg>
                        <div class="signal-particles" aria-hidden="true"></div>
                        <button class="signal-node signal-node--signal" type="button" data-signal-node aria-pressed="false" aria-label="Reveal the hidden Signal over Noise thesis" style="--x:13%;--y:52%"><span class="signal-node__label">Signal</span></button>
                        <button class="signal-node" type="button" data-signal-state="intent" data-signal-x="25" data-signal-y="64" aria-label="Explore intent" style="--x:25%;--y:64%"><span class="signal-node__label">Intent</span></button>
                        <button class="signal-node" type="button" data-signal-state="logic" data-signal-x="84" data-signal-y="28" aria-label="Explore product logic" style="--x:84%;--y:28%"><span class="signal-node__label">Logic</span></button>
                        <button class="signal-node" type="button" data-signal-state="state" data-signal-x="89" data-signal-y="58" aria-label="Explore important state" style="--x:89%;--y:58%"><span class="signal-node__label">State</span></button>
                        <button class="signal-node" type="button" data-signal-state="decision" data-signal-x="62" data-signal-y="69" aria-label="Explore decision" style="--x:62%;--y:69%"><span class="signal-node__label">Decision</span></button>
                        <div class="signal-thesis">
                            <small>Hidden design thesis</small>
                            <strong>Signal over noise</strong>
                            <p>The white point is useful truth. Every orbit, state and decision exists to make that signal easier to act on.</p>
                        </div>
                        <div class="signal-insight" aria-live="polite">
                            <small class="signal-insight__kicker">Product state</small>
                            <strong class="signal-insight__title">Explore a node</strong>
                            <p class="signal-insight__copy">The orange nodes encode the reasoning model behind the visual system.</p>
                        </div>
                        <div class="signal-copy">
                            <div class="signal-copy__eyebrow">Product thinking / 01</div>
                            <p class="signal-copy__quote">My job is usually the same: <span data-signal-concept="logic">find the product logic</span>, <span data-signal-concept="state">expose the important state</span> and <span data-signal-concept="decision">make the next decision easier</span>.</p>
                        </div>
                        <div class="signal-discovery-hint" aria-hidden="true">Explore the nodes · white = signal</div>
                        <div class="signal-meta" aria-hidden="true">
                            <span>6+ Years</span>
                            <span>SaaS <b>•</b> Web3 <b>•</b> Fintech</span>
                            <span>Design <b>✦</b> Implementation</span>
                        </div>
                    </div>
                    <div class="signal-system__legend" aria-hidden="true">
                        <span><b>Orange nodes</b> / product states</span>
                        <span><b>White node</b> / user truth</span>
                        <span><b>Orbit</b> / feedback loop</span>
                        <span><b>Ghost portrait</b> / reasoning</span>
                    </div>
                </div>
            </section>
        `);

        const particles = [
            [9,18,2],[15,27,3],[24,15,2],[31,22,2],[39,13,3],[47,26,2],[57,17,2],[68,12,3],[78,19,2],[88,15,3],
            [93,29,2],[12,41,2],[29,38,2],[42,48,2],[73,45,2],[90,47,3],[18,61,2],[35,66,2],[52,61,2],[82,67,2]
        ];
        const particleLayer = document.querySelector('.signal-particles');
        if (particleLayer) {
            particleLayer.innerHTML = particles.map(([x,y,s]) => `<i class="signal-particle" style="--x:${x}%;--y:${y}%;--s:${s}px"></i>`).join('');
        }

        const startSignal = () => {
            window.initSignalSystem?.();
            refreshSignalLayout();
            window.setTimeout(refreshSignalLayout, 120);
        };
        if (window.initSignalSystem) {
            startSignal();
        } else if (!document.querySelector('script[data-signal-script]')) {
            const signalScript = document.createElement('script');
            signalScript.src = 'assets/signal.js';
            signalScript.dataset.signalScript = 'true';
            signalScript.onload = startSignal;
            document.body.appendChild(signalScript);
        }
    }

    // --- 1. WATER-LIKE CURSOR ---
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorCircle = document.querySelector('.cursor-circle');
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        if (e.target.closest('a, button, .project-row, input')) {
            document.body.classList.add('hovering');
        } else {
            document.body.classList.remove('hovering');
        }
    });

    function animateCursor() {
        const distX = mouseX - cursorX;
        const distY = mouseY - cursorY;
        cursorX += distX * 0.1;
        cursorY += distY * 0.1;
        
        if (cursorDot && cursorCircle) {
            cursorDot.style.left = `${mouseX}px`;
            cursorDot.style.top = `${mouseY}px`;
            cursorCircle.style.left = `${cursorX}px`;
            cursorCircle.style.top = `${cursorY}px`;
        }
        requestAnimationFrame(animateCursor);
    }
    
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
    
    if (!prefersReducedMotion && !isTouch) {
        animateCursor();
    } else {
        if(cursorDot) cursorDot.style.display = 'none';
        if(cursorCircle) cursorCircle.style.display = 'none';
    }

    // --- 2. MOBILE MENU ---
    const mobileToggle = document.querySelector('.mobile-toggle');
    void mobileToggle;
});