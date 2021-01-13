


function createMenuItemHome() {
    const header = document.getElementsByClassName('header')[0];
    const menuItemHome = document.createElement('a');

    menuItemHome.href ='#home';
    menuItemHome.className = 'menuSection';
    menuItemHome.textContent = 'Home';
    header.appendChild(menuItemHome);

}

function createMenuItemAboutMe(){
    const header = document.getElementsByClassName('header')[0];
    const aboutMeHeader = document.createElement('a');

    aboutMeHeader.href = '#aboutMe';
    aboutMeHeader.className = 'menuSection'
    aboutMeHeader.textContent = 'About Me';
    header.appendChild(aboutMeHeader);
}

function createMenuItemProject() {
    const header = document.getElementsByClassName('header')[0];
   
    const menuProject = document.createElement('a');

    menuProject.href = '#project';
    menuProject.className = 'menuSection'
    menuProject.textContent = 'project';
    header.appendChild(menuProject);
}

function createMenuItemContact() {
    const header = document.getElementsByClassName('header')[0];


    const contactMenu = document.createElement('a');
    contactMenu.href = '#contact';
    contactMenu.className = 'menuSection';
    contactMenu.textContent = 'Contact';
    header.appendChild(contactMenu);
}

function createHomeSection() {
    const container = document.getElementsByClassName('container')[0];
   
    const sectionHome = document.createElement('div');
    sectionHome.className = 'divLandingSection1';
    sectionHome.id = 'home';
    container.appendChild(sectionHome);

    const homeImg = document.createElement('img');
    homeImg.src = "images/main3.jpg";
    homeImg.id ='imgHome'
    sectionHome.appendChild(homeImg);

    const homeTitle = document.createElement('div');
    homeTitle.className = 'homeTitle';
    homeImg.appendChild(homeTitle);

    const titleImage = document.createElement('h1');
    titleImage.textContent= 'Ariane Crestani'
    titleImage.className = 'titleMeName'
    homeImg.appendChild(titleImage);
    
    const subTitleImg = document.createElement ('h2');
    subTitleImg.textContent = 'Portfolio'
    subTitleImg.className = 'titlePortfolio'
    homeImg.appendChild(subTitleImg);

    
     

    createMenuItemHome();
}

function createAboutMeSection() {
    const container = document.getElementsByClassName('container')[0];
    
    const titleAbout = document.createElement('h2');
    titleAbout.id = 'aboutMe'
    titleAbout.textContent = 'About Me'
    titleAbout.className = 'title'
    container.appendChild(titleAbout);

    const sectionAbout = document.createElement('div');
    sectionAbout.className = 'divLandingSection2';
    container.appendChild(sectionAbout);

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

    const avatarImg = document.createElement('img');
    avatarImg.id = 'avatarImg';
    avatarImg.src ="images/fotoperfil.jpg";
    sectionAbout.appendChild(avatarImg);
    

    createMenuItemAboutMe();
}

function createProjectSection() {
    const container = document.getElementsByClassName('container')[0];
    
    const titleProject = document.createElement('h2');
    titleProject.id = 'project';
    titleProject.textContent = 'Project';
    titleProject.className = 'title'
    container.appendChild(titleProject);

    const project = document.createElement('div');
    project.className = 'divLandingSection3';
    container.appendChild(project);

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

    createMenuItemProject();
}

function createContactSection() {
    const container = document.getElementsByClassName('container')[0];

    const titleContact = document.createElement('h2');
    titleContact.id = 'contact';
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

    createMenuItemContact();
}

function createFooter() {

    const container = document.getElementsByClassName('container')[0];

    const footer = document.createElement('div');
    footer.className = 'footer';
    container.appendChild(footer);
    
}

function createSection() {
    createHomeSection();
    createAboutMeSection();
    createProjectSection();
    createContactSection();
    createFooter();
}

window.addEventListener('load', () => {
    createSection();
});
