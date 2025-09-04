const container = document.querySelector("#container")
const input = document.getElementById("input")
const update = document.getElementById("update")
const updateDetail = document.getElementById("updateContent")
const updateContent = document.getElementById("content")
let count = 1
function writeTask() {
  let newDiv = document.createElement("div")
  newDiv.setAttribute("id", String(count))
  newDiv.setAttribute("class", "tasks")
  let value = input.value
  input.value = ""
  if (value === "") {
    alert("Enter something in input")
    return
  }
  let spanA = document.createElement("span")
  spanA.innerHTML = `${count}:${value}`
  spanA.setAttribute("id", "C" + count)
  spanA.setAttribute("class", "content")
  let buttonA = document.createElement("button")
  buttonA.setAttribute("onclick", `deleteTask(String(${count}))`)
  buttonA.setAttribute("id", count)
  buttonA.innerHTML = "Delete Task"
  newDiv.appendChild(spanA)
  newDiv.appendChild(buttonA)
  container.appendChild(newDiv)
  count++
}

function deleteTask(num) {
  let a = document.getElementById(num)
  count--
  a.parentNode.removeChild(a)
}

function deleteAll() {
  count = 1
  container.innerHTML = ""
}

function UpdateTask() {
  let value = update.value
  update.value = ""
  if (value > count || value < 1) {
    alert("Enter a valid task number")
    return
  } else if (value == "") {
    alert("Enter a task number")
  }
  if (updateContent.value.trim() === "") {
    alert("Enter a valid task")
    return
  }
  let updateNumber = document.getElementById(`C${value}`)
  updateNumber.innerHTML = `${value}:${updateContent.value}`
  updateContent.value = ""
}


