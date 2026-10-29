

document.addEventListener('DOMContentLoaded', function () {
    // Create the overlay element once, reused for every image
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Close image">&times;</button>
        <img class="lightbox-image" src="" alt="">
    `;
    document.body.appendChild(overlay);

    const lightboxImage = overlay.querySelector('.lightbox-image');
    const closeBtn = overlay.querySelector('.lightbox-close');

    // Open the lightbox when a gallery image is clicked
    const galleryImages = document.querySelectorAll('.lightbox-img');
    galleryImages.forEach(function (img) {
        img.style.cursor = 'pointer';
        img.addEventListener('click', function () {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt;
            overlay.classList.add('is-open');
        });
    });

    // Close when clicking the close button or the dark background
    function closeLightbox() {
        overlay.classList.remove('is-open');
    }
    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) closeLightbox();
    });

    // Close on Escape key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') closeLightbox();
    });
});

// Live menu search/filter
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('menu-search');
    if (!searchInput) return; 

    const menuItems = document.querySelectorAll('.offer-list li');

    searchInput.addEventListener('input', function () {
        const query = searchInput.value.toLowerCase().trim();
        menuItems.forEach(function (item) {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(query) ? '' : 'none';
        });
    });
});

// FAQ accordion: click a question to expand/collapse its answer
document.addEventListener('DOMContentLoaded', function () {
    const triggers = document.querySelectorAll('.accordion-trigger');

    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function () {
            const item = trigger.closest('.accordion-item');
            const panel = item.querySelector('.accordion-panel');
            const isOpen = item.classList.contains('is-open');

            document.querySelectorAll('.accordion-item.is-open').forEach(function (openItem) {
                if (openItem !== item) {
                    openItem.classList.remove('is-open');
                    openItem.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
                }
            });

            item.classList.toggle('is-open', !isOpen);
            trigger.setAttribute('aria-expanded', String(!isOpen));
        });
    });
});

// Enquiry form: validation + simple confirmation response
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('enquiry-form');
    if (!form) return; 

    const fullName = document.getElementById('FullName');
    const email = document.getElementById('emailAddress');
    const phone = document.getElementById('phone');
    const message = document.getElementById('message');
    const responseBox = document.getElementById('enquiry-response');

    function setError(fieldId, text) {
        document.getElementById('error-' + fieldId).textContent = text;
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    function isValidPhone(value) {
        // Allows digits, spaces, +, (), - and must have at least 9 digits total
        const digitsOnly = value.replace(/\D/g, '');
        return value === '' || digitsOnly.length >= 9;
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        // Reset previous errors
        ['FullName', 'emailAddress', 'phone', 'message'].forEach(function (id) {
            setError(id, '');
        });

        if (fullName.value.trim().length < 2) {
            setError('FullName', 'Please enter your full name.');
            isValid = false;
        }

        if (!isValidEmail(email.value.trim())) {
            setError('emailAddress', 'Please enter a valid email address.');
            isValid = false;
        }

        if (!isValidPhone(phone.value.trim())) {
            setError('phone', 'Please enter a valid phone number (at least 9 digits).');
            isValid = false;
        }

        if (message.value.trim().length < 5) {
            setError('message', 'Please enter a short message about your enquiry.');
            isValid = false;
        }

        if (!isValid) {
            responseBox.hidden = true;
            return;
        }

        // Simple fixed confirmation message
        responseBox.textContent = 'Thanks, ' + fullName.value.trim() + '! Your enquiry has been received. We\'ll get back to you about availability and pricing within 24 hours.';
        responseBox.hidden = false;
        form.reset();
    });
});

// Contact form: validation, then compile into an email the user sends
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');
    if (!form) return; // only runs on contact.html

    const name = document.getElementById('contactName');
    const email = document.getElementById('contactEmail');
    const type = document.getElementById('messageType');
    const message = document.getElementById('contactMessage');
    const responseBox = document.getElementById('contact-response');

    const RECIPIENT_EMAIL = 'info@mahlogonologrill.co.za';

    function setError(fieldId, text) {
        document.getElementById('error-' + fieldId).textContent = text;
    }

    function isValidEmail(value) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
    }

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        setError('contactName', '');
        setError('contactEmail', '');
        setError('contactMessage', '');

        if (name.value.trim().length < 2) {
            setError('contactName', 'Please enter your full name.');
            isValid = false;
        }

        if (!isValidEmail(email.value.trim())) {
            setError('contactEmail', 'Please enter a valid email address.');
            isValid = false;
        }

        if (message.value.trim().length < 5) {
            setError('contactMessage', 'Please enter a message.');
            isValid = false;
        }

        if (!isValid) {
            responseBox.hidden = true;
            return;
        }

        // Compile the validated info into an email, then open the user's email client
        const subject = encodeURIComponent('[' + type.value + '] Message from ' + name.value.trim());
        const body = encodeURIComponent(
            'Name: ' + name.value.trim() + '\n' +
            'Email: ' + email.value.trim() + '\n' +
            'Type: ' + type.value + '\n\n' +
            'Message:\n' + message.value.trim()
        );

        const mailtoLink = 'mailto:' + RECIPIENT_EMAIL + '?subject=' + subject + '&body=' + body;
        window.location.href = mailtoLink;

        responseBox.textContent = 'Your message has been compiled — your email app should now open so you can send it to us.';
        responseBox.hidden = false;
    });
});