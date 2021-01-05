
function createDiv() {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'divLandingSection1';


    // buscar o container no html
    const container = document.getElementsByClassName('container')[0];
    // inserir a imgDiv no container
    container.appendChild(imgDiv);

    // criar o elemento imagem
    const homeImg = document.createElement('img');

    // configurar a imagem
    homeImg.src = "images/mesa1.jpg";
    // adicionar o elemento imagem na div

    imgDiv.appendChild(homeImg);

    const header = document.getElementsByClassName('header')[0];

    //criar o elemento menu no header
    const menuItem = document.createElement('div');
    menuItem.className = 'menuSection'
    menuItem.textContent = 'Ho8me';

    //adicionar o elemento menu no header
    header.appendChild(menuItem);
    




    // ------ CONTATO
    const contact = document.createElement('div');
    contact.className = 'divLandingSection2';

    container.appendChild(contact);

    //criar o elemento imagem avatar
    const avatarImg = document.createElement('img');

    //configurar a imagem avatar
    avatarImg.src ="images/mesa4.jpg";

    //addcionar o elemento imagem na div
    contact.appendChild(avatarImg);


    //criar elemento paragrafo
    const infoAvatar = document.createElement('p'); 

    //escrever o paragrafo
    infoAvatar.textContent = 'oiii';

    //adicionar o elemento paragrafo na div
    contact.appendChild(infoAvatar);


      //criar o elemento menu no header
    const menuItemContact = document.createElement('div');
    menuItemContact.className = 'menuSection'
    menuItemContact.textContent = 'Contact';

    //adicionar o elemento menu no header
    header.appendChild(menuItemContact);


    ////---------project

    const project = document.createElement('div');
    project.className = 'divLandingSection3';

    container.appendChild(project);

    


}

createDiv()

