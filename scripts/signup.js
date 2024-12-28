// Basic form validation and logging input data
document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const countryCode = document.getElementById('country-code').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Phone: ${countryCode} ${phone}`);
    console.log(`Password: ${password}`);

    alert('Signup successful! Check the console for details.');
});
