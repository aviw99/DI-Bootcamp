const body = document.querySelector('body');
const wrap = document.getElementById('wrap');

body.style.backgroundColor = '#5cacd2';

const board = document.createElement('div');
const text = document.createElement('h1');
const choose = document.createElement('h3');
const x = document.createElement('h3');
const or = document.createElement('h3');
const o = document.createElement('h3');
const xDiv = document.createElement('div');
const oDiv = document.createElement('div');
choose.innerTEXT = 'choose';
x.innerText = 'X';
or.innerTEXT = 'or';
o.innerText = 'O';
xDiv.appendChild(x);
oDiv.appendChild(o);
const choose_line = document.createElement('div');
choose_line.style.position = 'absolute';
xDiv.addEventListener('click', xFunc);
function xFunc(){
    console.log('X')
}
oDiv.addEventListener('click', oFunc);
function oFunc(){
    console.log('O')
}
choose_line.appendChild(choose);
choose_line.appendChild(xDiv);
choose_line.appendChild(or);
choose_line.appendChild(oDiv);

text.innerText = 'Tic-Tac-Toe';
const topLeft = document.createElement('div');
topLeft.style.height = '100px';
topLeft.style.width = '100px';
topLeft.style.borderBottom = 'black 2px solid';
topLeft.style.borderRight= 'black 2px solid';
const topCenter = document.createElement('div');
topCenter.style.height = '100px';
topCenter.style.width = '100px';
topCenter.style.borderBottom = 'black 2px solid';
topCenter.style.borderRight= 'black 2px solid';
const topRight = document.createElement('div');
topRight.style.height = '100px';
topRight.style.width = '100px';
topRight.style.borderBottom = 'black 2px solid';
const middleLeft = document.createElement('div');
middleLeft.style.height = '100px';
middleLeft.style.width = '100px';
middleLeft.style.borderBottom = 'black 2px solid';
middleLeft.style.borderRight = 'black 2px solid';
const middleCenter = document.createElement('div');
middleCenter.style.height = '100px';
middleCenter.style.width = '100px';
middleCenter.style.borderBottom = 'black 2px solid';
middleCenter.style.borderRight = 'black 2px solid';
const middleRight = document.createElement('div');
middleRight.style.width = '100px';
middleRight.style.height = '100px';
middleRight.style.borderBottom = 'black 2px solid';
const bottomLeft = document.createElement('div');
bottomLeft.style.height = '100px';
bottomLeft.style.width = '100px';
bottomLeft.style.borderRight = 'black 2px solid';
const bottomCenter = document.createElement('div');
bottomCenter.style.height = '100px';
bottomCenter.style.width = '100px';
bottomCenter.style.borderRight = 'black 2px solid';
const bottomRight = document.createElement('div');
bottomRight.style.height = '100px';
bottomRight.style.width = '100px';
const row1 = document.createElement('div');
const row2 = document.createElement('div');
const row3 = document.createElement('div');
row1.style.display = 'flex';
row2.style.display = 'flex';
row3.style.display = 'flex';
row1.appendChild(topLeft);
row1.appendChild(topCenter);
row1.appendChild(topRight);
row2.appendChild(middleLeft);
row2.appendChild(middleCenter);
row2.appendChild(middleRight);
row3.appendChild(bottomLeft);
row3.appendChild(bottomCenter);
row3.appendChild(bottomRight);
board.style.color = 'white';
board.appendChild(text);
board.appendChild(choose_line);

text.style.marginTop = '-100px';
text.style.marginBottom = '50px';

board.appendChild(row1);
board.appendChild(row2);
board.appendChild(row3);
board.style.textAlign = 'center';
wrap.appendChild(board);
wrap.style.display = 'flex';
wrap.style.justifyContent = 'center';
wrap.style.transform = 'translateY(60%)';