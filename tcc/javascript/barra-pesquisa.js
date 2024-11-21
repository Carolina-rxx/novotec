const filterElement = document.querySelector(".veja input");

const cards = document.querySelectorAll(".cards .produtos");

filterElement.addEventListener("input", filterCards);

function filterCards() {
  if (filterElement.value != "") {
    for (let card of cards) {
      let title = card.querySelector(".titulo-receita");
      title = title.textContent.toLowerCase();

      let filterText = filterElement.value.toLowerCase();

      if (!title.includes(filterText)) {
        card.style.display = "none";
      } else {
        card.style.display = "block";
      }
    }
  } else 
    for (let card of cards){
    card.style.display = "block;"
  }
}
