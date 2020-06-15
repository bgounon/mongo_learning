$(document).ready(function (){
    $( "#idRequest" ).submit(function (event) {

        event.preventDefault(); 
        var id = $( "#mongoid" ).val();

        $.getJSON( url + "/user/" + id, function( data ) {

            $( "#name" ).val(data.Name)
            $( "#age" ).val(data.Age)
            $( "#city" ).val(data.City)

        });
    });
});



