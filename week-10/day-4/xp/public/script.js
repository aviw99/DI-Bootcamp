const loginForm = document.getElementById('loginForm');
const registerForm = document.getElementById('registerForm');
function loginSubmit(e){
    e.preventDefault()
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    sendLoginData(username, password)
}

function registerSubmit(e){
    e.preventDefault()
    const first_name = registerForm.first_name.value;
    const last_name = registerForm.last_name.value;
    const email = registerForm.email.value;
    const username = registerForm.username.value;
    const password = registerForm.password.value;
    sendRegisterData(first_name, last_name, email, username, password)
}

async function sendLoginData(username, password){
    try{
        const res = await fetch('http://localhost:3030/login', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                username:username,
                password:password
            })
        })
        const result = await res.json();
    }catch(err){
        console.log(err)
    }
}
// const
async function sendRegisterData(first_name, last_name, email, username, password){
    try{
        const res = await fetch('http://localhost:3030/register', {
            method:'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                first_name:first_name,
                last_name:last_name,
                email:email,
                username:username,
                password:password
            })
        })
        const result = await res.json();
        console.log(result)
    }catch(err){
        console.log(err)
    }
}