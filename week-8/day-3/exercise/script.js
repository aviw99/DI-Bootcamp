// // Exercise 1 : Analyzing
// // ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// // console.log(result);     // will log an array with item index 1 being clone of vegetables and item index 3 clone of fruits

// // ------2------
// const country = "USA";
// // console.log([...country]); // clone of country in array

// // ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// 🌟 Exercise 2 : Employees
// const users = [
//     { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
//     { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
//     { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
//     { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
//     { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
//     { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
//     { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
// ];
// const welcomeStudents = [];
// const welcome = users.map((obj)=>{
//     obj.firstName = "Hello " + obj.firstName + "!";
//     welcomeStudents.push(obj.firstName)
// })
// console.log(welcomeStudents);

// const fullStack = [];
// users.filter((item)=>{
//     item.role == 'Full Stack Resident'?fullStack.push(item.firstName+" "+item.lastName):{}      
// })
// const fullStackLastName = fullStack.map((item)=>{
//     return item.split(' ')[1]
// })
// console.log(fullStack);
// console.log(fullStackLastName);



// 🌟 Exercise 3 : Star Wars
// const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
// const string = epic.reduce((total, item)=>{
//     return total + item + ' '
// })
// console.log(string);


// 🌟 Exercise 4 : Employees #2
const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];
const passed = []; 
const passedMessage = []; 

let passedResult = students.filter((obj)=>{
    obj.isPassed == true ? passed.push(obj):{}
})
let a;
passed.forEach((passedStudent)=>{
    a = `Good job ${passedStudent.name}, you passeed the course in ${passedStudent.course}`
    passedMessage.push(a)
});
console.log(passedMessage);
