$(document).ready(function (){
    $( "#userUpdate" ).submit(function (event) {

        event.preventDefault(); 
        var id = $( "#mongoid" ).val();
        var name = $( "#name" ).val();
        var age = $( "#age" ).val();
        var city = $( "#city" ).val();

        $.ajax({
            url: url + "/user/" + id + "/name/" + name,
            type: 'PUT',
            success: function(result) {
                // Do something with the result
            }
        });
        $.ajax({
            url: url + "/user/" + id + "/age/" + age,
            type: 'PUT',
            success: function(result) {
                // Do something with the result
            }
        });
        $.ajax({
            url: url + "/user/" + id + "/city/" + city,
            type: 'PUT',
            success: function(result) {
                // Do something with the result
            }
        });
    });
});



