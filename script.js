// Typing effect
const text = "Hey Love ❤️ I made something for you...";
let i = 0;

function typingEffect() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typingEffect, 50);
    }
}

// Password check
function checkPassword() {
    let pass = document.getElementById("password").value;

    if (pass === "nannu") { // change this
        document.querySelector(".lock-screen").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
        typingEffect();
    } else {
        document.getElementById("error").innerText = "Wrong password 😢";
    }
}

// Show popup
function showPopup() {
    document.getElementById("popup").style.display = "block";
}

// Go to next page
function goNext() {
    window.location.href = "message.html";
}