const {
    getAllUsers,
    insertRegistration
} = require('../modules/script.js')
const p4ssw0rd = require('p4ssw0rd');

const _getAllUsers = (req,res)=>{
    getAllUsers()
        .then(data=>{
            res.json(data)
        })
        .catch(err=>{
            console.log(err)
            res.status(404).json({msg:err.message})
        })
}
const handleLogin = (req,res)=>{

}
const handleRegistration = (req,res)=>{
    let userInfo = {...req.body};
    userInfo.password = p4ssw0rd.hash(userInfo.password)

    insertRegistration(userInfo)
        .then(() => {
            const success = `success`;
            res.json(success)
        }).catch(err => {
        console.log(err)
        res.status(404).json({msg: err.message})
    })
    console.log(userInfo)
}

module.exports = {
    _getAllUsers,
    handleLogin,
    handleRegistration
}