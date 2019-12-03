$(function() {

    // $("#btnClick1").click(function() {
    //     console.log('Tryckte på knappen');
    // });

    // $("#btnClick1").click(() => {
    //     console.log('Tryckte på knappen');
    // });

    // $("#btnClick1").click(() => console.log('Tryckte på knappen'));



    function hideContent() {
        console.log(this);
        $(this).hide();
        $(this).show();
        console.log(this);
        $(this).hide();
        console.log('done');
    }


    $('#btnClick1').click(hideContent);
    $('#p1').click(function() {});
    $('#p2').click(hideContent);




    // $('p').click(hideContent);

    // $('#p1').click(function() {
    //     $('#p1').hide();
    // })

    // $('#p2').click(function() {
    //     $('#p2').hide();
    // })

    // $('#p1').click(function() {
    //     $(this).hide();
    // })

    // $('p').click(function() {
    //     console.log(this);
    //     $(this).hide();
    // })


    $('ul li:odd').css('background-color', 'yellow');



    $('p').on('click',function(){});


    $(body).append('<a href="#" class="back-top"><i class="fa fa-angle-up"></i></a>');
    let amountScrolled = 700;
    let backBtn = $("a.back-top");
    


    
    $window.on("scroll", function () {
        if ($window.scrollTop() > amountScrolled) {
            backBtn.addClass("back-top-visible");
        } else {
            backBtn.removeClass("back-top-visible");
        }
    });
    





    backBtn.on("click", function () {
        $root.animate({
            scrollTop: 0
        }, 700);
        return false;
    });















});


