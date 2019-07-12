//js
const flexStart = document.querySelector("[ data-flex-start ]");
const flexStartDiv = document.querySelector("[ data-flex-start-div ]");

flexStart.addEventListener("click", () => {
    flexStartDiv.classList.toggle("hidden");
});

const flexend = document.querySelector("[ data-flex-end ]");
const flexendDiv = document.querySelector("[ data-flex-end-div ]");

flexend.addEventListener("click", () => {
    flexendDiv.classList.toggle("hidden");
});

const flexcenter = document.querySelector("[ data-flex-center ]");
const flexcenterDiv = document.querySelector("[ data-flex-center-div ]");

flexcenter.addEventListener("click", () => {
    flexcenterDiv.classList.toggle("hidden");
});

const flexSB = document.querySelector("[ data-flex-SB ]");
const flexSBDiv = document.querySelector("[ data-flex-SB-div ]");

flexSB.addEventListener("click", () => {
    flexSBDiv.classList.toggle("hidden");
});

const flexSA = document.querySelector("[ data-flex-SA ]");
const flexSADiv = document.querySelector("[ data-flex-SA-div ]");

flexSA.addEventListener("click", () => {
    flexSADiv.classList.toggle("hidden");
});

const flexSE = document.querySelector("[ data-flex-SE ]");
const flexSEDiv = document.querySelector("[ data-flex-SE-div ]");

flexSE.addEventListener("click", () => {
    flexSEDiv.classList.toggle("hidden");
});