
function createDiv() {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'divLandingPage';


    // buscar o container no html
    const container = document.getElementsByClassName('container')[0];
    // inserir a imgDiv no container
    container.appendChild(imgDiv);
}

createDiv()