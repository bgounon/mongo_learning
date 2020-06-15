$(document).ready(function() {
    $.getJSON( url + "/users", function( data ) {

        $.each(data, function(i, element){
            $(".users-list").append('<li>' + element.Name + ":" + element.Id + '</li>');
        })

    });
 });