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
  newDiv.innerHTML = `<span class="content" id="C${count}">${count}:${value}</span><button onclick=deleteTask(${String(count)}) id=${count}>Delete Task</button>`
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
  if (value > count || value < 0) {
    updateDetail.innerHTML = "Enter the correct Task Number<br>"
  }
  let updateNumber = document.getElementById(`C${value}`)
  updateNumber.innerHTML = `${value}:${updateContent.value}`
  updateContent.value = ""
}


