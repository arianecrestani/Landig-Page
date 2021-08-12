const createMenuItem = (href, textContent) => {
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
//
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
    mainTitleAboutMe.textContent = 'Hi, I am Ariane!';
    mainTitleAboutMe.className = 'textAboutMe';
    textContainer.appendChild(mainTitleAboutMe);

    const infoAboutMe = document.createElement('p'); 
    infoAboutMe.textContent = `I am a graduate and have worked for many years in the commercial area include the sale of software.
    When I moved to Berlin I learned the German Language as well and worked in a clothing store Uniqlo to have more experience in the commercial area and language practice.
    
    While living in Berlin my circle of friends was more from technology. 
    These inspired me to learn more about that.Then I start to see myself as an engineer.
    My interest and passion in the first view were of the visual of the page the process to build it.
    My first step to learn was in platforms like Free Code Camp that I could practice.
    I've happily switched my career from commercial management to engineering. I got certified as a front-end developer by Udacity. I learned skills to build a web page using HTML, CSS, and Javascript`
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
    linkBlog.href = 'https://arianecrestani.github.io/Travel-blog/'
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
    imgLinkdin.src = 'images/linkedin.jpg';
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

function createFooter ()  {

    const container = document.getElementsByClassName('container')[0];

    const footer = document.createElement('div');
    footer.className = 'footer';
    container.appendChild(footer);
    
}

const createSection = () => {
    createHomeSection();
    createAboutMeSection();
    createProjectSection();
    createContactSection();
    createFooter();
}


function highlightMenuSection() {
    
    const sections = document.getElementsByClassName('divSection');
    const menu = document.getElementsByClassName('menuSection');
    
    document.addEventListener('scroll', (event) => {
        console.log(document.body.offsetHeight);
        console.log(event);
        let selectedMenuItem;

        for(let i = 0; i < sections.length; i++) {
            const section = sections[i];
            const isShowingCurrentSection = section.getBoundingClientRect().top - document.body.offsetHeight/5 <= document.body.offsetHeight/2;
            
            if(isShowingCurrentSection) {
                selectedMenuItem = menu[i];
            } 
        }

        if (event.target.scrollingElement.scrollTop == 0) { 
            selectedMenuItem = menu[0];
        } 
        
        for (const item of menu) {
            if (item === selectedMenuItem) {
                item.setAttribute('style', 'background-color:silver');
            } else {
                item.setAttribute('style', 'background-color: none;');
            }
        }
    });
    
}

window.addEventListener('load', () => {
    createSection();
    highlightMenuSection();
});

