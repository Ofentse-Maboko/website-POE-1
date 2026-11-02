document.addEventListener("DOMContentLoaded", () => {
  const element = document.getElementById("eatery-map");
  if (!element || typeof L === "undefined") return;
  // Meadowlands neighborhood center: approximate area marker, not an exact business address.
  const location = [-26.22083, 27.89944];
  const map = L.map(element, { scrollWheelZoom: false }).setView(location, 14);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  L.marker(location).addTo(map)
    .bindPopup("<strong>Ekasi Eatery</strong><br>Meadowlands, Soweto<br><em>Approximate area marker</em>")
    .openPopup();
  map.on("click", () => map.scrollWheelZoom.enable());
});
