/* === Typing Effect JavaScript === */

    // Array of messages to show
    const messages = [
      "Welcome to Jesus Generation movement!",
      "Standing firm on faith!",
      "Preaching salvation"
    ];

    let messageIndex = 0;  // Track which message we're on
    let charIndex = 0;     // Track which letter we're typing
    let isDeleting = false; // Whether we're deleting text or typing
    const typingSpeed = 100;  // Time per character typed
    const deletingSpeed = 50; // Time per character deleted
    const delayBeforeDelete = 1000; // Pause before deleting
    const delayBetweenMessages = 500; // Pause before next message
    const textElement = document.getElementById("typing-text");

    function type() {
      const currentMessage = messages[messageIndex];

      // If deleting, remove characters; else, add them
      if (isDeleting) {
        charIndex--;
      } else {
        charIndex++;
      }

      // Update displayed text
      textElement.textContent = currentMessage.substring(0, charIndex);

      // Determine typing speed based on mode
      let delay = isDeleting ? deletingSpeed : typingSpeed;

      // If finished typing a message
      if (!isDeleting && charIndex === currentMessage.length) {
        delay = delayBeforeDelete;
        isDeleting = true;
      } 
      // If finished deleting
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        messageIndex = (messageIndex + 1) % messages.length; // Move to next message
        delay = delayBetweenMessages;
      }

      // Continue typing
      setTimeout(type, delay);
    }

    // Start typing when the page loads
    document.addEventListener("DOMContentLoaded", type);







// Array of daily scriptures
const scriptures = [
  {
    text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
    reference: "John 3:16"
  },
  {
    text: "Love your neighbor as yourself.",
    reference: "Mark 12:31"
  },
  {
    text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
    reference: "Philippians 4:6"
  },
  // Add more scriptures here...
];

// Get today's date
const today = new Date();
const day = today.getDate();

// Display today's scripture
const scriptureText = document.getElementById("scripture-text");
const scriptureReference = document.getElementById("scripture-reference");

scriptureText.innerHTML = scriptures[(day - 1) % scriptures.length].text;
scriptureReference.innerHTML = scriptures[(day - 1) % scriptures.length].reference;



