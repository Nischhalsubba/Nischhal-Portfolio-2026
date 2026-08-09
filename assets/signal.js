/* Interactive Signal over Noise section */
document.addEventListener('DOMContentLoaded', () => {
  const root = document.querySelector('[data-signal-system]');
  if (!root || !window.gsap || !window.ScrollTrigger) return;

  const { gsap, ScrollTrigger } = window;
  gsap.registerPlugin(ScrollTrigger);

  const stage = root.querySelector('.signal-stage');
  const portrait = root.querySelector('.signal-portrait');
  const reasoning = root.querySelector('.signal-reasoning');
  const orbit = root.querySelector('.signal-orbits');
  const orbitMain = root.querySelector('.signal-orbit--main');
  const connector = root.querySelector('.signal-connector');
  const halo = root.querySelector('.signal-halo');
  const signalButton = root.querySelector('[data-signal-node]');
  const stateNodes = [...root.querySelectorAll('[data-signal-state]')];
  const decorativeDots = [...root.querySelectorAll('.signal-particle')];
  const thesis = root.querySelector('.signal-thesis');
  const insight = root.querySelector('.signal-insight');
  const insightKicker = root.querySelector('.signal-insight__kicker');
  const insightTitle = root.querySelector('.signal-insight__title');
  const insightCopy = root.querySelector('.signal-insight__copy');
  const conceptSpans = [...root.querySelectorAll('[data-signal-concept]')];

  if (!stage || !portrait || !reasoning || !orbit || !connector || !halo || !signalButton || !thesis || !insight) return;

  const meanings = {
    intent: {
      kicker: 'Intent',
      title: 'What is the person actually trying to accomplish?',
      copy: 'The system begins with user intent, not interface decoration.',
    },
    logic: {
      kicker: 'Product logic',
      title: 'What rules decide what can happen next?',
      copy: 'Inputs enter, constraints shape them, and the product decides what becomes possible.',
    },
    state: {
      kicker: 'Important state',
      title: 'What does the system need to expose right now?',
      copy: 'Good state is usually discovered before it is displayed. The interface should reveal only what changes the next decision.',
    },
    decision: {
      kicker: 'Decision',
      title: 'What information makes the next action obvious?',
      copy: 'The end of the loop is not more data. It is a clearer next move.',
    },
  };

  let lockedState = null;
  let signalMode = false;

  const mm = gsap.matchMedia();

  const setInsight = (state) => {
    const meaning = meanings[state];
    if (!meaning) return;
    insightKicker.textContent = meaning.kicker;
    insightTitle.textContent = meaning.title;
    insightCopy.textContent = meaning.copy;
    gsap.fromTo(
      insight,
      { y: 10, autoAlpha: 0 },
      { y: 0, autoAlpha: 1, duration: 0.26, ease: 'power3.out', overwrite: 'auto' },
    );
  };

  const updateConnector = (node) => {
    const x = node.dataset.signalX;
    const y = node.dataset.signalY;
    if (!x || !y) return;
    connector.setAttribute('x2', x);
    connector.setAttribute('y2', y);
    gsap.fromTo(
      connector,
      { autoAlpha: 0, strokeDashoffset: 4 },
      { autoAlpha: 1, strokeDashoffset: 0, duration: 0.24, ease: 'power3.out', overwrite: 'auto' },
    );
  };

  const highlightConcept = (state) => {
    conceptSpans.forEach((span) => {
      gsap.to(span, {
        color: span.dataset.signalConcept === state ? '#ff6a21' : '',
        duration: 0.18,
        ease: 'power2.out',
        overwrite: 'auto',
        clearProps: span.dataset.signalConcept === state ? '' : 'color',
      });
    });
  };

  const activateState = (node, lock = false) => {
    const state = node.dataset.signalState;
    if (!state || !meanings[state]) return;
    if (lock) lockedState = lockedState === state ? null : state;

    stateNodes.forEach((candidate) => candidate.classList.toggle('is-active', candidate === node));
    gsap.to(stateNodes, {
      autoAlpha: 0.42,
      scale: 0.94,
      duration: 0.2,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    gsap.to(node, {
      autoAlpha: 1,
      scale: 1.22,
      duration: 0.18,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.to(reasoning, {
      x: state === 'logic' || state === 'state' ? -10 : -3,
      autoAlpha: state === 'logic' || state === 'state' ? 0.4 : 0.2,
      duration: 0.38,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.to(orbitMain, {
      stroke: 'rgba(255, 112, 38, 1)',
      duration: 0.2,
      overwrite: 'auto',
    });
    updateConnector(node);
    setInsight(state);
    highlightConcept(state);
  };

  const resetState = () => {
    if (lockedState) {
      const node = stateNodes.find((candidate) => candidate.dataset.signalState === lockedState);
      if (node) activateState(node, false);
      return;
    }

    stateNodes.forEach((node) => node.classList.remove('is-active'));
    gsap.to(stateNodes, { autoAlpha: signalMode ? 0.74 : 1, scale: 1, duration: 0.18, ease: 'power2.out', overwrite: 'auto' });
    gsap.to(connector, { autoAlpha: 0, duration: 0.14, overwrite: 'auto' });
    gsap.to(reasoning, { x: 12, autoAlpha: signalMode ? 0.28 : 0.08, duration: 0.28, ease: 'power2.out', overwrite: 'auto' });
    gsap.to(orbitMain, { stroke: signalMode ? 'rgba(255, 112, 38, 1)' : 'rgba(239, 106, 44, .76)', duration: 0.18, overwrite: 'auto' });
    gsap.to(insight, { y: 8, autoAlpha: 0, duration: 0.14, overwrite: 'auto' });
    conceptSpans.forEach((span) => gsap.to(span, { color: '', duration: 0.16, clearProps: 'color', overwrite: 'auto' }));
  };

  const setSignalMode = (on) => {
    signalMode = on;
    root.classList.toggle('is-signal-mode', on);
    signalButton.classList.toggle('is-active', on);
    signalButton.setAttribute('aria-pressed', String(on));

    gsap.to(decorativeDots, {
      autoAlpha: on ? 0.14 : 0.68,
      duration: 0.34,
      stagger: on ? 0.006 : 0,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    gsap.to(portrait, {
      filter: on ? 'grayscale(1) contrast(1.08) brightness(.56) sepia(.08)' : 'grayscale(1) contrast(1.08) brightness(.72) sepia(.08)',
      duration: 0.34,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    gsap.to(reasoning, {
      x: on ? -8 : 12,
      autoAlpha: on ? 0.36 : 0.08,
      duration: 0.42,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.to(orbitMain, {
      stroke: on ? 'rgba(255, 112, 38, 1)' : 'rgba(239, 106, 44, .76)',
      strokeWidth: on ? 0.3 : 0.18,
      duration: 0.32,
      ease: 'power2.out',
      overwrite: 'auto',
    });
    gsap.to(halo, {
      scale: on ? 1.55 : 1,
      autoAlpha: on ? 0.84 : 0.46,
      transformOrigin: 'center',
      duration: 0.26,
      ease: 'power3.out',
      overwrite: 'auto',
    });
    gsap.to(thesis, {
      y: on ? 0 : 10,
      autoAlpha: on ? 1 : 0,
      duration: on ? 0.42 : 0.18,
      ease: on ? 'power3.out' : 'power2.in',
      overwrite: 'auto',
    });
    if (!lockedState) resetState();
  };

  mm.add(
    {
      reduce: '(prefers-reduced-motion: reduce)',
      desktop: '(hover: hover) and (pointer: fine)',
    },
    (context) => {
      const reduce = Boolean(context.conditions.reduce);
      const desktop = Boolean(context.conditions.desktop);

      if (!reduce) {
        const entrance = gsap.timeline({
          defaults: { ease: 'power3.out' },
          scrollTrigger: {
            trigger: root,
            start: 'top 72%',
            once: true,
          },
        });
        entrance
          .fromTo(root.querySelector('.signal-grid-layer'), { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.46 })
          .fromTo(root.querySelectorAll('.signal-orbit'), { strokeDashoffset: 1, autoAlpha: 0 }, { strokeDashoffset: 0, autoAlpha: 1, duration: 0.72 }, '<0.04')
          .fromTo(stateNodes, { scale: 0.72, autoAlpha: 0 }, { scale: 1, autoAlpha: 1, duration: 0.28, stagger: 0.045 }, '-=0.34')
          .fromTo(reasoning, { x: 20, autoAlpha: 0 }, { x: 12, autoAlpha: 0.08, duration: 0.5 }, '-=0.24')
          .fromTo(portrait, { x: 10, autoAlpha: 0 }, { x: 0, autoAlpha: 1, duration: 0.58 }, '-=0.4')
          .fromTo(root.querySelectorAll('.signal-copy > *'), { y: 12, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 0.38, stagger: 0.045 }, '-=0.28');
      }

      if (desktop && !reduce) {
        const grid = root.querySelector('.signal-grid-layer');
        const portraitX = gsap.quickTo(portrait, 'x', { duration: 0.34, ease: 'power3.out' });
        const portraitY = gsap.quickTo(portrait, 'y', { duration: 0.34, ease: 'power3.out' });
        const reasoningX = gsap.quickTo(reasoning, 'x', { duration: 0.42, ease: 'power3.out' });
        const reasoningY = gsap.quickTo(reasoning, 'y', { duration: 0.42, ease: 'power3.out' });
        const orbitX = gsap.quickTo(orbit, 'x', { duration: 0.38, ease: 'power3.out' });
        const orbitY = gsap.quickTo(orbit, 'y', { duration: 0.38, ease: 'power3.out' });
        const gridX = gsap.quickTo(grid, 'x', { duration: 0.46, ease: 'power3.out' });
        const gridY = gsap.quickTo(grid, 'y', { duration: 0.46, ease: 'power3.out' });

        const onPointerMove = (event) => {
          const rect = stage.getBoundingClientRect();
          const nx = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
          const ny = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
          portraitX(nx * 2); portraitY(ny * 2);
          reasoningX(12 - nx * 7); reasoningY(-ny * 5);
          orbitX(nx * 5); orbitY(ny * 4);
          gridX(nx * 3); gridY(ny * 2);
        };

        const onPointerLeave = () => {
          portraitX(0); portraitY(0);
          reasoningX(signalMode ? -8 : 12); reasoningY(0);
          orbitX(0); orbitY(0);
          gridX(0); gridY(0);
        };

        stage.addEventListener('pointermove', onPointerMove, { passive: true });
        stage.addEventListener('pointerleave', onPointerLeave, { passive: true });
        return () => {
          stage.removeEventListener('pointermove', onPointerMove);
          stage.removeEventListener('pointerleave', onPointerLeave);
        };
      }
      return undefined;
    },
  );

  stateNodes.forEach((node) => {
    node.addEventListener('mouseenter', () => activateState(node));
    node.addEventListener('mouseleave', resetState);
    node.addEventListener('focus', () => activateState(node));
    node.addEventListener('blur', resetState);
    node.addEventListener('click', () => {
      activateState(node, true);
      if (!lockedState) resetState();
    });
  });

  signalButton.addEventListener('click', () => setSignalMode(!signalMode));

  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    lockedState = null;
    setSignalMode(false);
    resetState();
  });
});