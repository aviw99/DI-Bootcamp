const body = document.querySelector('body');
const wrap = document.createElement('div');
body.appendChild(wrap);
body.style.margin = 0;
body.style.height = "100%";
body.style.width = "100%";
const side_bar = document.createElement('div');
const grid = document.createElement('div');
wrap.appendChild(side_bar);
wrap.appendChild(grid);
wrap.style.display = 'flex';
side_bar.style.backgroundColor = '#ECF8F9';
side_bar.style.width = 350+'px';
side_bar.style.height = "100vh";
grid.style.backgroundColor = '#698999'; 
grid.style.width = "100vw";
grid.style.height = "100vh";
const side_wrap1 = document.createElement('div');
const side_wrap2 = document.createElement('div');
const side_wrap3 = document.createElement('div');
const clear = document.createElement('div');
clear.innerText = 'random';
clear.style.height = '80px';
clear.style.border = '#698999 solid 1px';
clear.style.padding = '10px';
clear.style.borderRadius = '10px';
clear.style.margin = '10px 10px 5px 10px';
clear.style.fontSize = '50px';
clear.style.lineHeight = '75px';
clear.style.textAlign = 'center';
clear.style.fontFamily = 'sans-serif';
side_bar.appendChild(clear);
const color_choose = document.createElement('div');
side_bar.appendChild(color_choose);
color_choose.style.display = 'flex';
const colorArray1 = ['#ffd1dc', '#ffa07a', '#00ced1', '#e6e6fa', '#ffb6c1', '#add8e6', '#f0e68c'];
const colorArray2 = ['#f08080', '#ffb347', '#87cefa', '#b0e0e6', '#dda0dd', '#98fb98', '#ffdead'];
const colorArray3 = ['#ff69b4', '#c0f8ff', '#ff7f50', '#a0ffff', '#d8bfd8', '#90ee90', '#ffebcd'];
let color = 'white';
for(let i = 0; i < 7; i++){
    const boxs = document.createElement('div');
    boxs.style.backgroundColor = colorArray1[i];
    boxs.style.width = 100+'px';
    boxs.style.height = 100+'px';
    boxs.style.border = '#ECF8F9 solid 1px';
    boxs.style.borderRadius = '10px';
    side_wrap1.appendChild(boxs);
    boxs.addEventListener('click', () =>{color = colorArray1[i]});
}
for(let i = 0; i < 7; i++){
    const boxs = document.createElement('div');
    boxs.style.backgroundColor = colorArray2[i];
    boxs.style.width = 100+'px';
    boxs.style.height = 100+'px';
    boxs.style.border = '#ECF8F9 solid 1px';
    boxs.style.borderRadius = '10px';
    side_wrap2.appendChild(boxs);
    boxs.addEventListener('click', () =>{color = colorArray2[i]});
}
for(let i = 0; i < 7; i++){
    const boxs = document.createElement('div');
    boxs.style.backgroundColor = colorArray3[i];
    boxs.style.width = 100+'px';
    boxs.style.height = 100+'px';
    boxs.style.border = '#ECF8F9 solid 1px';
    boxs.style.borderRadius = '10px';
    side_wrap3.appendChild(boxs);
    boxs.addEventListener('click', () =>{color = colorArray3[i]});
}
color_choose.appendChild(side_wrap1);
color_choose.appendChild(side_wrap2);
color_choose.appendChild(side_wrap3);
for(let j = 0; j<25; j++){
    const cell_row = document.createElement('div'); 
    for(let i = 0; i < 34; i++){
        const cell = document.createElement('div');
        cell.style.width = '32.3px';
        cell.style.height = '32.3px';
        cell.style.backgroundColor = 'white';
        cell.style.border = 'white solid 1px';
        cell_row.appendChild(cell);
        cell.style.borderRadius = '3px';
        cell.addEventListener('click', ()=>{cell.style.backgroundColor = color});
        let mouseDown = false;
        grid.addEventListener('mousedown', ()=>{
            mouseDown = true;
        })
        grid.addEventListener('mouseup', ()=>{
            mouseDown = false;
        })
        grid.addEventListener('mousemove',(event)=>{
            if(mouseDown){
                let cell = event.target;
                cell.style.backgroundColor = color;
            }
        })       
    }
    grid.appendChild(cell_row);
    cell_row.style.display = 'flex';
}
clear.addEventListener('click', () => {
    color = generateRandomColor();
  });

function generateRandomColor() {
    // Generate random values for red, green, and blue channels
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
  
    // Construct the RGB color string
    const color = `rgb(${r}, ${g}, ${b})`;
  
    return color;
  }
  
