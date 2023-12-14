import './style.css';

function createFooter() {
  const footer = document.createElement('footer');
  footer.classList.add('footer');

  const copyright = document.createElement('p');
  copyright.textContent = `Copyright © ${new Date().getFullYear()} Luis J.`;

  footer.appendChild(copyright);

  return footer;

};

function createHeader(){
  const header = document.createElement('header');
  header.classList.add('header');

  const title = document.createElement('p');
  title.textContent = 'Luigi\'s Cuisine';
  title.classList.add('title');

  header.appendChild(title);

  return header;
}

function createNavigation(){
  const nav = document.createElement('navigation');
  nav.classList.add('navigation');

  const home = document.createElement('button');
  home.classList.add('button-nav');
  home.textContent = 'Home';

  const menu = document.createElement('button');
  menu.classList.add('button-nav');
  menu.textContent = 'Menu';

  const contact = document.createElement('button');
  contact.classList.add('button-nav');
  contact.textContent = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function loadWebSite(){
    const content = document.getElementById('content');
    
    content.appendChild(createHeader());
    content.appendChild(createNavigation());
    content.appendChild(createFooter());
    
}

export default loadWebSite;