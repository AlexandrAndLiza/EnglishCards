var massIndex = 0;
var a = "button" + 1;
var soundWord = words[0].engWord.trim().toLowerCase()



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
    soundWord = words[index].engWord.trim().toLowerCase();
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
function playAudio(){
   var audio_url='https://ssl.gstatic.com/dictionary/static/sounds/20160317/'+soundWord+'--_gb_1.mp3';
    var playSound=new Audio(audio_url);
    playSound.play();
}
$(".fa-volume-up").click(function () {
    playAudio();
});


