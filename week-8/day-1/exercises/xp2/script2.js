let container = document.getElementById('container');
let animate = document.getElementById('animate');

let pos = 0;
let id;
function start(){
    id = setInterval(() => {
        move();
    }, 1);
}
function move(){
    if(pos >= 350){
      clearInterval(id);
      pos = 0
    }
    pos++
    animate.style.left = pos+'px';
}

function myMove(){
    start()
}