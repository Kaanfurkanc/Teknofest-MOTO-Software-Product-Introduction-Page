document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const emailBody = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    
    window.location.href = `mailto:psikod.iau@gmail.com?subject=Contact Form Submission&body=${encodeURIComponent(emailBody)}`;
});
