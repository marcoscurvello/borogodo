const SUPPORT_EMAIL = "borogodoai@gmail.com";
const FOOTER_TEXT = "© 2026 Borogodó";

document.querySelectorAll("[data-support-email]").forEach((element) => {
  element.textContent = SUPPORT_EMAIL;

  if (element.tagName === "A") {
    element.setAttribute("href", `mailto:${SUPPORT_EMAIL}`);
  }
});

document.querySelectorAll("[data-footer-text]").forEach((element) => {
  element.textContent = FOOTER_TEXT;
});
