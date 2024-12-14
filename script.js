const container = document.querySelector('.container');
const button = document.querySelector('button');
const input = document.querySelector('input');



function create_row(number_of_the_row){

    const row = document.createElement('div');
    row.classList.add('row');

    for(let i = 1 ; i <= number_of_the_row; i++){
        const box = document.createElement('div');  
        box.classList.add('box');
        row.appendChild(box);
        box.addEventListener("mouseover", () => {
            box.style.background = 'orange';
        });
        
    }
    container.appendChild(row);
  
}

function create_grid(size){ 
    for(let i = 1 ; i <= size; i++){
        create_row(size);
    }
}
create_grid(5);
button.addEventListener("click", () => {
    while (container.hasChildNodes()){
        container.removeChild(container.firstChild);
    }
    if(input.value <=100)
        create_grid(input.value);
    else{ 
        alert("limita este de 100");
        create_grid(5);
    }
    
})