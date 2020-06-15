$(document).ready(function (){
    $( "#userCreate" ).submit(function (event) {

        event.preventDefault(); 

        var name = $( "#create" ).val();

        $.post(url + "/user/" + name, function( data ) {
            $( "#create" ).val("");
            $( "#mongoid" ).val(data);
            $( "#idRequest" ).submit();
            
            loadList();
        });
        
    });
});



