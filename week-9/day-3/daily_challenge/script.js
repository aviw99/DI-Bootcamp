const api_key = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const base_url = "api.giphy.com/v1/gifs/search";
const body = document.querySelector('body');
const delete_btn = document.createElement('input');
delete_btn.setAttribute('type', 'button');
delete_btn.setAttribute('value', 'delete all');
delete_btn.setAttribute('onClick', "deleteGifs()");
const wrap = document.createElement('div');
body.appendChild(wrap);
wrap.appendChild(delete_btn);

async function handleSubmit(e){
    e.preventDefault();
    const categoryInput = document.getElementById('categoryInput');
    const category = categoryInput.value;
    fetchGif(category)
        .then(res => res.json())
        .then(data => {
            img_render(data.data[0])
            })
}
function fetchGif(category){
    const category_param = `${category}`;
    const url = `https://${base_url}?q=${category_param}&api_key=${api_key}&limit=1`;
    return fetch(url);
}

function img_render(obj){
    const img_path = obj['images']['original']['url'];
    const gif_img = document.createElement('img');
    gif_img.setAttribute('src', `${img_path}`);
    gif_img.style.width = '200px';
    const delete_one = document.createElement('input');
    delete_one.setAttribute('type', 'button');
    delete_one.setAttribute('value', 'delete');
    delete_one.setAttribute('onClick', "deleteOne(event)");
    const gif_container = document.createElement('div');
    gif_container.appendChild(gif_img);
    gif_container.appendChild(delete_one);
    wrap.appendChild(gif_container)
}

function deleteGifs(){
    wrap.remove()
}

function deleteOne(e){
    e.target.parentElement.remove()
}