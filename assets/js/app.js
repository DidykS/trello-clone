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
    newItem.innerHTML =
      value + `<div class="remove__item"><i class="fas fa-trash-alt"></i></div>`
    lists[0].append(newItem)

    form.style.display = "none"
    addTaskBtn.style.display = "block"
    area.value = ""
    value = ""

    dragNdrop()
  })
}

addTask()

// ADD BOARD
function addBoard() {
  const addBoard = document.querySelector(".addBoard")
  const boards = document.querySelector(".boards")
  // const boardsItem = document.querySelectorAll(".boards__item--remove")

  addBoard.addEventListener("click", () => {
    const board = document.createElement("div")
    board.classList.add("boards__item")
    board.innerHTML = `
    <div class="boards__header">
      <span class="boards__title" contenteditable="true"
        >First board
      </span>
      <div class="boards__item--remove">
        <i class="fas fa-ellipsis-h"></i>
      </div>
    </div>
    <div class="boards__list"></div>
    `
    boards.append(board)

    changeTitle()
    dragNdrop()
    removeBoard()
  })
}

addBoard()

// REMOVE BOARD
function removeBoard() {
  const boards = document.querySelectorAll(".boards__item")

  boards.forEach((item) => {
    item
      .querySelector(".boards__item--remove")
      .addEventListener("click", () => {
        item.remove()
      })
  })
}

removeBoard()

// CHANGE TITLE
function changeTitle() {
  const titles = document.querySelectorAll(".boards__title")

  titles.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.target.textContent = ""
    })
  })
}

changeTitle()

// DRAGNDROP
let dragItem = null

function dragNdrop() {
  const listItem = document.querySelectorAll(".boards__list--item")
  const lists = document.querySelectorAll(".boards__list")
  // remove task
  listItem.forEach((item) => {
    item.querySelector(".remove__item").addEventListener("click", () => {
      item.remove()
    })

    item.addEventListener("dragstart", function () {
      dragItem = this

      setTimeout(() => {
        item.style.display = "none"
      }, 0)
    })

    item.addEventListener("dragend", function () {
      dragItem = null

      setTimeout(() => {
        item.style.display = "block"
      }, 0)
    })
  })

  lists.forEach((item) => {
    item.addEventListener("dragover", function (e) {
      e.preventDefault()
    })

    item.addEventListener("dragenter", function (e) {
      e.preventDefault()

      this.style.backgroundColor = "#959595"
      this.style.borderRadius = "3px"
    })

    item.addEventListener("dragleave", function (e) {
      e.preventDefault()

      this.style.backgroundColor = "transparent"
    })

    item.addEventListener("drop", function (e) {
      e.preventDefault()
      this.style.backgroundColor = "transparent"
      this.appendChild(dragItem)
    })
  })
}

dragNdrop()
