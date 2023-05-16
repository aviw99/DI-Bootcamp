// const people = ["Greg", "Mary", "Devon", "James"];
// people.shift();
// console.log(people);
// let jamesIndex = people.indexOf('James');
// people[jamesIndex] = 'Jason' ;
// console.log(people);
// people.push('Avi');
// console.log(people);
// console.log(people.indexOf('Mary'));
// let newArray = people.slice(1);
// console.log('people array',people);
// console.log('new array',newArray);
// console.log(people.indexOf('Foo'));
// console.log("-1 is returned if the item doesn't exist");
// let last = people[3];
// console.log(last);

// for (let i in people){
//     console.log(people[i]);
// }
// for (let i in people){
//     if(people[i] === 'Jason'){
//         break
//     }
//     console.log(people[i])
// }

// let colors = ['Green', 'Orange', 'Blue', 'Red', 'Purple'];
// let suffixes = ['st', 'nd', 'rd', 'th'];
// for (let i = 0; i < colors.length; i++){
//     if (i >= 3) {
//         console.log(`My ${i+1}${suffixes[3]} choice is ${colors[i]}`)
//     } else {
//     console.log(`My ${i+1}${suffixes[i]} choice is ${colors[i]}`)
//     }
// }

// let userNumber = 0;
// while (Number(userNumber) < 10){
//     userNumber = prompt('Enter a number: ');
// }

// const building = {
//     numberOfFloors: 4,
//     numberOfAptByFloor: {
//         firstFloor: 3,
//         secondFloor: 4,
//         thirdFloor: 9,
//         fourthFloor: 2,
//     },
//     nameOfTenants: ["Sarah", "Dan", "David"],
//     numberOfRoomsAndRent: {
//         sarah: [3, 990],
//         dan: [4, 1000],
//         david: [1, 500],
//     },
// }
// console.log(building['numberOfFloors']);
// console.log(building['numberOfAptByFloor']['firstFloor'],building['numberOfAptByFloor']['thirdFloor']);
// console.log(building['nameOfTenants'][1],building['numberOfRoomsAndRent']['dan'][0]);
// let rentSum = building['numberOfRoomsAndRent']['sarah'][1] + building['numberOfRoomsAndRent']['david'][1];
// if (rentSum > building['numberOfRoomsAndRent']['dan'][1]){
//     building['numberOfRoomsAndRent']['dan'][1] += 1200
// }

// let family = {
//     0: 'father',
//     1: 'mother',
//     2: 'daughter_one',
//     3: 'son_one',
//     4: 'daughter_two',
//     5: 'son_two'
// }
// for (let i in family){
//     console.log(i)
// }
// for (let i in family){
//     console.log(family[i])
// }

// const details = {
//     my: 'name',
//     is: 'Rudolf',
//     the: 'raindeer'
// }
// let str = "";
// for (let i in details){
//     str += i +" "+ details[i]+" "
// }
// console.log(str)

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let arr = '';
for (let i in names.sort()){
    arr +=  names[i][0]
}
console.log(arr)