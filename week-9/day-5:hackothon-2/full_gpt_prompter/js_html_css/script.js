const inputForm = document.getElementById('inputForm');
const actor = inputForm.actor_input;
const task = inputForm.task_input;
const format = inputForm.format_input;
const outputPrompt = document.getElementById('output-prompt');

const loading_icon = document.createElement('img');
loading_icon.setAttribute('src', 'images/loading.svg');
loading_icon.style.width = '30px';

loading_icon.style.zIndex = '10';
loading_icon.style.position = 'absolute';
loading_icon.style.left = '74vw';
loading_icon.style.top = '25vh';
loading_icon.className = 'fa-solid fa-spinner fa-spin-pulse fa-spin-reverse';



function formOneSubmit(e){
    e.preventDefault();
    generate_request(actor.value, task.value, format.value);
}


function generate_request(actor, task, format){
    const payload = {
        actor: actor,
        task: task,
        format: format
    };
    fetch('http://127.0.0.1:8000/openai/generate/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(res => res.json())
        .then(data => {
            displayPrompt(data)
        })
        .catch(err => {
            console.log(err)
        })
    inputForm.appendChild(loading_icon);
}
function displayPrompt(data){
    console.log(data)
    outputPrompt.value = data['prompt'];
    loading_icon.remove();
}

