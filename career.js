// career.js
document.getElementById('career-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Gather form data
    const name = document.getElementById('applicant-name').value;
    const email = document.getElementById('applicant-email').value;
    const phone = document.getElementById('applicant-phone').value;
    const resume = document.getElementById('resume').files[0];
    const coverLetter = document.getElementById('cover-letter').value;

    // Basic validation
    if (name && email && phone && resume && coverLetter) {
        // Simulate form submission
        alert('Thank you for your application! We will review your resume and cover letter and get back to you soon.');

        // Clear form fields
        document.getElementById('career-form').reset();
    } else {
        alert('Please fill  out all fields before submitting.');
    }
});
