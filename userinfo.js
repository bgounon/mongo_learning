$(document).ready(function (){
    $( "#idRequest" ).submit(function (event) {

        event.preventDefault(); 
        var name = $( "#mongoid" ).val();

        $.getJSON( url + "/user/" + name, function( data ) {

            $( "#name" ).val(data.Name)
            $( "#age" ).val(data.Age)
            $( "#city" ).val(data.City)

        });
    });
});



