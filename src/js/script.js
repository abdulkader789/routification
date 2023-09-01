// function enableInput(cell) {
//   if (!cell.querySelector("input")) {
//     const inputElement = document.createElement("input");
//     const rowIndex = cell.parentNode.rowIndex - 1; // Subtract 1 to exclude the header row
//     //console.log(rowIndex);
//     const columnIndex = cell.cellIndex; // Subtract 1 to exclude the first cell
//     //console.log(columnIndex);
//     const dynamicName = `td_r${rowIndex}_c${columnIndex}`;

//     inputElement.name = dynamicName; // Set dynamic name attribute
//     console.log(inputElement.name);
//     inputElement.setAttribute("autocomplete", "off");

//     cell.appendChild(inputElement);
//     inputElement.focus();
//   }
// }

// Add an event listener to execute code after the DOM is loaded
document.addEventListener("DOMContentLoaded", function () {
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
});