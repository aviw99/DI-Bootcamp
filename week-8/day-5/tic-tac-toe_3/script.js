const body = document.querySelector('body');
const bgColor = 'orange';
body.style.backgroundColor = bgColor;
const wrap = document.getElementById('wrap');
wrap.style.width = '100vw';
wrap.style.height = '100vh';
const board = document.createElement('div');
board.style.display = 'grid';
board.style.gridTemplateColumns = '1fr 1fr 1fr';
board.style.width = '306px';
board.style.top = '15%';
board.style.left = '22%';
const grid = document.createElement('img');
grid.setAttribute('src', 'images/grid.png');
grid.style.width = '250px';
board.style.position = 'relative';
grid.style.position = 'absolute';
grid.style.top = '25px';
board.appendChild(grid)

board.style.justifyItems = 'center';


const choose = document.createElement('div');
const select = document.createElement('h2');
select.innerText = 'select';
const x = document.createElement('button');
x.innerText = 'X';
const or = document.createElement('h2');
or.innerText = 'or';
const o = document.createElement('button');
o.innerText = 'O';
choose.appendChild(select);
choose.appendChild(x);
choose.appendChild(or);
choose.appendChild(o);

choose.style.display = 'flex';
x.style.height = '30px';
x.style.margin = '20px 8px';
o.style.height = '30px';
o.style.margin = '20px 8px';
choose.style.position = 'absolute';
choose.style.top = '170px';
choose.style.left = '28%';
const difficulty = document.createElement('div');
difficulty.style.position = 'absolute';
difficulty.style.top = '170px';
difficulty.style.left = '23%';
const chooseDifficulty = document.createElement('h2');
chooseDifficulty.innerText = 'choose difficulty:';
const or2 = document.createElement('h2');
or2.innerText = 'or';
const easy = document.createElement('button');
easy.innerText = 'easy';
const hard = document.createElement('button');
hard.innerText = 'hard';
difficulty.appendChild(chooseDifficulty);
difficulty.appendChild(easy);
difficulty.appendChild(or2);
difficulty.appendChild(hard);
easy.style.height = '30px';
easy.style.margin = '20px 8px';
hard.style.height = '30px';
hard.style.margin = '20px 8px';
difficulty.style.display = 'flex';




function main(){
    const gameMoves = [];
    wrap.appendChild(difficulty);
    easy.addEventListener('click', easyGame);
    hard.addEventListener('click', hardGame);
    function easyGame(){
        difficulty.remove();
        wrap.appendChild(choose);
    }
    function hardGame(){
        difficulty.remove()
        wrap.appendChild(choose);
    }
    let userSelection = '';
    x.addEventListener('click', userX);
    o.addEventListener('click', userO);
    function userX(){
        console.log('function userX')
        choose.remove()
        wrap.appendChild(board);
        userSelection = 'X';
    }
    function userO(){
        console.log('function userO')
        choose.remove()
        wrap.appendChild(board);
        userSelection = 'O';
    }
    for(let i = 1; i <= 9; i++){
        const cell = document.createElement('div');
        cell.style.width = '100px';
        cell.style.height = '100px';
        cell.style.lineHeight = '100px';
        cell.style.textAlign = 'center';
        cell.style.color = 'white';
        cell.style.fontSize = '50px';
        cell.style.zIndex = '10';
        cell.addEventListener('click', function () {
            if(userSelection === 'X'){
                gameMoves.push(`player X - cell ${i}`)
                cell.innerText = 'X';
                console.log(gameMoves) // api request to gpt api with gameMoves array, will return an empty cell index which will be displayed as the computers move
            }else if(userSelection === 'O'){
                cell.innerText = 'O';
            }
            })
        board.appendChild(cell)
    }
}


window.onload = () =>{
    main()
}