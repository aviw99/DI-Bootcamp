const car = (model, year, color) => {
    const carObj = {
        'model': `${model}`,
        'year': `${year}`,
        'color': `${color}`
    };
    console.log(carObj)
}

module.exports = {
    car
}