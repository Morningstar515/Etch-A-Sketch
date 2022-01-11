
const container = document.getElementById("screenDiv");
let rainbowBtn = document.querySelector('.rainbow');
let blackBtn = document.querySelector('.black');
let eraseBtn = document.querySelector('.erase');
let clearBtn = document.querySelector('.clear');
    

// Grid Generation

function makeGrid(gridSize){
    for( i = 0; i < gridSize ** 2; i++){
       let cell = document.createElement('div');
        container.appendChild(cell).classList.add('cell');
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = 'black';
        })
    }

    container.style.gridTemplateColumns = `repeat(${gridSize}, auto)`;
    container.style.gridTemplateRows = `repeat(${gridSize}, auto)`;
    
}
// The whole shabang
makeGrid(slider.value);
RGB()
Black()
erase()


// Slider Values

let slideValue = document.getElementById('slider');
let outputValue = document.getElementById('output');

outputValue.innerHTML = slider.value

slider.oninput = function()  {
    outputValue.innerHTML = slider.value;
    clearGrid()
}

// clear grid

function clearGrid(){
    container.innerHTML = '';
    makeGrid(slider.value);
    RGB()
    Black()
    erase()
    
    
}

// Color Functions


function RGB(){
    let cell = container.querySelectorAll('.cell')
    rainbowBtn.addEventListener('click', () => {
        cell.forEach(cell => cell.addEventListener('mouseover', () =>{
            let color1 = Math.floor(Math.random() * 255)
            let color2 = Math.floor(Math.random() * 255) 
            let color3 = Math.floor(Math.random() * 255)
            cell.style.background = `rgb(${color1},${color2}, ${color3})`
    }))
})

}    

function Black(){
    let cell = container.querySelectorAll('.cell')
    blackBtn.addEventListener('click', () => {
        cell.forEach(cell => cell.addEventListener('mouseover', () =>{
            
            cell.style.background = 'black';
    }))
})
}

function clear(){
    clearBtn.addEventListener('click',() =>{
        clearGrid()
    })
}

function erase(){
    let cell = container.querySelectorAll('.cell')
    eraseBtn.addEventListener('click', () => {
        cell.forEach(cell => cell.addEventListener('mouseover', () =>{
            
            cell.style.background = 'white';
    }))
})

}




