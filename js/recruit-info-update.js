// Personal Details values

document.querySelector(".recruit-fname-input").value = localStorage.getItem("recruitFirstName");
document.querySelector(".recruit-lname-input").value = localStorage.getItem("recruitLastName");
document.querySelector(".recruit-track-input").value = localStorage.getItem("recruitTrack");
document.querySelector(".recruit-email-input").value = localStorage.getItem("recruitEmail");
document.querySelector(".recruit-phone-input").value = localStorage.getItem("recruitPhone");
document.querySelector(".recruit-address-input").value = localStorage.getItem("recruitAddress");
document.querySelector(".recruit-state-input").value = localStorage.getItem("recruitState");
document.querySelector(".recruit-country-input").value = localStorage.getItem("recruitCountry");


// Experience Values

document.querySelector(".recruit-employer-input").value = localStorage.getItem("recruitEmployer");
document.querySelector(".recruit-position-input").value = localStorage.getItem("recruitPosition");
document.querySelector(".recruit-description-input").value = localStorage.getItem("recruitDescription");
document.querySelector(".recruit-employer2-input").value = localStorage.getItem("recruitEmployer2");
document.querySelector(".recruit-position2-input").value = localStorage.getItem("recruitPosition2");
document.querySelector(".recruit-description2-input").value = localStorage.getItem("recruitDescription2");

const savePd = document.getElementById("save-pd");
const saveExp = document.getElementById("save-exp");

// Personal Details Update

savePd.addEventListener('click', personalDetailsUpdate);
savePd.addEventListener('click', experienceUpdate);

function personalDetailsUpdate() {
    let recruitFirstNameUpdate = document.querySelector(".recruit-fname-input").value;
    window.localStorage.setItem("recruitFirstNameUpdate", recruitFirstNameUpdate);
    console.log(recruitFirstNameUpdate);
    let recruitLastNameUpdate = document.querySelector(".recruit-lname-input").value;
    window.localStorage.setItem("recruitLastNameUpdate", recruitLastNameUpdate);
    console.log(recruitLastNameUpdate);
    let recruitTrackUpdate = document.querySelector(".recruit-track-input").value;
    window.localStorage.setItem("recruitTrackUpdate", recruitTrackUpdate);
    console.log(recruitTrackUpdate);
    let recruitEmailUpdate = document.querySelector(".recruit-email-input").value;
    window.localStorage.setItem("recruitEmailUpdate", recruitEmailUpdate);
    console.log(recruitEmailUpdate);
    let recruitPhoneUpdate = document.querySelector(".recruit-phone-input").value;
    window.localStorage.setItem("recruitPhoneUpdate", recruitPhoneUpdate);
    console.log(recruitPhoneUpdate);
    let recruitAddressUpdate = document.querySelector(".recruit-address-input").value;
    window.localStorage.setItem("recruitAddressUpdate", recruitAddressUpdate);
    console.log(recruitAddressUpdate);
    let recruitStateUpdate = document.querySelector(".recruit-state-input").value;
    window.localStorage.setItem("recruitStateUpdate", recruitStateUpdate);
    console.log(recruitStateUpdate);
    let recruitCountryUpdate = document.querySelector(".recruit-country-input").value;
    window.localStorage.setItem("recruitCountryUpdate", recruitCountryUpdate);
    console.log(recruitCountryUpdate);
}

// Experience Update

saveExp.addEventListener('click', experienceUpdate);
saveExp.addEventListener('click', personalDetailsUpdate);

function experienceUpdate() {
    let recruitEmployerUpdate = document.querySelector(".recruit-employer-input").value;
    window.localStorage.setItem("recruitEmployerUpdate", recruitEmployerUpdate);
    console.log(recruitEmployerUpdate);
    let recruitPositionUpdate = document.querySelector(".recruit-position-input").value;
    window.localStorage.setItem("recruitPositionUpdate", recruitPositionUpdate);
    console.log(recruitPositionUpdate);
    let recruitDescriptionUpdate = document.querySelector(".recruit-description-input").value;
    window.localStorage.setItem("recruitDescriptionUpdate", recruitDescriptionUpdate);
    console.log(recruitDescriptionUpdate);
    let recruitEmployer2Update = document.querySelector(".recruit-employer2-input").value;
    window.localStorage.setItem("recruitEmployer2Update", recruitEmployer2Update);
    console.log(recruitEmployer2Update);
    let recruitPosition2Update = document.querySelector(".recruit-position2-input").value;
    window.localStorage.setItem("recruitPosition2Update", recruitPosition2Update);
    console.log(recruitPosition2Update);
    let recruitDescription2Update = document.querySelector(".recruit-description2-input").value;
    window.localStorage.setItem("recruitDescription2Update", recruitDescription2Update);
    console.log(recruitDescription2Update);
}