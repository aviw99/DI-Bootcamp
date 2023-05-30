const url = "https://api.giphy.com/v1/gifs/search";
const hilarious_search_param = "q=hilarious";

const g_rating_param = "rating=g";
const key_param = "api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";

const url_exercise_two = "https://api.giphy.com/v1/gifs/search?api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&q=sun&rating=g&limit=10&offset=2";
const body = document.querySelector('body');
body.style.margin = '0';


const wrap = document.createElement('div');
body.appendChild(wrap);

// function api_call(){
//     return fetch(`${url}?${hilarious_search_param}&${g_rating_param}&${key_param}`);
// }
// const data = api_call();
// data
//     .then((res)=>{
//     if(res.ok){
//         return res.json()
//     }else{
//         throw new Error('invalid')
//     }
// }).then(res => {
//     for(let i = 0; i < res.data.length; i++){
//         const gif = res.data[i]['images']['original']['url'];
//         console.log(gif)
//     }
// })
// .catch(err => console.log(err))

// function sun_call(){
//     return fetch(url_exercise_two)
// }
// const data = sun_call();
// data
// .then(res => {
//     if(res.ok){
//         return res.json()
//     }else{
//         throw new Error('invalid')
//     }
// }).then(res => {
//     for(let i = 0; i < res.data.length; i++){
//         const gif = res.data[i]['images']['original']['url'];
//         wrap.innerHTML += `<img src="${gif}" style="width: 200px; margin: 10px;">`;
//     }
// }).catch(err => console.log(err))


async function func(){
    try{
        const response = await fetch("https://www.swapi.tech/api/starships/9/");
        const data = await response.json();
        return data
    }catch{
        console.log('error')
    }
}

func()
.then(res => {
    const obj = res['result']['properties'];
    console.log(obj)
})