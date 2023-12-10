// Get references to HTML elements
const taskInput = document.getElementById('task-input');  // Input field for tasks
const addBtn = document.getElementById('add-btn');        // Button to add tasks
const taskList = document.getElementById('task-list');    // List to display tasks

// Event listener for adding tasks
addBtn.addEventListener('click', () => {
    // Check if the input field is not empty
    if (taskInput.value !== "") {
        // Get the task text from the input field
        const taskText = taskInput.value;
        // Create a new list item element
        const listItem = document.createElement("li");
        // Set inner HTML for the list item, including the task text and a delete button
        listItem.innerHTML = `
            ${taskText}
            <button class="delete-btn">Delete</button>
        `;
        // Add the new list item to the task list
        taskList.appendChild(listItem);
        // Clear the input field after adding the task
        taskInput.value = "";
    }
});

// Event listener for deleting tasks
taskList.addEventListener('click', (event) => {
    // Check if the clicked element has the "delete-btn" class
    if (event.target.classList.contains("delete-btn")) {
        // Get the parent (list item) of the delete button
        const listItem = event.target.parentElement;
        // Remove the list item from the task list
        taskList.removeChild(listItem);
    }
});
