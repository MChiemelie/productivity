document.addEventListener("DOMContentLoaded", function () {
   var addButtons = document.querySelectorAll("#add");
   var removeButtons = document.querySelectorAll("#remove");
   var editButtons = document.querySelectorAll("#edit");

   // Add event listeners to handle adding tasks
   addButtons.forEach(function (button) {
      button.addEventListener("click", function (event) {
         event.preventDefault();

         const tasks = []; // save tasks on local storage
         // localStorage.setItem()

         var taskInput = this.parentElement.querySelector("input");
         var taskText = taskInput.value;

         if (taskText.trim() !== "") {
            var taskList = this.parentElement.nextElementSibling;
            var newTaskItem = document.createElement("li");
            newTaskItem.textContent = taskText;

            var doneButton = document.createElement("button");
            doneButton.textContent = "Done";
            doneButton.style.backgroundColor = "black";
            doneButton.addEventListener("click", function () {
               // Add your logic to mark the task as done or remove it
               newTaskItem.remove();
            });

            var editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.style.backgroundColor = "orange";
            editButton.addEventListener("click",  () => {
               // Add your logic to allow editing of the task
               var updatedText = prompt("Edit task:", newTaskItem.textContent);
               if (updatedText !== null) {
                  newTaskItem.textContent = updatedText;
               }
            });

            newTaskItem.appendChild(doneButton);
            newTaskItem.appendChild(editButton);
            taskList.appendChild(newTaskItem);

            // Clear the input field after adding the task
            taskInput.value = "";
         }
      });
   });

   // Add event listeners to handle removing tasks
   removeButtons.forEach(function (button) {
      button.addEventListener("click", function () {
         // Add your logic to mark the task as done or remove it
         var taskItem = this.parentElement;
         taskItem.remove();
      });
   });
});