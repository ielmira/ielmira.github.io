const toggleBtn = document.getElementById("toggleBtn");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

toggleBtn.addEventListener("change", () => {
  front.classList.toggle("-rotate-y-180");
  back.classList.toggle("rotate-y-180");

  console.log("ok");
});

// handle task addition

// const taskInput = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// function addTask() {
//   const taskText = taskInput.value.trim();
//   if (taskText === "") {
//     alert("input not be empty");
//     return;
//   }

// const newInputHtml = document.getElementById("new-input").innerHTML;

// taskList.insertAdjacentHTML(
//   "beforeend",
//   newInputHtml.replace("%text%", taskText)
// );

// const li = document.createElement("li");
// li.textContent = taskText;

// taskInput.value = "";
// li.addEventListener("click", completeTask);

// const deleteBtn = document.createElement("button");
// deleteBtn.textContent = "delete";
// deleteBtn.addEventListener("click", deleteTask);
// li.appendChild(deleteBtn);
// }
// handle task completion
// function completeTask (event) {
//     const task = event.target;
//     task.classList.toggle('completed')
// }

// // handle task deletion
// function deleteTask (event){
//     const task = event.target.parentElement;
//     taskList.removeChild(task);
// }

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const backSide = document.getElementById("backSide");

function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("poresh kon");
    return;
  }

  const div = document.createElement("div");
  div.classList.add("flex", "justify-between", "items-center");

  const li = document.createElement("li");
  li.classList.add("flex", "gap-4", "py-4");
  div.appendChild(li);

  const input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  li.appendChild(input);

  input.addEventListener("change", function () {
    const parent = this.parentElement.parentElement;
    parent.remove();
    backSide.appendChild(parent);
    console.log("added");
  });

  li.insertAdjacentHTML("beforeend", `<p>${taskText}</p>`);

  const divIcon = document.createElement("div");
  divIcon.classList.add("flex", "gap-6", "text-2xl");
  div.appendChild(divIcon);

  const trash = document.createElement("i");
  trash.classList.add(
    "text-red-800",
    "cursor-pointer",
    "hover:text-red-500",
    "hover:duration-700",
    "fa-regular",
    "fa-trash-can"
  );
  divIcon.appendChild(trash);

  trash.addEventListener("click", function () {
    this.parentElement.parentElement.remove();
  });

  const edit = document.createElement("i");
  edit.classList.add(
    "text-blue-900",
    "cursor-pointer",
    "hover:text-blue-500",
    "hover:duration-700",
    "fa-regular",
    "fa-pen-to-square"
  );

  edit.addEventListener("click", function () {
    console.log("hoy");
    const iconDiv = this.parentElement;
    const val = iconDiv.previousElementSibling.querySelector("p").textContent;
    taskInput.value = val;

    iconDiv.parentElement.remove();
  });

  divIcon.appendChild(edit);
  taskList.appendChild(div);
  taskInput.value = "";
}

// const buttonDelete = document.getElementById("trashBtn", () => {
//   list.removeChild(li);
// });
