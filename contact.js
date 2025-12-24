// EmailJS Configuration
// Replace these with your actual credentials from EmailJS dashboard
const EMAILJS_SERVICE_ID = 'service_2w1jocv'; // Replace with your Service ID from EmailJS
const EMAILJS_TEMPLATE_ID = 'template_6eg60uy'; // Replace with your Template ID from EmailJS
const EMAILJS_PUBLIC_KEY = 'v1tNNffeO5es5hkrm'; // Replace with your Public Key from EmailJS

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

const contactForm = document.querySelector('.contact-form');
const submitBtn = document.querySelector('.submit-btn');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const subject = document.getElementById('subject').value.trim();
        const message = document.getElementById('message').value.trim();
        
        // Validation
        if (!name || !email || !subject || !message) {
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        if (!isValidEmail(email)) {
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        if (message.length < 10) {
            showNotification('Message must be at least 10 characters long', 'error');
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Prepare template parameters matching your EmailJS template variables
        const templateParams = {
            name: name,
            email: email,
            subject: subject,
            message: message
        };
        
        // Send email via EmailJS
        emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
            .then((response) => {
                console.log('Email sent successfully:', response);
                showNotification('Message sent successfully! I\'ll get back to you soon.', 'success');
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            })
            .catch((error) => {
                console.error('Error sending email:', error);
                showNotification('Failed to send message. Please try again.', 'error');
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
            });
    });
    
    // Real-time form validation
    const inputs = contactForm.querySelectorAll('input, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                validateField(input);
            }
        });
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Field validation function
function validateField(field) {
    const value = field.value.trim();
    let isValid = true;
    
    if (field.id === 'name' && value.length < 2) {
        isValid = false;
    }
    
    if (field.id === 'email' && !isValidEmail(value)) {
        isValid = false;
    }
    
    if (field.id === 'subject' && value.length < 3) {
        isValid = false;
    }
    
    if (field.id === 'message' && value.length < 10) {
        isValid = false;
    }
    
    if (isValid) {
        field.classList.remove('error');
    } else {
        field.classList.add('error');
    }
    
    return isValid;
}

// Notification function
function showNotification(message, type) {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('hide');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Smooth scroll for links
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
