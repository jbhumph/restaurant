import "./styles.css";
import { load } from "./pageLoad.js";
import { menuLoad } from "./menuLoad.js";

load();

const content = document.querySelector("#content");

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");

homeButton.addEventListener("click", () => {
    content.innerHTML = "";
    load();
})

menuButton.addEventListener("click", () => {
    content.innerHTML = "";
    menuLoad();
})
