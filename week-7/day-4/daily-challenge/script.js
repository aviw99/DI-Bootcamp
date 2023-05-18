const planets = {
    'Mercury': 0,
    'Venus': 0,
    'Earth': 1,
    'Mars': 2,
    'Jupiter': 79,
    'Saturn': 82,
    'Uranus': 27,
    'Neptune': 14
};

const section = document.querySelector('.listPlanets');

for(let planet in planets){
    let newDiv = document.createElement('div');
    let new_planet = document.createElement('div');
    new_planet.classList.add('planet');
    let color = Math.floor(Math.random()*16777215).toString(16);
    new_planet.style.backgroundColor = '#'+color;
    newDiv.appendChild(new_planet);
    newDiv.style.width = "500px";
    section.appendChild(newDiv);
    let counter = 0;
    for(let moon = 0; moon < planets[planet]; moon++){
        counter += 50;
        let new_moon = document.createElement('div');
        new_moon.classList.add('moon');
        new_moon.style.display = 'inline-block';
        let moon_color = Math.floor(Math.random()*16777215).toString(16);
        new_moon.style.backgroundColor = '#'+moon_color;
        new_planet.appendChild(new_moon);
        new_moon.style.left = counter +"px";
    }
}









