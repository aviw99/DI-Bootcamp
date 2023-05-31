function findSomeone(e){
    e.preventDefault();
    text_box.appendChild(loadingImg);
    getData()
        .then(res => res.json())
        .then(data => handleData(data))
        .catch(err => console.log(err))
}
const text_box = document.getElementById('text_box');
text_box.className = 'fa-3x';
const loadingImg = document.createElement('img');
loadingImg.setAttribute('src', 'icons/darth-vader.png');
loadingImg.style.width = '80px';
loadingImg.style.backgroundColor = '#ffab06';
loadingImg.style.position = 'absolute';
loadingImg.style.top = '80px';
loadingImg.style.borderRadius = '10px';
loadingImg.style.left = '23vw';
loadingImg.className= 'a-solid fa-compact-disc fa-flip';
const details = document.createElement('div');
const the_name = document.createElement('h3');
const the_height = document.createElement('p');
const the_gender = document.createElement('p');
const the_year = document.createElement('p');
const the_world = document.createElement('p');
details.style.color = 'white';
details.style.fontSize = '20px';
details.appendChild(the_name);
details.appendChild(the_height);
details.appendChild(the_gender);
details.appendChild(the_year);
details.appendChild(the_world);

function getData(){
    let randomNum = Math.floor(Math.random()*82) + 1;
    return fetch(`https://www.swapi.tech/api/people/${randomNum}`)
}

async function handleData(data){
    const name = data['result']['properties']['name'];
    const height = 'Height: '+data['result']['properties']['height'];
    const gender = 'Gender: '+data['result']['properties']['gender'];
    const birth_year = 'Birth Year: '+data['result']['properties']['birth_year'];
    const homeworld = data['result']['properties']['homeworld'];
    let planet = 'not found';
    try{
        const homeworldResult = await fetch(homeworld);
        const response = await homeworldResult.json();
        planet = 'Home World: '+response['result']['properties']['name']
    }catch (e) {}
    const dataObj = {'name': name, 'height': height, 'gender': gender, 'birth_year': birth_year, 'homeworld': planet };
    await display(dataObj)
}
function display(obj){
    try{
        the_name.innerHTML = obj['name'];
        the_height.innerHTML = obj['height'];
        the_gender.innerHTML = obj['gender'];
        the_year.innerHTML = obj['birth_year'];
        the_world.innerHTML = obj['homeworld'];
        text_box.appendChild(details)
        console.log(obj)
        loadingImg.remove()
    }catch{}
}
