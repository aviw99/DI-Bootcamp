let container = document.getElementById('container');
// console.log(container);
let list_item = document.getElementsByTagName('li')[1].textContent = 'Richard';

const liElements = document.querySelectorAll("li");

for (let i = 0; i < liElements.length; i++) {
  if (liElements[i].textContent.toLowerCase() === "sarah") {
    liElements[i].remove();
    break; 
  }
}

let uLists = document.querySelectorAll('ul.list');
for(let lItem of uLists){
    let child = lItem.querySelector('li:first-child');
    let myName = document.createElement('li');
    myName.innerText = 'Avi';
    lItem.replaceChild(myName, child);
}

for(let item of uLists){
    item.classList.add('my-student_list');
}

const firstUl = uLists[uLists.length - 2];
firstUl.classList.add('university');
firstUl.classList.add('attendance');

document.getElementById('container').style.backgroundColor="#ADD8E6";
document.getElementById('container').style.padding="1%";

const lastUl = uLists[uLists.length - 1];
const lastLi = lastUl.querySelector('li:last-child');
lastLi.remove();

const Richard = firstUl.querySelector('li:last-child');
Richard.style.border="black solid 1px";

document.documentElement.style.fontSize="20px";