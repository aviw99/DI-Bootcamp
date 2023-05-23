// // nested functions

// function x(){

//     function y(){
//         return 1
//     }
//     return y
// }

// let sum = x()()
// // console.log(sum);

// const x = (a, b) => (c) => a(b(c));   // currying and compose

// let last = 'lastName'
// let name = 'Alef';
// let email = 'alef@gmail.com';

// let user = {
//     name,
//     email,
// }

// console.log(user);


// const pets = ['cat', 'dog', 'bat'];

// let isDogExist = pets.includes('dog'&&'cat');
// console.log(isDogExist);

// const str = '5';
// console.log(str.padStart(2, '0'));

// const CCNumber = '458087655674321';
// console.log(CCNumber.slice(-4).padStart(CCNumber.length, '*'));

// let str = '       aaa   ';
// console.log(str.trim().length);

// let arr = ['blue', ['red',['purple',['orange']], 'yellow'], 'green'];
// console.log(arr.flat(Infinity));



// const numbers = [2,4,5,7,64];
// let res = [];
// let num = 0;
// function multiply(numbers){   
//     numbers.forEach((number)=>{
//         num = number * 2;
//         res.push(num)
//     })
//     return res;
// }
// console.log(multiply(numbers))


// function map(arr){
//     arr.forEach((item, i, arr)=>{
//         arr[i] = item*2
//     });
//     return arr
// }
// console.log(map([1,2,3,4]));


// let arr =  [1,2,3,4];
// let newArr = arr.map(item=>{
//     if(item != 2){
//         return item
//     }
    
// })
// console.log(newArr);



// function higher3(arr){
//     let newArr=[];
//     arr.forEach((num)=>{
//         if (num > 3){
//             newArr.push(num)
//         }
//     })
//     console.log(newArr);
// }
// higher3([1,2,3,4,5,6,4,3,5,4])
// let arr = [12,23,3,4,45,34,2,3];

// let filterArr = arr.filter((item)=>{
//     return item > 3
// })
// console.log(filterArr);

// let arr = [
//     {name: 'John', username: "jjj"},
//     {name: 'johny', username: "jjjj"},
//     {name: 'Johana', username: "jjjjj"},
//     {name: 'Mary', username: "mmm"}
// ]

// let filterArr = arr.filter((item)=>{
//     return item.name[0].toLowerCase() == 'j'
// });
// console.log(filterArr);


// function addNums(arr){
//     let res = 0;
//     arr.forEach((num)=>{
//         res += num
//     })
//     return res
// }
// console.log(addNums([2,5,10,100]))
// let arr = [2,5,10,100];
// let sum = arr.reduce((total, item)=>{
//     return total + item
// },-1)

// console.log(sum);

let num = 127773480111111;
// let numStr = num.toString().split('');
// console.log(numStr);
function digits(arr){
    arr = arr.toString().split('');
    let res = arr.reduce((total, num)=>{
        return Number(num) + total
        // if(res < 10){
        //     return res
        // }else{
        //     return digits(res)
        // }
    },0)

    if(res < 10){
            return res
        }else{
            return digits(res)
        }
}
console.log(digits(num))