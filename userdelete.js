$(document).ready(function (){
    $( "#idDelete" ).submit(function (event) {

        event.preventDefault(); 
        var id = $( "#mongoid" ).val();

        $.ajax({
            url: url + "/user/" + id,
            type: 'DELETE',
            success: function() {
                $( "#mongoid" ).val("");

                $( "#name" ).val("")
                $( "#age" ).val("")
                $( "#city" ).val("")
                
                loadList();
            }
        });
    });
});



