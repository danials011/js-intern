// Elements
const btnViewAllTowerElement = document.getElementById("btn-view-all-tower");
const btnLowerThan500MetersElement = document.getElementById("btn-lower-500m");
const btnGreaterThan100FloorsElement = document.getElementById("btn-greater-100floors");
const btnCompletionLaterThan2010Element = document.getElementById("btn-completion-2010-later");
const towerListElement = document.getElementById("tower-list");

// Function to render the list item
function renderTowerListItem(tower) {
    const newTowerElement = document.createElement("li");
    newTowerElement.className = "tower-list-item";
    // List item content
    /* TODO: Complete the following code by adding its respective property based on the field */
    newTowerElement.innerHTML = `
        <img src="${tower}" alt="${tower}">
        <div id="tower-list-item-info">
            <h2 id="tower-name">${tower}</h2>
            <p>
                City: ${tower}<br/>
                Country: ${tower} <br/>
                Completion Year: ${tower} <br/>
                Height: ${tower} meters <br/>
                Floors: ${tower}
            </p>
        </div>
    `;
    towerListElement.append(newTowerElement);
}

/* YOUR TASK:
A. Create a function to filter the list of towers based on the towerData variable (provided in data.js).
HINT: Embrase the usage of control structures (if-else and loop).
TODO: Complete the following function */
function filterTowerList(filterMode) {

}

/* B. Create a function to render the tower list
HINT: Use loop to call the renderTowerListItem function for single tower list item
TODO: Complete the following function */
function renderTowerList() {

}

/* C. Link the four buttons with the render button by passing the filterMode parameter with .bind method */

// Start your code below