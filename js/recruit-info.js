// Personal Details Update Variables  

let recruitFirstName = document.getElementById("recruit-first-name").innerText;
let recruitLastName = document.getElementById("recruit-last-name").innerText;
let recruitTrack = document.getElementById("recruit-track").innerText;
let recruitEmail = document.getElementById("recruit-email").innerText;
let recruitPhone = document.getElementById("recruit-phone").innerText;
let recruitAddress = document.getElementById("recruit-address").innerText;
let recruitState = document.getElementById("recruit-state").innerText;
let recruitCountry = document.getElementById("recruit-country").innerText;

// Experience Update Variables 

let recruitEmployer = document.querySelector(".recruit-employer").innerText;
let recruitPosition = document.querySelector(".recruit-position").innerText;
let recruitDescription = document.querySelector(".recruit-description").innerText;
let recruitEmployer2 = document.querySelector(".recruit-employer2").innerText;
let recruitPosition2 = document.querySelector(".recruit-position2").innerText;
let recruitDescription2 = document.querySelector(".recruit-description2").innerText;

// Personal Details Store 

window.localStorage.setItem("recruitFirstName", recruitFirstName);
window.localStorage.setItem("recruitLastName", recruitLastName);
window.localStorage.setItem("recruitTrack", recruitTrack);
window.localStorage.setItem("recruitEmail", recruitEmail);
window.localStorage.setItem("recruitPhone", recruitPhone);
window.localStorage.setItem("recruitAddress", recruitAddress);
window.localStorage.setItem("recruitState", recruitState);
window.localStorage.setItem("recruitCountry", recruitCountry);

// Experience Store

window.localStorage.setItem("recruitEmployer", recruitEmployer);
window.localStorage.setItem("recruitPosition", recruitPosition);
window.localStorage.setItem("recruitDescription", recruitDescription);
window.localStorage.setItem("recruitEmployer2", recruitEmployer2);
window.localStorage.setItem("recruitPosition2", recruitPosition2);
window.localStorage.setItem("recruitDescription2", recruitDescription2);


// Personal Details Update 

if (document.referrer === "https://jesus-boy01.github.io/KodeCampGetTalentFinalProject/recruit-info-update.html") {
    renderPersonalDetailsUpdate();
    renderExperienceUpdate();
} else if (document.referrer === "http://127.0.0.1:5500/recruit-info-update.html") {
    renderPersonalDetailsUpdate();
    renderExperienceUpdate();
}

function renderPersonalDetailsUpdate() {
    document.querySelector(".recruit-first-name-update").innerText = localStorage.getItem("recruitFirstNameUpdate");
    document.querySelector(".recruit-last-name-update").innerText = localStorage.getItem("recruitLastNameUpdate");
    document.querySelector(".recruit-track-update").innerText = localStorage.getItem("recruitTrackUpdate");
    document.querySelector(".recruit-email-update").innerText = localStorage.getItem("recruitEmailUpdate");
    document.querySelector(".recruit-phone-update").innerText = localStorage.getItem("recruitPhoneUpdate");
    document.querySelector(".recruit-address-update").innerText = localStorage.getItem("recruitAddressUpdate");
    document.querySelector(".recruit-state-update").innerText = localStorage.getItem("recruitStateUpdate");
    document.querySelector(".recruit-country-update").innerText = localStorage.getItem("recruitCountryUpdate");
}

// Experience Update

function renderExperienceUpdate() {
    document.getElementById("recruit-employer-update").innerText = localStorage.getItem("recruitEmployerUpdate");
    document.getElementById("recruit-position-update").innerText = localStorage.getItem("recruitPositionUpdate");
    document.getElementById("recruit-description-update").innerText = localStorage.getItem("recruitDescriptionUpdate");
    document.getElementById("recruit-employer2-update").innerText = localStorage.getItem("recruitEmployer2Update");
    document.getElementById("recruit-position2-update").innerText = localStorage.getItem("recruitPosition2Update");
    document.getElementById("recruit-description2-update").innerText = localStorage.getItem("recruitDescription2Update");
}