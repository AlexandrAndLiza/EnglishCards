var songName = "";

console.log(songName);

$(".rusIdiom").on('input keyup', function(e) {

    if($(".rusIdiom")[0].value == "Молодой человек" || $(".rusIdiom")[0].value == "Амбициозный человек"){
        $(".rusIdiom").eq(0).css("background-color", "green");
        if(songName.indexOf("H") < 0){
            songName += "H";
        }

    }if ($(".rusIdiom")[1].value == "Вспыльчивый" ){
        $(".rusIdiom").eq(1).css("background-color", "green");
        if(songName.indexOf("T") < 0) {
            songName += "T";
        }
    }if ($(".rusIdiom")[2].value == "Встревожен" ){
        $(".rusIdiom").eq(2).css("background-color", "green");
        if(songName.indexOf("U") < 0) {
            songName += "U";
        }

    }if ($(".rusIdiom")[3].value == "Вырваться" || $(".rusIdiom")[3].value == "Веселиться"){
        $(".rusIdiom").eq(3).css("background-color", "green");
        if(songName.indexOf("D") < 0) {
            songName += "D";
        }
    }if ($(".rusIdiom")[4].value == "Да сэр" ){
        $(".rusIdiom").eq(4).css("background-color", "green");
        if(songName.indexOf("E") < 0) {
            songName += "E";
        }
    }if ($(".rusIdiom")[5].value == "Соответствовать" ){
        $(".rusIdiom").eq(5).css("background-color", "green");
    }
    if ($(".rusIdiom")[6].value == "Соответствовать правилам" ){
        $(".rusIdiom").eq(6).css("background-color", "green");
        if(songName.indexOf("N") < 0) {
            songName += "N";
        }
    }
    if ($(".rusIdiom")[7].value == "Ты обычный" ){
        $(".rusIdiom").eq(7).css("background-color", "green");
    }
    if ($(".rusIdiom")[8].value == "С тобой легко" ){
        $(".rusIdiom").eq(8).css("background-color", "green");
    }
    if ($(".rusIdiom")[9].value == "Кровь из носа" ){
        $(".rusIdiom").eq(9).css("background-color", "green");
        if(songName.indexOf("R") < 0) {
            songName += "R";
        }
    }




    $("#songName")[0].value = songName;


});

$("#songName").on('input keyup', function(e) {
    if($("#songName")[0].value == "THUNDER"){

    }

});
