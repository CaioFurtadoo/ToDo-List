$(document).ready(function () {
    let isDragging = false;

    $(".teste").on("mousedown", function (event) {
        isDragging = true;
        $(this).addClass("drag");
    });

    $(document).on("mousemove", function (event) {
        if (isDragging) {
            const x = event.clientX;
            const y = event.clientY;

            $(".teste.drag").css({
                top: y - 60 + "px",
                left: x - 60 + "px",
            });
        }
    });

    $(document).on("mouseup", function () {
        if (isDragging) {
            isDragging = false;
            $(".teste").removeClass("drag");
        }
    });
});

// const taskList = document.getElementById("task-list");
// const btnAddTask = document.getElementById("btn-add-task");
// const inputNewTask = document.getElementById("input-new-task");

// let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// function renderTasks() {
//     taskList.innerHTML = "";

//     tasks.forEach((task, index) => {
//         const li = document.createElement("li");
//         const btnRemove = document.createElement("button");
//         const btnEdit = document.createElement("button");
//         const txt = document.createTextNode("\u00D7");
//         const span = document.createElement("span");

//         span.classList.add("task");
//         li.classList.add("task");
//         span.dataset.index = index;
//         li.dataset.index = index;

//         span.textContent = task.name;
//         btnEdit.innerHTML = `<img class="img-edit-task" data-index="${index}" src="/assets/editIcon.svg" alt="edit icon" />`;

//         btnRemove.className = "btn-remove-task";
//         btnRemove.dataset.index = index;

//         btnEdit.className = "btn-edit-task";
//         btnEdit.dataset.index = index;

//         btnRemove.appendChild(txt);
//         li.appendChild(btnEdit);
//         li.appendChild(span);
//         li.appendChild(btnRemove);
//         taskList.appendChild(li);

//         if (task.completed) {
//             li.classList.toggle("complete-task");
//         }
//     });
// }

// function saveTasks() {
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }

// function removeTask(e) {
//     if (e.target.classList.contains("btn-remove-task")) {
//         const index = e.target.dataset.index;
//         e.target.classList.toggle("btn-remove-active");

//         const li = e.target.parentElement;

//         li.offsetWidth;

//         li.classList.add("fade-out");

//         requestAnimationFrame(() => {
//             setTimeout(() => {
//                 tasks.splice(index, 1);
//                 saveTasks();
//                 renderTasks();
//             }, 300);
//         });
//     }
// }

// function addTask(event) {
//     event.preventDefault();
//     event.target.classList.toggle("btn-add-active");
//     setTimeout(() => event.target.classList.toggle("btn-add-active"), 150);
//     if (inputNewTask.value !== "") {
//         tasks.push({ name: `${inputNewTask.value}`, completed: false });
//         saveTasks();
//         renderTasks();
//         inputNewTask.value = "";
//     }
// }

// function completeTask(e) {
//     if (
//         e.target.classList.contains("task") &&
//         tasks[e.target.dataset.index].completed == false
//     ) {
//         tasks[e.target.dataset.index].completed = true;
//         saveTasks();
//         renderTasks();
//     } else if (
//         e.target.classList.contains("task") &&
//         tasks[e.target.dataset.index].completed == true
//     ) {
//         tasks[e.target.dataset.index].completed = false;
//         saveTasks();
//         renderTasks();
//     }
// }

// btnAddTask.addEventListener("click", (event) => {
//     addTask(event);
// });

// btnAddTask.addEventListener("submit", (event) => {
//     addTask(event);
// });

// taskList.addEventListener("click", (e) => {
//     if (e.target.classList.contains("btn-remove-task")) {
//         removeTask(e);
//     } else if (e.target.classList.contains("img-edit-task")) {
//         enableEditing(e);
//     } else {
//         completeTask(e);
//     }
// });

// function enableEditing(e) {
//     const imgEdit = e.target;
//     const index = imgEdit.dataset.index;
//     const currentName = imgEdit.textContent;

//     editButton = imgEdit.parentElement;
//     li = editButton.parentElement;

//     span = li.children[1];

//     const input = document.createElement("input");
//     input.type = "text";
//     input.value = currentName;
//     input.classList.add("edit-input");

//     span.replaceWith(input);
//     input.focus();

//     input.addEventListener("blur", () => finishEditing(input, index));
//     input.addEventListener("keydown", (event) => {
//         if (event.key === "Enter") {
//             finishEditing(input, index);
//         }
//     });
// }

// function finishEditing(input, index) {
//     const newName = input.value.trim();
//     if (newName !== "") {
//         tasks[index].name = newName;
//         saveTasks();
//         renderTasks();
//     } else {
//         renderTasks();
//     }
// }

// renderTasks();
