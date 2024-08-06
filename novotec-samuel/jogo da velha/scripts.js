const cellELements = document.querySelectorAll("[data-cell]");

let isCircleTurn;

for (const cell of cellELements) {
    cell.addEventListener("click", handleClick, {once: true})
}

const handleClick = (e) {
    //colocar a marca (x ou circulo)

    //verificar por vitoria

    //verificar por empate

    //mudar simbolo
}