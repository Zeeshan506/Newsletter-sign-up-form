const form = document.getElementById("form");
const emailRegex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
const formContainer = document.getElementById("formContainer");
const SuccessMessage = document.getElementById("successMessage");
const Dismiss = document.getElementById("Dismiss");
const emailBox = document.getElementById("email");
const errorText = document.getElementById("errorText");

function clearError() {
  errorText.classList.add("hidden");
  emailBox.classList.remove("border-[#ff6257ff]");
  emailBox.classList.remove("bg-[#ff6257ff]/20");
}

function isValidEmail(email) {
  return emailRegex.test(email);
}

Dismiss.addEventListener("click", () => {
  SuccessMessage.classList.add("hidden");
  formContainer.classList.remove("hidden");
  form.reset();
  clearError();
});
function handleSubmit(e) {
  e.preventDefault();
  let email = e.target.email.value;
  if (isValidEmail(email)) {
    clearError();
    formContainer.classList.add("hidden");
    SuccessMessage.classList.remove("hidden");
  } else {
    errorText.classList.remove("hidden");
    emailBox.classList.add("border-[#ff6257ff]");
    emailBox.classList.add("bg-[#ff6257ff]/20");
    setTimeout(() => {
      clearError();
    }, 1500);
  }
}
form.addEventListener("submit", handleSubmit);
