let todos = [];
function writeTask() {
  todos.push({
    "tasks": document.querySelector("input").value,
  })
  render();
}

function UpdateTask() {
  let a = document.getElementById("update").value - 1
  let b = document.getElementById("content").value
  todos[a]["tasks"] = b;
  render();
}

function deleteTodo() {
  todos.pop()
  render();
}

function render() {
  let container = document.getElementById("container")
  container.innerHTML = ""
  for (let i = 0; i < todos.length; i++) {
    let divEl = document.createElement("div")
    let spanA = document.createElement("span")
    spanA.innerHTML = i + 1 + ":" + todos[i]["tasks"]
    divEl.appendChild(spanA)
    container.appendChild(divEl)
  }
}

function deleteAll() {
  todos = []
  render();
}
