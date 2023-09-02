document.addEventListener("DOMContentLoaded", () => {
  // This code runs when the user.js file is loaded

  // Get all the td elements that are empty
  const emptyCells = document.querySelectorAll("td:empty");

  // Loop through the empty cells and add an input element
  emptyCells.forEach((cell) => {
    const inputElement = document.createElement("input");
    const rowIndex = cell.parentNode.rowIndex - 1; // Subtract 1 to exclude the header row
    const columnIndex = cell.cellIndex; // Subtract 1 to exclude the first cell

    const dynamicName = `td_r${rowIndex}_c${columnIndex}`;
    inputElement.name = dynamicName; // Set dynamic name attribute

    inputElement.setAttribute("autocomplete", "off");
    cell.appendChild(inputElement);
  });

  // Make an AJAX request to fetch user data from the server
  fetch("/user-data")
    .then((response) => response.json())
    .then((userData) => {
      // Once you receive the user data, you can use it in your frontend
      console.log("User Data:", userData);

      // Example: Display user data in the HTML
      const usernameElement = document.getElementById("username");
      const emailElement = document.getElementById("email");

      usernameElement.textContent = userData.username;
      emailElement.textContent = userData.email;
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
});
