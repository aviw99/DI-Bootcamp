function hello(){
    alert('Hello World');
}

function adding(){
    let div = document.getElementById('container');
    let p = document.createElement('p');
    p.innerText = 'Hello World'
    div.appendChild(p)
}

setTimeout(() => {
    hello();
  }, 2000);

setTimeout(() => {
    adding();
  }, 2000);

function interval(){
    let div = document.getElementById('container');
    let p = document.createElement('p');
    p.innerText = 'Hello World'
    div.appendChild(p)
    if(div.children.length >= 5){
        clear()
    };
}

let intervalid = setInterval(() => {
    interval();
}, 2000);

let button = document.getElementById('clear');
button.addEventListener('click', clear)

function clear(){
    clearInterval(intervalid)
}
