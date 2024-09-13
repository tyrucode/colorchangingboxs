const boxContainer = document.querySelector('#box-container');
const newBoxButton = document.querySelector('#new-box-button');
const colorForm = document.querySelector('#color-form');
const colorInput = document.querySelector('#color-input');

let boxColor = 'black';
let boxCounter = 0;

colorForm.addEventListener('submit', function (e) {
    e.preventDefault();
    boxColor = colorInput.value;
    colorInput.value = '';

});

function addNewBox() {
    const newBox = document.createElement('div');
    boxCounter++;
    const currentBoxCount = boxCounter;
    newBox.classList.add('box');
    newBox.style.width = '100px';
    newBox.style.height = '100px';
    newBox.style.backgroundColor = boxColor;
    newBox.style.margin = '10px';
    newBox.dataset.id = boxCounter;
    newBox.textContent = `Box ${boxCounter}`;
    newBox.addEventListener('mouseover', function (e) {
        newBox.textContent = `Box Coordinates X: ${e.clientX} Y: ${e.clientY}`;
    });
    newBox.addEventListener('mouseleave', function (e) {
        newBox.textContent = `Box ${currentBoxCount}`;
    });
    boxContainer.appendChild(newBox);
}

document.addEventListener('mouseout', function (e) {
    if (e.target.classList.contains('box')) {
        const boxID = e.target.dataset.id;
        e.target.textContent = `Box ${boxID}`;
    }
});

newBoxButton.addEventListener('click', function () {
    addNewBox();
});

boxContainer.addEventListener('dblclick', function (e) {
    e.target.remove();
    if (e.target.contains('box')) {
        e.target.remove();
    }
});


document.addEventListener('keydown', function (e) {
    if (e.key === 'N' || e.key === 'n') {
        addNewBox();
    }
});