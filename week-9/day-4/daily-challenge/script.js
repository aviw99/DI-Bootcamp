const api_key = "e985dd5567775ac4dd171082";
const codesUrl = `https://v6.exchangerate-api.com/v6/${api_key}/codes`;
const container = document.getElementById('container');
const result = document.createElement('h1');
container.appendChild(result);
result.style.color = 'white';
result.style.fontSize = '50px';

const form = document.getElementById('form');
form.addEventListener('submit', (event) => handleSubmit(event))

function handleSubmit(e){
    e.preventDefault()
    const from = document.getElementById('from');
    const to = document.getElementById('to');
    const amount = document.getElementById('num');
    const fromValue = from.value;
    const toValue = to.value;
    const numValue = amount.value;
    const url = `https://v6.exchangerate-api.com/v6/${api_key}/pair/${fromValue}/${toValue}/${numValue}`;
    showResult(url)
        .then(res => res.json())
        .then(data => data['conversion_result'])
        .then(res => {
            const conversion_result = res;
            result.innerText = conversion_result;
        })
        .catch(err => console.log(err))
}
function showResult(url){
    return fetch(url)
}
function getCodes(){
    return fetch(codesUrl)
}
getCodes()
.then(res => res.json())
    .then(data => data['supported_codes'].forEach((code, index)=>{
        if(index <= 162){
            fromCodes(code)
            toCodes(code)
        }
    }))
.catch(err => console.log(err))

const from = document.getElementById('from');
const to = document.getElementById('to');
function fromCodes(code){
    const option = document.createElement('option');
    option.innerText = code;
    option.setAttribute('value', code[0]);
    from.appendChild(option);
}
function toCodes(code){
    const option = document.createElement('option');
    option.innerText = code;
    option.setAttribute('value', code[0]);
    to.appendChild(option);
}
