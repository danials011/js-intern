// Control structure - Loops
const fruits = [
    {
        id: 1,
        name: "Durian",
        unitPrice: 10.99,
    },
    {
        id: 2,
        name: "Banana",
        unitPrice: 2.99,
    },
    {
        id: 3,
        name: "Apple",
        unitPrice: 3.99,
    },
    {
        id: 4,
        name: "Orange",
        unitPrice: 2.99,
    },
];

// Basic for loop with operation
let totalPrice = 0;

for (let i = 0; i < fruits.length; i++) {
    const fruitObject = fruits[i]; // return the object
    console.log(fruits[i]);
    // totalPrice = totalPrice + fruits[i].unitPrice;
    totalPrice += fruitObject.unitPrice;
}

// for-of loop EXTRA INPUT
// The fruit variable is an object
for (const fruit of fruits) {
    // const because the fruit object itself won't change during the iteration
    // 1st iteration = fruitA
    // 2nd iteration = fruitB
    console.log(fruit.name);
}

console.log(`Final amount: ${totalPrice}`);

/* Define one array
let fruits = [
    fruitA, fruitB, fruitC, fruitD
];
fruits[0] = fruitA
fruits[1] = fruitB
fruits[2] = fruitC
fruits[3] = fruitD

for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i] // to return the fruit object
    console.log(fruit.name);
    fruit = fruitC
}

The for-of loop will manage the index by itself so we do not need extra variables (i.e variable i)
for (const fruit of fruits) {
    console.log(fruit.name);
}
*/