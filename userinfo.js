$(document).ready(function (){
    $( "#myForm" ).submit(function (event) {

        event.preventDefault(); 
        $(".user-info").empty();
        var name = $( "#username" ).val();

        $.getJSON( "https://mongolearn.lesondesbros.eu/user/info/" + name, function( data ) {

            $.each(data, function(key, value){
                $(".user-info").append('<li>' + key + " : " + value + '</li>');
            })

        });
    });
});



