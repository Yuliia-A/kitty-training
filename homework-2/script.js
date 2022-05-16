let min = 0;
let max = 0;

let inputUserNumber = document.createElement('input');
    inputUserNumber.setAttribute("type", "number");
    inputUserNumber.setAttribute("id", "inputUserNumber");

let buttonOkforRandom = document.createElement('button');
    buttonOkforRandom.setAttribute("id", "buttonOkForRandom");
    buttonOkforRandom.setAttribute("onclick", "clickForUserRandom()");
    buttonOkforRandom.textContent = "Check";

let inputMin = document.getElementById("minNumber");
let inputMax = document.getElementById("maxNumber");

function clickMinMax() {
    if (inputMin.value != null) {
        min = Number(inputMin.value);
    }
    if (inputMax.value != null) {
        max = Number(inputMax.value);
    }
    if((inputMin.value && inputMax.value) && min < max) {
        console.log(inputUserNumber);
        inputUserNumber.setAttribute("min", min);
        inputUserNumber.setAttribute("max", max);
        inputUserNumber.setAttribute("placeholder", "Enter number from " + min + " to " + max);
        inputUserNumber.setAttribute("onchange", "clickForUserRandom()");
        document.getElementById("boxContainer").appendChild(inputUserNumber);
        document.getElementById("boxContainer").appendChild(buttonOkforRandom);
    } 
}

function clickForUserRandom() {
    let computerRandom = Math.floor(Math.random() * (max - min + 1)) + min;
    let userRandomNumber = 0;
    let userRandomInput = document.getElementById("inputUserNumber");

    if(Number(userRandomInput.value) >= min && Number(userRandomInput.value) <= max) {
        userRandomNumber = Number(userRandomInput.value);
    }

    if (userRandomNumber == computerRandom) {
        alert("The computer picked a number: " + computerRandom + "\nCongratulations! You won!");
    } else {
        alert("The computer picked a number: " + computerRandom + "\nYou lose!");
    }
}

function resetInput() {
    const userNumber = document.getElementById("inputUserNumber");
    userNumber.remove();
    const buttonCheck = document.getElementById("buttonOkForRandom");
    buttonCheck.remove();
    inputMin.value = null;
    inputMax.value = null;
}



