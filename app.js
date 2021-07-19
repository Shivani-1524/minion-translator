let btnTranslate = document.querySelector('#btnTranslate');
let txtInput = document.querySelector("#txtinput");
let outputDiv = document.querySelector("#output");
let modeSelect = document.querySelector('#mode');
let header = document.querySelector('#header');
let heading = header.innerText;

const database = {
    modes : [
        {
            name:"minion",
            heading:"Bananana Translator 🍌",
            URLs: "https://api.funtranslations.com/translate/minion.json",
            color: "#ffd166"
        },
        {
            name:"PigLatin",
            heading:"Pig Latin Translator 🐽",
            URLs: "https://api.funtranslations.com/translate/pig-latin.json",
            color: "#fec5bb"
        },
        {
            name:"mandalorian",
            heading:"Mandalorian Translator 👾",
            URLs: "https://api.funtranslations.com/translate/mandalorian.json",
            color: "#9bafd9"
        }
    ]
}

let y = 0;
let URL = "https://api.funtranslations.com/translate/minion.json";

function getTranslationURL(text){
    return URL + "?" + "text=" + text;
}

function errorhandler(error){
    console.log("error occured",error);
    alert("server down try later!");
}

function modeSelectHandler(){
    
    database.modes.map((item, i)=>{
        if(modeSelect.value===item.name){
            var res = heading.replace("Bananana Translator 🍌",item.heading);
            document.getElementById("header").innerHTML = res;
            URL = item.URLs;
            document.body.style.background = item.color;
        }
    })
}
function clickHandler() {
    let txtinput = txtInput.value;
    fetch(getTranslationURL(txtinput)).then(res => res.json()).then(json => {
        console.log(json.contents.translated);
        console.log(json.contents.text);
        outputDiv.innerText = "translated -" + json.contents.translated;
    }).catch(errorhandler) 
};
modeSelect.addEventListener("change", modeSelectHandler);
btnTranslate.addEventListener("click", clickHandler);