/*
    Steps-
        Retrieve Input Values (InputValues1, InputValues2), Validation to ensure Numeric
        Generate List of values from 1 to 100
        Display Results to Screen
*/

function getInputValues() {
    document.getElementById("divResults").classList.add("invisible");

    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    fizzValue = Number.parseInt(fizzValue); buzzValue = Number.parseInt(buzzValue);
    if(Number.isInteger(fizzValue) && Number.isInteger(buzzValue)){
        //let numbers = generateNumbers();
        let fizzBuzzResults = fizzBuzz(fizzValue, buzzValue);
        //displayResults(numbers,input1, input2);
        displayResults(fizzBuzzResults);
    } else {
        alert("You must enter integers!");
    }
}

function fizzBuzz(fizzValue, buzzValue) {
    let results = [];
    for(let i = 1; i <= 100; i++){
        if(i % (fizzValue * buzzValue) == 0){
            results.push("FizzBuzz");
        } else if (i % fizzValue == 0) {
            results.push("Fizz");
        } else if (i % buzzValue == 0){
            results.push("Buzz");
        } else {
            results.push(i);
        }
    }
    return results;
}

function displayResults(resultsFizzBuzz) {
    let strTableResults = `<tr>`;
    document.getElementById("divResults").classList.remove("invisible");

    for(let i = 0; i < resultsFizzBuzz.length; i++) {   
        switch(resultsFizzBuzz[i]){
            case "FizzBuzz":
                strTableResults += addDataItem(resultsFizzBuzz[i], "fizzbuzz");
                break;
            case "Fizz":
                strTableResults += addDataItem(resultsFizzBuzz[i], "fizz");
                break;
            case "Buzz":
                strTableResults += addDataItem(resultsFizzBuzz[i], "buzz");
                break;
            default:
                strTableResults += addDataItem(resultsFizzBuzz[i], "none");
                break;
        }
        if( (i + 1) % 5 == 0 && (i+1) !== 100){
            strTableResults += `</tr><tr>`;
        }
    }
    strTableResults += '</tr>';
    document.getElementById("tblResults").innerHTML = strTableResults;
}

function addDataItem(value, classType){
    return `<td class="${classType}">${value}</td>`;
}