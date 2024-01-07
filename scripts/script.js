// Open navbar
const nav_btn = document.querySelector(".toggle a");
const dropdown_menu = document.querySelector(".menu");

nav_btn.addEventListener("click", handleOpenNavbar);

// Handle open navbar
function handleOpenNavbar() {
  dropdown_menu.classList.toggle("active");
}
