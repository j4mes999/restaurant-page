import './style.css'

const loadContact = () => {
    const CONTACT_TITLE = 'CONTACT';
    const CONTACT_DATA = 'Carrera 6 666 66 number 6';
    const CONTACT_REGION = 'Bogota, Colombia';

    const h2 = document.createElement('h2');
    h2.innerHTML = CONTACT_TITLE;

    const body = document.createElement('p');
    body.innerHTML = CONTACT_DATA;
    body.classList.add('p');

    const region = document.createElement('p');
    region.innerHTML = CONTACT_REGION;
    region.classList.add('p');

    const content = document.getElementById('content');
    content.appendChild(h2);
    content.appendChild(body);
    content.appendChild(region);

    content.style.backgroundImage = "url(../src/menubackground.png)"; 

};

export {loadContact}