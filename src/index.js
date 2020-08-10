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

let app = document.querySelector("#app");
let h1 = document.createElement("h1");
let toDoList = document.createElement("ul");
toDoList.style.listStyleType = "none";

h1.innerText = "Todo List";

app.appendChild(h1);
app.appendChild(toDoList);

function renderTodoApp() {
  toDoList.innerHTML = " ";
  for (let index = 0; index < todos.length; index++) {
    let item = todos[index].description;
    let checkBox = item.completed ? "done" : "";
    let itemMarkup = `<li><input type = "checkbox" ${checkBox}/>${item}
        </li>`;

    toDoList.innerHTML += itemMarkup;
  }
}

let input = document.querySelector("#input");
let addTaskbutton = document.querySelector("#btn");

function onButtonClick() {
  let toDoTask = { completed: false, description: input.value };
  todos.push(toDoTask);
  renderTodoApp();
}

renderTodoApp();
