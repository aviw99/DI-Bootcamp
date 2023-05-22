const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = [];
gameInfo.forEach((obj)=> {
    if('username' in obj){
        const username = obj.username
        usernames.push(username+'!')
    }
})
// console.log(usernames);
const winners = [];
gameInfo.forEach((obj)=>{
    if(obj.score > 5){
        const winner = obj.username;
        winners.push(winner)
    }
})
// console.log(winners);

let total = 0;
gameInfo.forEach((obj)=>{
    const score = obj.score;
    total += score
})
console.log(total);