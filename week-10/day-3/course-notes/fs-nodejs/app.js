const fs = require('fs').promises;

// const start = async () => {
//     const data = await fs.readFile('hello.txt', 'utf-8');
//     console.log(data);
// }
// start()
// const data = 'this is my hello file';
//
// const products = [
//     {id:102, name: 'iPhone', price: 800},
//     {id:132, name: 'iPad', price: 453},
//     {id:213, name: 'iWatch', price: 700}
// ]

// fs.writeFile('product.json', JSON.stringify(products), 'utf-8', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })
// try{
//     const data = fs.readFileSync('info', 'utf-8');
//     console.log(data)
// }catch(e){
//     console.log(e.message)
// }
//

// fs.readFile('product.json', 'utf-8', (err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         loopProduct(JSON.parse(data))
//     }
// })
// const loopProduct = (arr)=>{
//     arr.forEach((item,i)=>{
//         console.log(item.name)
//     })
// }
//
// console.log('the file has been read');
//

// fs.appendFile('hello.txt', '\n this is also appended', 'utf-8', (err)=>{
//     if(err){
//         console.log(err)
//     }
// })

// fs.copyFile('hello.txt', 'hello_copy.txt', (err)=>{
//     if(err){
//         return console.log(err)
//     }
//     console.log('file copied')
// })

// fs.unlink('hello_copy.txt',(err)=>{    //delete
// })

