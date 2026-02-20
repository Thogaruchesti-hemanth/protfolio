/**
 * Contact Form Handler
 * Thogaruchesti Hemanth Portfolio
 * 
 * This file handles the contact form submission using EmailJS.
 */

// Initialize EmailJS with your Public Key
// Replace 'YOUR_PUBLIC_KEY' with your actual key from EmailJS Account > Account > API Keys
(function () {
    if (typeof emailjs !== 'undefined') {
        // Replace with your actual EmailJS Public Key
        emailjs.init("s95iHEs-uGJbosSiH");
    }
})();

/**
 * sendEmail function called from the HTML button
 * Handles validation, loading states, and sending via EmailJS
 */
function sendEmail() {
    const btn = document.getElementById('sendBtn');
    const form = document.getElementById('portfolioContactForm');

    // Get form values
    const name = document.getElementById('user_name').value.trim();
    const email = document.getElementById('user_email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic Validation
    if (!name || !email || !message) {
        showStatus('Please fill in all required fields.', 'error');
        return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showStatus('Please enter a valid email address.', 'error');
        return;
    }

    // Update button state for "Smooth" experience
    const originalBtnText = btn.innerHTML;
    btn.innerHTML = '<span class="sending-spinner"></span> Sending...';
    btn.disabled = true;

    // Prepare template parameters
    // These should match the variable names in your EmailJS template
    const templateParams = {
        from_name: name,
        from_email: email,
        subject: subject || "Portfolio Inquiry",
        message: message
    };

    /**
     * NOTE FOR USER:
     * 1. Sign up at https://www.emailjs.com/
     * 2. Create a Email Service (e.g., Gmail)
     * 3. Create a Email Template
     * 4. Replace the following IDs with your own:
     */
    const SERVICE_ID = 'service_3vgndrf';
    const TEMPLATE_ID = 'template_kz2dkis';

    emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
        .then(function (response) {
            console.log('SUCCESS!', response.status, response.text);
            showStatus('Success! Your message has been sent. I\'ll get back to you soon!', 'success');
            form.reset();
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
        }, function (error) {
            console.error('FAILED...', error);
            showStatus('Oops! Something went wrong. Please try again or email me directly at saihemanth225@gmail.com', 'error');
            btn.innerHTML = originalBtnText;
            btn.disabled = false;
        });
}

/**
 * Helper to show status messages with smooth transitions
 * @param {string} message - The text to display
 * @param {string} type - 'success' or 'error'
 */
function showStatus(message, type) {
    const statusMsg = document.getElementById('statusMessage');

    // Set styles based on type
    if (type === 'success') {
        statusMsg.style.backgroundColor = 'rgba(40, 167, 69, 0.15)';
        statusMsg.style.color = '#28a745';
        statusMsg.style.border = '1px solid rgba(40, 167, 69, 0.3)';
    } else {
        statusMsg.style.backgroundColor = 'rgba(220, 53, 69, 0.15)';
        statusMsg.style.color = '#dc3545';
        statusMsg.style.border = '1px solid rgba(220, 53, 69, 0.3)';
    }

    statusMsg.innerText = message;
    statusMsg.style.display = 'block';

    // Smooth scroll to the message so the user sees it
    statusMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

    // Auto-hide after 7 seconds for a cleaner look
    setTimeout(() => {
        statusMsg.style.opacity = '0';
        setTimeout(() => {
            statusMsg.style.display = 'none';
            statusMsg.style.opacity = '1'; // Reset for next use
        }, 500);
    }, 7000);
}