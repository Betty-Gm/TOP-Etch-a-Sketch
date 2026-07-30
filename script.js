// To create new grid on button click
const resetBtn= document.getElementById("reset-grid-btn");
resetBtn.addEventListener("click",()=>{
    let newSize= prompt("Enter number of squares per side (Max 100): ");
    newSize= Number(newSize);

    if(newSize<1 || newSize>100){
        alert("Please ente a valid number between 1 and 100");
        return;
    }
    else{
        container.textContent="";
        createGrid(newSize);
    }
})

//

const container= document.querySelector(".container");

function createGrid(size){
    let newSize= 960/size;
    for (let a=0 ; a<size*size; a++){
        const square= document.createElement("div");
        square.classList.add("grid-square");
        square.style.height= `${newSize}px`;
        square.style.width= `${newSize}px`;

        square.addEventListener("mouseover",()=>{
            square.classList.add("hovered");

        });

        container.appendChild(square);
    }
}

createGrid(16);
