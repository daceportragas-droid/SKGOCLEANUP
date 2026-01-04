// Registration Form Handler
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        grade: document.getElementById('grade').value,
        section: document.getElementById('section').value,
        contact: document.getElementById('contact').value,
        email: document.getElementById('email').value,
        friends: document.getElementById('friends').value
    };
    
    console.log('Registration submitted:', formData);
    
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('successMessage').style.display = 'none';
    }, 5000);
});

// Feedback Form Handler
document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const feedbackData = {
        name: document.getElementById('feedbackName').value,
        rating: document.getElementById('rating').value,
        comments: document.getElementById('comments').value
    };
    
    console.log('Feedback submitted:', feedbackData);
    
    // Show success message
    document.getElementById('feedbackSuccess').style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide success message after 5 seconds
    setTimeout(() => {
        document.getElementById('feedbackSuccess').style.display = 'none';
    }, 5000);
});

// FAQ Toggle Function
function toggleFAQ(element) {
    const answer = element.nextElementSibling;
    const arrow = element.querySelector('span');
    
    answer.classList.toggle('active');
    arrow.textContent = answer.classList.contains('active') ? '▲' : '▼';
}

// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});