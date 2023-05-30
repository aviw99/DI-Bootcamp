// function makeAllCaps(arr){
//     return new Promise((resolve, reject) => {
//         if(arr.every((word, index) => typeof(word) === 'string')){
//             resolve(arr.map((word) => word.toUpperCase()))
//         }else{
//             reject("not all elements are strings")
//         }
//     })
// }
//
//
//
// function sortWords(arr){
//     let p = new Promise((resolve, reject) => {
//         if(arr.length > 4){
//             resolve(arr.sort())
//         }else{
//             reject('array length too short')
//         }
//     })
//     return p
// }
//
// //in this example, the catch method is executed
// makeAllCaps([1, "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))
//
// //in this example, the catch method is executed
// makeAllCaps(["apple", "pear", "banana"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result))
//     .catch(error => console.log(error))
//
// //in this example, you should see in the console,
// // the array of words uppercased and sorted
// makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
//     .then((arr) => sortWords(arr))
//     .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
//     .catch(error => console.log(error))




const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(json){
    let p = new Promise((resolve, reject) => {
        if(morse.length > 0){
            resolve(JSON.parse(json))
        }else{
            reject('morse object is empty')
        }
    })
    return p
}


toJs(morse)
    .then(res => console.log(res))
    .catch(err => console.log(err))


function toMorse(morseJS){
    return new Promise((resolve, reject) =>{
        let userStr = prompt('enter word');
        let arrStr = userStr.trim().split('');
        let returnArr = [];

        for(let i = 0; i < arrStr.length; i++){
            if(arrStr[i] in morseJS){
                returnArr.push(morseJS[arrStr[i]]);
            }else{
                reject('letter does not exist')
            }
        }resolve(returnArr)
    })
}


toJs(morse)
    .then(value => {
        return toMorse(value)
    })
    // .then(arr => {
    //     return arr
    // })
    .then(res => joinWords(res))
    .then(translation => console.log(translation))
    .catch(err => console.log(err))


function joinWords(morseTranslation){
    let str = '';
    morseTranslation.forEach((item, i) => {
        str += item
    });
    return str
}
