import "./input.css";

const navbar = document.getElementById("navbar");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

if (navbar) {
  const onScroll = () => {
    navbar.classList.toggle("nav-scrolled", window.scrollY > 12);
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener("click", () => {
    const open = mobileMenu.classList.toggle("open");
    menuBtn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open");
      menuBtn.setAttribute("aria-expanded", "false");
    });
  });
}

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  document.querySelectorAll("video[autoplay]").forEach((v) => {
    v.removeAttribute("autoplay");
    v.pause();
  });
}

const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");
if (contactForm && formMsg) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMsg.classList.remove("hidden");
    contactForm.reset();
  });
}
