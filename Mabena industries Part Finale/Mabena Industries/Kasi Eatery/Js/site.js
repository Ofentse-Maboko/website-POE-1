document.addEventListener("DOMContentLoaded", () => {
  const currentFile = decodeURIComponent(location.pathname.split("/").pop() || "beginning.html").toLowerCase();
  document.querySelectorAll("nav a").forEach(link => {
    const target = decodeURIComponent((link.getAttribute("href") || "").split("/").pop()).toLowerCase();
    if (target === currentFile) {
      link.setAttribute("aria-current", "page");
      link.classList.add("active-link");
    }
  });
  document.querySelectorAll("[data-current-year]").forEach(el => el.textContent = new Date().getFullYear());

  // Prevent selecting an event date in the past on the enquiry form.
  const eventDate = document.querySelector("#eventDate");
  if (eventDate) {
    const today = new Date();
    const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    eventDate.min = localToday;
  }

  // Progressive enhancement: reveal content as it enters view.
  // Content remains visible if IntersectionObserver is unavailable.
  const revealTargets = document.querySelectorAll("main .section, main .content-panel, main .hero, .news-card");
  if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    revealTargets.forEach(el => el.classList.add("js-reveal"));
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealTargets.forEach(el => revealObserver.observe(el));
  }
  document.querySelectorAll("[data-accordion] button").forEach(button => {
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      if (!panel) return;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      panel.hidden = expanded;
    });
  });
});