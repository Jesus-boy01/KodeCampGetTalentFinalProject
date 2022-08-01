const userName = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const togglePassword = document.getElementById("eyeicon");
const signUp = document.getElementById("signup");
const successModal = document.querySelector(".success-modal");
const passUnmatch = document.querySelector(".pass-unmatch");
const userSelect = document.getElementById("user-select");

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});

password.addEventListener('focus', iconDisplay);
password.addEventListener('input', changeButtonColor);
password.addEventListener('input', signUpModal);
confirmPassword.addEventListener('input', changeButtonColor);
confirmPassword.addEventListener('input', signUpModal);
userSelect.addEventListener("change", signUpModal);

function iconDisplay() {
    if (!(onfocus)) {
        // togglePassword.classList.add("icon-display");
    }
}

email.addEventListener('input', changeButtonColor);
email.addEventListener('input', signUpModal);
userName.addEventListener('input', changeButtonColor);
userName.addEventListener('input', signUpModal);

function changeButtonColor() {
    signUp.classList.add("button-active-color");
}


signUp.addEventListener('click', signupSuccess);

function signupSuccess(e) {
    e.preventDefault();

    if((email.value !== "") && (password.value !== "") && (userSelect.value !== "")) {
        let userEmail = email.value;
        let userPassword = password.value;
        let userPost = userSelect.value;
        
    
        window.localStorage.setItem("userEmail", userEmail);
        window.localStorage.setItem("userPassword", userPassword);
        window.localStorage.setItem("userPost", userPost);
    }

    if (password.value !== confirmPassword.value) {
        passUnmatch.innerHTML = "Password Unmatched!";
    }
}

function signUpModal() {
    let passValue = password.value;
    let passLength = passValue.length;
    
    if ((userName.value && email.value && password.value && confirmPassword.value) && (passLength >= 8) && (password.value === confirmPassword.value)) {
        if (userSelect.value === "Recruit") {
            successModal.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog  modal-dialog-centered modal-fullscreen">
                                        <div class="modal-content border-0">
                                            <div class="modal-body container">
                                                <section id="header-section">
                                                    <div class="" id="wrapper">
                                                        <nav class="navbar navbar-expand-lg navbar-light">
                                                            <div class="container-fluid ps-lg-5 ps-md-0 ps-0 pb-lg-0 pb-md-5 pb-3">
                                                                <a href="index.html"><img src="img/logo.png" class="img-fluid" alt="Logo"></a>
                                                            </div>
                                                        </nav>
                                                    </div>
                                                </section>
                                                <div class="container w-50" id="mod-cover">
                                                    <section id="sign-up-success-section" class="">
                                                        <div class="" id="sign-up-wrapper">
                                                            <div class="sign-up-success text-center">
                                                                <div class="sign-up-success-head border border-2" style="background-color: rgba(39, 118, 234, 1); border-radius: 15px 15px 0 0; border-color: rgba(39, 118, 234, 1) !important;">
                                                                    <div class="sign-up-title text-white py-2">
                                                                        <h3 class="display-6">Awesome!</h3>
                                                                    </div>
                                                                </div>
                                                                <div class="sign-up-success-content w-100 border border-top-0 border-2" style="border-radius: 0 0 15px 15px; border-color: rgba(39, 118, 234, 1) !important;">
                                                                    <div class="sign-up-image py-3 mx-auto">
                                                                        <img src="img/sign-up-success.png" class="img-fluid" alt="Sign Up Success">
                                                                    </div>
                                                                    <div class="sign-up-success-info pb-lg-3">
                                                                        <p class="mx-2" style="color: #555;">Your account has been successfully created!</p>
                                                                    </div>
                                                                    <div class="sign-up-success-button mb-lg-5 mb-md-4 mb-4">
                                                                        <a href="home-recruit.html" class="text-decoration-none text-center fs-lg-5 btn btn-primary su-btn py-2 mx-auto" style="width: 45%; background-color: #2776EA; border-color: #2776EA;">Get Started</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>`;
        } else if (userSelect.value === "Recruiter"){
            successModal.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                        <div class="modal-dialog  modal-dialog-centered modal-fullscreen">
                                        <div class="modal-content border-0">
                                            <div class="modal-body container">
                                                <section id="header-section">
                                                    <div class="" id="wrapper">
                                                        <nav class="navbar navbar-expand-lg navbar-light">
                                                            <div class="container-fluid ps-lg-5 ps-md-0 ps-0 pb-lg-0 pb-md-5 pb-3">
                                                                <a href="index.html"><img src="img/logo.png" class="img-fluid" alt="Logo"></a>
                                                            </div>
                                                        </nav>
                                                    </div>
                                                </section>
                                                <div class="container w-50" id="mod-cover">
                                                    <section id="sign-up-success-section" class="">
                                                        <div class="" id="sign-up-wrapper">
                                                            <div class="sign-up-success text-center">
                                                                <div class="sign-up-success-head border border-2" style="background-color: rgba(39, 118, 234, 1); border-radius: 15px 15px 0 0; border-color: rgba(39, 118, 234, 1) !important;">
                                                                    <div class="sign-up-title text-white py-2">
                                                                        <h3 class="display-6">Awesome!</h3>
                                                                    </div>
                                                                </div>
                                                                <div class="sign-up-success-content w-100 border border-top-0 border-2" style="border-radius: 0 0 15px 15px; border-color: rgba(39, 118, 234, 1) !important;">
                                                                    <div class="sign-up-image py-3 mx-auto">
                                                                        <img src="img/sign-up-success.png" class="img-fluid" alt="Sign Up Success">
                                                                    </div>
                                                                    <div class="sign-up-success-info pb-lg-3">
                                                                        <p class="mx-2" style="color: #555;">Your account has been successfully created!</p>
                                                                    </div>
                                                                    <div class="sign-up-success-button mb-lg-5 mb-md-4 mb-4">
                                                                        <a href="home.html" class="text-decoration-none text-center fs-lg-5 btn btn-primary su-btn py-2 mx-auto" style="width: 45%; background-color: #2776EA; border-color: #2776EA;">Get Started</a>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </section>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>`;
        }
    }
}