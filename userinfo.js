$(document).ready(function (){
    $( "#myForm" ).submit(function (event) {

        event.preventDefault(); 
        $(".user-info").empty();
        var name = $( "#mongoid" ).val();

        $.getJSON( url + "/user/" + name, function( data ) {

            $.each(data, function(key, value){
                $(".user-info").append('<li>' + key + " : " + value + '</li>');
            })

        });
    });
});



