let taskList = []; // Task storage

// Displays menu and returns user choice
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

// Shows all tasks
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

// Validates due date format (MM/DD/YYYY)
function isValidDate(date) {
    return /^\d{2}\/\d{2}\/\d{4}$/.test(date);
}

// Adds a task with validation
function addTask() {
    let description;
    do {
        description = prompt("Task description:").trim();
        if (!description) alert("Task can't be empty.");
    } while (!description);

    let priority;
    do {
        priority = prompt("Priority? (High, Medium, Low)").trim().toLowerCase();
        priority = priority.charAt(0).toUpperCase() + priority.slice(1);
        if (!["High", "Medium", "Low"].includes(priority)) alert("Enter High, Medium, or Low.");
    } while (!["High", "Medium", "Low"].includes(priority));

    let dueDate;
    do {
        dueDate = prompt("Due date (MM/DD/YYYY):").trim();
        if (!isValidDate(dueDate)) alert("Use format MM/DD/YYYY.");
    } while (!isValidDate(dueDate));

    taskList.push({ description, priority, dueDate });
    alert(`Added: [${priority}] ${description} (Due: ${dueDate})`);
}

// Removes a task with validation
function removeTask() {
    if (taskList.length === 0) {
        alert("Nothing to remove.");
        return;
    }

    viewTasks(); 
    let index;
    do {
        let taskNumber = prompt("Task number to remove:");
        if (taskNumber === null) return;
        index = parseInt(taskNumber) - 1;
        if (isNaN(index) || index < 0 || index >= taskList.length) alert("Invalid number.");
    } while (isNaN(index) || index < 0 || index >= taskList.length);

    let removedTask = taskList.splice(index, 1);
    alert(`Removed: [${removedTask[0].priority}] ${removedTask[0].description}`);
}

// Runs the app loop and displays remaining tasks after exit
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
                running = false;
                break;
            default:
                alert("Invalid choice.");
        }
    }

    // Show remaining tasks when exiting
    if (taskList.length > 0) {
        let remainingTasks = "Remaining Tasks:\n";
        taskList.forEach((task, index) => {
            remainingTasks += `${index + 1}. [${task.priority}] ${task.description} (Due: ${task.dueDate})\n`;
        });
        alert(remainingTasks);
    } else {
        alert("No tasks left.");
    }
}

// Start the app
main();