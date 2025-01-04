function viewCart() {
    alert('Your cart is empty!');
}

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

function showPosition(position) {
    alert(`Latitude: ${position.coords.latitude}, Longitude: ${position.coords.longitude}`);
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert('User denied the request for Geolocation.');
            break;
        case error.POSITION_UNAVAILABLE:
            alert('Location information is unavailable.');
            break;
        case error.TIMEOUT:
            alert('The request to get user location timed out.');
            break;
        case error.UNKNOWN_ERROR:
            alert('An unknown error occurred.');
            break;
    }
}
// // Function to open a modal
// function openLoginModal() {
//     document.getElementById('loginModal').style.display = 'block';
// }

// function openSignupModal() {
//     document.getElementById('signupModal').style.display = 'block';
// }

// // Function to close a modal
// function closeModal(modalId) {
//     document.getElementById(modalId).style.display = 'none';
// }

// // Close modal when clicking outside of it
// window.onclick = function(event) {
//     const loginModal = document.getElementById('loginModal');
//     const signupModal = document.getElementById('signupModal');
//     if (event.target === loginModal) {
//         loginModal.style.display = 'none';
//     } else if (event.target === signupModal) {
//         signupModal.style.display = 'none';
//     }
// };
// Function to navigate to another page
function navigateTo(page) {
    window.location.href = page;
}
function viewCart() {
    document.getElementById('cart-modal').style.display = 'block';
}

function closeCart() {
    document.getElementById('cart-modal').style.display = 'none';
}
function handleSearch(event) {
    event.preventDefault(); // Prevent form from submitting traditionally
    const searchInput = document.getElementById("search-input").value.trim();

    if (searchInput) {
        // Redirect to the search results page with the search term as a query parameter
        window.location.href = `../views/search.html?query=${encodeURIComponent(searchInput)}`;
    } else {
        alert("Please enter a search term!");
    }
}
// Handle dynamic header update
function updateHeader(user) {
    const actionsContainer = document.getElementById('user-actions');
    actionsContainer.innerHTML = `
        <div class="user-profile">
            <img src="../images/default-avatar.png" alt="User Avatar" class="user-avatar">
            <span class="user-name">${user.name}</span>
            <button onclick="logout()">Logout</button>
        </div>
        <button onclick="getLocation()">GPS</button>
    `;
}

// Simulate user login
function loginUser(email) {
    const userName = email.split('@')[0]; // Use part of the email as name
    updateHeader({ name: userName });
}

// Handle logout
function logout() {
    // Clear user profile
    const actionsContainer = document.getElementById('user-actions');
    actionsContainer.innerHTML = `
        <button onclick="navigateTo('../views/login.html')">Login</button>
        <button onclick="navigateTo('../views/signup.html')">Signup</button>
    `;
}

// Handle search functionality
function performSearch() {
    const query = document.getElementById('search-input').value.trim();
    if (query) {
        alert(`Searching for "${query}"...`);
        // Implement actual search logic here (e.g., filter products or send a request)
    } else {
        alert('Please enter a search query.');
    }
}

// Handle GPS functionality
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                alert(`Your location: Latitude ${latitude}, Longitude ${longitude}`);
                // Optionally, fetch nearby stores based on the location
            },
            (error) => {
                alert('Unable to fetch location. Please enable GPS.');
            }
        );
    } else {
        alert('Geolocation is not supported by this browser.');
    }
}

// Example: Simulate login on page load
document.addEventListener('DOMContentLoaded', () => {
    const isLoggedIn = true; // Replace with actual login check
    if (isLoggedIn) {
        loginUser('example@clothify.com'); // Replace with actual user data
    }
});
