let btnTranslate = document.querySelector('#btnTranslate');
let txtInput = document.querySelector("#txtinput");
let outputDiv = document.querySelector("#output")


let URL = "https://api.funtranslations.com/translate/minion.json"


function getTranslationURL(text){
    return URL + "?" + "text=" + text
}
function errorhandler(error){
    console.log("error occured",error);
    alert("server down try later!")
}
function clickHandler() {
    let txtinput = txtInput.value;
    fetch(getTranslationURL(txtinput)).then(res => res.json()).then(json => {
        outputDiv.innerText = "translated -" + json.contents.translated}).catch(errorhandler)
   
};

btnTranslate.addEventListener("click", clickHandler);