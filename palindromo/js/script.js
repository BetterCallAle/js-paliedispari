//ask the user for a word
const userWord = prompt("Inserisci una parola");
console.log(userWord);

//transform the word in array
const userWordToArray = Array.from(userWord);
console.log(userWordToArray);

//reverse the array
const arrayReversed = reverseTheArray(userWord)
console.log(arrayReversed);

//transform the reversed array into a string
const arrayToString = arrayReversed.join('');
console.log(arrayToString);

//check if the userWord and arrayToString are the same
const theWordAreEqual = areTheWordEqual(userWord, arrayToString)

console.log(theWordAreEqual);

//output
if(theWordAreEqual){
    alert("la parola è palindroma")
} else {
    alert("la parola non è palindroma")
}




//Functions

//reverse the array
function reverseTheArray(array) {

    const emptyArray = [];

    for(i = array.length -1; i >= 0; i--){
        emptyArray.push(array[i])
    }

    return emptyArray
}

//check if the userWord and arrayToString are the same
function areTheWordEqual(word1, word2) {
    
    let equalWord = false

    if (word1 === word2) {
       equalWord = true
    }

    return equalWord
}