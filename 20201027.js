function processNumberIfEven(number, callback) {
    const number = prompt("Please enter a number");
    const result = callback(number);
    console.log(result);
}
function processNumberIfEven(number, callback) {
    if (number % 2 == 0) {
        let result = callback(number);
        return result;
    } else {
        console.log("The number is not event!");
        return -1;
    }
}
function add2ToNumber(number) {
    return 2 + number;
}
var result = processNumberIfEven(4, add2ToNumber); // result should be 6
var result = processNumberIfEven(3, (number) => number * 5); // result -1, and "The number is not even!" should be printed out
function isBiggerThan40(number) {
    return number > 40;
}
var result = processNumberIfEven(4, isBiggerThan40); // result should be false
var words = ["Lorem", "ipsum", "correct", "bok", "pauk", "knjiga", "koawd"];
function filterCallback(word) {
    let isLonger = word.length >= 7;
    if (isLonger === true) {
        return true;
    } else {
        return false;
}
var wordsThatAreLongerThan5Characters = words.filter(filterCallback);
function mapCallback(word) {
    // "The word Lorem is longer than 5 characters",
    return "The word " + word + " is longer than 5 characters";
}
var mappedArray = wordsThatAreLongerThan5Characters.map(mapCallback);