let form1 = document.forms.myForm;
let elems = form1.elements;

// elems[0];
// elems.username.value

let select = elems[2];
// let selected = Array.from(select.options);
// .filter(option => option.selected)
// .map(option => option.value)

function handleSubmit(e){
    e.preventDefault();
    
    let selected = Array.from(select.options)
    .filter(option => option.selected)
    .map(option => option.value)
    console.log(selected);

    
}

