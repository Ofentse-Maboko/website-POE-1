// Demonstration validation only. This script does not transmit form data.
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("form[data-validate-form]").forEach(form => {
    form.addEventListener("submit", event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const name = String(data.get("name") || "").trim();
      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = `Thank you${name ? ", " + name : ""}. Your entries passed validation. This demonstration does not send or save the message yet; connect a form service or server to receive submissions.`;
        status.classList.add("form-success");
        status.setAttribute("role", "status");
      }
      form.reset();
    });
  });
});