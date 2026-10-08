 // Research Resource Portal
// Basic script for the landing page

console.log("Research Resource Portal loaded successfully.");

// This button will be connected to the actual portal later.
const enterButton = document.querySelector(".enter-button");

if (enterButton) {
    enterButton.addEventListener("click", function () {
        console.log("Entering the Research Resource Portal...");
    });
}
