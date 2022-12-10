import "./style.scss";
import { camelCase } from "lodash";
import * as gum from "./gum.js";

console.log(camelCase("hello world"));
const content = document.querySelector(".content");
let h = document.createElement("h1");
h.innerText = "testing Gumball";
document.body.append(h);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
   content.innerText = "";
   console.log("donen");
   gum.gumming();
});
