let h1 = document.querySelector('h1');
console.log(h1);
let article = document.querySelector('article');
let last = article.lastElementChild;
last.remove()
let h2 = document.querySelector('h2');
h2.addEventListener('click', function(){
    h2.style.background = 'red'
})
let h3 = document.querySelector('h3');
h3.addEventListener('click', function(){
    h3.style.display = 'none'
})
let button = document.createElement('button');
button.innerText = 'bold'
article.appendChild(button)
button.addEventListener('click', function(){
    article.style.fontWeight = 'bold'
})


