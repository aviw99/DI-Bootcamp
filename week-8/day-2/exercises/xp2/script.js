// 🌟 Exercise 1 : Find The Sum
const sum = (a, b) => a + b;
// console.log(sum(1, 8));

// 🌟 Exercise 2 : Kg And Grams
function toGrams1(kg){
    return `${kg} kilograms is ${kg * 1000} grams`
}
// console.log(toGrams1(3));

const toGrams2 = function(kg){
    return `${kg} kilograms is ${kg * 1000} grams`
}
// console.log(toGrams2(7));

const toGrams3 = (kg) => `${kg} kilograms is ${kg * 1000} grams`;
// console.log(toGrams3(5));

// 🌟 Exercise 3 : Fortune Teller
// (function(numChildren='12', partnerName='Mishel', location='Dubai', job='chimney sweep'){
//     const body = document.querySelector('body');
//     const h1 = document.createElement('h1');
//     h1.innerText = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numChildren} kids.`
//     body.appendChild(h1)
// })();

// 🌟 Exercise 4 : Welcome
// (function(userName='John'){
//     const nav = document.querySelector('nav');
//     const div = document.createElement('div');
//     nav.appendChild(div);
//     const nameText = userName;
//     const name = document.createElement('h3');
//     name.innerText = nameText; 
//     const img = document.createElement('img');
//     img.setAttribute('src', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQU-qeZbetzq_411o3qBVJgWVQBmMxGk3aWuQ&usqp=CAU');
//     div.appendChild(name);
//     div.appendChild(img);
// }())

// 🌟 Exercise 5 : Juice Bar
                            /*You will use nested functions, to open a new juice bar.
                            In the makeJuice function, create an empty array named ingredients.

The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.

*/

function makeJuice(size){
    const ingredients = [];

    function addIngredients(first, second, third){
        // const body = document.querySelector('body');
        // const sentence = document.createElement('p');
        // sentence.innerText = `The client wants a ${size} juice, containing ${first}, ${second}, ${third}`;
        // body.appendChild(sentence);
        ingredients.push(first,second,third);
    }
    function displayJuice(){
        const body = document.querySelector('body');
        const sentence = document.createElement('p');
        sentence.innerText = `The client wants a ${size} juice, containing ${ingredients[0]}, ${ingredients[1]}, ${ingredients[2]}, ${ingredients[3]}, ${ingredients[4]}, ${ingredients[5]}`;
        body.appendChild(sentence);
    }
    addIngredients('mango','banana','pinapple');
    addIngredients('milk','protein powder','chia seeds');
    displayJuice()
}
makeJuice('small')


