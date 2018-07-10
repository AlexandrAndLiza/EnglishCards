var massIndex = 0;
var a = "button" + 1;
console.log(document.getElementById(a));


pasteWordInHtmlByIndex(massIndex);

function nextWord() {

    if(massIndex > words.length - 2){
        massIndex = 0;
    }else{
        massIndex++;
    }
    pasteWordInHtmlByIndex(massIndex);
}

function prevWord() {
    if(massIndex  == 0){
        massIndex = words.length - 1;
    }else{
        massIndex--;
    }
    pasteWordInHtmlByIndex(massIndex);
}

function pasteWordInHtmlByIndex(index) {
    document.getElementById('currentRusWord').innerHTML = words[index].rusWord;
    document.getElementById('currentEngWord').innerHTML = words[index].engWord;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}
function randomize() {
   var random = document.getElementById("randomCheck").checked;
   if(random){
       words = words.sort(compareRandom);
   }
    pasteWordInHtmlByIndex(0);

}