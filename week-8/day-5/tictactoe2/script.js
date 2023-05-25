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
textDivMain.style.color = '#ffb2ab';
textDivMain.style.borderRadius = '10px';
textDivMain.style.width = '304px';
textDivMain.style.height = '440px';
textDivMain.style.backgroundColor = 'rgba(249,194,151,0.48)';
textDivMain.style.textAlign = 'center';
textDivMain.style.borderRight = 'black solid 2px';
textDivMain.style.borderBottom = 'black solid 2px';
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
        console.log('2-user is x')
        userX(user)
    }else if(user === 'O'){
        console.log('2-user is o')
        userO(user)
    }
}
function userX(user){
    console.log('3-running userX function');
    gameBoard(user)
}
function userO(user){
    console.log('3-running userO function');
    gameBoard(user)
}


let colors = ["#c20a57", "#c2730a"];
let currentIndex = 0;
wrap.addEventListener('dblclick', function() {
    let currentColor = colors[currentIndex];
    console.log(currentColor);
    wrap.style.backgroundColor = currentColor;
    currentIndex = (currentIndex + 1) % colors.length;
});
// creating game board
function gameBoard(user){
    if(!user) {
        console.log('1-user not defined')
        for (let j = 0; j < 3; j++) {
            const rowDiv = document.createElement('div');
            for (let i = 0; i < 3; i++) {
                const cell = document.createElement('div');
                cell.style.borderRadius = '10px';
                cell.style.width = '88px';
                cell.style.height = '88px';
                cell.style.margin = '5px';
                cell.style.marginTop = '10px';
                cell.style.backgroundColor = '#ffb2ab';
                cell.classList.add('cell');
                rowDiv.appendChild(cell);
            }
            rows.push(rowDiv)
        }
        return rows
    }else if(user){
        console.log(`4-${user}`)
        for (let j = 0; j < 3; j++) {
            const rowDiv = document.createElement('div');
            for (let i = 0; i < 3; i++) {
                const cellU = document.createElement('div');
                cellU.style.borderRadius = '10px';
                cellU.style.width = '88px';
                cellU.style.height = '88px';
                cellU.style.margin = '5px';
                cellU.style.marginTop = '10px';
                cellU.style.backgroundColor = '#ffb2ab';
                cellU.classList.add('cell');
                cellU.addEventListener('click', clicked);
                rowDiv.appendChild(cellU);
            }
            rows.push(rowDiv)
        }
        return rows
    }
}
function clicked(e){
    const value = e.target.value;
    console.log(value);
}

// render game function
function render(arr){
    arr = gameBoard()
    arr.forEach((rowDiv) => {
        wrap.appendChild(rowDiv);
        wrap.appendChild(textDivMain);
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
    });
    oButton.addEventListener('click', function() {
        // set user to o and computer to x
        const user = 'O';
        const computer = 'X';
        gameRender(user, computer);
    });
}
