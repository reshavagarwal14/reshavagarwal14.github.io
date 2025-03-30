// Dark Mode Toggle
document.getElementById("theme-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    this.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});

// Typing Animation
const textElement = document.querySelector(".typing-text");
const texts = ["Data Analyst", "SQL Enthusiast", "Tableau Expert", "Python Developer"];
let index = 0;
let charIndex = 0;

function typeText() {
    if (charIndex < texts[index].length) {
        textElement.innerHTML += texts[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(deleteText, 2000);
    }
}

function deleteText() {
    if (charIndex > 0) {
        textElement.innerHTML = texts[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(deleteText, 50);
    } else {
        index = (index + 1) % texts.length;
        setTimeout(typeText, 500);
    }
}

typeText();
