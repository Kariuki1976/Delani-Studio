//what we do page
$(document).ready(function() {
    $(".product-management").on("click", function() {
        $(".product").toggle();
        $(".product-managements").toggle();
    });

    $(".design").on("click", function() {
        $(".designicon").toggle();
        $(".designp").toggle();


    });

    $(".development").on("click", function() {
        $(".devI").toggle();
        $(".devP").toggle();
    });


});


//PORTFOLIO