const formOne = document.forms.formOne;
const firstName = formOne.firstName;
const lastName = formOne.lastName;
const container = document.createElement('p');
const body = document.querySelector('body');
body.appendChild(container);
function submitHandle(e){
    e.preventDefault();
    const nameObj = {
        'first name': firstName.value,
        'last name': lastName.value
    }
    const nameJSON = JSON.stringify(nameObj);
    container.innerText = nameJSON;

}