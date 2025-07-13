// Select elements
const title = document.getElementById("title");
const description = document.getElementById("description");
const submit = document.getElementById("submit");
const todo = document.getElementById("todo");

// Event listener for form submission
submit.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent page reload

  let todos = JSON.parse(localStorage.getItem("todo")) || [];
  // Get values from input fields
  let titleValue = title.value;
  let descValue = description.value;

  // Retrieve existing todos from localStorage or initialize an empty array

  // Add the new task to the todos array
  todos.push({ title: titleValue, desc: descValue });

  // Store the updated todos array in localStorage
  localStorage.setItem("todo", JSON.stringify(todos));

  // Render all tasks to the page
  renderTodos();

  // Clear input fields after submission
  
});

// Function to render all todos
function renderTodos() {
    title.value = "";
  description.value = "";
  let todos = JSON.parse(localStorage.getItem("todo")) || [];
  todo.innerHTML = ""; // Clear previous list

  // Loop through todos and display them
  todos.forEach((item, index) => {
    todo.innerHTML += `
      <div>
        <h2>${item.title}</h2>
        <p>${item.desc}</p>
        <button onclick="deleteTodo(${index})">Delete</button>
      </div>
    `;
  });
}

// Function to delete a specific todo by index
function deleteTodo(index) {
  let todos = JSON.parse(localStorage.getItem("todo")) || [];
  todos.splice(index, 1); // Remove the item by index

  // Update localStorage after deletion
  localStorage.setItem("todo", JSON.stringify(todos));

  // Re-render the remaining tasks
  renderTodos();
}

// On page load, render the stored todos
renderTodos();
