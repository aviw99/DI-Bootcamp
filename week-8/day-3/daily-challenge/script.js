function getCarHonda(carInventory){
    let hondaMessage = [];
    carInventory.forEach((car, i)=>{
        if(car.car_make === 'Honda'){
            hondaMessage.push(`This is a ${car.car_make} ${car.car_model} from ${car.car_year}`)
        }
    })
    return hondaMessage[0]
}

function sortCarInventoryByYear(carInventory){
    return carInventory.sort(carInventory.car_year)
}

const inventory = [
    { id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
    { id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
    { id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
    { id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
    { id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];
console.log(getCarHonda(inventory))
console.log(sortCarInventoryByYear(inventory));