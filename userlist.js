$(document).ready(function() {
    $.getJSON( "https://mongolearn.lesondesbros.eu/user/list", function( data ) {

        $.each(data, function(i, value){
            $(".users-list").append('<li>' + value.id + '</li>');
        })

    });
 });