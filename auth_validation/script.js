document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('usernameError');
    const passwordError = document.getElementById('passwordError');
    
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    // Login validation
    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        
        let valid = true;
        
        // Clear previous errors
        usernameError.textContent = '';
        passwordError.textContent = '';

        if (username.value.trim() === '') {
            usernameError.textContent = 'Username is required';
            valid = false;
        }

        if (password.value.trim() === '') {
            passwordError.textContent = 'Password is required';
            valid = false;
        }

        if (valid) {
            alert('Login successful!');
            swapImage();
        }
    });

    // Image slide and swap feature
    function swapImage() {
        slides[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add('active');
        slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Automatically swap images every 3 seconds
    setInterval(swapImage, 3000);
});
