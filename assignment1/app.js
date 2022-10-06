// Elements
const currentCountElement = document.getElementById("current-count");
const btnIncrementElement = document.getElementById("btn-increment");
const btnDecrementElement = document.getElementById("btn-decrement");
const btnDoubleElement = document.getElementById("btn-double");
const btnHalveElement = document.getElementById("btn-halve");

// Function to update the current count output
function updateCurrentCountOutput(currentCount) {
    currentCountElement.textContent = currentCount;
}

/* YOUR TASK:
A. Declare variable(s) needed to manage the current count state.
B. Create function(s) for the four buttons in the site.
C. Add click event listener to the buttons based on the function(s) that you have created.

Guides:
1a. Create four separate functions and link each function with the respective button; OR
1b. Create one function to cater different operations by using if-else if control structures. If you are using this approach, you can create four const variables to manage different actions and pass to the parameter of the function.
NOTE: This approach will require the .bind method to bind parameters into the event listener.
2. Link the function to the event listener by using the addEventListener method (listens to the click action).

Additional Task to improve the UX:
1. If an odd number is halved, please round down to the nearest number (not round up).
HINT: Use the Math.floor() method.
2. If the currentCount has reached 1, and try to decrement / halve the number, it should pop up an alert with the message: "Invalid count, it should start with 1.".
HINT: Use the alert() method to pop up the message.
OPTIONAL: If you want to go above and beyond, you can use nested ifs to make the code even simpler.
*/

// Start your code below