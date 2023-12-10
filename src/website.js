import { container } from 'webpack';
import './style.css'

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

  header.appendChild(title);

  return header;
}

function createNavigation(){
  const nav = document.createElement('navigation');
  nav.classList.add('navigation');

  const home = document.createElement('div');
  home.textContent = 'Home';

  const menu = document.createElement('div');
  menu.textContent = 'Menu';

  const contact = document.createElement('div');
  contact.textContent = 'Contact';

  nav.appendChild(home);
  nav.appendChild(menu);
  nav.appendChild(contact);

  return nav;
}

function loadWebSite(){
    const content = document.getElementById('content');

    content.appendChild(createHeader());
    
    content.appendChild(createFooter());
    
};

export default loadWebSite;