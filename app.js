
var textInput = document.querySelector("#text-input");
var buttonTranslate = document.querySelector("#button-translate");
var textOutput = document.querySelector("#text-output");

var apiURL ="https://api.funtranslations.com/translate/yoda.json";

function getURL(text){
    return encodeURI(apiURL + "?text=" + text);
}

function errorHandler(error){
    console.log("Error:", error);
    if(error == 429){
        alert("Request Limit reached. Only 5 requests allowed per hour");
    }else{
        alert("Something went wrong. Please try again later");
    }
}

function buttonClickEventHandler(){

    const inputValue = textInput.value;

    fetch(getURL(inputValue))
    .then((res)=> {
        var result = res.json();
        if(res.status == 200){
            return result;
        }else{
            throw 429;
        }  
    })
    .then((json)=>{
        const translatedText = json.contents.translated;
        textOutput.innerHTML = translatedText;
    }).catch(errorHandler);
    
}

buttonTranslate.addEventListener("click",buttonClickEventHandler);
