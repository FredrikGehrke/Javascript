$(function() {

    // function validateField(input, error_message) {
    //     let value = $(input).val();
    //     let fieldName = $(input).attr('data-fieldName')


    //     if(value.length < 1) {
    //        $('#error_messages').append(`<li>${error_message}</li>`)
    //     }

    // }


    function validateFirstName() {
        let value = $('#firstName').val()

        if(value === '') {
            $('#firstName_Error').text('Du måste ange ett förnamn');
        } 
        else if(value.length < 2) {
            $('#firstName_Error').text('Du måste minst ange 2 tecken');
        }
        else {
            $('#firstName_Error').text('');
        }
    }

    $('#oneForm').on('submit', function(e) {
        //förhindra att den skickar datat och laddar om sidan
        e.preventDefault();
        validateFirstName();
    });

});