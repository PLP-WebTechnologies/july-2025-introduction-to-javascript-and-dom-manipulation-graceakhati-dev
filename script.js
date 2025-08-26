// Show a greeting alert when the page loads
window.onload = function() {
  alert("🌟 Welcome to WanderJoy! 🌟");
};

// Change the welcome text when clicked
const welcomeText = document.getElementById("welcomeText");
if (welcomeText) {
  welcomeText.addEventListener("click", function() {
    welcomeText.innerHTML = "✨ You’re now exploring WanderJoy! ✨";
  });
}

// Toggle light/dark mode when button is clicked
const themeBtn = document.getElementById("themeToggle");
if (themeBtn) {
  themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
  });
}
