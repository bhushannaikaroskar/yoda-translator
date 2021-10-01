
var textInput = document.querySelector("#text-input");
var buttonTranslate = document.querySelector("#button-translate");
var textOutput = document.querySelector("#text-output");

var apiURL ="https://api.funtranslations.com/translate/yoda.json";

function getURL(text){
    return encodeURI(apiURL + "?text=" + text);
}

function errorHandler(error){
    console.log("Error:", error);
}

function buttonClickEventHandler(){

    const inputValue = textInput.value;

    fetch(getURL(inputValue))
    .then((res)=> res.json())
    .then((json)=>{
        const translatedText = json.contents.translated;
        textOutput.innerHTML = translatedText;
    }).catch(errorHandler);
    
}

buttonTranslate.addEventListener("click",buttonClickEventHandler);