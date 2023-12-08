import './style.css';

const loadMenu = () => {
    const STARTERS_TITLE = 'Starters';
    const STARTER01 = 'Fish soup';
    const STARTER02 = 'Caribañola';

    const MAIN_DISH_TITLE = 'Main Dishes';
    const MAIN01 = 'Fried deep Snapper with coconut rice and patacon';
    const MAIN02 = 'Pulled Pork wrap in its own skin full of rice, peas and chick peas';

    const DESSERT_TITLE = 'Dessert';
    const DESSERT01 = 'Strawberry cheese cake';
    const DESSERT02 = 'Apple pie';

    let h2 = document.createElement('h2');
    h2.innerHTML = STARTERS_TITLE;
    let body = document.createElement('p');
    let body02 = document.createElement('p');
    body.innerHTML = STARTER01;
    body02.innerHTML = STARTER02;
    body.classList.add('p');
    body02.classList.add('p');

    const contentDiv = document.getElementById('content');
    contentDiv.appendChild(h2);
    contentDiv.appendChild(body);
    contentDiv.appendChild(body02);

    h2 = document.createElement('h2');
    body = document.createElement('p');
    body02 = document.createElement('p');
    h2.innerHTML = MAIN_DISH_TITLE;
    body.innerHTML = MAIN01;
    body02.innerHTML = MAIN02;
    contentDiv.appendChild(h2);
    contentDiv.appendChild(body);
    contentDiv.appendChild(body02);

    h2 = document.createElement('h2');
    body = document.createElement('p');
    body02 = document.createElement('p');
    h2.innerHTML = DESSERT_TITLE;
    body.innerHTML = DESSERT01;
    body02.innerHTML = DESSERT02;
    contentDiv.appendChild(h2);
    contentDiv.appendChild(body);
    contentDiv.appendChild(body02);

    contentDiv.style.backgroundImage = "url(../src/menubackground.png)"; 

}

export {loadMenu};