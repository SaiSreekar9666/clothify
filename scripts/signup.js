
document.addEventListener('DOMContentLoaded', function () {
    const signupForm = document.getElementById("signup-form");

    if (signupForm) {
        signupForm.addEventListener("submit", async (e) => {
            e.preventDefault();

            const full_name = document.getElementById("name").value;
            const phone_number = document.getElementById("phone").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            try {
                const response = await fetch("http://localhost:3000/signup", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ full_name, phone_number, email, password }),
                });

                // Check if the response is ok (status 200)
                if (response.ok) {
                    const data = await response.json();
                    alert(data.message);
                    window.location.href = "../views/login.html";
                } else {
                    const errorData = await response.text(); // If not OK, get text response (could be HTML)
                    console.error("Error response:", errorData);
                    alert("Something went wrong. Please try again.");
                }
            } catch (error) {
                console.error("Error:", error);
                alert("Network error. Please try again later.");
            }
        });
    } else {
        console.error('Signup form not found!');
    }
});
