const getData = async () => {
    let url = await fetch("http://localhost:3000");
    let response = await url.json();
    return response;
};
getData()
    .then(res => {
        console.log(res)
    });

function handleClick(e){
    e.preventDefault();
    alert('clicked')
}