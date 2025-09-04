let todos = [];
function writeTask() {
  let a = document.querySelector("input").value
  if (a.trim() === "") {
    alert("Enter a valid task")
    return
  }
  todos.push({
    "tasks": a
  })
  render();
  document.getElementById("input").value = ""
}

function UpdateTask() {
  let a = document.getElementById("update").value - 1
  let b = document.getElementById("input").value
  if (a > todos.length - 1 || a < 0) {
    alert("Enter a proper task number")
    return
  }
  if (a === "") {
    alert("Enter a task number")
    return
  }
  if (b.trim() === "") {
    alert("Enter the updated task");
    return
  }
  todos[a]["tasks"] = b;
  render();
  document.getElementById("input").value = ""
  document.getElementById("update").value = ""
}

function deleteTask(num) {
  todos.splice(num, 1)
  render()
}

function render() {
  let container = document.getElementById("container")
  container.innerHTML = ""
  for (let i = 0; i < todos.length; i++) {
    let divEl = document.createElement("div")
    let spanA = document.createElement("span")
    let del = document.createElement("button")
    spanA.innerHTML = i + 1 + ":" + todos[i]["tasks"]
    del.innerHTML = "Delete Task"
    del.setAttribute("onclick", "deleteTask(" + i + ")")
    divEl.setAttribute("class", "tasks")
    divEl.appendChild(spanA)
    divEl.appendChild(del)
    container.appendChild(divEl)
  }
}

function deleteAll() {
  todos = []
  render();
}
