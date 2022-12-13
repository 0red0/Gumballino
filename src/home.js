import overlay from "./confetti.js";
export default (function () {
   window.addEventListener("load", party);
})();

const homeOverlay = document.querySelector("#home .home-overlay");
const menuBtn = document.querySelector(".menu-holder");
const homePage = document.getElementById("home");
const menuPage = document.getElementById("menu");

function party() {
   let horn = document.getElementById("horn");
   horn.play();

   homeOverlay.addEventListener("click", () => {
      horn.play();
   });
   setTimeout(() => {
      homeOverlay.classList.add("hide");
      setTimeout(() => {
         homeOverlay.classList.add("none");
      }, 500);
   }, 4000);
}

menuBtn.addEventListener("click", goToMenu);
function goToMenu() {
   homePage.style.display = "none";
   menuPage.style.display = "block";
}
