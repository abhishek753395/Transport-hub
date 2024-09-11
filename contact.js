// contact.js
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && phone && message) {
        // Simulate form submission
        alert('Thank you for your message! We will get back to you shortly.');
        
        // Clear form fields
        document.getElementById('contact-form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});
