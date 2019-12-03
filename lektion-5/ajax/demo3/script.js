$(function() {

    // $.get('sv-ses.json', data => {
    //     console.log(data);
    //     $('#headline').html(data.welcome);
    //     $('#registerButton').html(data.register);
    // }).fail(error => {
    //     console.log(error);
    // })



    $.ajax({
        method: 'GET',
        url: 'sv-sse.json',
        dataType: 'json',
        statusCode: 
            {
                200:function(res) {
                    $('#headline').html(res.welcome);
                    $('#registerButton').html(res.register);
                },
                404: function() {
                    console.log('funkar inte')
                }
            }
    })

})