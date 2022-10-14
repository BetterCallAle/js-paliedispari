//ask the user for a word
const userWord = prompt("Inserisci una parola");
console.log(userWord);

//reverse the word
const userWordReversed = reverseTheWord(userWord)

//check if the userWord and arrayToString are the same
const theWordAreEqual = areTheWordEqual(userWord, userWordReversed)

console.log(theWordAreEqual);

//output
if(theWordAreEqual){
    alert("la parola è palindroma")
} else {
    alert("la parola non è palindroma")
}




//Functions

//reverse the word
function reverseTheWord(word) {

    //transform the word in array
    const userWordToArray = Array.from(word);
    console.log(userWordToArray);

    //reverse the array
    const emptyArray = [];

    for(i = userWordToArray.length -1; i >= 0; i--){
        emptyArray.push(userWordToArray[i])
    }

    //transform the reversed array into a string
    const arrayToString = emptyArray.join('');
    console.log(arrayToString);

    return arrayToString
}

//check if the userWord and arrayToString are the same
function areTheWordEqual(word1, word2) {
    
    let equalWord = false

    if (word1 === word2) {
       equalWord = true
    }

    return equalWord
}