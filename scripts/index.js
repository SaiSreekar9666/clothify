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
