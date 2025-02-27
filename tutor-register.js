
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
