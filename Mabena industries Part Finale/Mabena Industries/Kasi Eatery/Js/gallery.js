document.addEventListener("DOMContentLoaded", () => {
  const images = [...document.querySelectorAll(".gallery img")];
  if (!images.length) return;
  const overlay = document.createElement("div");
  overlay.className = "lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-label", "Enlarged gallery image");
  overlay.hidden = true;
  overlay.innerHTML = '<button class="lightbox-close" type="button" aria-label="Close image">&times;</button><button class="lightbox-prev" type="button" aria-label="Previous image">&#10094;</button><figure><img alt=""><figcaption></figcaption></figure><button class="lightbox-next" type="button" aria-label="Next image">&#10095;</button>';
  document.body.appendChild(overlay);
  const big = overlay.querySelector("figure img");
  const caption = overlay.querySelector("figcaption");
  let index = 0;
  function show(i) {
    index = (i + images.length) % images.length;
    big.src = images[index].currentSrc || images[index].src;
    big.alt = images[index].alt || "Gallery photograph";
    caption.textContent = images[index].alt || "";
  }
  function close() { overlay.hidden = true; document.body.classList.remove("lightbox-open"); }
  images.forEach((img, i) => {
    img.tabIndex = 0;
    img.setAttribute("role", "button");
    img.setAttribute("aria-label", `Enlarge ${img.alt || "gallery image"}`);
    const open = () => { show(i); overlay.hidden = false; document.body.classList.add("lightbox-open"); overlay.querySelector(".lightbox-close").focus(); };
    img.addEventListener("click", open);
    img.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  });
  overlay.querySelector(".lightbox-close").addEventListener("click", close);
  overlay.querySelector(".lightbox-prev").addEventListener("click", () => show(index - 1));
  overlay.querySelector(".lightbox-next").addEventListener("click", () => show(index + 1));
  overlay.addEventListener("click", e => { if (e.target === overlay) close(); });
  document.addEventListener("keydown", e => {
    if (overlay.hidden) return;
    if (e.key === "Escape") close();
    if (e.key === "ArrowLeft") show(index - 1);
    if (e.key === "ArrowRight") show(index + 1);
  });
});