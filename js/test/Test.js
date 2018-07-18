
var firstPosRight;
var shuffle ;  //перемешиваем массив слов
var wrongMass = [];  //массив неверных слов
var counter ;
var timer = 20;
startTest();  //начало теста


function startTest() {
    //TODO очистить добавление на Html неверных слов
    $('#wrongWords').hide();
    $('#testArea').show();
    firstPosRight = Math.floor(Math.random() * 4) + 1;
    shuffle = words.sort(compareRandom);  //перемешиваем массив слов
    wrongMass = [];  //массив неверных слов
    counter = 0;



//начальное заполенение
    $('#eng').html(shuffle[counter].engWord);
    $('#button' + firstPosRight).html(shuffle[counter].rusWord);
    for (var i = 0; i < 5; i++) {
        if (i != firstPosRight) {
            $('#button' + i).html(shuffle[i + 2].rusWord);
        }
    }
    $('#counter').html("0/" + shuffle.length);
}

function change(buttonNumber) {

    if (counter === 0 && buttonNumber == firstPosRight) {
        $('#eng').effect('highlight', {color: '#70e086'});
    } else if (counter !== 0 && buttonNumber === firstPosRight) {
        $('#eng').effect('highlight', {color: '#70e086'});
    } else {
        $('#eng').effect('highlight', {color: '#e01f20'});
        wrongMass.push(shuffle[counter]);
    }
    counter++;
    $('#counter').html(counter + "/" + shuffle.length);
    if (counter < shuffle.length) {
        firstPosRight = Math.floor(Math.random() * 4) + 1;
        $('#eng').html(shuffle[counter].engWord);
        $('#button' + firstPosRight).html(shuffle[counter].rusWord);
        var randomMass = generateRandomMass(counter);
        var j = 1;
        for (var i = 1; i < 5; i++) {

            if (i != firstPosRight) {

                $('#button' + i).html(shuffle[randomMass[j]].rusWord);
                j++;
            }
        }
    } else {
        if (wrongMass.length > 0) {
            for (var k = 0; k < wrongMass.length; k++) {
                getWrongList(wrongMass[k].engWord, wrongMass[k].rusWord);

            }
            $('#testArea').hide();
            $('#wrongWords').show();


        }else{ alert(currentAnswer);}

    }
}

function generateRandomMass(rigntNumber) {
    var outArray = []; // массив, в котором будем хранить уникальные числа
    outArray[0] = rigntNumber;
    var i = 1; // индекс для массива
    var countNum = 4; // количество нужных чисел
    var max = shuffle.length; // максимальное число
    var min = 0; // минимальное  число
    // цикл, пока не получим массив с уникальными числами

    while (i < countNum) {
        var chislo = Math.floor((Math.random() * max) + min); // генерим случайное число
        if (find(outArray, chislo) == 0) { // Проверяем уникальность числа.
            outArray[i] = chislo; // если уникальное, то заисываем его в массив
            i++;
        }

    }

    // проверяем вхождение в массив
    function find(array, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == value) return 1;
        }
        return 0;
    }

    return outArray;
}

function compareRandom(a, b) {
    return Math.random() - 0.5;
}

//вставка неверных слов
function getWrongList(engWord, rusWord) {

    $("#wrongWords").append('<div class="wrongWord">' + '<div class="engWord">' + engWord + '</div>' +
        '<div class="rusWord">' + rusWord + '</div>' +
        '</div>');

}




