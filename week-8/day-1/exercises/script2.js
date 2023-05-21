let form = document.querySelector('form');
console.log(form);
let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let submit = document.getElementById('submit');
console.log(fname, lname, submit);

function clicked(e){
    e.preventDefault()
    let value1 = document.getElementById('fname').value;
    let value2 = document.getElementById('lname').value;
    let values = [];
    if(value1.length > 0 && value2.length > 0){
        values.push(value1, value2)
        let ul = document.getElementsByClassName('usersAnswer')[0];
        for(let item of values){
            let li = document.createElement('li');
            li.innerText = item
            ul.append(li)
        }
    }else{
        alert('Please fill in the required fields')
    }
    
}