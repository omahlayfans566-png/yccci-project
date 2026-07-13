/* ============================================
   YAFC - Young Adults for Christ
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function() {
    'use strict';

    // ----- Navigation Toggle (Hamburger Menu) -----
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (navToggle) {
        navToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navLinks.classList.toggle('open');
            if (navOverlay) {
                navOverlay.classList.toggle('active');
            }
            document.body.style.overflow = navLinks.classList.contains('open') ? 'hidden' : '';
        });
    }

    if (navOverlay) {
        navOverlay.addEventListener('click', function() {
            this.classList.remove('active');
            navToggle.classList.remove('active');
            navLinks.classList.remove('open');
            document.body.style.overflow = '';
        });
    }

    // Close navigation when a link is clicked (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navToggle.classList.remove('active');
                navLinks.classList.remove('open');
                if (navOverlay) {
                    navOverlay.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        });
    });

    // ----- Navbar Scroll Effect -----
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    if (navbar) {
        window.addEventListener('scroll', function() {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollY = currentScrollY;
        }, { passive: true });
    }

    // ----- Set Active Nav Link -----
    function setActiveNavLink() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');
            if (href === currentPage || 
                (currentPage === '' && href === 'index.html') ||
                (currentPage === 'index.html' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    }
    setActiveNavLink();

    // ----- Scroll Animations (Intersection Observer) -----
    const animateElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale');

    if (animateElements.length > 0) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const animationObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    animationObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animateElements.forEach(el => animationObserver.observe(el));
    }

    // ----- Back to Top Button -----
    const backToTop = document.querySelector('.back-to-top');

    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ----- Gallery Category Filter -----
    const categoryBtns = document.querySelectorAll('.gallery-cat-btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    if (categoryBtns.length > 0 && galleryItems.length > 0) {
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                // Update active button
                categoryBtns.forEach(b => b.classList.remove('active'));
                this.classList.add('active');

                const filter = this.getAttribute('data-filter');

                galleryItems.forEach(item => {
                    if (filter === 'all') {
                        item.style.display = 'block';
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    } else {
                        const categories = item.getAttribute('data-category');
                        if (categories && categories.includes(filter)) {
                            item.style.display = 'block';
                            setTimeout(() => {
                                item.style.opacity = '1';
                                item.style.transform = 'scale(1)';
                            }, 50);
                        } else {
                            item.style.opacity = '0';
                            item.style.transform = 'scale(0.8)';
                            setTimeout(() => {
                                item.style.display = 'none';
                            }, 300);
                        }
                    }
                });
            });
        });
    }

    // ----- Accordion -----
    const accordionItems = document.querySelectorAll('.accordion-item');

    if (accordionItems.length > 0) {
        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            if (header) {
                header.addEventListener('click', function() {
                    const isActive = item.classList.contains('active');
                    
                    // Close all accordion items
                    accordionItems.forEach(i => {
                        i.classList.remove('active');
                    });
                    
                    // Toggle current
                    if (!isActive) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    // ----- Modal -----
    const modalTriggers = document.querySelectorAll('[data-modal]');
    const modals = document.querySelectorAll('.modal');

    if (modalTriggers.length > 0) {
        modalTriggers.forEach(trigger => {
            trigger.addEventListener('click', function(e) {
                e.preventDefault();
                const modalId = this.getAttribute('data-modal');
                const modal = document.getElementById(modalId);
                if (modal) {
                    modal.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close modal on overlay click or close button
        modals.forEach(modal => {
            const overlay = modal.querySelector('.modal-overlay');
            const closeBtn = modal.querySelector('.modal-close');

            if (overlay) {
                overlay.addEventListener('click', function() {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', function() {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                modals.forEach(modal => {
                    if (modal.classList.contains('active')) {
                        modal.classList.remove('active');
                        document.body.style.overflow = '';
                    }
                });
            }
        });
    }

    // ----- Image Lightbox -----
    const lightboxImages = document.querySelectorAll('.gallery-item img, .gallery-item video');
    const lightbox = document.querySelector('.lightbox');

    if (lightbox && lightboxImages.length > 0) {
        lightboxImages.forEach(item => {
            item.addEventListener('click', function(e) {
                e.stopPropagation();
                const lightboxImg = lightbox.querySelector('img');
                if (lightboxImg && this.tagName === 'IMG') {
                    lightboxImg.src = this.src;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        lightbox.addEventListener('click', function() {
            this.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ----- Novena Day Navigation -----
    const novenaDayNav = document.querySelector('.novena-day-nav');
    
    if (novenaDayNav) {
        const prevBtn = novenaDayNav.querySelector('.prev-day');
        const nextBtn = novenaDayNav.querySelector('.next-day');
        const dayIndicator = novenaDayNav.querySelector('.day-indicator');
        const dayContents = document.querySelectorAll('.novena-day-content');

        if (prevBtn && nextBtn && dayContents.length > 0) {
            let currentDay = 1;
            const totalDays = dayContents.length;

            function updateDayDisplay() {
                // Update day indicator
                if (dayIndicator) {
                    dayIndicator.textContent = `Day ${currentDay} of ${totalDays}`;
                }

                // Show/hide day contents
                dayContents.forEach((content, index) => {
                    content.style.display = (index + 1 === currentDay) ? 'block' : 'none';
                });

                // Update button states
                if (prevBtn) {
                    prevBtn.style.opacity = currentDay === 1 ? '0.4' : '1';
                    prevBtn.style.pointerEvents = currentDay === 1 ? 'none' : 'auto';
                }
                if (nextBtn) {
                    nextBtn.style.opacity = currentDay === totalDays ? '0.4' : '1';
                    nextBtn.style.pointerEvents = currentDay === totalDays ? 'none' : 'auto';
                }

                // Scroll to top of content
                const novenaContent = document.querySelector('.novena-day-content');
                if (novenaContent) {
                    novenaContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }

            prevBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (currentDay > 1) {
                    currentDay--;
                    updateDayDisplay();
                }
            });

            nextBtn.addEventListener('click', function(e) {
                e.preventDefault();
                if (currentDay < totalDays) {
                    currentDay++;
                    updateDayDisplay();
                }
            });

            // Initialize
            updateDayDisplay();
        }
    }

    // ----- Smooth Scroll for Anchor Links -----
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const navHeight = navbar ? navbar.offsetHeight : 72;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ----- Contact Form -----
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simple form validation
            const name = this.querySelector('#name');
            const email = this.querySelector('#email');
            const message = this.querySelector('#message');
            let isValid = true;

            // Reset errors
            this.querySelectorAll('.form-error').forEach(el => el.remove());

            if (name && !name.value.trim()) {
                showError(name, 'Please enter your name');
                isValid = false;
            }

            if (email && !email.value.trim()) {
                showError(email, 'Please enter your email');
                isValid = false;
            } else if (email && !isValidEmail(email.value)) {
                showError(email, 'Please enter a valid email address');
                isValid = false;
            }

            if (message && !message.value.trim()) {
                showError(message, 'Please enter your message');
                isValid = false;
            }

            if (isValid) {
                // Show success message
                const submitBtn = this.querySelector('.btn');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Message Sent!';
                submitBtn.style.background = 'var(--success)';
                submitBtn.style.borderColor = 'var(--success)';

                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                    this.reset();
                }, 3000);
            }
        });
    }

    function showError(input, message) {
        const error = document.createElement('span');
        error.className = 'form-error';
        error.style.cssText = 'color: var(--error); font-size: var(--text-xs); margin-top: 4px; display: block;';
        error.textContent = message;
        input.style.borderColor = 'var(--error)';
        input.parentNode.appendChild(error);
        
        input.addEventListener('input', function() {
            this.style.borderColor = '';
            const err = this.parentNode.querySelector('.form-error');
            if (err) err.remove();
        }, { once: true });
    }

    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    // ----- Counter Animation (Stats) -----
    const statNumbers = document.querySelectorAll('.stat-number');

    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = entry.target;
                    const finalValue = parseInt(target.getAttribute('data-count') || target.textContent.replace(/,/g, ''), 10);
                    
                    if (!isNaN(finalValue)) {
                        animateCounter(target, finalValue);
                    }
                    
                    counterObserver.unobserve(target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(stat => counterObserver.observe(stat));
    }

    function animateCounter(element, target) {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current += increment;
            
            if (step >= steps) {
                element.textContent = target.toLocaleString();
                clearInterval(timer);
            } else {
                element.textContent = Math.round(current).toLocaleString();
            }
        }, duration / steps);
    }

    // ----- Active Nav Link on Scroll (for homepage sections) -----
    const sections = document.querySelectorAll('section[id]');
    
    if (sections.length > 0 && navbar) {
        const navLinksArray = document.querySelectorAll('.nav-links a[href^="#"]');
        
        if (navLinksArray.length > 0) {
            const sectionObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const id = entry.target.getAttribute('id');
                        navLinksArray.forEach(link => {
                            link.classList.remove('active');
                            if (link.getAttribute('href') === '#' + id) {
                                link.classList.add('active');
                            }
                        });
                    }
                });
            }, { threshold: 0.3 });

            sections.forEach(section => sectionObserver.observe(section));
        }
    }

    // ----- Masonry Grid for Gallery (using CSS columns on desktop) -----
    function checkGalleryLayout() {
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid && window.innerWidth < 768) {
            galleryGrid.style.columns = '2';
        } else if (galleryGrid) {
            galleryGrid.style.columns = '';
        }
    }

    checkGalleryLayout();
    window.addEventListener('resize', checkGalleryLayout);

    // ----- Lazy Loading for Images -----
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.src = img.getAttribute('data-src') || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyImages = document.querySelectorAll('img[data-src]');
        
        if (lazyImages.length > 0) {
            const lazyObserver = new IntersectionObserver(function(entries) {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.getAttribute('data-src');
                        img.removeAttribute('data-src');
                        lazyObserver.unobserve(img);
                    }
                });
            });

            lazyImages.forEach(img => lazyObserver.observe(img));
        }
    }

    // ----- Responsive Video Embeds -----
    document.querySelectorAll('iframe[src*="youtube"], iframe[src*="vimeo"]').forEach(iframe => {
        const wrapper = document.createElement('div');
        wrapper.className = 'video-wrapper';
        wrapper.style.cssText = 'position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; border-radius: var(--radius-md);';
        iframe.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;';
        iframe.parentNode.insertBefore(wrapper, iframe);
        wrapper.appendChild(iframe);
    });

    // ----- Detect Touch Devices -----
    if ('ontouchstart' in window) {
        document.body.classList.add('touch-device');
    } else {
        document.body.classList.add('no-touch');
    }
});