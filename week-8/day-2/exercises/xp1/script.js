// 🌟 Exercise 2 : Ternary Operator
const winBattle = () => true;
const experiencePoints = winBattle() ? 10 : 1;
// console.log(experiencePoints);

// 🌟 Exercise 3 : Is It A String ?
const isString = (input) => typeof(input) === 'string' ? true : false;
// alert(isString(10))

// 🌟 Exercise 4 : Colors
const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const len = colors.length;
let arr = [];

for(let i = 0; i <= len -1; i++){
    let index = i + 1;
    let color = colors[i]
    color = `#${index} choice is ${color}`
    arr.push(color)
}
// console.log(arr);

if(colors.some((color)=>{return color === 'Violet'})){
    // console.log('Yeah');
}else{
    // console.log('No...');
}

// 🌟 Exercise 5 : Colors #2
const colors2 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
const colorArr = [];
colors2.forEach((color, index) => {
    index++
    if(index < 4){
        let sentence = index + ordinal[index] + ' choice is ' + color
        // console.log(sentence);
    }else{
        let sentence = index + ordinal[0] + ' choice is ' + color
        // console.log(sentence);
    }
})

// Exercise 6 : Bank Details

let bankAccount = 18000;                                            
const VAT = 1.17;                                                    
const details = [200, -100, 146, 167, -2900];


for(let expense of details){
    if(expense > 0){
        let tax = (expense * VAT) - expense
        tax -= (tax * 2)
        bankAccount += expense + tax
          
    }else if(expense < 0){
        bankAccount += expense
    }
}
console.log(bankAccount);


