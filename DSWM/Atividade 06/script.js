document.addEventListener("DOMContentLoaded", function() {
    let clickCount = 0;
    const userNameElement = document.getElementById("userName");
    const nameInput = document.getElementById("nameInput");
    const likeButton = document.getElementById("likeButton");
    const clickCounter = document.getElementById("clickCount");

    nameInput.addEventListener("input", function() {
        userNameElement.innerText = nameInput.value || "Usuário";
    });

    nameInput.addEventListener("keydown", function(event) {
        console.log(`Tecla pressionada: ${event.key}`);
    });

    likeButton.addEventListener("click", function() {
        clickCount++;
        clickCounter.innerText = clickCount;
        alert(`Olá, ${userNameElement.innerText}! Você curtiu ${clickCount} vezes.`);
    });

    likeButton.addEventListener("mouseover", function() {
        likeButton.style.transform = "scale(1.1)";
    });

    likeButton.addEventListener("mouseleave", function() {
        likeButton.style.transform = "scale(1)";
    });
});
