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

function createTitleSection2(id, textContent) {
    const titleSection = document.createElement('h2');

    titleSection.id = id;
    titleSection.textContent = textContent;
    titleSection.className = 'title';
    return titleSection;
}
function createTitleSection3(id, textContent) {
    const titleSection = document.createElement('h2');

    titleSection.id = id;
    titleSection.textContent = textContent;
    titleSection.className = 'title';
    return titleSection;
}
function createTitleSection4(id, textContent) {
    const titleSection = document.createElement('h2');

    titleSection.id = id;
    titleSection.textContent = textContent;
    titleSection.className = 'title';
    return titleSection;
}
function createDivSection() {
    const section = document.createElement('div');
    section.className = 'divSection';
    return section;
}

function createHomeSection() {
    const container = document.getElementsByClassName('container')[0];
   
    const section = createDivSection();
    container.appendChild(section);

    const homeSection = document.createElement('div');
    homeSection.className = 'divSectionHome';
    homeSection.id = 'home';
    section.appendChild(homeSection);

    const homeImg = document.createElement('img');
    homeImg.src = "images/main3.jpg";
    homeImg.id ='imgHome';
    homeSection.appendChild(homeImg);

    const homeTitle = document.createElement('div');
    homeTitle.className = 'homeTitle';
    homeSection.appendChild(homeTitle);

    const titleImage = document.createElement('h1');
    titleImage.textContent= 'Ariane Crestani  Portfolio'
    titleImage.className = 'titleMeName'
    homeTitle.appendChild(titleImage);

    createMenuItem('#home', 'Home');
}

function createAboutMeSection() {
    const container = document.getElementsByClassName('container')[0];

    const section = createDivSection();
    container.appendChild(section);

    const titleSection = createTitleSection2('aboutMe', 'About Me');
    section.appendChild(titleSection);
    
    const aboutSection = document.createElement('div');
    aboutSection.className = 'divSectionAboutMe';
    section.appendChild(aboutSection);

    const textContainer = document.createElement('div');
    textContainer.className = 'textContainer';
    aboutSection.appendChild(textContainer);

    const mainTitleAboutMe = document.createElement('h2');
    mainTitleAboutMe.textContent = 'I am Ariane!';
    mainTitleAboutMe.className = 'textAboutMe';
    textContainer.appendChild(mainTitleAboutMe);

    const infoAboutMe = document.createElement('p'); 
    infoAboutMe.textContent = "I am still learning Front End and this is my portfolio with my first project web page travel-Blog";
    infoAboutMe.className = 'textAboutMe';
    textContainer.appendChild(infoAboutMe);

    const avatarImg = document.createElement('img');
    avatarImg.className = 'avatarImg';
    avatarImg.src ="images/fotoperfil.jpg";
    aboutSection.appendChild(avatarImg);
    

    createMenuItem('#aboutMe', 'About Me');
    
}

function createProjectSection() {
    const container = document.getElementsByClassName('container')[0];

    const section = createDivSection();
    container.appendChild(section);

    const titleSection =  createTitleSection3('project', 'Project');
    section.appendChild(titleSection);
   
    const projectSection = document.createElement('div');
    projectSection.className = 'divSectionProject';
    section.appendChild(projectSection);

    const blogSection = document.createElement('div');
    blogSection.className = 'blogSection';
    projectSection.appendChild(blogSection);

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
  
    const section = createDivSection();
    container.appendChild(section);

    const titleSection = createTitleSection4('contact', 'Contact');
    section.appendChild(titleSection);

    const contactSection= document.createElement('div');
    contactSection.className = 'divSectionContact'
    section.appendChild(contactSection);

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

function highlightMenuSection() {
    
    // $sections incleudes all of the container divs that relate to menu items.
    const sections = document.getElementsByClassName('divSection');

    window.addEventListener('scroll', (event) => {
        // console.log(event);
        console.log(event.target.scrollingElement.scrollTop);

        // currentScroll is the number of pixels the window has been scrolled   

        // $currentSection is somewhere to place the section we must be looking at


        // We check the position of each of the divs compared to the windows scroll positon

        // divPosition is the position down the page in px of the current section we are testing   

        // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.

        // the -1 is so that it includes the div 1px before the div leave the top of the window.

        // We have either read the section or are currently reading the section so we'll call it our current section

        // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.

    });
    
}

window.addEventListener('load', () => {
    createSection();
    highlightMenuSection();
});

