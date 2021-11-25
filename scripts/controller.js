const inputForm = document.querySelector(".emailForm");
const error = document.querySelector(".error");
const errorText = document.querySelector(".errorText");

let emailId = "";

inputForm.addEventListener("input", function (e) {
  emailId = inputForm.value;

  if (!isEmailValid(emailId)) {
    renderError(true);
  } else {
    renderError(false);
  }
});

const isEmailValid = function (email) {
  if ((email.includes("@") && email.includes(".")) || email === "") {
    return true;
  }
  return false;
};

const renderError = function (isNotValid) {
  if (isNotValid) {
    error.innerHTML = `<img class="errorIcon" src="images/icon-error.svg" />`;
    errorText.style.visibility = "visible";
  } else {
    error.innerHTML = "";
    errorText.style.visibility = "hidden";
  }
};
//Changing the hero image based on the screen width
const heroImg = document.querySelector(".heroImg");
var width = screen.width;

if (width < 500) {
  heroImg.src = "images/hero-mobile.jpg";
}
