$(document).ready(function() {
    $.ajax({
        url: "https://mongolearn.lesondesbros.eu/user/info/testos"
    }).then(function(data) {
       $('.greeting-id').append(data.name);
       $('.greeting-content').append(data.city);
    });
});