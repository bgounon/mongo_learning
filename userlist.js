$(document).ready(function() {
    $.getJSON( "https://mongolearn.lesondesbros.eu/user/list", function( data ) {

        $.each(data, function(i, element){
            $(".users-list").append('<li>' + element + '</li>');
        })

    });
 });