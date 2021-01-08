
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
    homeImg.src = "images/main3.jpg";
   

    // adicionar o elemento imagem na div

    imgDiv.appendChild(homeImg);

    const titleImage =document.createElement('h1');
    titleImage.textContent= 'Ariane Crestani'
    titleImage.className = 'titleImage'

    imgDiv.appendChild(titleImage);

    const header = document.getElementsByClassName('header')[0];

    //criar o elemento menu no header
    const menuItemHome = document.createElement('div');
    menuItemHome.className = 'menuSectionHome'
    menuItemHome.textContent = 'Home';


    // ------ about me
     //criar elemento titulo 
    const titleAbout = document.createElement('h2');
    titleAbout.textContent = 'About me'
    titleAbout.className = 'title'
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
    
    ////texto dentro da section 2
    const textContainer = document.createElement('div');
    textContainer.className = 'textoDivSection2';

    sectionAbout.appendChild(textContainer);



    const mainTitleAboutMe = document.createElement('h2');
    mainTitleAboutMe.textContent = 'I am Ariane!';
    mainTitleAboutMe.className = 'textAboutMe';

    textContainer.appendChild(mainTitleAboutMe);

    //criar elemento paragrafo
    const infoAvatar = document.createElement('p'); 
    //escrever o paragrafo
    infoAvatar.textContent = "I am still learning Front End and this is my portfolio with my first project";
    infoAvatar.className = 'textAboutMe';
   

    //adicionar o elemento paragrafo na div
    textContainer.appendChild(infoAvatar);


      //criar o elemento about me no header
    const aboutMeHeader = document.createElement('div');
    aboutMeHeader.className = 'menuSectionAboutMe'
    aboutMeHeader.textContent = 'About Me';

    //adicionar o elemento menu no header
    header.appendChild(aboutMeHeader);




    ////---------project
    const titleProject = document.createElement('h2');
    //escrever o paragrafo
    titleProject.textContent = 'Project';
    titleProject.className = 'title'

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
    const contactMenu = document.createElement('div');
    contactMenu.className = 'menuSectionContact'
    contactMenu.textContent = 'Contact';
    header.appendChild(contactMenu);

    const titleContact = document.createElement('h2');
    titleContact.textContent = 'Contact';
    titleContact.className = 'title';
 
    container.appendChild(titleContact);


    const contactSection= document.createElement('div');
    contactSection.className = 'divLandingSection4'
 
    container.appendChild(contactSection);

    const linkEmail =  document.createElement('a');
    linkEmail.href = 'mailto:ariane.crestani@gmail.com'
    linkEmail.className = 'linkMidiasEmail';

    contactSection.appendChild(linkEmail);

    const midiaEmailImg =  document.createElement('img');
    midiaEmailImg.src = 'images/email.jpg';
    midiaEmailImg.className = 'midias';
    
    linkEmail.appendChild(midiaEmailImg);
    //--------linkdin

    const linkLinkdin =  document.createElement('a');
    linkLinkdin.href = 'https://www.linkedin.com/in/ariane-crestani-14910ba4/';
    linkLinkdin.className = 'linkMidiaLinkdin';

    contactSection.appendChild(linkLinkdin);


    const imgLinkdin = document.createElement('img');
    imgLinkdin.src = 'images/linkdin.jpg'
    imgLinkdin.className = 'midias';

    linkLinkdin.appendChild(imgLinkdin);


    const linkGithub =  document.createElement('a');
    linkGithub.href = 'https://github.com/arianecrestani'

    contactSection.appendChild(linkGithub);

    const imgGithub = document.createElement('img');
    imgGithub.src = 'images/github.jpg'
    imgGithub.className = 'midias';

    linkGithub.appendChild(imgGithub);


  //---------footer--------


  const footer = document.createElement('div');
  footer.className = 'footer';

  container.appendChild(footer);
  






}

createDiv()
