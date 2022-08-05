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
    signIn.classList.add("button-active-color");
}

signIn.addEventListener('click', signinSuccess);

function signinSuccess(e) {
    e.preventDefault();

    formValidation();
}

function formValidation() {
    for (let key in userDetails) { 
        if ((userDetails["email"] === email.value) && (userDetails["password"] === password.value) && (userDetails["position"] === "Recruit")) {
            window.location.href = "home-recruit.html";
        } else if ((userDetails["email"] === email.value) && (userDetails["password"] === password.value) && (userDetails["position"] === "Recruiter")) {
            window.location.href = "home.html";
        }
    }
    
    if (!((userDetails["email"] === email.value) && (userDetails["password"] === password.value) && (userDetails["position"] === "Recruit")) && !((userDetails["email"] === email.value) && (userDetails["password"] === password.value) && (userDetails["position"] === "Recruiter")))
    alert("This email is not connected to an account\nKindly create one");
}

const userDetails = {
    email: localStorage.getItem("userEmail"),
    password: localStorage.getItem("userPassword"),
    position: localStorage.getItem("userPost")
};