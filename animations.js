// ═══════════════════════════════════════════════════════════════════════
// WORLDWIDE MEDITATION — ANIMATION & INTERACTION ENGINE
// Modern, swish, polished animations and visual effects
// ═══════════════════════════════════════════════════════════════════════

(function() {
    'use strict';

    // ─── PARTICLE CANVAS BACKGROUND ───
    function initParticleCanvas() {
        const canvas = document.createElement('canvas');
        canvas.id = 'particle-canvas';
        canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0;';
        document.body.insertBefore(canvas, document.body.firstChild);

        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationId;
        let isActive = true;

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
        resize();
        window.addEventListener('resize', resize);

        class Particle {
            constructor() {
                this.reset();
            }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 2.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.4;
                this.speedY = (Math.random() - 0.5) * 0.4;
                this.opacity = Math.random() * 0.5 + 0.1;
                this.hue = Math.random() * 60 + 30; // Gold range
            }
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                    this.reset();
                }
            }
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `hsla(${this.hue}, 80%, 60%, ${this.opacity})`;
                ctx.fill();
            }
        }

        // Create particles (fewer on mobile)
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile ? 25 : 60;
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function drawConnections() {
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `hsla(45, 80%, 60%, ${0.15 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            if (!isActive) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            particles.forEach(p => { p.update(); p.draw(); });
            drawConnections();
            animationId = requestAnimationFrame(animate);
        }
        animate();

        // Pause when tab is hidden
        document.addEventListener('visibilitychange', () => {
            isActive = !document.hidden;
            if (isActive) animate();
            else cancelAnimationFrame(animationId);
        });
    }

    // ─── SCROLL REVEAL ANIMATION ───
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('.reveal, section, .glass-card, .glass-card-dark, .quote-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    // Add stagger delays to children
                    const children = entry.target.querySelectorAll('.stagger-child');
                    children.forEach((child, i) => {
                        child.style.transitionDelay = `${i * 0.1}s`;
                        child.classList.add('visible');
                    });
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        revealElements.forEach(el => {
            el.classList.add('reveal');
            observer.observe(el);
        });
    }

    // ─── 3D TILT CARDS ───
    function initTiltCards() {
        const cards = document.querySelectorAll('.tilt-card, .glass-card, .glass-card-dark');
        
        cards.forEach(card => {
            card.classList.add('tilt-card');
            const content = card.querySelector('.card-content') || card.firstElementChild;
            if (content) content.classList.add('tilt-content');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 20;
                const rotateY = (centerX - x) / 20;
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            });
        });
    }

    // ─── SMOOTH COUNTER ANIMATION ───
    function animateCounters() {
        const counters = document.querySelectorAll('.stat-number, .count-up');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = parseInt(target.textContent.replace(/[^0-9]/g, '')) || 0;
                    const prefix = target.textContent.match(/^[^0-9]*/)?.[0] || '';
                    const suffix = target.textContent.match(/[^0-9]*$/)?.[0] || '';
                    
                    let current = 0;
                    const increment = finalValue / 60;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= finalValue) {
                            current = finalValue;
                            clearInterval(timer);
                        }
                        target.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
                    }, 25);
                    
                    observer.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        counters.forEach(counter => observer.observe(counter));
    }

    // ─── PARALLAX SCROLL EFFECTS ───
    function initParallax() {
        const parallaxElements = document.querySelectorAll('.parallax');
        
        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            parallaxElements.forEach(el => {
                const speed = el.dataset.speed || 0.5;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    }

    // ─── NAVBAR SCROLL EFFECT ───
    function initNavbarScroll() {
        const nav = document.querySelector('nav');
        if (!nav) return;

        let lastScroll = 0;
        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll > 100) {
                nav.style.background = 'rgba(255, 255, 255, 0.95)';
                nav.style.backdropFilter = 'blur(20px)';
                nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.08)';
            } else {
                nav.style.background = '';
                nav.style.backdropFilter = '';
                nav.style.boxShadow = '';
            }
            
            lastScroll = currentScroll;
        });
    }

    // ─── MAGNETIC BUTTONS ───
    function initMagneticButtons() {
        const buttons = document.querySelectorAll('.btn, .btn-primary, .btn-secondary, button[type="submit"]');
        
        buttons.forEach(btn => {
            btn.classList.add('magnetic-btn');
            
            btn.addEventListener('mousemove', (e) => {
                const rect = btn.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                btn.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
            });
            
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = 'translate(0, 0)';
            });
        });
    }

    // ─── TEXT SCRAMBLE EFFECT ───
    function initTextScramble() {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
        
        document.querySelectorAll('.scramble-text').forEach(el => {
            const originalText = el.textContent;
            let iteration = 0;
            
            el.addEventListener('mouseenter', () => {
                const interval = setInterval(() => {
                    el.textContent = originalText
                        .split('')
                        .map((char, index) => {
                            if (index < iteration) return originalText[index];
                            if (char === ' ') return ' ';
                            return chars[Math.floor(Math.random() * chars.length)];
                        })
                        .join('');
                    
                    if (iteration >= originalText.length) clearInterval(interval);
                    iteration += 1 / 3;
                }, 30);
            });
        });
    }

    // ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ─── ORB FLOATING EFFECT ───
    function initFloatingOrbs() {
        const sections = document.querySelectorAll('section');
        
        sections.forEach((section, i) => {
            if (i % 2 === 0) { // Add to every other section
                const orb = document.createElement('div');
                orb.className = 'particle-orb';
                orb.style.cssText = `
                    width: ${200 + Math.random() * 300}px;
                    height: ${200 + Math.random() * 300}px;
                    background: radial-gradient(circle, 
                        hsla(${30 + Math.random() * 30}, 80%, 60%, 0.15) 0%, 
                        transparent 70%);
                    top: ${Math.random() * 100}%;
                    left: ${Math.random() * 100}%;
                    animation-delay: ${Math.random() * 5}s;
                    animation-duration: ${8 + Math.random() * 8}s;
                `;
                section.style.position = 'relative';
                section.style.overflow = 'hidden';
                section.appendChild(orb);
            }
        });
    }

    // ─── PROGRESSIVE IMAGE LOADING ───
    function initLazyImages() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('blur-in');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    }

    // ─── HERO TYPEWRITER EFFECT ───
    function initTypewriter() {
        const heroTitle = document.querySelector('.hero-title, h1');
        if (!heroTitle) return;
        
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.opacity = '1';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 50);
    }

    // ─── CURSOR TRAIL EFFECT ───
    function initCursorTrail() {
        if (window.innerWidth < 768) return; // Skip on mobile
        
        const trail = [];
        const trailLength = 8;
        
        for (let i = 0; i < trailLength; i++) {
            const dot = document.createElement('div');
            dot.style.cssText = `
                position: fixed;
                width: ${8 - i}px;
                height: ${8 - i}px;
                border-radius: 50%;
                background: hsla(${40 + i * 5}, 80%, 60%, ${0.4 - i * 0.05});
                pointer-events: none;
                z-index: 9999;
                transition: transform 0.1s ease;
                mix-blend-mode: screen;
            `;
            document.body.appendChild(dot);
            trail.push({ el: dot, x: 0, y: 0 });
        }
        
        let mouseX = 0, mouseY = 0;
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });
        
        function animateTrail() {
            trail.forEach((dot, i) => {
                const prev = i === 0 ? { x: mouseX, y: mouseY } : trail[i - 1];
                dot.x += (prev.x - dot.x) * (0.3 - i * 0.03);
                dot.y += (prev.y - dot.y) * (0.3 - i * 0.03);
                dot.el.style.transform = `translate(${dot.x - 4}px, ${dot.y - 4}px)`;
            });
            requestAnimationFrame(animateTrail);
        }
        animateTrail();
    }

    // ─── INITIALIZE ALL ───
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', runInit);
        } else {
            runInit();
        }
    }

    function runInit() {
        // Core animations (always run)
        initParticleCanvas();
        initScrollReveal();
        initSmoothScroll();
        initNavbarScroll();
        initMagneticButtons();
        initFloatingOrbs();
        animateCounters();
        
        // Optional effects (check for reduced motion preference)
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (!prefersReducedMotion) {
            initTiltCards();
            initParallax();
            initCursorTrail();
        }
        
        // Initialize forms with visual feedback
        document.querySelectorAll('form').forEach(form => {
            form.addEventListener('submit', function() {
                const btn = this.querySelector('button[type="submit"]');
                if (btn) {
                    btn.style.transform = 'scale(0.95)';
                    setTimeout(() => btn.style.transform = '', 150);
                }
            });
        });
    }

    // Start
    init();

})();
