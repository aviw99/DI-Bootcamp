let sentence = 'This dinner is bad!';
let wordNot = sentence.indexOf('not');
let wordBad = sentence.indexOf('bad');
let range = sentence.slice(wordNot, wordBad + 3);
let good = 'good';
let newSentence = '';
if (wordBad > wordNot && wordNot != -1){
    newSentence = sentence.replace(range, good)
    console.log(newSentence)
}else{
    console.log(sentence)
}