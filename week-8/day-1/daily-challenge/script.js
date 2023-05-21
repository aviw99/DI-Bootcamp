

function create_madlib(event){
    event.preventDefault()

    let noun = document.getElementById('noun').value;
    let adjective = document.getElementById('adjective').value;
    let the_name = document.getElementById('person').value;
    let verb = document.getElementById('verb').value;
    let place = document.getElementById('place').value;


    let story = document.getElementById('story');
    story.innerText = `${the_name} is a very ${adjective} kinda guy. His ${noun} likes to ${verb} all over the ${place}.`;
    console.log(story);
}

let form = document.getElementById('libform');
form.addEventListener('submit', create_madlib)


