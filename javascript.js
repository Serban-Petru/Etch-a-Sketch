
function createArray(arrayNumber,blockNumber){
    for(let i = 0; i< arrayNumber; i++){
    const matrix = document.querySelector(".matrix");
    const array = document.createElement("ul");
    
    array.setAttribute("id",`array-${arrayNumber}`);
    matrix.appendChild(array);
    for(let i = 0; i< blockNumber; i++){
        const block = document.createElement("li");
        
        block.setAttribute("id",`array-${blockNumber}`);
        array.appendChild(block);
    }
}
}



createArray(5,5);