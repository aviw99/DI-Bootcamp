const knex = require('knex');

const db = knex({
    client: 'pg',
    connection: {
        host: 'localhost',
        port: '5432',
        user: 'postgres',
        password: 'awmac',
        database: 'dvdrental',
    }
});

// db.select('city', 'city_id')
// .from('city')
// .then(rows => {
//     console.log(rows);
// })
// .catch(err => {
//     console.log(err)
// })

db('country')
    // .insert([
    //     {country: 'DI Learning'}
    // ])
.select('*')
// .del()
.where({country_id: 110})
// .update({city: 'Jerusalem'})
    .returning('*')
.then(rows=>{
    console.log(rows)
}).catch(err=>{
    console.log(err)
})