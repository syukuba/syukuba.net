const toggleMenu = () => {
  const menu = document.getElementById("mobile-menu");
  const menuBtn = document.querySelector('button[aria-controls="mobile-menu"]');
  const expanded = menuBtn.getAttribute("aria-expanded") === "true" || false;
  menuBtn.setAttribute("aria-expanded", !expanded);
  // menu.hidden = expanded;
  console.log("toggleMenu", expanded);

  if (expanded) {
    // Fading out
    menu.classList.add("opacity-0");
    setTimeout(() => {
      menu.classList.add("hidden");
    }, 300); // Delay matches the transition duration
  } else {
    // Fading in
    menu.classList.remove("hidden");
    setTimeout(() => {
      menu.classList.remove("opacity-0");
    }, 10); // A tiny delay to ensure the transition kicks in
  }

  document.querySelector("#hamburger-open").classList.toggle("hidden");
  document.querySelector("#hamburger-open").classList.toggle("block");
  document.querySelector("#hamburger-close").classList.toggle("hidden");
  document.querySelector("#hamburger-close").classList.toggle("block");
};

const initializeScrollWatch = () => {
  const navLinks = document.querySelectorAll("nav a");
  window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("section");
    let closestSection = null;
    let minDistance = Infinity;

    sections.forEach((section) => {
      const distance = Math.abs(section.offsetTop - window.scrollY);
      if (distance < minDistance) {
        minDistance = distance;
        closestSection = section;
      }
    });

    // Focus the closest section
    if (closestSection) {
      closestSection.focus();
    }

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (
        link
          .getAttribute("href")
          .includes(`#${closestSection.getAttribute("id")}`)
      ) {
        link.classList.add("active");
      }
    });
  });
};

document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector('button[aria-controls="mobile-menu"]')
    .addEventListener("click", toggleMenu);
  document
    .querySelectorAll("#mobile-menu a")
    .forEach((el) => el.addEventListener("click", toggleMenu));

  initializeScrollWatch();
});
