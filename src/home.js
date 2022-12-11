import overlay from "./confetti.js";
export default (function () {
   window.addEventListener("load", party);
   function party() {
      const homeOverlay = document.querySelector(".home .home-overlay");
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
})();
