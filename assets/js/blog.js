document.addEventListener('DOMContentLoaded', function () {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    const blogPostsContainer = document.getElementById('blogPosts');

    // Display each blog post
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.classList.add('blog-post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <hr> <!-- Horizontal line -->
            <p>${post.content}</p>
            <p><strong>Posted by: ${post.username}</strong></p> <!-- Moved below content -->
        `;
        blogPostsContainer.appendChild(postElement);
    });

    // Initial state
    let isDarkMode = false;

    // Function to toggle brightness
    function toggleBrightness() {
        const body = document.body;
        const blogPosts = document.querySelectorAll('.blog-post');
        const lines = document.querySelectorAll('hr');
        const textElements = document.querySelectorAll('body, h1, button, footer, footer a');

        // Toggle mode
        isDarkMode = !isDarkMode;

        if (isDarkMode) {
            // Change to dark mode
            body.style.backgroundColor = '#000';
            blogPosts.forEach(post => {
                post.style.backgroundColor = '#000';
                post.style.color = '#fff';
            });
            lines.forEach(line => {
                line.style.borderColor = '#fff';
            });
            textElements.forEach(element => {
                element.style.color = '#fff';
            });
        } else {
            // Change to light mode
            body.style.backgroundColor = '#fff';
            blogPosts.forEach(post => {
                post.style.backgroundColor = '#fff';
                post.style.color = '#000';
            });
            lines.forEach(line => {
                line.style.borderColor = '#000';
            });
            textElements.forEach(element => {
                element.style.color = '#000';
            });
        }
    }

    // Add event listener to brightness toggle
    const brightnessToggle = document.getElementById('brightnessToggle');
    brightnessToggle.addEventListener('click', toggleBrightness);

    // Add "made with (heart icon) by Jhonalyn" below the second bold line
    const attribution = document.getElementById('attribution');
    attribution.innerHTML = 'Made with &#10084; by Jhonalyn';
});

function goBack() {
    window.history.back();
}
