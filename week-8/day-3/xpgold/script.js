const array = [[1],[2],[3],[[[4]]],[[[5]]]]
// const arr = array.flat()
// // console.log(arr);

// const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
// console.log(greeting.map((arr)=>{
//     return arr.join(" ")
// }).join(' ')
// )
// const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
// const trp = trapped.flat(Infinity)
// // console.log(trp);

const arr = [1, 4, 9, 16];

let sum = arr.reduce((acc, val) => {
  console.log(`acc: ${acc}`)
  console.log(`val: ${val}`)
  console.log(`acc + val: ${acc + val}`);
  return acc + val;
});

console.log(sum)

// expected output
// acc: 1
// val: 4
// acc + val: 5
// acc: 5
// val: 9
// acc + val: 14
// acc: 14
// val: 16
// acc + val: 30
