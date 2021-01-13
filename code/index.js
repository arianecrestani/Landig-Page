function createMenuItem(href, textContent) {
    const header = document.getElementsByClassName('header')[0];
    const menuItem = document.createElement('a');

    menuItem.href = href;
    menuItem.className = 'menuSection';
    menuItem.textContent = textContent;
    header.appendChild(menuItem);
}

function createTitleSection(id, textContent) {

    const container = document.getElementsByClassName('container')[0];
    const titleSection = document.createElement('h2');

    titleSection.id = id;
    titleSection.textContent = textContent;
    titleSection.className = 'title';
    container.appendChild(titleSection);
}

function createHomeSection() {
    const container = document.getElementsByClassName('container')[0];
   
    const sectionHome = document.createElement('div');
    sectionHome.className = 'divSectionHome';
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
    
    const subTitleImg = document.createElement('h2');
    subTitleImg.textContent = 'Portfolio'
    subTitleImg.className = 'titlePortfolio'
    homeImg.appendChild(subTitleImg);

    createMenuItem('#home', 'Home');
}

function createAboutMeSection() {
    const container = document.getElementsByClassName('container')[0];

    createTitleSection('aboutMe', 'About Me');
    
    const sectionAbout = document.createElement('div');
    sectionAbout.className = 'divSectionAboutMe';
    container.appendChild(sectionAbout);

    const textContainer = document.createElement('div');
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
    

    createMenuItem('#aboutMe', 'About Me');
    
}

function createProjectSection() {
    const container = document.getElementsByClassName('container')[0];
    createTitleSection('project', 'Project');

    const project = document.createElement('div');
    project.className = 'divSectionProject';
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

    
    createMenuItem('#project', 'project');
    
}

function createContactSection() {
    const container = document.getElementsByClassName('container')[0];
    createTitleSection('contact', 'Contact');

    const contactSection= document.createElement('div');
    contactSection.className = 'divSectionContact'
    container.appendChild(contactSection);

    const linkEmail =  document.createElement('a');
    linkEmail.href = 'mailto:ariane.crestani@gmail.com'
    contactSection.appendChild(linkEmail);

    const midiaEmailImg =  document.createElement('img');
    midiaEmailImg.src = 'images/email.jpg';
    midiaEmailImg.className = 'medias';
    linkEmail.appendChild(midiaEmailImg);
    
    const linkLinkdin =  document.createElement('a');
    linkLinkdin.href = 'https://www.linkedin.com/in/ariane-crestani-14910ba4/';
    contactSection.appendChild(linkLinkdin);

    const imgLinkdin = document.createElement('img');
    imgLinkdin.src = 'images/linkdin.jpg'
    imgLinkdin.className = 'medias';
    linkLinkdin.appendChild(imgLinkdin);

    const linkGithub =  document.createElement('a');
    linkGithub.href = 'https://github.com/arianecrestani'
    contactSection.appendChild(linkGithub);

    const imgGithub = document.createElement('img');
    imgGithub.src = 'images/github.jpg'
    imgGithub.className = 'medias';
    linkGithub.appendChild(imgGithub);

    createMenuItem('#contact', 'contact');
    
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
