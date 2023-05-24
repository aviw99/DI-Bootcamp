// let arr = [2,4,4,1];

// function birthdayCakeCandles(arr){
//     let maxNum = Math.max(...arr);

//     let filter = arr.filter(value => {
//         return value === maxNum
//     })

//     return filter.length
    
// }

// let howMany = birthdayCakeCandles(arr);
// console.log(howMany);


// array destructuring

// let arr = [2,5,3,7,2,3,6,8,6];

// // const a = arr[0];
// // const b = arr[1];

// const [a, b] = arr;

// array spreading

// let a = 1;
// let b =2 ;
// let arr2 = [5,6,7,];
// let arr3 = [a, b, ...arr2];
// console.log(arr3);

// array rest parameters

// let arr = [2,5,3,7,2,3,6,8,6];
// const [a, b, ...rest] = arr;
// console.log(a,b, rest);


// object methods

const population = {
    tokyo: 37833000,
    delhi: 24953000,
    shanghai: 22991000
}

// for(i in population){
//     console.log(i, population[i]);
// }

// console.log(Object.keys(population));
// console.log(Object.values(population));

// Object.keys(population).forEach((item, i)=>{
//     console.log(item);
// })

// Object.values(population).forEach((item, i)=>{
//     console.log(item);
// })

console.log(Object.entries(population));
// Object.entries(population).forEach(([key, value], i)=>{
//     console.log(key, value);
// })

// object destructuring

// const population = {
//     tokyo: 37833000,
//     delhi: 24953000,
//     shanghai: 22991000
// }

// const {tokyo, delhi} = population;
// console.log(tokyo, delhi);

// object spreading

// const population = {
//     tokyo: 37833000,
//     delhi: 24953000,
//     shanghai: 22991000
// }

// let obj2 = {
//     tokyo:4444
// };

// const obj3  = {...population, tokyo: 0, tel_aviv: 22, ...obj2};

// console.log(population);
// console.log(obj3);


// classes

// class NameOfClass {
//     constructor(param1, param2){
//         this.a = 'b';
//         this.b = param1;
//         this.c = param2;
//     }

//     getName(){
//         return this.a + this.b + this.c
//     }

//     setA(param){
//         this.a = param;
//     }
// }


// let abc = new NameOfClass('c','d');
// let bca = new NameOfClass('r', 't');

// console.log(abc.getName());
// console.log(bca.getName());

// class Animal {
//     #name
//     constructor(name){
//         this.#name = name;
//     }

//     speak(){
//         console.log(`the ${this.name} makes a noise`);
//     }
//     getName(){
//         return this.#name
//     }
// }

// class Dog extends Animal {
//     constructor(name, color){
//         super(name)
//         this.color = color;
//     }
//     speak(){
//         console.log(`${this.name} barks`);
//     }
//     getColor(){
//         return this.color
//     }
// }

// class Frenchie extends Dog {
//     constructor(name, color, type){
//         super(name, color)
//         this.type = type
//     }
//     // getName(){
//     //     return this.name
//     // }
// }

// const dog = new Animal('Dog');
// const cat = new Animal('Cat');
// dog.speak()
// cat.speak()

// const dog = new Dog('Buddy', 'black');
// dog.speak()
// console.log(dog.getColor());

// const dog2 = new Dog('Archie', 'white');
// dog2.speak()

// const fr = new Frenchie('Rex','brown','Frenchie');
// console.log(fr.name)
// console.log(fr.getName())
// fr.speak()
