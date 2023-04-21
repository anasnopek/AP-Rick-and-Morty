const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

open.addEventListener("click", () => {
    nav.classList.add("nav-visible");
})
close.addEventListener("click", () => {
    nav.classList.remove("nav-visible");
})

const URL_API = "https://rickandmortyapi.com/api/character/?page=5";

fetch( URL_API )
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    const characters = data.results;
    const $containerGrid = document.getElementById("container-grid");

    for (let i = 0; i < characters.length; i++) {
      $containerGrid.innerHTML += `
      <div class="grid-item">
        <img src="${characters[i].image}">
        <h3 class="characters-name">${characters[i].name}</h3>
        <p>Gender:${characters[i].gender}</p>
        <p>Species:${characters[i].species}</p>
        <p>Status:${characters[i].status}</p>
        <p>Origin:${characters[i].origin.name}</p>
      </div>
      `;
    }
  });


