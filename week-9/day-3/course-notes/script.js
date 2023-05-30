// function simpleAsync(){
//     return new Promise((resolve, reject) => {
//         resolve('1')
//     })
// }
//
// async function simpleAsync2(){
//     return '1'
// }
//
// simpleAsync()
// .then(res => {
//     console.log(res)
// })
//
// simpleAsync2()
// .then(res => {
//     console.log(res);
// })

// function returnPromise(){
//     return new Promise((res, rej) => {
//         setTimeout(()=>{
//             console.log('Promise executed...')
//             res('sample date')
//         }, 3000)
//     })
// }
//
// async function exe(){
//     let name = 'John';
//     let promise = await returnPromise();
//     console.log(promise)
//     console.log(name)
// }
// exe()
//
// const timeout = async (milliseconds, id) => {
//     await new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             console.log(id, 'Done!');
//             resolve()
//         }, milliseconds)
//     })
// }
//
// async function x(){
//     console.log('before');
//     for(let item of ['first', 'second', 'third']){
//         await timeout(2000, item)
//     };
//     console.log('after');
// }
// x()

//
// const promise1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('promise1')
//     },2000)
// })
// const promise2 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('promise2')
//     },2000)
// })
// const promise3 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve('promise3')
//     },2000)
// })
//
// Promise.all([promise1,promise2,promise3])
//     .then(res => {
//         console.log(res)
//     }).catch(err => {
//     console.log(err)
// })
//
// const data = async()=>{
//     try{
//         const result = await Promise.all([promise1,promise2,promise3])
//         console.log(result)
//     }
//     catch(e){
//         console.log(e)
//     }
// }
//
// data()


function fibonacci() {
    let ceiling = prompt('enter a number');
    let ceiling_num = Number(ceiling);
    function calc(i){

    }

    for(let i = 1; i <= ceiling_num; calc(i)){

    }
}

fibonacci()