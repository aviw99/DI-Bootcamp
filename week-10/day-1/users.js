const userInfo = async() => {
    try{
        const res = await fetch("https://jsonplaceholder.typicode.com/users")
        const users = await res.json()
            return users
    }catch(e){
        console.log(e)
    }
}
module.exports = {
    userInfo
}



/*
1. create a module users.js
2. create a function that get the json user file
https://jsonplaceholder.typicode.com/users
return the arr of users from the function
3.console log the arr of user in
the file that you require it (not in the module)
*/
