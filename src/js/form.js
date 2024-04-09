const reservationForm = document.querySelector(".reservation-form");
const chatForm = document.querySelector(".chat-part");

const nameRegex = /^[A-Za-z\s]+$/;
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
const phoneRegex = /^\+380\d{9}$/;

const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");

function validateInput(input, regex, errorMessage) {
  const isValid = regex.test(input.value);
  input.style.border = isValid ? "1px solid black" : "1px solid red";
  input.setCustomValidity(isValid ? "" : errorMessage);
  return isValid;
}

function setupFormValidation(form, nameInput, emailInput, phoneInput) {
  nameInput.addEventListener("input", function() {
    validateInput(nameInput, nameRegex, "Please enter a valid name (letters only).");
  });

  emailInput.addEventListener("input", function() {
    validateInput(emailInput, emailRegex, "Please enter a valid email address (e.g., example@gmail.com).");
  });

  if (form !== chatForm) {
    phoneInput.addEventListener("input", function() {
      validateInput(phoneInput, phoneRegex, "Please enter a valid phone number (+380XXXXXXXXX).");
    });
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    let isValid = true;

    isValid = validateInput(nameInput, nameRegex, "Please enter a valid name (letters only).") && isValid;
    isValid = validateInput(emailInput, emailRegex, "Please enter a valid email address (e.g., example@gmail.com).") && isValid;

    if (form !== chatForm) {
      isValid = validateInput(phoneInput, phoneRegex, "Please enter a valid phone number (+380XXXXXXXXX).") && isValid;
    }

    if (isValid) {
      openModal("Thank you for your submission!");
      // form.submit();
    }
  });
}

const reservationNameInput = reservationForm.querySelector("#name");
const reservationEmailInput = reservationForm.querySelector("#email");
const reservationPhoneInput = reservationForm.querySelector("#phone");
setupFormValidation(reservationForm, reservationNameInput, reservationEmailInput, reservationPhoneInput);

const chatNameInput = chatForm.querySelector("#name");
const chatEmailInput = chatForm.querySelector("#email");
const chatTextInput = chatForm.querySelector("#text");
setupFormValidation(chatForm, chatNameInput, chatEmailInput, chatTextInput);

function openModal(message) {
  modalContent.innerHTML = `<p>${message}</p>`;

  const backButton = document.createElement("button");
  backButton.textContent = "Back to Home";
  backButton.style.backgroundColor = "orange";
  backButton.style.color = "white";
  backButton.style.border = "none";
  backButton.style.borderRadius = "10px";
  backButton.style.padding = "10px 20px";
  backButton.style.cursor = "pointer";
  backButton.style.margin = "6px";


  backButton.addEventListener("click", function() {
    closeModal();
    clearTimeout(modalTimeout);
  });

  modalContent.appendChild(backButton);

  modal.style.display = "flex";

  const modalTimeout = setTimeout(closeModal, 5000);
}

function closeModal() {
  modal.style.display = "none";
}

modal.addEventListener("click", function(event) {
  if (event.target === modal) {
    closeModal();
  }
});