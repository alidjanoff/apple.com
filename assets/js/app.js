let cartIcon = document.querySelector(".cart");
let headerOverlay = document.querySelector(".outClickOverlay");
let cartBox = document.querySelector(".cartBox").style;
let toggle = false;

cartIcon.addEventListener("click", () => {
  if (toggle == false) {
    cartBox.display = "block";
    headerOverlay.style = "display: block";
    toggle = true;
  } else {
    cartBox.display = "none";
    headerOverlay.style = "display: none";
    toggle = false;
  }
});

headerOverlay.addEventListener("click", () => {
  cartBox.display = "none";
  headerOverlay.style = "display: none";
});

// Mobile Menu
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}
