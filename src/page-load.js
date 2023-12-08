import RestaurantImage from './restaurant.jpeg';
import './style.css';

const homeLoad = () => {
    const TITLE_TEXT = 'Welcome to Luigi\'s awesome restaurant';
    const P1 = 'Get ready to have the best experience in town. A genuine culinary experience.';
    const P2 = 'With Caribbean flavors mixed with Pacific and native indigineous cuisine from Colombia';

    const image = new Image();
    image.src = RestaurantImage;

    const title = document.createElement('h1');
    title.innerHTML = TITLE_TEXT;

    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    paragraph1.innerHTML = P1;
    paragraph1.classList.add('p');
    paragraph2.innerHTML = P2;

    const content = document.getElementById("content");
    content.appendChild(title);
    content.appendChild(image);
    content.appendChild(paragraph1);
    content.appendChild(paragraph2);
}

export {homeLoad};