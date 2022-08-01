const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const togglePassword = document.getElementById("eyeicon");
const sendBtn = document.getElementById("send-btn");
const successModal = document.getElementById("success-modal");
const passLengthError = document.querySelector(".pass-length-error");
const passUnmatch = document.querySelector(".pass-unmatch");

togglePassword.addEventListener('click', function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("bi-eye");
});


password.addEventListener('focus', iconDisplay);
confirmPassword.addEventListener('focus', iconDisplay);
password.addEventListener('input', changeButtonColor);
confirmPassword.addEventListener('input', changeButtonColor);
email.addEventListener('input', changeButtonColor);
password.addEventListener('input', resetValidation);
confirmPassword.addEventListener('input', resetValidation);
email.addEventListener('input', resetValidation);

function iconDisplay() {
    if (!(onfocus)) {
        togglePassword.classList.add("icon-display");
    }
}

function changeButtonColor() {
    sendBtn.classList.add("button-active-color")
}

sendBtn.addEventListener('click', resetSuccess);

function resetSuccess(e) {
    e.preventDefault();

    resetValidation();

    if (password.value.length < 8) {
        passLengthError.innerHTML = "Password must be at least 8 characters!";
    }

    if (password.value !== confirmPassword) {
        passUnmatch.innerHTML = "Password Unmatched!";
    }
}

function resetValidation() {
    let passValue = password.value;
    let passLength = passValue.length
    if ((email.value && passValue && confirmPassword.value) && (passLength >= 8) && (password.value === confirmPassword.value)) {
        successModal.innerHTML = `<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                    <div class="modal-dialog  modal-dialog-centered modal-fullscreen">
                                        <div class="modal-content border-0">
                                            <div class="modal-body container">
                                                <section id="header-section">
                                                    <div class="container" id="wrapper">
                                                        <nav class="navbar navbar-expand-lg navbar-light">
                                                            <div class="container-fluid ps-md-0">
                                                                <a href="index.html"><img src="img/logo.png" class="img-fluid" alt="Logo"></a>
                                                            </div>
                                                        </nav>
                                                    </div>
                                                </section>
                                                <div class="container w-50" id="mod-cover">
                                                    <section id="password-reset-success-section" class="mt-lg-5 mt-md-5 mt-5">
                                                        <div class="container" id="password-reset-wrapper">
                                                            <div class="password-reset-success text-center">
                                                                <div class="password-reset-success-head border border-2" style="background-color: rgba(39, 118, 234, 1); border-radius: 15px 15px 0 0; border-color: rgba(39, 118, 234, 1) !important;">
                                                                    <div class="password-reset-title text-white py-2">
                                                                        <h3 class="display-6">Done!</h3>
                                                                    </div>
                                                                </div>
                                                                <div class="password-reset-success-content border border-top-0 border-2" style="border-radius: 0 0 15px 15px; border-color: rgba(39, 118, 234, 1)!important;">
                                                                    <div class="password-reset-image py-3 mx-auto">
                                                                        <img src="img/password-reset-success.png" class="img-fluid" alt="Password Reset Success">
                                                                    </div>
                                                                    <div class="password-reset-info pb-lg-3">
                                                                        <p class="mx-2" style="color: #555;">Email sent, password reset successful.</p>
                                                                    </div>
                                                                    <div class="password-reset-button mb-lg-5 mb-md-4 mb-4">
                                                                        <a href="sign-in.html" class="text-decoration-none text-center fs-lg-5 btn btn-primary py-2 mx-auto" style="width: 40%; background-color: #2776EA; border-color: #2776EA;">Sign In</a>
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