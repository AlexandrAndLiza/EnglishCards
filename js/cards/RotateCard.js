
$('.card').click(function(event){
    if(!(event.target ==$('.fa-volume-up')[0])){

        $(this).toggleClass('flipped');
    }

});