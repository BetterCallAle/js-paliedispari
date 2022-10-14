//extracting some DOM elements
const input = extractElements("user-word")
const submitBtn = extractElements("submit")
const cancelBtn = extractElements("cancel")


//on click (or enter) export input value and write an output
submitBtn.addEventListener("click", function(){
   output()
})

input.addEventListener("keypress", function (e) {
    if (e.key === 'Enter') {
      output()
    }
});

//cancel button
cancelBtn.addEventListener("click")




//Functions

//reverse the word
function reverseTheWord(word) {

    //transform the word in array
    const userWordToArray = Array.from(word);

    //reverse the array
    const emptyArray = [];

    for(i = userWordToArray.length -1; i >= 0; i--){
        emptyArray.push(userWordToArray[i])
    }

    //transform the reversed array into a string
    const arrayToString = emptyArray.join('');

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

//extract elements
function extractElements(elementName){
    const element = document.getElementById(elementName)
    return element
}

//output
function output(){
    const userWord = input.value;
    console.log(userWord);

    //ask the user for a word
    
    console.log(userWord);
    
    //reverse the word
    const userWordReversed = reverseTheWord(userWord)
    console.log(userWordReversed);
    
    //check if the userWord and arrayToString are the same
    const theWordAreEqual = areTheWordEqual(userWord, userWordReversed)
    console.log(theWordAreEqual);

    //output
    const outputContainer = extractElements("output-container")

    let outputMessage = ""

    if(theWordAreEqual){
        outputMessage = `la parola ${userWord} che al contrario è ${userWordReversed}. È palindroma.`
    } else {
        outputMessage = `la parola ${userWord} che al contrario è ${userWordReversed}. Non è palindroma.`
    }

    outputContainer.innerHTML = `<h2> ${outputMessage} <h2>`

    input.value = ""
}