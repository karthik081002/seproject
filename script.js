function generatePassword() {
  const length = document.getElementById('check1').value; // Desired length of the password
  const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()-_=+';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  const passwordField = document.getElementById('password');
  passwordField.value=password;
  passwordField.textContent = password;
}

function copyToClipboard() {
  var passwordElement = document.getElementById("password");
  var password = passwordElement.textContent;

  // Create a temporary textarea element to facilitate copying to clipboard
  var textarea = document.createElement("textarea");
  textarea.value = password;
  document.body.appendChild(textarea);

  // Select and copy the password
  textarea.select();
  document.execCommand("copy");

  // Remove the temporary textarea element
  document.body.removeChild(textarea);

  alert("Password copied to clipboard!");
}

// Event listener for the generate button
var generateButton = document.getElementById("generateButton");
generateButton.addEventListener("click", generatePassword);

// Event listener for the copy button
var copyButton = document.getElementById("copyButton");
copyButton.addEventListener("click", copyToClipboard);