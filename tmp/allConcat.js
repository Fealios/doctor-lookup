var Search = require("./../js/doctor.js").Search;

$(document).ready(function(){
    console.log('page loaded');
    $('#form').submit(function(event){
        console.log('in the submit');
        event.preventDefault();
        $('#results').text(" ");
        var medical = new Search($('#illness').val());
        $.get(medical.url)
            .then(function(result){
                medical.doctorList = result.data;
                console.log(medical.doctorList[0]);
                Disperse(result.data);
            })
            .fail(function(error){
                console.log('I DONT WORK SUCKA');
            });
    });
})

function Disperse(arr) {
    for(i=0; i<arr.length; i++){
        $('#results').append(
        "<div class='container doc-name'> <div class='jumbotron'>"
        + "<img class='headshot' src='" + arr[i].profile.image_url + "'>"
        + "<h2 class='name'>" + arr[i].profile.first_name + " " +arr[i].profile.last_name +"</h2>"
        + "<h4 class='number'> Phone number: " + arr[i].practices[0].phones[0].number + "</h4>"
        + "<p class='description'> Description: <br>" + arr[i].profile.bio + "</p>"
        + "</div> </div>"
        )//end append
    }
}
