let content = document.getElementById('content');
let h2 = content.firstElementChild;
console.log(h2);
let p = content.lastElementChild;
console.log(p);
let next = h2.nextElementSibling;
console.log(next);
let previous = p.previousElementSibling;
console.log(previous);
let parent = h2.parentNode;
console.log(parent);
let children = parent.childNodes;
console.log(children);

h2.innerText = 'new title';
p.innerHTML = '<p style="color:red;">hi</p>';
 
let value = content.getAttribute('id');
console.log(value);
content.setAttribute('class', 'newclass');
let newelement = document.createElement('div');
content.appendChild(newelement);
let newerElement = document.createElement('img');
content.insertBefore(newerElement,p);
content.removeChild(p);
let newChildElement = document.createElement('h6');
content.replaceChild(newChildElement,next)