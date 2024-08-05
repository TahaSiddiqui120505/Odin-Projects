document.getElementById('miami-form').addEventListener('submit', function(event) {
    const password = document.getElementById('password').value;
    const cpassword = document.getElementById('cpassword').value;
    const errorElement = document.getElementById('error');

    if (password !== cpassword) {
        errorElement.textContent = "Passwords do not match.";
        event.preventDefault(); 
        errorElement.textContent = ""; 
    }
});