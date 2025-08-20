# Newsletter Sign-up Form with Success Message

---

## ![Screenshot](/assets/images/image.png)

## Overview

This is my solution to the [Frontend Mentor Newsletter Sign-up Form with Success Message challenge](#).  
The project required building a **responsive newsletter form** with email validation, error handling, and a success message modal.  
It was implemented using **HTML**, **Tailwind CSS**, and **Vanilla JavaScript**.

## The Challenge

- Replicate the given **Newsletter Form** as closely as possible.
- Ensure responsiveness across mobile, tablet, and desktop devices.
- Implement **form validation** with clear error states.
- Display a **success message screen** after a valid submission.
- Allow users to **dismiss the success message** and reset the form.
- Use semantic HTML for structure and accessibility.
- Style exclusively with **Tailwind CSS** utilities.
- Add **JavaScript logic** for validation, error handling, and state toggling.

## Built With

- **HTML5** – for semantic structure.
- **Tailwind CSS** – for responsive design and styling.
- **Flexbox & Grid** – for layout management.
- **Custom Fonts** – Roboto Regular & Bold for typography.
- **Vanilla JavaScript** – for form validation, error handling, and UI state transitions.

## Live Demo

- **Live Site:** [Netlify Site](#)
- **Frontend Mentor Solution Page:** [click here](#)

## Where and What JavaScript Was Used

JavaScript was used to handle **form validation**, **error styling**, and **UI state toggling**:

```js
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = e.target.email.value;

  if (isValidEmail(email)) {
    clearError();
    formContainer.classList.add("hidden");
    SuccessMessage.classList.remove("hidden");
  } else {
    errorText.classList.remove("hidden");
    emailBox.classList.add("border-[#ff6257ff]", "bg-[#ff6257ff]/20");
    setTimeout(() => clearError(), 1500);
  }
});
```

- Form Validation – Regex used to check if email is valid.
- Error Handling – Highlights input in red and shows an error message.
- Success State – Swaps form container for the success message.
- Dismiss Button – Resets the form and returns to the sign-up view.
