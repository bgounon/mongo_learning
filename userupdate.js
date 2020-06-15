$(document).ready(function (){
    $( "#userUpdate" ).submit(function (event) {

        event.preventDefault(); 
        var id = $( "#mongoid" ).val();
        var name = $( "#name" ).val();
        var age = $( "#age" ).val();
        var city = $( "#city" ).val();

        $.ajax({
            url: url + "/user/" + id + "/name/" + name,
            type: 'PUT'
        });
        $.ajax({
            url: url + "/user/" + id + "/age/" + age,
            type: 'PUT'
        });
        $.ajax({
            url: url + "/user/" + id + "/city/" + city,
            type: 'PUT'
        });

        loadList();

    });
});



