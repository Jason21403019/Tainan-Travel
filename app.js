const card = document.querySelectorAll(".card__inner");
console.log(card);
card.forEach((cards) => {
  cards.addEventListener("click", () => {
    cards.classList.toggle("is-flipped");
  });
});
