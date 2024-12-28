// Utility function to switch pages with smooth animation
function switchPage(currentPageId, nextPageId) {
    const currentPage = document.getElementById(currentPageId);
    const nextPage = document.getElementById(nextPageId);
  
    // Add roll-out effect to the current page
    currentPage.classList.add('roll-out');
  
    // Wait for the animation to finish before hiding the current page
    currentPage.addEventListener(
      'animationend',
      function () {
        currentPage.classList.remove('active', 'roll-out');
        nextPage.classList.add('active'); // Show the next page
      },
      { once: true } // Ensures the event listener runs only once
    );
  }
  
  // Login logic
  document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();
    switchPage('login-page', 'home-page');
  });
  
  // Forgot password navigation
  document.getElementById('forgot-password').addEventListener('click', function (event) {
    event.preventDefault();
    switchPage('login-page', 'forgot-password-page');
  });
  
  // Back to login from forgot password
  document.getElementById('back-to-login').addEventListener('click', function (event) {
    event.preventDefault();
    switchPage('forgot-password-page', 'login-page');
  });
  
  // Sign-up navigation
  document.getElementById('sign-up').addEventListener('click', function (event) {
    event.preventDefault();
    switchPage('login-page', 'sign-up-page');
  });
  
  // Back to login from sign-up
  document.getElementById('back-to-login-sign-up').addEventListener('click', function (event) {
    event.preventDefault();
    switchPage('sign-up-page', 'login-page');
  });
  
  // Logout logic
  function logout() {
    switchPage('home-page', 'login-page');
  }
  
  // Initially show the login page
  document.getElementById('login-page').classList.add('active');
  // Handle Sign-Up Form Submission
document.getElementById('sign-up-form').addEventListener('submit', function (event) {
    event.preventDefault();
    
    // Collect the form data
    const name = document.getElementById('sign-up-name').value;
    const phone = document.getElementById('sign-up-phone').value;
    const email = document.getElementById('sign-up-email').value;
    const password = document.getElementById('sign-up-password').value;
    const confirmPassword = document.getElementById('sign-up-confirm-password').value;
  
    // Validate passwords
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
  
    // Simulate a successful sign-up process
    alert(`Sign-Up Successful!\nName: ${name}\nPhone: ${phone}\nEmail: ${email}`);
    
    // Redirect to login page
    document.getElementById('sign-up-page').classList.remove('active');
    document.getElementById('login-page').classList.add('active');
  });
  