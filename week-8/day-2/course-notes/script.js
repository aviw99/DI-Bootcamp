// function name_of_function(first='steve', last='stevenson'){
//     console.log(first, last);
// }

// // name_of_function(first, last='doe')

// const sum = function(x, y){
//     return x + y;
// };

// const fullName = (x, y) =>  x + ' ' + y

// setTimeout(function(){

// }, 5000)

// setTimeout(() => {

// }, 5000)

// let arr = ['a','b','c','d','e'];

// let len = arr.length

// for(let i =0; i < len; i++){
//     console.log(arr[i]);
// }

// for(let i = arr.length -1; i >= 0; i--){
//     console.log(arr[i]);
// }

// for(x of arr){
//     console.log(x);
// }

// for(x in arr){
//     console.log(x, arr[x]);
// }

// arr.forEach((item,index,arr2)=>{
//     // console.log(item,index);
//     arr2[index] = item + '#';

// })
// console.log(arr);

// some() => true/false
// every() => true/false

// let even = arr.every((item)=>{
//     return item === 'b';
// })

// console.log(even);

/*
reverse each word in a given string
for example:
given this string: "word in a given string"
result "drow ni a nevig gnirts"
*/

// function reverseWord(string){
//     let ret = '';
//     for(let i = string.length - 1; i >=0; i--){
//         ret += string[i];
//     }
//     return ret;
// }

// function reverseAll(string){
//     let arr = string.split(' ');
//     arr.forEach((item, i, ret) => {
//         ret[i] = reverseWord(item)
//     });
//     return arr.join(' ');
// }

// let string = reverseAll("word in a given string");
// console.log(string);

// function addSquare(a, b){
//     function square(x){
//         return x * x
//     }
//     return square(a) + square(b)
// }

// console.log(addSquare(2, 3))

let a = 5;
b = a;
b++
console.log(a,b);

let arr1 = [1,2,3];
let arr2 = [...arr1];
arr2[1] = 5;
console.log(arr1);
console.log(arr2);