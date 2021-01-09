
function createHomeSection() {
    const imgDiv = document.createElement('div');
    imgDiv.className = 'divLandingSection1';
    
    const container = document.getElementsByClassName('container')[0];
    container.appendChild(imgDiv);

    const homeImg = document.createElement('img');
    homeImg.src = "images/main3.jpg";
    imgDiv.appendChild(homeImg);

    const titleImage = document.createElement('h1');
    titleImage.textContent= 'Ariane Crestani'
    titleImage.className = 'titleMeName'
    imgDiv.appendChild(titleImage);
    
    const subTitleImg = document.createElement ('h2');
    subTitleImg.textContent = 'Portfolio'
    subTitleImg.className = 'titlePortfolio'
    imgDiv.appendChild(subTitleImg);

    const header = document.getElementsByClassName('header')[0];

    const menuItemHome = document.createElement('div');
    menuItemHome.className = 'menuSectionHome'
    menuItemHome.textContent = 'Home';

    header.appendChild(menuItemHome);
}

function createAboutMeSection() {
    
    const header = document.getElementsByClassName('header')[0];

    const container = document.getElementsByClassName('container')[0];

    const titleAbout = document.createElement('h2');
    titleAbout.textContent = 'About me'
    titleAbout.className = 'title'
    container.appendChild(titleAbout);

    const sectionAbout = document.createElement('div');
    sectionAbout.className = 'divLandingSection2';
    container.appendChild(sectionAbout);

    const avatarImg = document.createElement('img');
    avatarImg.src ="images/fotoperfil.jpg";
    sectionAbout.appendChild(avatarImg);
    
    const textContainer = document.createElement('div');
    textContainer.className = 'textoDivSection2';
    sectionAbout.appendChild(textContainer);

    const mainTitleAboutMe = document.createElement('h2');
    mainTitleAboutMe.textContent = 'I am Ariane!';
    mainTitleAboutMe.className = 'textAboutMe';
    textContainer.appendChild(mainTitleAboutMe);

    const infoAvatar = document.createElement('p'); 
    infoAvatar.textContent = "I am still learning Front End and this is my portfolio with my first project web page travel-Blog";
    infoAvatar.className = 'textAboutMe';
    textContainer.appendChild(infoAvatar);

    const aboutMeHeader = document.createElement('div');
    aboutMeHeader.className = 'menuSectionAboutMe'
    aboutMeHeader.textContent = 'About Me';
    header.appendChild(aboutMeHeader);
}

function createProjectSection() {
    const header = document.getElementsByClassName('header')[0];

    const container = document.getElementsByClassName('container')[0];
    
    const titleProject = document.createElement('h2');
    titleProject.textContent = 'Project';
    titleProject.className = 'title'
    container.appendChild(titleProject);

    const project = document.createElement('div');
    project.className = 'divLandingSection3';
    container.appendChild(project);

    const menuProject = document.createElement('div');
    menuProject.className = 'menuSectionProject'
    menuProject.textContent = 'project';

    header.appendChild(menuProject);

    const blogSection = document.createElement('div');
    blogSection.className = 'blogSection';
    project.appendChild(blogSection);

    const linkBlog =  document.createElement('a');
    linkBlog.href = 'https://arianecrestani.github.io/travel-blog/blog-post.html'
    linkBlog.textContent = 'Travel-Blog';
    linkBlog.className = 'linkBlog';
    
    blogSection.appendChild(linkBlog);

    const imgBlog = document.createElement('img');
    imgBlog.src = 'images/logo.jpg';
    imgBlog.className = 'imgBlog';

    linkBlog.appendChild(imgBlog)


}

function createSection() {
    const container = document.getElementsByClassName('container')[0];

    const header = document.getElementsByClassName('header')[0];
    
    createHomeSection();
    createAboutMeSection();
    createProjectSection();
    


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

createSection()

