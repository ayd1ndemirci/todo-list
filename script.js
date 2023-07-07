function addTask() {
    var taskTitle = document.getElementById("taskTitle").value;
    var taskDescription = document.getElementById("taskDescription").value;
    var taskDate = document.getElementById("taskDate").value;
    var taskList = document.getElementById("taskList");
    if (taskTitle.trim() !== "" && taskDescription.trim() !== "" && taskDate.trim() !== "") {
      var taskCard = document.createElement("div");
      taskCard.classList.add("task-card");
      var taskTitleElement = document.createElement("h3");
      taskTitleElement.innerText = taskTitle;
      taskCard.appendChild(taskTitleElement);
      var taskDescriptionElement = document.createElement("p");
      taskDescriptionElement.innerText = taskDescription;
      taskCard.appendChild(taskDescriptionElement);
      var taskDateElement = document.createElement("span");
      taskDateElement.innerText = "Tarih: " + taskDate;
      taskCard.appendChild(taskDateElement);
      var deleteButton = document.createElement("button");
      deleteButton.innerText = "Sil";
      deleteButton.classList.add("delete-button");
      deleteButton.onclick = function() {
        taskList.removeChild(taskCard);
      };
      taskCard.appendChild(deleteButton);
      taskList.appendChild(taskCard);
      document.getElementById("taskTitle").value = "";
      document.getElementById("taskDescription").value = "";
      document.getElementById("taskDate").value = "";
    }
  }
  