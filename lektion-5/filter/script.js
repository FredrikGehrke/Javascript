$(function() {
    let nameArray = ['Hans','Tommy','Lisa'];
   
    // filter
    $("ul li").filter('#2').css('color', 'yellow');
    $("ul > li").filter('#3').remove();

    $( "ul > li" ).filter( ":even" ).css( "background-color", "red" );
    $( "ul > li" ).filter(':contains(list item 1)').css( "background-color", "blue" );

    // let nameArray = ['Hans','Tommy','Lisa'];
    // console.log(nameArray);

    // $(nameArray).filter(':contains("Tommy")').shift();
    // console.log(nameArray);


    //join
    // document.write("Original Array:" + nameArray.join(";"));


    //splice
    // nameArray.splice(1, 1);


    //grep

    //inludes
    console.log(nameArray.includes("Tommy"));
    
    //indexOf
    nameArray.splice(nameArray.indexOf("Tommy"),1);
    console.log(nameArray);

})