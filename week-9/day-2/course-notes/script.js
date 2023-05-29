// console.log('-before')
// function x(){
//     // try{
//     //     a;
//     //     }catch (error){
//         throw new Error('error in function')
//     // }
//
// }
//
// console.log('-middle')
// try {
//     x()
// }catch(error){
//     console.log(error)
// }
//
// console.log('-after')
//
//
//
// function getX(callback){
//     console.log('waiting for x...')
//     setTimeout(()=>{
//         console.log('getting x...')
//         callback(5)
//     },2000)
// }
//
// function getY(callback){
//     console.log('getting y...')
//     callback(6)
// }
//
// const getXY = () => {
//     getX((x) =>{
//         getY((y)=>{
//             console.log(x + y)
//         })
//     })
// }
//
// console.log(getXY())

/*
                PROMISES
             1. pending
             2. fulfilled - resolved
             3. fulfilled - rejected
*/



// const p = new Promise((resolve, reject) => {
//     resolve('promise resolved')
// })
// console.log(p)

// const flip = () => {
//     const coin = Math.floor(Math.random() * 3);
//     return (coin < 2) ?
//     (coin == 0) ? 'head' : 'tail' : 'side';
// }
//
// const flipCoin = new Promise((resolve, reject) => {
//     const flipResult = flip();
//     if(flipResult == 'head' || flipResult == 'tail'){
//         resolve(flipResult)
//     }else{
//         reject(flipResult)
//     }
// })
//
// console.log('flipping coin...')
// // console.log(flipCoin)
// flipCoin
// .then((res)=>{
//     console.log('resolved, ',res)
// }).catch((e)=>{
//     console.log('rejected, ',e)
// })

/*
write a function testNum that takes a number as an input and
returns a Promise that tests if the value is less than 10
value < 10 - resolve with value 'number is less than 10, success!!!'
reject with value 'number is greater or equal to 10, error!!!'
call the function and get results
*/
// function testNum(num){
//     const p = new Promise((resolve, reject) => {
//         if(num < 10){
//             resolve('number is less than 10, success!!!')
//         }else{
//             reject('number is greater or equal to 10, error!!!')
//         }
//     })
//     return p
// }
//
// testNum(0)
//     .then(res => {
//         console.log(res)
//     }).catch(err =>{
//     console.log(err)
// })
//
// let res = fetch('https://jsonplaceholder.typicode.com/users');
// // console.log(res)
// res.then(res => {
//     let json = res.json();
//     return json;
// })
//     .then(data => {
//         console.log(data)
//     })
//
// let name = 'Leanne Graham '
// let user = {
//     name: 'aaa',
//     username: 'aaaaaa'
// }
//
// fetch('https://jsonplaceholder.typicode.com/users',{
//     method: 'POST',
//     headers: {
//         'Content-type': 'applications/json'
//     },
//     body:JSON.stringify(user)
// })
//     .then(res => res.json())
//     .then(data => {
//         console.log(data)
//     })


// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('resolve promise1')
//     },2000)
//     // resolve('resolve promise1')
// })
//
// const promise2 = new Promise((resolve, reject)=>{
//     reject('resolve promise2')
// })
//
// const promise3 = new Promise((resolve, reject)=>{
//     resolve('resolve promise3')
// })
//
// Promise.allSettled([promise1, promise2, promise3])
//     .then(res=>{
//         console.log(res)
//     })
//     .catch(err=>{
//         console.log(err)
//     })

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholdertypicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
];
// Promise.all([urls[0], urls[1], urls[2]])
//     .then(res => {
//         console.log(JSON.stringify(res))
//     }).catch(err=>{
//     console.log(err)
// })

const arrPromises = urls.map(url => {
    return fetch(url)
        // .then(res => res.json())
})

Promise.all(arrPromises)
    .then(res =>{
    console.log(res)
}).catch(err =>{
    console.log(err)
})

