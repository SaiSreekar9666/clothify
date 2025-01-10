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
// Redirect to profile page
function navigateToProfile() {
    window.location.href = "../views/profile.html"; // Redirect to profile.html
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
function performSearch() {
    const query = document.getElementById("search-input").value.trim();
    if (query) {
        // Navigate to a search results page or handle the search logic
        alert(`You searched for: ${query}`);
        // Example: Redirect to a search results page
        window.location.href = `../views/search.html?query=${encodeURIComponent(query)}`;
    } else {
        alert("Please enter a search term!");
    }
}


// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//             (position) => {
//                 alert(
//                     `Your current location:\nLatitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`
//                 );
//             },
//             (error) => {
//                 alert("Unable to retrieve your location. Please enable location services.");
//             }
//         );
//     } else {
//         alert("Geolocation is not supported by your browser.");
//     }
// 

document.getElementById("login-form").addEventListener("submit", async (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            window.location.href = "../views/afterlogin.html";
        } else {
            alert(data.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
// document.getElementById("sign-up-form").addEventListener("submit", async (e) => {
//     e.preventDefault();

//     const full_name = document.getElementById("sign-up-name").value;
//     const phone_number = document.getElementById("sign-up-phone").value;
//     const email = document.getElementById("sign-up-email").value;
//     const password = document.getElementById("sign-up-password").value;

//     try {
//         const response = await fetch("http://localhost:3000/signup", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify({ full_name, phone_number, email, password }),
//         });
//         document.addEventListener('DOMContentLoaded', function () {
//             const signupForm = document.getElementById('signup-form');
//             if (signupForm) {
//               signupForm.addEventListener('submit', (e) => {
//                 e.preventDefault();
//                 const data = await response.json();

//                 if (response.ok) {
//                     alert(data.message);
//                     window.location.href = "../views/login.html";
//                 } else {
//                     alert(data.message);
//                 }
//             } catch (error) {
//                 console.error("Error:", error);
//             }
//               });
//             }
//           });
          
document.addEventListener('DOMContentLoaded', function () {
    // Select the form once the DOM is fully loaded
    const signupForm = document.getElementById("sign-up-form");

    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const full_name = document.getElementById("sign-up-name").value;
            const phone_number = document.getElementById("sign-up-phone").value;
            const email = document.getElementById("sign-up-email").value;
            const password = document.getElementById("sign-up-password").value;

            try {
                const response = await fetch("http://localhost:3000/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ full_name, phone_number, email, password }),
                });

                const data = await response.json();

                if (response.ok) {
                    alert(data.message);
                    window.location.href = "../views/login.html";  // Redirect to login page
                } else {
                    alert(data.message);
                }
            } catch (error) {
                console.error("Error:", error);
            }
        });
    } else {
        console.error('Signup form not found!');
    }
});
