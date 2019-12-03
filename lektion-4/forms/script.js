$(function() {

    // function isEmpty(id) {
    //     if($(id).val() === '') {
    //         $(id).addClass('is-invalid')

    //         $(id).focus();
    //     } else {
    //         $(id).removeClass('is-invalid')
    //         $(id).addClass('is-valid')
    //     }
    // }

    // $('input').on("blur", function(e) {
    //     // let id = "#" + e.currentTarget.id
    //     // isEmpty(id);
    //     // ValidateName();
    //     ValidateLastName();
    // });
    $('input').on("blur", function(e) {
        switch(e.target.id) {
            case 'firstName' :
                ValidateName();
                break;
            case 'lastName' :
                ValidateLastName();
        }

    });
    
    function ValidateEmail(email) 
    {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test($('#email').val()))
        {
        $('#email').removeClass('is-invalid')
        $('#email').addClass('is-valid') 
        alert("HEYYYY")
        return (true)
        }
        $('#email').addClass('is-invalid')
        $('#email').focus();
        alert("HEYYYY INVALID!!!!!!!!!!!!!!!!")
        return (false)
    }

    // Validate firstName Length and match.
    function ValidateName()
    {
        let letters = /^[A-Za-z]+$/;
        if (($('#firstName').val().length < 20 && $('#firstName').val().length > 2) && ($('#firstName').val().match(letters))) {
            $('#firstName').removeClass('is-invalid')
            $('#firstName').addClass('is-valid') 
            return true;
        } 
        else {                               
            document.getElementById("CannotMsg").innerHTML = "This field must be less than 20 characters, more than 2 characters and only have letters!";
            $('#firstName').addClass('is-invalid')
            $('#firstName').focus();
            return false;
        }
    }

            // Validate lastName length and match.
            function ValidateLastName(lastName)
            {
                let letters = /^[A-Za-z]+$/;
                if (($('#lastName').val().length < 20) && ($('#lastName').val().match(letters))) {
                    $('#lastName').removeClass('is-invalid')
                    $('#lastName').addClass('is-valid') 
                    return true;
                } else {                               
                    document.getElementById("CannotMsg2").innerHTML = "This field must be less than 20 characters and only have letters!";
                    $('#lastName').removeClass('is-valid')
                    $('#lastName').addClass('is-invalid')
                    $('#lastName').focus();
                    return false;
                }
            }



    $('#regForm').submit((e) => {
        e.preventDefault();

        isEmpty('#firstName');
        isEmpty('#lastName');
        ValidateEmail(); 
        ValidateName();

    })

});