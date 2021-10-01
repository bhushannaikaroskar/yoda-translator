
var textInput = document.querySelector("#text-input");
var buttonTranslate = document.querySelector("#button-translate");
var textOutput = document.querySelector("#text-output");

function buttonClickEventHandler(){
    
    textOutput.innerText = textInput.value;
}

buttonTranslate.addEventListener("click",buttonClickEventHandler);