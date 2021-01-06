
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
    const menuItemHome = document.createElement('div');
    menuItemHome.className = 'menuSectionHome'
    menuItemHome.textContent = 'Home';

    //adicionar o elemento menu no header
    header.appendChild(menuItemHome);
    




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
    infoAvatar.textContent = 'Ariane Crestani  ';
    
   

    //adicionar o elemento paragrafo na div
    contact.appendChild(infoAvatar);


      //criar o elemento menu no header
    const menuItemContact = document.createElement('div');
    menuItemContact.className = 'menuSectionContact'
    menuItemContact.textContent = 'contact';

    //adicionar o elemento menu no header
    header.appendChild(menuItemContact);


    ////---------project

    const project = document.createElement('div');
    project.className = 'divLandingSection3';

    container.appendChild(project);

     //criar o elemento menu no header
    const menuProject = document.createElement('div');
    menuProject.className = 'menuSectionProject'
    menuProject.textContent = 'project';


    //adicionar o elemento menu no header
    header.appendChild(menuProject);

    //criar o paragrafo

    const titleProject = document.createElement('p');


    //escrever o paragrafo
    titleProject.textContent = 'Project';
    titleProject.className = 'projectTitle'

    //adicionar o elemento paragrafo na div

    project.appendChild(titleProject);

    //criar o elemento do link
    
    const linkBlog =  document.createElement('a');
    
    //colar o link de redirecionamento

    linkBlog.href = 'file:///Users/arianecrestani/Documents/GitHub/travel-blog/index.html'
    linkBlog.textContent = 'Travel-Blog';
    linkBlog.className = 'linkBlog';
    //adicionar o elemento link na div

    project.appendChild(linkBlog);

  //---------footer--------


  const footer = document.createElement('div');
  footer.className = 'footer';

  container.appendChild(footer);
  






}

createDiv()
