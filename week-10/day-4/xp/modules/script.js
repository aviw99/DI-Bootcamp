const {db} = require('../config/db.js');

const getAllUsers = () => {
    return db('register')
        .select('*')
        .orderBy('user_id')
}
const insertRegistration = (newUser) => {
    return db('register')
        .insert(newUser)
        .returning('*')
        .then(res=>{
            if(res.length > 0){
                // const successMessage = document.getElementById('successMessage');
                // console.log('registration successful')
            }else{
                console.log('registration failed')
                throw new Error('Registration failed!');
            }
        }).catch(err => {
            console.log(err)
        })
}

module.exports = {
    getAllUsers,
    insertRegistration
}
