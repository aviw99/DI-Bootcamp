const body = document.querySelector('body');
const wrap = document.getElementById('wrap');
body.style.margin = '0';
body.style.backgroundColor = '#c2730a';
wrap.style.height = '100vh';
const textDivMain = document.createElement('div');
const textOne = document.createElement('h1');
const choose = document.getElementById('choose');

choose.remove();
textOne.innerText = 'Tic-Tac-Toe';
textDivMain.style.color = '#c2730a';
textDivMain.style.borderRadius = '10px';
textDivMain.style.width = '304px';
textDivMain.style.height = '440px';
textDivMain.style.backgroundColor = 'rgba(249,194,151,0.48)';
textDivMain.style.textAlign = 'center';
textDivMain.appendChild(textOne);
textDivMain.appendChild(choose);
textDivMain.style.position = 'absolute';
textDivMain.style.top = '135px';
wrap.style.display = 'flex';
wrap.style.position = 'relative';
wrap.style.justifyContent = 'center';
wrap.style.alignItems = 'center';
const rows = [];

function gameRender(user){
    if(user === 'X'){
        userX()
    }else if(user === 'O'){
        console.log('user is o')
    }
}
function userX(){
    rows.forEach((rowDiv)=>{
        rowDiv.forEach((cell)=>{
            cell.addEventListener('click', function(){
                cell.style.backgroundColor = 'red';
            })
        })
    })
}


// creating game board
for(let j = 0; j < 3; j++){
    const rowDiv = document.createElement('div');
    for (let i = 0; i < 3; i++) {
        const cell = document.createElement('div');
        cell.style.borderRadius = '10px';
        cell.style.width = '88px';
        cell.style.height = '88px';
        cell.style.margin = '5px';
        cell.style.marginTop = '10px';
        cell.style.backgroundColor = '#ffd7af';
        cell.classList.add('cell');

        rowDiv.appendChild(cell)
    }
    rows.push(rowDiv)
}


// render game function
function render(arr){
    arr.forEach((rowDiv) => {
        wrap.appendChild(textDivMain);
        wrap.appendChild(rowDiv)
    })
}


// render new game on load
window.onload = ()=>{
    render(rows)
    const xButton = document.querySelector('#x');
    const oButton = document.querySelector('#o');
    xButton.addEventListener('click', function() {
        // set user to x and computer to o
        const user = 'X';
        const computer = 'O';
        gameRender(user, computer);
        // render(new rows setup)
    });
    oButton.addEventListener('click', function() {
        // set user to o and computer to x
        const user = 'O';
        const computer = 'X';
        gameRender(user, computer);
        // render(new rows setup)
    });
}
