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

function deleteTask(num) {
  todos.splice(num, 1)
  render()
}

function updateTask(i) {
  let b = document.getElementById("input")
  b.value = todos[i]["tasks"]
  b.focus()
  let a = document.querySelector("button")
  a.innerHTML = "Update Task"
  a.setAttribute("onclick", "updatetask(" + i + ")")
}

function updatetask(i) {
  let b = document.getElementById("input")
  todos[i]["tasks"] = b.value
  let a = document.querySelector("button")
  a.innerHTML = "Create Todo"
  a.setAttribute("onclick", "writeTask()")
  b.value = ""
  render()
}

function todoComponet(i) {
  let divEl = document.createElement("div")
  let spanA = document.createElement("span")
  let del = document.createElement("button")
  let update = document.createElement("button")
  let spanB = document.createElement("span")
  spanA.innerHTML = i + 1 + ":" + todos[i]["tasks"]
  update.innerHTML = "Edit"
  update.setAttribute("onclick", "updateTask(" + i + ")")
  del.innerHTML = "Completed Task"
  del.setAttribute("onclick", "deleteTask(" + i + ")")
  divEl.setAttribute("class", "tasks")
  divEl.appendChild(spanA)
  spanB.appendChild(update)
  spanB.appendChild(del)
  divEl.appendChild(spanB)
  return divEl
}

function render() {
  let container = document.getElementById("container")
  container.innerHTML = ""
  for (let i = 0; i < todos.length; i++) {
    let divEl = todoComponet(i)
    container.appendChild(divEl)
  }
}

function deleteAll() {
  todos = []
  render();
}
