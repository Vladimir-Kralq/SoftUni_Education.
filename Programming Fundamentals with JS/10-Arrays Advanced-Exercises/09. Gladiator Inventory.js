function gladiatorInventory(commands) {

    let inventory = commands.shift().split(" ");

    for (let command of commands) {

        let parts = command.split(" ");
        let action = parts[0];
        let item = parts[1];

        if (action === "Buy") {

            if (!inventory.includes(item)) {
                inventory.push(item);
            }

        } else if (action === "Trash") {

            let index = inventory.indexOf(item);
            if (index !== -1) {
                inventory.splice(index, 1);
            }

        } else if (action === "Repair") {

            let index = inventory.indexOf(item);
            if (index !== -1) {
                inventory.splice(index, 1);
                inventory.push(item);
            }

        } else if (action === "Upgrade") {

            let [equipment, upgrade] = item.split("-");
            let index = inventory.indexOf(equipment);

            if (index !== -1) {
                inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
            }
        }
    }

    console.log(inventory.join(" "));
}
gladiatorInventory(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']);