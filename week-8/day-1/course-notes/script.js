// let red = document.getElementById('inner');
// let move = document.getElementsByName('move');
// let stop = document.getElementsByName('stop');
// move.addEventListener('click', function(e){
//     console.log('hello');
//     }   
// );


let id;
let pos = 0;
function move(){
    let box = document.getElementById('inner');
    id = setInterval(function(){
        if(pos >= 350){
            clearInterval(id);
        }
        pos++;
        box.style.left = pos+"px";
    },5)
}

function stop(){
    clearInterval(id);
}