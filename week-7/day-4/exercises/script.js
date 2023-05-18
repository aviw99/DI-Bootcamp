function isDivisible(){
    let arr = [];
    for(let i = 0; i <= 500; i++){
        if(i % 23 === 0){
            arr.push(i);
        }
    }
    let sum = 0;
    for(let i = 0; i < arr.length; i ++){
        sum += arr[i];
    }
    console.log('Outcome:',arr);
    console.log(sum);
}
// isDivisible()

const stock = {
    "banana": 6,
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}
    const prices = {
    "banana": 4,
    "apple": 2,
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
}
let shoppingList = ['banana', 'orange', 'apple'];
function myBill(){
    let available = [];
    for(let item in stock){
        if(stock[item] > 0 && shoppingList.includes(item)){
            available.push(item);
        }
    }
    let sum = [];
    for(let item in prices){
        if(available.includes(item)){
            sum.push(prices[item]);
        }
    }
    let total = 0;
    for(let i of sum){
        total += i;
    }
    console.log(total);  
}
// myBill()

function changeEnough(itemPrice, amountOfChange){
    let totalAmount = 0;
    let arr = [];
    let quarters = amountOfChange[0] * .25;
    let dimes = amountOfChange[1] * .10;
    let nickels = amountOfChange[2] * .05;
    let pennies = amountOfChange[3] * .01;
    arr.push(quarters,dimes,nickels,pennies);
    for(let i of arr){
        totalAmount += i;
    }
    if(totalAmount >= itemPrice){
        return true;
    }else{
        return false;
    }

}
// console.log(changeEnough(1.63,[4,5,2,2])) 

function hotelCost(){
    let numberNights;
    do {
        numberNights = prompt('How many nights would you like to stay in the hotel?')
    }
    while(numberNights == null || isNaN(numberNights));
    let total = numberNights * 140;
    return total+'$';
}
function planeRideCost(){
    let userDestination;
    do {
        userDestination = prompt('What is you destination?')
    }
    while(userDestination == null || ! isNaN(userDestination))
    let locations = {
        'london': 183,
        'paris': 220,
        'other': 300
    };
    if(userDestination.toLowerCase() == 'london'){
        return locations['london']+'$'
    }else if(userDestination.toLowerCase() == 'paris'){
        return locations['paris']+'$'
    }else{
        return locations['other']+'$'
    }
}

function rentalCarCost(){
    let numberDays;
    let perDay;
    do {
        numberDays = prompt('How many days would you like to rent the car?')
    }
    while(numberDays == null || isNaN(numberDays));
    if(numberDays < 10){
        perDay = numberDays * 40;
    }else{
        perDay = numberDays * 40;
        perDay = perDay - (perDay * 0.05);
    }
    return perDay+'$';
}
function totalVacationCost(){
    console.log('The hotel costs '+hotelCost())
    console.log('The plane tickets cost '+planeRideCost())
    console.log('The car costs '+rentalCarCost())
}

// totalVacationCost()

