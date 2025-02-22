// Heart animation on grid images
const imageContainers = document.querySelectorAll(".image-container");

imageContainers.forEach((container) => {
  container.addEventListener("click", (event) => {
    const rect = container.getBoundingClientRect();
    const x = event.clientX - rect.left; // X position relative to the image
    const y = event.clientY - rect.top; // Y position relative to the image

    // Create a heart element
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = `${x}px`;
    heart.style.top = `${y}px`;
    container.appendChild(heart);

    // Remove the heart after the animation ends
    setTimeout(() => {
      heart.remove();
    }, 800);
  });
});

// Proposal functionality
const proposalButton = document.getElementById("proposal-button");
const responseDiv = document.getElementById("response");
const yesButton = document.getElementById("yes-button");
const yesOfCourseButton = document.getElementById("yes-of-course-button");
const resultMessage = document.getElementById("result-message");
const flowerRain = document.getElementById("flower-rain");

proposalButton.addEventListener("click", () => {
  proposalButton.classList.add("hidden");
  responseDiv.classList.remove("hidden");
});

yesButton.addEventListener("click", () => {
  responseDiv.classList.add("hidden");
  resultMessage.textContent =
    "Yay! You just made me the happiest person alive! 💖";
  resultMessage.classList.remove("hidden");
  startFlowerRain();
});

yesOfCourseButton.addEventListener("click", () => {
  responseDiv.classList.add("hidden");
  resultMessage.textContent = "Yes, of course! You're my dream come true! 🌟";
  resultMessage.classList.remove("hidden");
  startFlowerRain();
});

// Flower rain animation
function startFlowerRain() {
  flowerRain.classList.remove("hidden");

  const flowers = ["🌸", "🌺", "🌼"];
  const interval = setInterval(() => {
    const flower = document.createElement("div");
    flower.classList.add("flower");
    flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
    flower.style.left = `${Math.random() * 100}vw`; // Random horizontal position
    flower.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random fall speed
    flowerRain.appendChild(flower);

    // Remove flower after animation ends
    setTimeout(() => {
      flower.remove();
    }, 5000); // Match the animation duration
  }, 300); // Add a new flower every 300ms

  // Stop flower rain after 5 seconds
  setTimeout(() => {
    clearInterval(interval);
    flowerRain.classList.add("hidden");
  }, 100000);
}
