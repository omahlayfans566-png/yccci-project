/* ============================================
   YCCCI - Young and Chosen for Christ
   Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // ----- Navigation Toggle (Hamburger Menu) -----
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    function openNav() {
        navToggle.classList.add('active');
        navLinks.classList.add('open');
        if (navOverlay) navOverlay.classList.add('active');
        // Lock scroll on body (& iOS Safari fix)
        document.body.style.overflow = 'hidden';
    }

    function closeNav() {
        navToggle.classList.remove('active');
        navLinks.classList.remove('open');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navLinks.classList.contains('open') ? closeNav() : openNav();
        });
    }

    // Close button inside mobile menu
    const navClose = document.querySelector('.nav-close');
    if (navClose) {
        navClose.addEventListener('click', closeNav);
    }

    // Backdrop tap closes menu
    if (navOverlay) {
        navOverlay.addEventListener('click', closeNav);
    }

    // Close when a nav link is tapped on mobile
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) closeNav();
        });
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && navLinks && navLinks.classList.contains('open')) {
            closeNav();
        }
    });

    // ----- Navbar Scroll Effect -----
    const navbar = document.querySelector('.navbar');
    let lastScrollY = window.scrollY;

    if (navbar) {
        window.addEventListener('scroll', function () {
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

        const animationObserver = new IntersectionObserver(function (entries) {
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
        window.addEventListener('scroll', function () {
            if (window.scrollY > 400) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        }, { passive: true });

        backToTop.addEventListener('click', function () {
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
            btn.addEventListener('click', function () {
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
                header.addEventListener('click', function () {
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
            trigger.addEventListener('click', function (e) {
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
                overlay.addEventListener('click', function () {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }

            if (closeBtn) {
                closeBtn.addEventListener('click', function () {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                });
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', function (e) {
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
            item.addEventListener('click', function (e) {
                e.stopPropagation();
                const lightboxImg = lightbox.querySelector('img');
                if (lightboxImg && this.tagName === 'IMG') {
                    lightboxImg.src = this.src;
                    lightbox.classList.add('active');
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        lightbox.addEventListener('click', function () {
            this.classList.remove('active');
            document.body.style.overflow = '';
        });

        document.addEventListener('keydown', function (e) {
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

            prevBtn.addEventListener('click', function (e) {
                e.preventDefault();
                if (currentDay > 1) {
                    currentDay--;
                    updateDayDisplay();
                }
            });

            nextBtn.addEventListener('click', function (e) {
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
        anchor.addEventListener('click', function (e) {
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
        contactForm.addEventListener('submit', function (e) {
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

        input.addEventListener('input', function () {
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
        const counterObserver = new IntersectionObserver(function (entries) {
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
            const sectionObserver = new IntersectionObserver(function (entries) {
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

    // ----- Hero Section mouse-parallax (desktop only) -----
    const heroBgImage = document.querySelector('.hero-bg-image');
    const heroGlow = document.querySelector('.hero-float-glow');
    const heroEl = document.querySelector('.hero');

    if (heroBgImage && heroEl && window.innerWidth >= 1025) {
        heroEl.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            heroBgImage.style.transform = `translate(${x * 10}px, ${y * 7}px) scale(1.04)`;
            if (heroGlow) {
                heroGlow.style.transform = `translate(${x * 22}px, ${y * 22}px)`;
            }
        }, { passive: true });

        heroEl.addEventListener('mouseleave', function () {
            heroBgImage.style.transform = '';
            if (heroGlow) heroGlow.style.transform = '';
        });
    }

    // ----- Lazy Loading for Images -----
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(img => {
            img.src = img.getAttribute('data-src') || img.src;
        });
    } else {
        // Fallback for browsers that don't support lazy loading
        const lazyImages = document.querySelectorAll('img[data-src]');

        if (lazyImages.length > 0) {
            const lazyObserver = new IntersectionObserver(function (entries) {
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

    // ============================================
    // Donation Page Functionality
    // ============================================

    const donationForm = document.getElementById('donationForm');

    if (donationForm) {
        const fullNameInput = document.getElementById('fullName');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');
        const amountInput = document.getElementById('amount');
        const paymentMethodInput = document.getElementById('paymentMethod');
        const narrationInput = document.getElementById('narration');
        const proofUpload = document.getElementById('proofUpload');
        const fileUploadArea = document.getElementById('fileUploadArea');
        const filePreview = document.getElementById('filePreview');
        const fileName = document.getElementById('fileName');
        const filePreviewThumb = document.getElementById('filePreviewThumb');
        const fileRemoveBtn = document.getElementById('fileRemoveBtn');
        const successModal = document.getElementById('donationSuccessModal');
        const modalCloseBtn = document.getElementById('modalCloseBtn');

        // WhatsApp number
        const WHATSAPP_NUMBER = '+393333534560';

        let selectedFile = null;

        // ----- File Upload Handling -----
        if (proofUpload) {
            // Click on upload area triggers file input
            if (fileUploadArea) {
                fileUploadArea.addEventListener('click', function () {
                    proofUpload.click();
                });
            }

            // Handle file selection
            proofUpload.addEventListener('change', function () {
                handleFileSelect(this.files[0]);
            });

            // Drag and drop support
            if (fileUploadArea) {
                fileUploadArea.addEventListener('dragover', function (e) {
                    e.preventDefault();
                    this.classList.add('dragover');
                });

                fileUploadArea.addEventListener('dragleave', function () {
                    this.classList.remove('dragover');
                });

                fileUploadArea.addEventListener('drop', function (e) {
                    e.preventDefault();
                    this.classList.remove('dragover');
                    if (e.dataTransfer.files.length > 0) {
                        proofUpload.files = e.dataTransfer.files;
                        handleFileSelect(e.dataTransfer.files[0]);
                    }
                });
            }

            // Remove file
            if (fileRemoveBtn) {
                fileRemoveBtn.addEventListener('click', function () {
                    removeFile();
                });
            }
        }

        function handleFileSelect(file) {
            if (!file) return;

            // Validate file type
            const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
            if (!allowedTypes.includes(file.type)) {
                showFieldError('proofError', 'Please upload a JPG, JPEG, PNG, or PDF file.');
                return;
            }

            // Validate file size (10MB max)
            if (file.size > 10 * 1024 * 1024) {
                showFieldError('proofError', 'File size must be less than 10MB.');
                return;
            }

            selectedFile = file;
            clearFieldError('proofError');

            // Show preview
            if (filePreview) {
                filePreview.style.display = 'block';
            }

            if (fileName) {
                fileName.textContent = file.name;
            }

            // Show thumbnail for images
            if (filePreviewThumb) {
                filePreviewThumb.innerHTML = '';
                if (file.type.startsWith('image/')) {
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        const img = document.createElement('img');
                        img.src = e.target.result;
                        img.alt = 'Proof of payment preview';
                        filePreviewThumb.appendChild(img);
                    };
                    reader.readAsDataURL(file);
                } else {
                    // PDF icon
                    filePreviewThumb.innerHTML = `
                        <div style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem;background:var(--light-gray);border-radius:var(--radius-sm);">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                                <polyline points="14 2 14 8 20 8"/>
                                <line x1="16" y1="13" x2="8" y2="13"/>
                                <line x1="16" y1="17" x2="8" y2="17"/>
                            </svg>
                            <span style="font-size:var(--text-sm);color:var(--gray);">PDF Document</span>
                        </div>
                    `;
                }
            }
        }

        function removeFile() {
            selectedFile = null;
            if (proofUpload) proofUpload.value = '';
            if (filePreview) filePreview.style.display = 'none';
            if (fileName) fileName.textContent = '';
            if (filePreviewThumb) filePreviewThumb.innerHTML = '';
            clearFieldError('proofError');
        }

        // ----- Form Validation -----
        function validateField(input, errorId, message) {
            if (!input.value.trim()) {
                showFieldError(errorId, message);
                input.classList.add('error');
                return false;
            }
            clearFieldError(errorId);
            input.classList.remove('error');
            return true;
        }

        function showFieldError(errorId, message) {
            const errorEl = document.getElementById(errorId);
            if (errorEl) {
                errorEl.textContent = message;
            }
        }

        function clearFieldError(errorId) {
            const errorEl = document.getElementById(errorId);
            if (errorEl) {
                errorEl.textContent = '';
            }
        }

        // Clear errors on input
        donationForm.querySelectorAll('.form-input').forEach(input => {
            input.addEventListener('input', function () {
                this.classList.remove('error');
                const errorId = this.id + 'Error';
                clearFieldError(errorId);
            });
        });

        // ----- Form Submission -----
        donationForm.addEventListener('submit', function (e) {
            e.preventDefault();

            let isValid = true;

            // Validate Full Name
            if (!validateField(fullNameInput, 'fullNameError', 'Please enter your full name.')) {
                isValid = false;
            }

            // Validate Phone
            if (!validateField(phoneInput, 'phoneError', 'Please enter your phone number.')) {
                isValid = false;
            }

            // Validate Amount
            if (!amountInput.value.trim() || parseFloat(amountInput.value) <= 0) {
                showFieldError('amountError', 'Please enter a valid donation amount.');
                amountInput.classList.add('error');
                isValid = false;
            } else {
                clearFieldError('amountError');
                amountInput.classList.remove('error');
            }

            // Validate Payment Method
            if (!paymentMethodInput.value) {
                showFieldError('paymentMethodError', 'Please select a payment method.');
                paymentMethodInput.classList.add('error');
                isValid = false;
            } else {
                clearFieldError('paymentMethodError');
                paymentMethodInput.classList.remove('error');
            }

            // Validate Narration
            if (!validateField(narrationInput, 'narrationError', 'Please enter the purpose of your donation.')) {
                isValid = false;
            }

            // Validate Proof of Payment
            if (!selectedFile) {
                showFieldError('proofError', 'Please upload your proof of payment.');
                isValid = false;
            } else {
                clearFieldError('proofError');
            }

            if (!isValid) {
                // Scroll to first error
                const firstError = donationForm.querySelector('.error, .form-error-text:not(:empty)');
                if (firstError) {
                    firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
                return;
            }

            // Build WhatsApp message
            const name = fullNameInput.value.trim();
            const phone = phoneInput.value.trim();
            const email = emailInput.value.trim();
            const amount = amountInput.value.trim();
            const paymentMethod = paymentMethodInput.value;
            const narration = narrationInput.value.trim();

            const message = `*Donation Submission - Young and Chosen for Christ*

👤 *Donor Name:* ${name}
📧 *Email:* ${email || 'Not provided'}
📞 *Phone:* ${phone}
💰 *Amount:* ₦${amount}
📋 *Purpose:* ${narration}
💳 *Payment Method:* ${paymentMethod}

*Important:* Please attach your proof of payment (image/PDF) manually to this message before sending.`;

            // Open WhatsApp
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');

            // Show success modal
            if (successModal) {
                successModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });

        // ----- Success Modal -----
        function closeDonationModal() {
            if (successModal) {
                successModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        }

        if (modalCloseBtn) {
            modalCloseBtn.addEventListener('click', closeDonationModal);
        }

        // Close modal on overlay click
        if (successModal) {
            const modalOverlay = successModal.querySelector('.donation-modal-overlay');
            if (modalOverlay) {
                modalOverlay.addEventListener('click', closeDonationModal);
            }
        }

        // Close modal with Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && successModal && successModal.classList.contains('active')) {
                closeDonationModal();
            }
        });
    }

    // ============================================
    // Copy Account Number Functionality
    // ============================================
    const copyButtons = document.querySelectorAll('.copy-btn');
    const toastNotification = document.getElementById('toastNotification');

    if (copyButtons.length > 0) {
        copyButtons.forEach(btn => {
            btn.addEventListener('click', function () {
                const accountNumber = this.getAttribute('data-account');
                if (!accountNumber) return;

                // Copy to clipboard
                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(accountNumber).then(function () {
                        showToast();
                    }).catch(function () {
                        fallbackCopy(accountNumber);
                    });
                } else {
                    fallbackCopy(accountNumber);
                }
            });
        });
    }

    function fallbackCopy(text) {
        const textarea = document.createElement('textarea');
        textarea.value = text;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
            document.execCommand('copy');
            showToast();
        } catch (e) {
            // Fallback: select and instruct user
            alert('Please manually copy: ' + text);
        }
        document.body.removeChild(textarea);
    }

    function showToast() {
        if (!toastNotification) return;
        toastNotification.classList.add('active');
        setTimeout(function () {
            toastNotification.classList.remove('active');
        }, 3000);
    }

    // ============================================
    // Contact Form - Premium Contact Form WhatsApp
    // ============================================
    const premiumContactForm = document.querySelector('.premium-contact-form');

    if (premiumContactForm) {
        premiumContactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameInput = this.querySelector('#name');
            const emailInput = this.querySelector('#email');
            const subjectInput = this.querySelector('#subject');
            const messageInput = this.querySelector('#message');

            let isValid = true;

            // Remove existing errors
            this.querySelectorAll('.premium-form-error').forEach(el => el.remove());
            this.querySelectorAll('.premium-form-input.error, .premium-form-textarea.error').forEach(el => {
                el.classList.remove('error');
            });

            // Validate name
            if (!nameInput || !nameInput.value.trim()) {
                showPremiumError(nameInput, 'Please enter your full name.');
                isValid = false;
            }

            // Validate email
            if (!emailInput || !emailInput.value.trim()) {
                showPremiumError(emailInput, 'Please enter your email address.');
                isValid = false;
            } else if (!isValidEmail(emailInput.value)) {
                showPremiumError(emailInput, 'Please enter a valid email address.');
                isValid = false;
            }

            // Validate message
            if (!messageInput || !messageInput.value.trim()) {
                showPremiumError(messageInput, 'Please enter your message.');
                isValid = false;
            }

            if (!isValid) return;

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const subject = subjectInput ? subjectInput.value.trim() : '';
            const message = messageInput.value.trim();

            const whatsappMessage = `*Contact Message - Young and Chosen for Christ*

👤 *Name:* ${name}
📧 *Email:* ${email}
📝 *Subject:* ${subject || 'Not specified'}
💬 *Message:*
${message}`;

            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;
            window.open(whatsappUrl, '_blank');

            // Visual feedback
            const submitBtn = this.querySelector('.premium-submit-btn');
            const originalText = submitBtn ? submitBtn.innerHTML : '';
            if (submitBtn) {
                submitBtn.innerHTML = '✓ Message Prepared!';
                submitBtn.style.background = 'var(--success)';
                submitBtn.style.borderColor = 'var(--success)';

                setTimeout(function () {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.borderColor = '';
                }, 3000);
            }

            this.reset();
        });
    }

    function showPremiumError(input, message) {
        if (!input) return;
        input.classList.add('error');
        const error = document.createElement('span');
        error.className = 'premium-form-error';
        error.style.cssText = 'color: var(--error); font-size: var(--text-xs); margin-top: 4px; display: block;';
        error.textContent = message;
        input.parentNode.appendChild(error);

        input.addEventListener('input', function () {
            this.classList.remove('error');
            const err = this.parentNode.querySelector('.premium-form-error');
            if (err) err.remove();
        }, { once: true });
    }
});
