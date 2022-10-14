//ask the user for a word
const userWord = prompt("Inserisci una parola");
console.log(userWord);

//transform the word in array
const userWordToArray = Array.from(userWord);
console.log(userWordToArray);

//reverse the array
const arrayReversed = reverseTheArray(userWord)
console.log(arrayReversed);






//Functions

//reverse the array
function reverseTheArray(array) {

    const emptyArray = [];

    for(i = array.length -1; i >= 0; i--){
        emptyArray.push(array[i])
    }

    return emptyArray
}