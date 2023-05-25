const body = document.querySelector('body');

const wrap = document.getElementById('wrap');

//     wrap styles
    wrap.style.display = 'flex';
    wrap.style.flexDirection = 'column';
    body.style.backgroundColor = '#96d9ff';


    body.style.backgroundImage = "url('https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%204/Day5/Mini%20Projects/Mini%20Project%201%20(Robots)/circuit-pattern.png?raw=true')";


const nav = document.getElementById('nav');

const nav_text = document.createElement('h1');
nav_text.innerText = 'ROBOFRIENDS';
nav_text.style.fontFamily = 'SEGA LOGO FONT';


const main = document.getElementById('main');
const main_inner = document.createElement('div');
main.appendChild(main_inner);
const search_form = document.createElement('form');
const input = document.createElement('input');
input.setAttribute('placeholder', 'Search Robots');
input.setAttribute('type', 'text');


    // input styles
    input.style.width = '30%';
    input.style.height = '32px';
    input.style.marginLeft = '60px';



input.addEventListener('input', inputSearch);

function inputSearch(e){
    const value = e.target.value;
    const filter = robots.filter(item => {
        return item.name.toLowerCase().includes(value.toLowerCase())
    })
    render(filter)


}


search_form.appendChild(input);


    // search_form styles
    search_form.style.display = 'flex';
    search_form.style.justifyContent = 'center';
    search_form.style.alignItems = 'center';
    search_form.style.height = '100%';

search_form.appendChild(nav_text);
search_form.appendChild(input);

nav.appendChild(search_form);

    // body styles
    body.style.margin = '0';

    // nav styles
    nav.style.backgroundColor = '#96ffd3';

    nav.style.width = '100vw';
    nav.style.height = '70px';
    nav.style.position = 'fixed';
    nav.style.backgroundImage = "url('https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%204/Day5/Mini%20Projects/Mini%20Project%201%20(Robots)/circuit-pattern.png?raw=true')";



// main styles
    main.style.marginTop = '100px';
    main_inner.style.display = 'grid';
    main_inner.style.margin =  '0 18%';
    main_inner.style.gridTemplateColumns = '0.5fr 0.5fr 0.5fr';
    main_inner.style.justifyContent = 'center';

function render(robots){
    main_inner.innerHTML = '';
    for (let robot of robots) {
        const card_bg = document.createElement('div');
        const card = document.createElement('div');
        const name_robot = document.createElement('h3');
        const img_robot = document.createElement('img');
        const email_robot = document.createElement('p');

        name_robot.innerText = robot.name;
        email_robot.innerText = robot.email;


        img_robot.setAttribute('src', robot.image);

        card_bg.style.overflow = 'hidden';
        card_bg.style.backgroundColor = '#d4abff';
        card_bg.style.border = 'solid 1px #003e61';
        card_bg.style.backgroundImage = "url('https://github.com/devtlv/studentsGitHub/blob/master/JS/Week%204/Day5/Mini%20Projects/Mini%20Project%201%20(Robots)/card-pattern.png?raw=true')";
        card_bg.style.width = '350px';
        card_bg.style.height = '450px';
        card_bg.style.margin = '10px'

        card_bg.style.textAlign = 'center';
        card_bg.style.borderRadius = '5%';
        card.style.backgroundColor = '#003e61';
        card.style.overflow = 'hidden';

        card.style.width = '300px';
        card.style.height = '300px';
        card.style.borderRadius = '100%';
        card.style.margin = '0 auto';
        card.style.marginTop = '20px';
        card.appendChild(img_robot);
        card_bg.appendChild(card);
        card_bg.appendChild(name_robot);
        card_bg.appendChild(email_robot);
        main_inner.appendChild(card_bg);
    }
}

window.onload = ()=>{
    render(robots)
}



