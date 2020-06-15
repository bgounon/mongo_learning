$(document).ready(function() {
    $.ajax({
        url: "https://learnmongo.lesondesbros.eu/user/info/testos"
    }).then(function(data) {
       $('.greeting-id').append(data.name);
       $('.greeting-content').append(data.city);
    });
});