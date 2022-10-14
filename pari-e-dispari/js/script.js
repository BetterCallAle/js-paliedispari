//ask the user for a number and if he want even or odd
const userNumber = parseInt(prompt("Scegli un numero da 1 a 5"));
const userOddOrEven = prompt("Scegli se pari o dispari")

//generate a random number for the cpu
const cpuRandomNum = generateRandomNumber(1, 5)
console.log(cpuRandomNum);

//sum the random number with the user number
const sum = cpuRandomNum + userNumber;
console.log(sum);







//functions
//random number generator
function generateRandomNumber(min, max) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
    return randomNumber
}