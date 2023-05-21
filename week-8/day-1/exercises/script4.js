let form = document.getElementById('MyForm');
console.log(form);

function calculate(e){
    e.preventDefault()
    let radius = document.getElementById('radius').value;
    let cubed = radius ** 3;
    let multiplied = cubed * (4/3);
    let res = multiplied * Math.PI;
    let volume = document.getElementById('volume');
    volume.value = res
}
let body = document.querySelector('body');
body.addEventListener('click', function(){
    body.style.background = 'red'
})
body.addEventListener('dblclick', function(){
    body.style.background = 'white'
})
let submit = document.getElementById('submit');
submit.addEventListener('dblclick', function(){
    alert('Stop double clicking')
})
form.addEventListener('mouseover', function(){
    form.style.textAlign = 'center'
})
form.addEventListener('mouseout', function(){
    form.style.textAlign = 'left'
})