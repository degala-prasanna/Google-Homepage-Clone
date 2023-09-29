// Select the elements from the HTML using querySelector
let userInput = document.querySelector(".search-input");
let searchbtn = document.querySelector(".search-btn");

// Define a function to perform the regular Google search
function searchUserinput() {
    // Create a URL by combining the Google search URL with the user's input
    let url = "https://www.google.com/search?q=" + userInput.value;
    
    // Open the URL in the same tab/window
    window.open(url, "_self");
};

// Add a click event listener to the search button to trigger the regular search
searchbtn.addEventListener("click", searchUserinput);

// Add a keydown event listener to the input field to trigger the regular search on Enter key press
userInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        searchUserinput();
    }
});

// Define a function to perform the "I'm Feeling Lucky" search
function feelingLuckybtn() {
    // Define the URL for the "I'm Feeling Lucky" search
    let url = "https://www.google.com/doodles";
    
    // Open the URL in the same tab/window
    window.open(url, "_self");
}
