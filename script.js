// Without JavaScript, navigation stays visible.
document.documentElement.classList.add("js");

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#site-nav");
const mobileViewport = window.matchMedia("(max-width: 600px)");

function closeMenu(returnFocus = false) {
  menuToggle.setAttribute("aria-expanded", "false");
  navigation.classList.remove("is-open");
  if (returnFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  navigation.classList.toggle("is-open", !isOpen);
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a") && mobileViewport.matches) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    closeMenu(true);
  }
});

// Reset the mobile state on resize and avoid leaving focus in a hidden menu.
mobileViewport.addEventListener("change", () => {
  closeMenu(
    mobileViewport.matches && navigation.contains(document.activeElement),
  );
});

document.querySelectorAll(".details-button").forEach((button) => {
  const details = document.getElementById(button.getAttribute("aria-controls"));
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!isExpanded));
    details.hidden = isExpanded;
    button.firstChild.textContent = isExpanded
      ? "View Details "
      : "Hide Details ";
    button.querySelector("span").textContent = isExpanded ? "+" : "-";
  });
});
