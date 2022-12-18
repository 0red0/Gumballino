import overlay from "./confetti.js";
export default (function () {
   window.addEventListener("load", party);

   const homeOverlay = document.querySelector("#home .home-overlay");
   const menuBtn = document.querySelectorAll(".menu-holder");
   const homeBtn = document.querySelectorAll(".goto-home");
   const aboutBtn = document.querySelectorAll(".burger-holder");
   const homePage = document.getElementById("home");
   const menuPage = document.getElementById("menu");
   const aboutPage = document.getElementById("about");

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
      }, 2000);
   }

   menuBtn.forEach((b) => b.addEventListener("click", goToMenu));
   function goToMenu() {
      homePage.style.display = "none";
      menuPage.style.display = "block";
      aboutPage.style.display = "none";
   }

   homeBtn.forEach((b) => b.addEventListener("click", goToHome));
   function goToHome() {
      homePage.style.display = "block";
      menuPage.style.display = "none";
      aboutPage.style.display = "none";
   }

   aboutBtn.forEach((b) => b.addEventListener("click", goToAbout));
   function goToAbout() {
      homePage.style.display = "none";
      menuPage.style.display = "none";
      aboutPage.style.display = "block";
   }
})();
