$(function() {

    $('#regForm').submit((e) => {
        e.preventDefault();

        if($('#email').val() === '') {
            // console.log('värdet är tomt');
            $('#email').addClass('is-invalid'); // Om det blir fel.
            $('#email').focus();
        } else {
            $('#firstName').removeClass('is-invalid'); // Ta bort klassen.
            $('#firstName').addClass('is-valid'); // Lägg till valid.
        }

        if($('#lastName').val() === '' ) {
            $('#lastName').addClass('is-invalid');
            $('#lastName').focus();
        } else {
            $('#lastName').removeClass('is-invalid'); // Ta bort klassen.
            $('#lastName').addClass('is-valid'); // Lägg till valid.
        }
        // if($('#password').val() === '' || $('#lastName').val() < 3 ) { // GÖR DENNA FÖR PASSWORD
        //     alert("The field cannot contain more than 5 characters!")
        //     $('#password').addClass('is-invalid');
        //     $('#password').focus();
        // } else {
        //     $('#password').removeClass('is-invalid'); // Ta bort klassen.
        //     $('#password').addClass('is-valid'); // Lägg till valid.
        // }

        // function ValidateEmail(email) 
        // {
        //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val())) {
        //         $('#email').removeClass('is-invalid')
        //         $('#email').addClass('is-valid') 
        //         return (true)
        //     } 
        //         $('#email').addClass('is-invalid')
        //         $('#email').focus();
        //         return (false)
        // }

    });

});