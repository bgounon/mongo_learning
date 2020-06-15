$(document).ready(function() {
    $.ajax({
        url: "https://mongolearn.lesondesbros.eu/user/info/testos"
    }).then(function(data) {
       $('.greeting-id').append(data.Name);
       $('.greeting-content').append(data.City);
    });
});