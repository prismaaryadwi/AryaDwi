const addBtn = document.getElementById('add-btn');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Event listener for adding a task
addBtn.addEventListener('click', () => {
  const task = todoInput.value.trim();

  if (task) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button class="delete-btn">Delete</button>
    `;

    todoList.appendChild(li);

    // Clear the input field
    todoInput.value = '';

    // Add event listener to delete button
    li.querySelector('.delete-btn').addEventListener('click', () => {
      li.remove();
    });
  }
});

// Allow pressing Enter to add tasks
todoInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addBtn.click();
  }
});
