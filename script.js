const changingText = document.getElementById('changingText');
const texts = ["promote." ,"advertise.", "engage.", "market."];
let currentIndex = 0;

function changeText() {
    // Update the text
    changingText.textContent = texts[currentIndex];

    // Increment the index for the next word
    currentIndex = (currentIndex + 1) % texts.length;
}

// Change the text every 2 seconds (2000 milliseconds)
setInterval(changeText, 2000);