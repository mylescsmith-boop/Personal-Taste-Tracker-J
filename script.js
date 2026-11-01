console.log("Hello World!");

// 1. Create an array called favoriteFoods with at least 6 foods you love.
let favoriteFoods = ["Pizza", "Tacos", "Pasta", "Chicken", "Ramen", "Burgers"];

// 2. Loop through the list and print a sentence about each food.
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("One of my favorite foods is " + favoriteFoods[i] + ".");
}

// 3. Print a numbered ranking for each favorite food.
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log("My #" + (i + 1) + " favorite food is " + favoriteFoods[i]);
}

// 4a. Create a function that recommends a food.
function printFoodRecommendation(foodName) {
    console.log("Have you ever tried " + foodName + "?");
    console.log("I always recommend " + foodName + " to friends.");
    console.log("Trust me — " + foodName + " is delicious.");
}

// 4b. Call the function at least 3 times.
printFoodRecommendation("Pizza");
printFoodRecommendation("Tacos");
printFoodRecommendation("Ramen");

// Here's a list of 50 friends' favorite foods.
let friendFavorites = [
    "Pizza", "Sushi", "Pasta", "Falafel", "Burgers", "Ramen", "Pad Thai", "Curry", "Pho", "Nachos",
    "Gnocchi", "Donuts", "Steak", "Lasagna", "Biryani", "Tacos", "Croissant", "Churros", "Fried Rice",
    "Shawarma", "Miso Soup", "BBQ Ribs", "Hotpot", "Enchiladas", "Baklava", "Gyros", "Hummus",
    "Empanadas", "Pancakes", "Muffins", "Samosas", "Macarons", "Quiche", "Pierogi", "Arepas",
    "Okonomiyaki", "Ceviche", "Brisket", "Bao Buns", "Poutine", "Clam Chowder", "Fajitas",
    "Canelé", "Kimchi", "Tamales", "Omelette", "Biscuits", "Tempura", "Spring Rolls", "Crepes"
];

// 5 and 6. Find foods with the letter "a" and store them in foodsWithA.
// The directions' examples are reversed, so this follows the actual letter requirement.
let foodsWithA = friendFavorites.filter(function(food) {
    return food.toLowerCase().includes("a");
});
console.log("Foods with the letter a:", foodsWithA);

// 7. Store foods with names longer than 6 characters.
let longFoodNames = friendFavorites.filter(function(food) {
    return food.length > 6;
});

// 8. Store foods with names 6 characters or shorter.
let shortFoodNames = friendFavorites.filter(function(food) {
    return food.length <= 6;
});

// 9. Print both arrays and compare their lengths.
console.log("Long food names:", longFoodNames);
console.log("Short food names:", shortFoodNames);

if (longFoodNames.length > shortFoodNames.length) {
    console.log("There are more long-named foods.");
} else if (shortFoodNames.length > longFoodNames.length) {
    console.log("There are more short-named foods.");
} else {
    console.log("There are the same number of long- and short-named foods.");
}

// 10. Find and print the longest food name.
let longestFoodName = friendFavorites[0];

for (let i = 1; i < friendFavorites.length; i++) {
    if (friendFavorites[i].length > longestFoodName.length) {
        longestFoodName = friendFavorites[i];
    }
}

console.log("The longest food name in the list is " + longestFoodName +
    " with " + longestFoodName.length + " characters.");
