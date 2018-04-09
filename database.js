const loadDatabase = (localStorageKey) => {
    //get database from local storage
    const dataBaseString = localStorage.getItem(localStorageKey);
    //convert JSON string back into object
    return JSON.parse(dataBaseString);
}

const inventory = loadDatabase("HomeInventory");
console.log(inventory);
let article = document.getElementById("mystuff")
for (type in inventory) {
    for (item in inventory[type]) {
        let section = document.createElement("section");
        p1 = document.createElement("p");
        p1.textContent = inventory[type][item].name;
        p2 = document.createElement("p");
        p2.textContent = inventory[type][item].location;
        p3 = document.createElement("p")
        p3.textContent = inventory[type][item].description;
        section.appendChild(p1);
        section.appendChild(p2);
        section.appendChild(p3);
        article.appendChild(section);
    }
}

