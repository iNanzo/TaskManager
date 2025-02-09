let shoppingList = []; //Array to store shopping list items

//Displays the main menu and returns user's choice
function showMenu() {
    return prompt(
        "Shopping List\n\n" +
        "1. View List\n" +
        "2. Add Item\n" +
        "3. Remove Item\n" +
        "4. Exit\n\n" +
        "Choose an option (1-4):"
    );
}

//Displays all items in the shopping list
function viewItems() {
    if (shoppingList.length === 0) {
        alert("Your list is empty.");
        return;
    }

    let itemList = "Your Shopping List:\n";
    shoppingList.forEach((item, index) => {
        itemList += `${index + 1}. ${item}\n`;
    });
    alert(itemList);
}

//Adds a new item to the shopping list
function addItem() {
    let newItem = prompt("What do you want to add?");
    if (newItem && newItem.trim() !== "") {
        shoppingList.push(newItem.trim());
        alert(`Added: "${newItem}"`);
    } else {
        alert("Item can't be empty.");
    }
}

//Removes an item from the shopping list by number
function removeItem() {
    if (shoppingList.length === 0) {
        alert("Nothing to remove.");
        return;
    }

    viewItems(); // Show current list before removal
    let itemNumber = prompt("Enter the number to remove:");
    if (itemNumber === null) return; // Handle cancel button

    let index = parseInt(itemNumber) - 1;
    if (!isNaN(index) && index >= 0 && index < shoppingList.length) {
        let removedItem = shoppingList.splice(index, 1);
        alert(`Removed: "${removedItem}"`);
    } else {
        alert("Invalid number.");
    }
}

//Runs the shopping list app in a loop until the user exits
function shoppingListApp() {
    let running = true;

    while (running) {
        let choice = showMenu();

        switch (choice) {
            case "1":
                viewItems();
                break;
            case "2":
                addItem();
                break;
            case "3":
                removeItem();
                break;
            case "4":
                alert("Goodbye!");
                running = false;
                break;
            default:
                alert("Invalid choice. Try again.");
        }
    }
}

//Start the Shopping List App
shoppingListApp();
