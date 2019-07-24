let hamburguer = document.querySelector("#hamburguer");
let menu = document.querySelector("section");

function controlarMenu(){
    menu.classList.toggle("aparecerMenu");
}

hamburguer.onclick = controlarMenu;