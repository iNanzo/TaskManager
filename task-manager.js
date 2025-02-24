let taskList = []; //Task storage

//Display menu and return user choice
function showMenu() {
    return prompt(
        "Task Manager\n\n" +
        "1. View Tasks\n" +
        "2. Add Task\n" +
        "3. Remove Task\n" +
        "4. Exit\n\n" +
        "Choose an option:"
    );
}

//Show tasks
function viewTasks() {
    if (taskList.length === 0) {
        alert("No tasks yet.");
        return;
    }

    let taskDisplay = "Tasks:\n";
    taskList.forEach((task, index) => {
        taskDisplay += `${index + 1}. [${task.priority}] ${task.description} (Due: ${task.dueDate})\n`;
    });

    alert(taskDisplay);
}

//Add task
function addTask() {
    let description = prompt("Task description:");
    if (!description || description.trim() === "") {
        alert("Task can't be empty.");
        return;
    }

    let priority = prompt("Priority? (High, Medium, Low)").trim().toLowerCase();
    let formattedPriority = priority.charAt(0).toUpperCase() + priority.slice(1); // Capitalize first letter

    if (!["High", "Medium", "Low"].includes(formattedPriority)) {
        alert("Enter High, Medium, or Low.");
        return;
    }

    let dueDate = prompt("Due date (MM/DD/YYYY):").trim();
    if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dueDate)) {
        alert("Use format MM/DD/YYYY.");
        return;
    }

    taskList.push({ description, priority: formattedPriority, dueDate });
    alert(`Added: [${formattedPriority}] ${description} (Due: ${dueDate})`);
}

//Removes task by number
function removeTask() {
    if (taskList.length === 0) {
        alert("Nothing to remove.");
        return;
    }

    viewTasks(); 
    let taskNumber = prompt("Task number to remove:");
    if (taskNumber === null) return;

    let index = parseInt(taskNumber) - 1;
    if (!isNaN(index) && index >= 0 && index < taskList.length) {
        let removedTask = taskList.splice(index, 1);
        alert(`Removed: [${removedTask[0].priority}] ${removedTask[0].description}`);
    } else {
        alert("Invalid number.");
    }
}

//Runs the app loop
function main() {
    let running = true;

    while (running) {
        let choice = showMenu();

        switch (choice) {
            case "1":
                viewTasks();
                break;
            case "2":
                addTask();
                break;
            case "3":
                removeTask();
                break;
            case "4":
                alert("Exiting...");
                running = false;
                break;
            default:
                alert("Invalid choice.");
        }
    }
}

main();
