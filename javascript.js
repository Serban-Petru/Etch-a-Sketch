let defaultSize_x = 2;
let defaultSize_y = 2;


function sliderData(){
    const colectData = document.querySelector("#volume");
    const showData = document.querySelector("#sliderData");
    colectData.addEventListener("click",() => {
    showData.textContent = colectData.value;
    
});
}

function createArray(arrayNumber,blockNumber){
    for(let i = 1; i<= arrayNumber; i++){
    const matrix = document.querySelector(".matrix");
    const array = document.createElement("ul");
    
    array.setAttribute("id",`array-${i}`);
    matrix.appendChild(array);
    for(let j = 1; j<= blockNumber; j++){
        const block = document.createElement("li");
        
        block.setAttribute("id",`array-${i}-${j}`);
        array.appendChild(block);
        colorChange(block,"red");
    }
}
}

function colorChange(block,color){
    block.addEventListener("mouseenter",() => {
        block.style.background = color;
    });
}
sliderData();
createArray(2,2);

