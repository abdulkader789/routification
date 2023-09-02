loginForm.addEventListener("submit", function (event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the email and password values from the form
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Send a POST request to your server to handle the login
  fetch("/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.error) {
        // Display the error message to the user
        displayErrorMessage(data.error);
      } else {
        // Clear the error message if the login was successful
        const errorMessageContainer = document.getElementById("errorMessage");
        errorMessageContainer.innerHTML = "";

        // Redirect to a different page or perform other actions upon successful login
      }
    })
    .catch((error) => {
      console.error("Error logging in:", error);
    });
});
