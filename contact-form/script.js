document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || subject === '' || message === '') {
        alert('All fields are required.');
        return;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    displayFormData(name, email, subject, message);

    // Here you can add code to send the form data to your server
    // For example, using fetch or XMLHttpRequest
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function displayFormData(name, email, subject, message) {
    const formOutput = document.getElementById('formOutput');
    formOutput.innerHTML = `
        <h3>Submitted Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
    `;
    formOutput.style.display = 'block';
}
