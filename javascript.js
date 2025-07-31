let sizeMatrix ;

function sliderData(){
    const colectData = document.querySelector("#volume");
    const showData = document.querySelector("#sliderData");

    colectData.addEventListener("click",() => {
    showData.textContent = colectData.value;
    sizeMatrix= colectData.value;
    removeMatrix();
    createMatrix(colectData.value);
});
}
const matrix = document.querySelector(".matrix");
function createMatrix(size=2){
    for(let i = 1; i<= size; i++){
    const array = document.createElement("ul");
    array.setAttribute("id",`array-${i}`);
    matrix.appendChild(array);
    for(let j = 1; j<= size; j++){
        const block = document.createElement("li");
        block.setAttribute("id",`array-${i}-${j}`);
        array.appendChild(block);
        colorChange(block);
    }
    }
}

function removeMatrix(){
    while (matrix.firstChild) {
        matrix.removeChild(matrix.firstChild);
    }
}


function colorData(){
    let colorChoise = document.querySelector("#color");
    return  colorChoise.value
}


function colorChange(block){
    block.addEventListener("mouseenter",() => {
        colorData();
        block.style.background = colorData();
    });
}

const tabula_rasa = document.querySelector("#clear");

tabula_rasa.addEventListener("click",() =>{
    removeMatrix();
    createMatrix(sizeMatrix);
});


createMatrix();
sliderData();
