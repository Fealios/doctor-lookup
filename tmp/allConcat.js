var Search = require("./../js/doctor.js").Doctor;

$(document).ready(function(){
    console.log('page loaded');
    $('#form').submit(function(event){
        console.log('in the submit');
        event.preventDefault();
        var medical = new Search("toothache");
        $.get(medical.url)
            .then(function(result){
                console.log(result);
            })
    });
})
