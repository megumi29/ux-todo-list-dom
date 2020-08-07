let todos = [
  {
    completed: false,
    description: "Take Jim to the hair salon",
  },
  {
    completed: true,
    description: "Drop off wedding invitation at mailbox",
  },
  {
    completed: false,
    description: "Pick up the cake",
  },
  {
    completed: false,
    description: "Call the caterers",
  },
];

function renderTodoApp() {
  let app = document.querySelector("#app");
  let h1 = document.createElement("h1");
  let toDoList = document.createElement("ul");
  toDoList.style.listStyleType = "none";

  h1.innerText = "Todo List";

  for (let index = 0; index < todos.length; index++) {
    let item = todos[index].description;
    let checkBox = item.completed ? "done" : "";
    let itemMarkup = `<li><input type = "checkbox" ${checkBox}/>${item}
        </li>`;

    toDoList.innerHTML += itemMarkup;

    app.appendChild(h1);
    app.appendChild(toDoList);
  }
}

renderTodoApp();
