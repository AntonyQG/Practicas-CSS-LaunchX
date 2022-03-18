const cards = document.getElementsByClassName("list-item");
const cardsButtons = document.getElementsByClassName("list-button");
for (let i = 0; i < cards.length; i++) {
  cardsButtons[i].addEventListener("click", () => {
    cards[i].classList.toggle("active");
  });
}
