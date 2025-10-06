const signUp = document.querySelector("[data-signUp]");
const spanError = document.querySelector("span#error");
const emailInput = signUp.querySelector("input[type='email']");

function isValid() {
  const valid = emailInput.checkValidity();

  spanError.parentElement.classList.toggle("show", !valid);
  spanError.classList.toggle("show", !valid);

  spanError.setAttribute("aria-hidden", valid);
}

emailInput.addEventListener("input", isValid);

signUp.addEventListener("submit", (e) => {
  isValid();
  if (!emailInput.checkValidity()) e.preventDefault();
});
