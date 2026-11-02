document.addEventListener("DOMContentLoaded", () => {
  const search = document.querySelector("#menuSearch");
  const category = document.querySelector("#menuCategory");
  const cards = [...document.querySelectorAll(".menu-card")];
  const status = document.querySelector("#menuStatus");
  if (!search || !category || !cards.length) return;
  function filterCards() {
    const term = search.value.trim().toLowerCase();
    let shown = 0;
    cards.forEach(card => {
      const visible = card.textContent.toLowerCase().includes(term) &&
        (category.value === "all" || card.dataset.category === category.value);
      card.hidden = !visible;
      if (visible) shown++;
    });
    if (status) status.textContent = `${shown} menu item${shown === 1 ? "" : "s"} found.`;
  }
  search.addEventListener("input", filterCards);
  category.addEventListener("change", filterCards);
  filterCards();
});