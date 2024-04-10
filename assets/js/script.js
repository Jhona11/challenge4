document.addEventListener('DOMContentLoaded', function () {
    const blogForm = document.getElementById('blogForm');
    const errorMessage = document.getElementById('errorMessage');
  
    blogForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
  
        if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
            errorMessage.style.display = 'block';
            return;
        }
  
        const blogPost = {
            username, // Include username in blog post data
            title,
            content
        };
        // Store blog post data to localStorage
        const existingPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
        existingPosts.push(blogPost);
        localStorage.setItem('blogPosts', JSON.stringify(existingPosts));
        // Redirect to blog.html
        window.location.href = 'blog.html';
    });

    // Initial state
    let isDarkMode = false;

    // Function to toggle brightness
    function toggleBrightness() {
        const landingPage = document.querySelector('.landing-page');
        const body = document.body;
        const inputFields = document.querySelectorAll('input[type="text"], textarea');
        const formLabels = document.querySelectorAll('label');

        // Toggle mode
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            // Change to dark mode
            landingPage.style.backgroundColor = '#000';
            body.style.backgroundColor = '#000';
            inputFields.forEach(input => {
                input.style.backgroundColor = '#000';
                input.style.color = '#fff';
            });
            formLabels.forEach(label => {
                label.style.color = '#fff';
            });
        } else {
            // Change to light mode
            landingPage.style.backgroundColor = '';
            body.style.backgroundColor = '';
            inputFields.forEach(input => {
                input.style.backgroundColor = '';
                input.style.color = '';
            });
            formLabels.forEach(label => {
                label.style.color = '';
            });
        }
    }

    // Add event listener to brightness toggle
    const brightnessToggle = document.getElementById('brightnessToggle');
    brightnessToggle.addEventListener('click', toggleBrightness);
});
