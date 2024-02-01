const container = document.querySelector('.container');

const black = document.querySelector('.black');
const clear = document.querySelector('.clear');
const rainbow = document.querySelector('.rainbow');
const size = document.querySelector('.size');

const createDivBlockBlack = () =>{
    let div = document.createElement('div');
    div.style.height = '30px';
    div.style.width = '30px';
    div.style.backgroundColor = 'white';
    div.style.border = '1px solid black';
    div.className = 'hovers';

    div.addEventListener('mouseover', (e)=>{
        e.target.style.backgroundColor = 'black';
    });

    clear.addEventListener('click', ()=>{
        div.style.backgroundColor = 'white';
    });

    return div;
}

const createDivBlockRGB = () =>{

    const rgbPicker = () =>{
        let numbers = [];
        for(let i = 0; i < 3; i++){
            let generated = Math.floor(Math.random()*255);
            numbers.push(generated);
        };
        return `rgb(${numbers[0]}, ${numbers[1]}, ${numbers[2]})`;
    };

    let div = document.createElement('div');
    div.style.height = '30px';
    div.style.width = '30px';
    div.style.backgroundColor = 'white';
    div.style.border = '1px solid black';
    div.className = 'hovers'

    div.addEventListener('mouseover', (e)=>{
        e.target.style.backgroundColor = rgbPicker();
    });

    clear.addEventListener('click', ()=>{
        div.style.backgroundColor = 'white';
    });

    return div;
};

const generateGrid = (color) => {
    for(let x = 0; x < 16; x++){
        let divContainer = document.createElement('div');
        divContainer.className = 'innerContainer';
        container.appendChild(divContainer);
        for(let i = 0; i < 16; i++){
            divContainer.appendChild(color());
        };
    };
    return;
};

generateGrid(createDivBlockBlack);

black.addEventListener('click', () => {
    container.innerHTML = '';
    generateGrid(createDivBlockBlack);
});

rainbow.addEventListener('click', ()=>{
    container.innerHTML = '';
    generateGrid(createDivBlockRGB);
});