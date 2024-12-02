// Validate form inputs
function checkValidity(e) {
  e.preventDefault();

  let firstName = document.getElementById("first_name");
  let lastName = document.getElementById("last_name");
  let age = document.getElementById("age");
  let password = document.getElementById("password");

  let firstNameError = document.getElementById("first_name_error");
  let lastNameError = document.getElementById("last_name_error");
  let ageError = document.getElementById("age_error");
  let passwordError = document.getElementById("password_error");

  firstNameError.textContent = "";
  lastNameError.textContent = "";
  ageError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  if (firstName.value.length === 0) {
      firstNameError.textContent = "Please enter your first name.";
      isValid = false;
  }

  if (lastName.value.length === 0) {
      lastNameError.textContent = "Please enter your last name.";
      isValid = false;
  }

  if (age.value.length === 0 || age.value <= 0) {
      ageError.textContent = "Please enter a valid age.";
      isValid = false;
  }

  if (password.value.length === 0) {
      passwordError.textContent = "Please enter a password.";
      isValid = false;
  }

  if (isValid) {
      let output = `${firstName.value} ${lastName.value}`;
      document.getElementById("result").textContent = `Thank you for submitting, ${output}!`;
  }
}

// Password generator
function generatePassword() {
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";
  let password = "";
  for (let i = 0; i < 12; i++) {
      password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  document.getElementById("password").value = password;
  checkPasswordStrength(password);
}

// Password strength checker
function checkPasswordStrength(password) {
  const strengthBar = document.getElementById("password_strength");
  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[!@#$%^&*()]/.test(password)) strength++;

  const colors = ["#ff4d4d", "#ffcc00", "#66cc66", "#4caf50"];
  const width = (strength / 5) * 100;
  strengthBar.innerHTML = `<div style="width:${width}%; background-color:${colors[strength - 1] || '#ccc'}"></div>`;
}

// Reset form
// Reset form
function resetForm() {
  // Clear all input fields
  document.getElementById("first_name").value = "";
  document.getElementById("last_name").value = "";
  document.getElementById("age").value = "";
  document.getElementById("password").value = "";

  // Clear the password strength bar
  document.getElementById("password_strength").innerHTML = "";

  // Clear all error messages
  document.querySelectorAll(".error-message").forEach((el) => (el.textContent = ""));

  // Clear the result message
  document.getElementById("result").textContent = "";

  // Optionally reset background colors of inputs
  document.querySelectorAll(".name").forEach((input) => {
      input.style.backgroundColor = ""; // Clear the pink background
  });
}



// Add event listener
document.getElementById("subm").addEventListener("click", checkValidity);

