document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login button clicked!");
    });
});


document.getElementById("togglePassword").addEventListener("click", function () {
    const passwordInput = document.getElementById("password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        this.classList.replace("fa-eye", "fa-eye-slash");
    } else {
        passwordInput.type = "password";
        this.classList.replace("fa-eye-slash", "fa-eye");
    }
});
