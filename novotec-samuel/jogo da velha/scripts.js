const cellELements = document.querySelectorAll("[data-cell]");

let isCircleTurn = false;

const placeMark = (cell, classToAdd) => {
      cell.classList.add(classToAdd);
}

const swapTurns = () => {
    isCircleTurn = !isCircleTurn
}

const handleClick = (e) => {
    //colocar a marca (x ou circulo)
    const cell = e.target;
    const classToAdd = isCircleTurn ? "circle" : "x";

    placeMark = (cell, classToAdd);
    //verificar por vitoria

    //verificar por empate

    //mudar simbolo

    swapTurns();
}

for (const cell of cellELements) {
    cell.addEventListener("click", handleClick, {once: true})
}

