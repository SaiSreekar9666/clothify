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
  // Elements
const loginPage = document.getElementById('login-page');
const homePage = document.getElementById('home-page');
const mainHeader = document.getElementById('main-header');
const userProfile = document.getElementById('user-profile');
const userNameElement = document.getElementById('user-name');
const userAvatar = document.getElementById('user-avatar');

document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
      const response = await fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
          alert(data.message);
          // Redirect to dashboard or another page
          window.location.href = "../views/afterlogin.html";
      } else {
          alert(data.message);
      }
  } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
  }
});

// Handle logout
function logout() {
  // Hide user profile
  userProfile.classList.add('hidden');

  // Navigate back to login page
  homePage.style.display = 'none';
  loginPage.style.display = 'block';
  mainHeader.style.display = 'none';
}

// Initialize
function init() {
  // Show login page by default
  loginPage.style.display = 'block';
  homePage.style.display = 'none';
  mainHeader.style.display = 'none';
}

init();


document.getElementById("toggle-password").addEventListener("click", function () {
  const passwordInput = document.getElementById("password");
  const icon = this;

  // Toggle password visibility
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    icon.textContent = "🙈"; // Change to "eye-off" icon
  } else {
    passwordInput.type = "password";
    icon.textContent = "👁️"; // Change to "eye-on" icon
  }
});

