const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("eyeicon");
const signUp = document.getElementById("signup");

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
userName.addEventListener('input', changeButtonColor);

function changeButtonColor() {
    signUp.classList.add("button-active-color")
}


signUp.addEventListener('click', signupSuccess);

function signupSuccess(e) {
    e.preventDefault();

    let userEmail = email.value;
    let userPassword = password.value;
    

    window.localStorage.setItem("userEmail", userEmail);
    window.localStorage.setItem("userPassword", userPassword);
}
