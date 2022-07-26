const password = document.getElementById("password");
const togglePassword = document.getElementById("toggle-password");
const email = document.getElementById("email");
const signIn = document.getElementById("signin");
const clearForm = document.getElementById("clear-form");

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

password.addEventListener('focus', iconDisplay);
password.addEventListener('input', changeButtonColor);

function iconDisplay() {
    if (!(onfocus)) {
        // togglePassword.classList.add("icon-display");
    }
}

email.addEventListener('input', changeButtonColor);

function changeButtonColor() {
    signIn.classList.add("button-active-color")
}

signIn.addEventListener('click', signinSuccess);

function signinSuccess(e) {
    e.preventDefault();

    formValidation();
}

function formValidation() {
    for (const details of userDetails) {
        for (let key in details) {
            userValidation(key, details, email, password)
        }
    }
}

function userValidation(key, details, email, password) {
    if ((email.value !== "") && (password.value !== "")) {
        if (key === "email") {
            if (details[key] === email.value) {
                window.location.href = "home.html";
            } else {
                alert(`This email is not connected to an account\nKindly create an account`);
                resetForm();
            }
        } 
        
        if (key === "password") {
            if (details[key] === password.value) {
                window.location.href = "home.html";
            }
        }
    }
}

function resetForm() {
    clearForm.reset();
}

const userDetails = [
    {
        email: localStorage.getItem("userEmail"),
        password: localStorage.getItem("userPassword")
    }
];