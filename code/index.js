
function createDiv() {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'divLandingSection1';

//----------home
    // buscar o container no html
    const container = document.getElementsByClassName('container')[0];
    // inserir a imgDiv no container
    container.appendChild(imgDiv);

    // criar o elemento imagem
    const homeImg = document.createElement('img');

    // configurar a imagem
    homeImg.src = "images/main1.jpg";
    // adicionar o elemento imagem na div

    imgDiv.appendChild(homeImg);

    const header = document.getElementsByClassName('header')[0];

    //criar o elemento menu no header
    const menuItemHome = document.createElement('div');
    menuItemHome.className = 'menuSectionHome'
    menuItemHome.textContent = 'Home';

    //adicionar o elemento menu no header
    header.appendChild(menuItemHome);
    




    // ------ about me
     //criar elemento titulo 
    const titleAbout = document.createElement('h2');
    titleAbout.textContent = 'About me'
    titleAbout.className = 'titleSection1'
    //add no section about
    container.appendChild(titleAbout);
    const sectionAbout = document.createElement('div');
    sectionAbout.className = 'divLandingSection2';

    container.appendChild(sectionAbout);

    //criar o elemento imagem avatar
    const avatarImg = document.createElement('img');

    //configurar a imagem avatar
    avatarImg.src ="images/fotoperfil.jpg";

    //addcionar o elemento imagem na div
    sectionAbout.appendChild(avatarImg);
    

    //adicionar o element titulo mn 
    //criar elemento paragrafo
    const infoAvatar = document.createElement('p'); 

    //escrever o paragrafo
    infoAvatar.textContent = "Ariane Crestani  \r\n <br>oii ";

   

    //adicionar o elemento paragrafo na div
    sectionAbout.appendChild(infoAvatar);


      //criar o elemento about me no header
    const aboutMe = document.createElement('div');
    aboutMe.className = 'menuSectionAboutMe'
    aboutMe.textContent = 'About Me';

    //adicionar o elemento menu no header
    header.appendChild(aboutMe);




    ////---------project
    const titleProject = document.createElement('h3');
    //escrever o paragrafo
    titleProject.textContent = 'Project';
    titleProject.className = 'titleSection3'

    //adicionar o elemento paragrafo na div

    container.appendChild(titleProject);

    const project = document.createElement('div');
    project.className = 'divLandingSection3';

    container.appendChild(project);

     //criar o elemento menu no header
    const menuProject = document.createElement('div');
    menuProject.className = 'menuSectionProject'
    menuProject.textContent = 'project';


    //adicionar o elemento menu no header
    header.appendChild(menuProject);



    //criar o elemento do link
    
    const linkBlog =  document.createElement('a');
    
    //colar o link de redirecionamento

    linkBlog.href = 'https://arianecrestani.github.io/travel-blog/blog-post.html'
    linkBlog.textContent = 'Travel-Blog';
    linkBlog.className = 'linkBlog';
    //adicionar o elemento link na div

    project.appendChild(linkBlog);

///////-----contato

    //criar o elemento contact no header
    const contact = document.createElement('div');
    contact.className = 'menuSectionContact'
    contact.textContent = 'Contact';
    header.appendChild(contact);

    const titleContact = document.createElement('h2');
    titleContact.textContent = 'Contact';
    titleContact.className = 'titleSection2';
    //add no section about
    container.appendChild(titleContact);




  //---------footer--------


  const footer = document.createElement('div');
  footer.className = 'footer';

  container.appendChild(footer);
  






}

createDiv()
