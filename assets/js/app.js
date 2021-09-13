const lists = document.querySelectorAll(".boards__list")

// ADD TASK
function addTask() {
  const addTaskBtn = document.querySelector(".boards__item--add")
  const form = document.querySelector(".boards__form")
  const addBtn = document.querySelector(".boards__buttons--add")
  const cancelBtn = document.querySelector(".boards__buttons--cancel")
  const area = document.querySelector(".boards__form--area")
  let areaValue

  form.addEventListener("submit", (e) => {
    e.preventDefault()
  })

  addTaskBtn.addEventListener("click", () => {
    form.style.display = "block"
    addTaskBtn.style.display = "none"
    addBtn.style.display = "none"

    area.addEventListener("input", (e) => {
      value = e.target.value

      if (value) {
        addBtn.style.display = "block"
      } else {
        addBtn.style.display = "none"
      }
    })
  })

  cancelBtn.addEventListener("click", () => {
    area.value = ""
    value = ""
    form.style.display = "none"
    addTaskBtn.style.display = "block"
  })

  addBtn.addEventListener("click", () => {
    let newItem = document.createElement("div")
    newItem.classList.add("boards__list--item")
    newItem.setAttribute("draggable", "true")
    newItem.textContent = value
    lists[0].append(newItem)

    form.style.display = "none"
    addTaskBtn.style.display = "block"
    area.value = ""
    value = ""
  })
}

addTask()
