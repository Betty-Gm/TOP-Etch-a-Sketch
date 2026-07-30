// To create new grid on button click
const resetBtn= document.getElementById("reset-grid-btn");
resetBtn.addEventListener("click",()=>{
    let squareSize= prompt("Enter number of squares per side (Max 100): ");
    squareSize= Number(squareSize);

    if(squareSize<1 || squareSize>100){
        alert("Please ente a valid number between 1 and 100");
        return;
    }
    else{
        container.textContent="";
        createGrid(squareSize);
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

            let r= Math.floor(Math.random()*256);
            let g= Math.floor(Math.random()*256);
            let b= Math.floor(Math.random()*256);
            
            square.style.backgroundColor= (`rgb(${r}, ${g}, ${b})`);

        });

        container.appendChild(square);
    }
}

createGrid(16);
