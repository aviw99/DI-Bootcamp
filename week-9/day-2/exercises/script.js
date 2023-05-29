// function compareToTen(num){
//     let p = new Promise((resolve, reject) => {
//         if(num <= 10){
//             resolve(`resolved - ${num} is less than or equal to 10`)
//         }else{
//             reject(`rejected - ${num} is greater than 10`)
//         }
//     })
//     return p
// }
//
// compareToTen(15)
// .then(result => console.log(result))
// .catch(error => console.log(error))
//
// compareToTen(8)
// .then(res => console.log(res))
// .catch(err => console.log(err))




//     let p = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if(1 == 1){
//                 resolve('success')
//             }else{
//                 reject('Ooops something went wrong')
//             }
//         }, 4000)
//     })
// p.then(res => console.log(res))
//     .catch(err => console.log(err))



// let p2 = Promise.resolve('success')
// console.log(p2)



// let p3 = Promise.resolve(3);
// let p4 = Promise.reject('Boo');
// console.log(p3)
// console.log(p4)


