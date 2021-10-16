let resolution = 16;

const container = document.createElement('div');
container.setAttribute('id', 'container');
const body = document.getElementById('body')
body.appendChild(container);

const reset = document.getElementById(`reset`);
console.log(reset)
reset.addEventListener('click', resetBoard);

fillGrid(resolution);


function fillGrid(resolution) {
    container.style.gridTemplateColumns = `repeat(${resolution}, 1fr)`
    container.style.gridTemplateRows = `repeat(${resolution}, 1fr)`
  

    for (i=0; i<resolution * resolution; i++){
        const box = document.createElement('div');
        box.setAttribute('class', 'box');
        box.addEventListener('mouseover', draw);
        container.appendChild(box);
    }

}

function draw(e) {
    e.target.style.backgroundColor = `black`;
}

function resetBoard() {
    container.innerHTML = '';
    let ask;

    while (ask < 0 || ask > 100 || isNaN(ask)) {
        ask = prompt('Select a number between 1 and 100');
    }

    resolution = ask;

    fillGrid(resolution);
}