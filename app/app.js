const nav = document.querySelector(#"nav");
const open = document.querySelector(#"open");
const close = document.querySelector(#"close");

open.addEventListener("click", () => {
    ul.classList.add("visible");
})
close.addEventListener("click", () => {
    ul.classList.remove("visible");
})
