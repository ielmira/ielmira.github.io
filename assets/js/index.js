const toggleBtn = document.getElementById("toggleBtn");
const front = document.querySelector(".front");
const back = document.querySelector(".back");

toggleBtn.addEventListener("change", () => {
  front.classList.toggle("-rotate-y-180");
  back.classList.toggle("rotate-y-180");

  console.log("ok");
});

const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");

function addTask () {
    const taskText = taskInput.value.trim();
    if (taskText !== ''){
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
        taskInput.value = '';
    }
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';
    deleteBtn.addEventListener('click' , deleteTask);
    li.appendChild(deleteBtn);
}

function completeTask (event) {
    const task = event.target;
    task.classList.toggle('completed')
}
li.addEventListener('click' , completeTask);

function deleteTask (event){
    const task = event.target.parentElement;
    taskList.removeChild(task);
}
