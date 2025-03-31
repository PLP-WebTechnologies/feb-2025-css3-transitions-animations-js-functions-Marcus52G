// DOM Elements
const animateButton = document.getElementById("animateButton");
const animatedBox = document.getElementById("animatedBox");
const saveColorButton = document.getElementById("saveColorButton");
const loadColorButton = document.getElementById("loadColorButton");

// Add Animation Trigger
animateButton.addEventListener("click", function () {
    // Toggles a larger scale animation
    animatedBox.style.transform = animatedBox.style.transform === "scale(1.5)" ? "scale(1)" : "scale(1.5)";
});

// Save Box Color to Local Storage
saveColorButton.addEventListener("click", function () {
    const boxColor = window.getComputedStyle(animatedBox).backgroundColor;
    localStorage.setItem("boxColor", boxColor); // Store color in localStorage
    alert("Box color saved!");
});

// Load Box Color from Local Storage
loadColorButton.addEventListener("click", function () {
    const savedColor = localStorage.getItem("boxColor");
    if (savedColor) {
        animatedBox.style.backgroundColor = savedColor; // Apply stored color
        alert("Box color loaded!");
    } else {
        alert("No saved color found!");
    }
});
