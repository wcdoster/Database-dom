const loadDatabase = (localStorageKey) => {
    //get database from local storage
    const dataBaseString = localStorage.getItem(localStorageKey);
    //convert JSON string back into object
    return JSON.parse(dataBaseString);
}

const HomeInventory = loadDatabase("HomeInventory");
console.log(HomeInventory);
let article = document.getElementById("mystuff")

const createDom = (InventoryDatabase) => {
    for (let type in InventoryDatabase) {

        for (let item in InventoryDatabase[type]) {
            let section = document.createElement("section");

            for(let prop in InventoryDatabase[type][item]){
                const pComp = document.createElement("p");
                pComp.textContent = InventoryDatabase[type][item][prop];
                section.appendChild(pComp);
            }
            
            article.appendChild(section);
        }
    }
}

createDom(HomeInventory);

// Write a function that performs the operation of creating your DOM components


// Define an argument to the function that will filter the data to one of the 
// data sets. For example, if I pass a string value of "crafts" to the function, 
// only items in the crafts table in the database should appear.

const createComp = (type, item) => {
    
}