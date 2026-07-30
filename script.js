//
const container= document.querySelector(".container");

function createGrid(size){
    for (let a=0 ; a<size*size; a++){
        const square= document.createElement("div");
        square.classList.add("grid-square");

        square.addEventListener("mouseover",()=>{
            square.classList.add("hovered");

        });

        container.appendChild(square);
    }
}

createGrid(16);