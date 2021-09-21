// $('.flip-card-container').bind('click', () => $('.flip-card-inner').css('transform', 'rotateY(180deg)'));

let flipCard = document.querySelector(".flip-card-container");
let innerContent = document.querySelector(".flip-card-inner");

//flip the card whne viewed on mobile or tablet screen
flipCard.addEventListener("click", () => innerContent.style.transform = "rotateY(180deg)");