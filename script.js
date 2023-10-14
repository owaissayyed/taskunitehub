document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskButton = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");
    const editModal = document.getElementById("editModal");
    const editTaskText = document.getElementById("editTaskText");
    const saveEdit = document.getElementById("saveEdit");
    const cancelEdit = document.getElementById("cancelEdit");
    const completedTaskList = document.getElementById("completedTaskList");
    const completedTaskCount = document.getElementById("completedTaskCount");
    const completedTaskDropdown = document.getElementById("completedTaskDropdown");
    const completedTasks = document.querySelector(".completed-tasks");


    function attachEventListeners(li) {
        // Delete task when the delete button is clicked
        const deleteButton = li.querySelector(".deleteTask");
        deleteButton.addEventListener("click", function () {
            taskList.removeChild(li);
        });

        // Edit task when the edit button is clicked
        const editButton = li.querySelector(".editTask");
        editButton.addEventListener("click", function () {
            const span = li.querySelector("span");
            editTaskText.value = span.textContent;
            editModal.style.display = "block";

            saveEdit.addEventListener("click", function () {
                span.textContent = editTaskText.value;
                editModal.style.display = "none";
            });

            cancelEdit.addEventListener("click", function () {
                editModal.style.display = "none";
            });
        });

        // Move task to Completed Task Section when the complete button is clicked
        const completeButton = li.querySelector(".completeTask");
        completeButton.addEventListener("click", function () {
            const span = li.querySelector("span");
            li.remove(); // Remove task from the main list
            const completedLi = document.createElement("li");
            completedLi.innerHTML = `
                <span>${span.textContent}</span>
                <button class="moveToTodoList"><i class="fas fa-undo"></i> Move to Todo List</button>
            `;
            completedTaskList.appendChild(completedLi); // Add task to Completed Task section

            // Attach event listeners to the moved task
            attachEventListeners(completedLi);


        });
    }

        // Function to toggle the dropdown icon
    function toggleDropdownIcon() {
        completedTaskDropdown.classList.toggle("fa-chevron-down");
        completedTaskDropdown.classList.toggle("fa-chevron-up");
    }

     // Toggle the completed task section visibility and icon when the dropdown icon is clicked
    completedTaskDropdown.addEventListener("click", function () {
        completedTaskList.classList.toggle("hidden");
         toggleDropdownIcon();
     });

    addTaskButton.addEventListener("click", function () {
        const taskText = taskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement("li");
            li.innerHTML = `
            <div class="task-actions">
            <button class="completeTask"><i class="fas fa-check"></i></button></div>
                <span>${taskText}</span>
                <div class="task-actions">
                    <button class="editTask"><i class="fas fa-edit"></i></button>
                    <button class="deleteTask"><i class="fas fa-trash"></i></button>
                </div>
            `;
            taskList.appendChild(li);
            taskInput.value = "";

            // Attach event listeners to the newly added task
            attachEventListeners(li);
        }
    });

    // Move completed task back to the Todo List when the button is clicked
    completedTaskList.addEventListener("click", function (event) {
        if (event.target.classList.contains("moveToTodoList")) {
            const completedLi = event.target.parentElement;
            const taskText = completedLi.querySelector("span").textContent;
            const li = document.createElement("li");
            li.innerHTML = `
            <div class="task-actions">
            <button class="completeTask"><i class="fas fa-check"></i></button></div>
                <span>${taskText}</span>
                <div class="task-actions">
                    <button class="editTask"><i class="fas fa-edit"></i></button>
                    <button class="deleteTask"><i class="fas fa-trash"></i></button>
                </div>
            `;
            taskList.appendChild(li);
            completedTaskList.removeChild(completedLi);

            // Attach event listeners to the moved task
            attachEventListeners(li);


        }
    });
});

$(function () {
    $(".menu-link").click(function () {
     $(".menu-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   $(function () {
    $(".main-header-link").click(function () {
     $(".main-header-link").removeClass("is-active");
     $(this).addClass("is-active");
    });
   });
   
   const dropdowns = document.querySelectorAll(".dropdown");
   dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
     e.stopPropagation();
     dropdowns.forEach((c) => c.classList.remove("is-active"));
     dropdown.classList.add("is-active");
    });
   });
   
   $(".search-bar input")
    .focus(function () {
     $(".header").addClass("wide");
    })
    .blur(function () {
     $(".header").removeClass("wide");
    });
   
   $(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
     dd.removeClass("is-active");
    }
   });
   
   $(function () {
    $(".dropdown").on("click", function (e) {
     $(".content-wrapper").addClass("overlay");
     e.stopPropagation();
    });
    $(document).on("click", function (e) {
     if ($(e.target).is(".dropdown") === false) {
      $(".content-wrapper").removeClass("overlay");
     }
    });
   });
   
   $(function () {
    $(".status-button:not(.open)").on("click", function (e) {
     $(".overlay-app").addClass("is-active");
    });
    $(".pop-up .close").click(function () {
     $(".overlay-app").removeClass("is-active");
    });
   });
   
   $(".status-button:not(.open)").click(function () {
    $(".pop-up").addClass("visible");
   });
   
   $(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
   });
   
   const toggleButton = document.querySelector('.dark-light');
   
   toggleButton.addEventListener('click', () => {
     document.body.classList.toggle('light-mode');
   });