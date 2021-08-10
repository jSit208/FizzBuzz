/*
    Steps-
        Retrieve Input Values (InputValues1, InputValues2), Validation to ensure Numeric
        Generate List of values from 1 to 100
        Display Results to Screen
*/

function getInputValues() {
    document.getElementById("divResults").classList.add("invisible");

    let input1 = document.getElementById("inputValue1").value;
    let input2 = document.getElementById("inputValue2").value;
    let numbers = [];

    input1 = Number.parseInt(input1); input2 = Number.parseInt(input2);
    if(Number.isInteger(input1) && Number.isInteger(input2)){
        numbers = generateNumbers();
        displayResults(numbers, input1, input2);
    } else {

    }
}

function generateNumbers() {
    let numbersArray = [];
    for(let i = 1; i <= 100; i++){
        numbersArray.push(i);
    }
    return numbersArray;
}
function displayResults(numbersArray, inputValue1, inputValue2) {
    let strTableResults = `<tr>`;

    document.getElementById("divResults").classList.remove("invisible");

    numbersArray.forEach(number => {
        if(number % (inputValue1 * inputValue2) === 0) {
            strTableResults += addDataItem("FizzBuzz", "fizzbuzz");
        } else if (number % inputValue1 === 0) {
            strTableResults += addDataItem("Fizz", "fizz");
        } else if (number % inputValue2 === 0) {
            strTableResults += addDataItem("Buzz", "buzz");
        } else {
            strTableResults += addDataItem(number, "none");
        }

        if(number % 5 === 0 && number !== 100){
            strTableResults += `</tr><tr>`
        }
    });
    strTableResults += `</tr>`;
    document.getElementById("tblResults").innerHTML = strTableResults;
}
function addDataItem(value, classType){
    return `<td class="${classType}">${value}</td>`;
}