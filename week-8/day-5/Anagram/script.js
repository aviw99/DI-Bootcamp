/*
Instructions
Create a function that:

takes in two strings as two parameters
and returns a boolean that indicates whether or not the first string is an anagram of the second string.
Some Help

What is an anagram?
An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


Example of anagrams

"Astronomer" is an anagram of "Moon starer"
"School master" is an anagram of "The classroom"
"The Morse Code" is an anagram of "Here come dots"


Do we need to consider whitespace?
Trim whitespace prior to comparison.
 */

function anagram(str1, str2){
    if(str1.length === str2.length){
        let one = str1.split('').sort().join(' ');
        let two = str2.split('').sort().join(' ');
        if(one === two){
            return true
        }
    }else{
        return false
    }
}
console.log(anagram('hi','ih'))
console.log(anagram('hi','sih'))