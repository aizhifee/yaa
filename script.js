const emojiContainer = document.getElementById('falling-emojis');
const rizzButton = document.getElementById('rizz-button');
const music = document.getElementById('background-music');

music.play(); // Start playing the music

// Function to create falling emojis
function createFallingEmoji() {
    const emoji = document.createElement('span');
    const randomEmoji = Math.random() > 0.5 ? '💩' : '🚽'; // Randomly choose between poop and toilet
    emoji.textContent = randomEmoji;
    emoji.style.position = 'absolute';
    emoji.style.left = Math.random() * window.innerWidth + 'px'; // Random horizontal position
    emoji.style.fontSize = '24px'; // Adjust emoji size
    emoji.style.opacity = 1;

    document.body.appendChild(emoji);

    let fallInterval = setInterval(() => {
        const top = parseFloat(emoji.style.top || '0') + 5; // Adjust falling speed
        emoji.style.top = top + 'px';

        if (top > window.innerHeight) { // If the emoji goes out of view
            clearInterval(fallInterval);
            document.body.removeChild(emoji); // Remove the emoji from the DOM
        }
    }, 50);
}

// Create emojis at intervals
setInterval(createFallingEmoji, 500);

// Button click event
rizzButton.addEventListener('click', () => {
    const name = prompt("What's your name?"); // Prompt for user name
    alert(`I am going to touch you, ${name}!`); // Show alert with user's name
});