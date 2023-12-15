import './style.css';
import loadMenu  from './menu';
import { loadContact } from './contact';
import { homeLoad } from './home';

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
  header.appendChild(createNavigation());

  return header;
}

function createNavigation(){
  const nav = document.createElement('navigation');
  nav.classList.add('navigation');

  const home = document.createElement('button');
  home.classList.add('button-nav');
  home.textContent = 'Home';
  home.addEventListener('click', () => {
    const body = document.getElementById('body');
    body.innerHTML = '';
    body.appendChild(homeLoad());
  })

  const menu = document.createElement('button');
  menu.classList.add('button-nav');
  menu.textContent = 'Menu';
  menu.addEventListener('click', () => {
    const body = document.getElementById('body');
    body.innerHTML = '';
    body.appendChild(loadMenu());
  });

  const contact = document.createElement('button');
  contact.classList.add('button-nav');
  contact.textContent = 'Contact';
  contact.addEventListener('click', () => {
    const body = document.getElementById('body');
    body.innerHTML = '';
    body.appendChild(loadContact());
  });

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function loadWebSite(){
    const content = document.getElementById('content');
    const body = document.createElement('body');
    body.classList.add('body-content');
    body.setAttribute('id', 'body');
    
    content.appendChild(createHeader());
    content.appendChild(body);
    content.appendChild(createFooter());
    
}

export default loadWebSite;