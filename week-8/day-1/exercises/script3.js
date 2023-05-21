let allBoldItems = [];

function getBold_items(){
    let bold = document.querySelectorAll('strong');
    for(item of bold){
        allBoldItems.push(item)
    }
    return allBoldItems
}
function highlight(){
    let bold = getBold_items()
    for(let item of bold){
        item.style.color = 'blue'
    }
}

function return_normal(){
    let bold = getBold_items()
    for(let item of bold){
        item.style.color = 'black'
    }
}

let p = document.querySelector('p');

p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', return_normal)
