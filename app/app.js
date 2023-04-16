const nav = document.querySelector(#"nav");
const open = document.querySelector(#"open");
const close = document.querySelector(#"close");

open.addEventListener("click", () => {
nav.ul.add ("visible");
})
close.addEventListener("click", () => {
    nav.ul.remove("visible");
})
