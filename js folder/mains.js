// mouse toggle
$(document).ready(function() {
        $(".header").on("click", function() {
            $(".mouse").toggle();
            $(".h6").toggle();
        })
    })
    //what we do page
$(document).ready(function() {
    $(".product-management").on("click", function() {
        $(".product").toggle();
        $(".productp").toggle();
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
$(document).ready(function() {
    $(".dark").mouseenter(function() {
        $(".image").show();
        $(".dark").css("opacity", "0.8")
    });
    $(".dark").mouseleave(function() {
        $(".image").hide();
        $(".dark").css("opacity", "2")
    });
});


$(document).ready(function() {
    $(".ontario").mouseenter(function() {
        $(".ontario").show();
        $(".ontario").css("opacity", "0.4")
    });
    $(".ontario").mouseleave(function() {
        $(".image").hide();
        $(".ontario").css("opacity", "2")
    });
});


$(document).ready(function() {
    $(".orange").mouseenter(function() {
        $(".image").show();
        $(".orange").css("opacity", "0.8")
    });
    $(".orange").mouseleave(function() {
        $(".image").hide();
        $(".orange").css("opacity", "2")
    });
});

$(document).ready(function() {
    $(".jim").mouseenter(function() {
        $(".image").show();
        $(".jim").css("opacity", "0.8")
    });
    $(".jim").mouseleave(function() {
        $(".image").hide();
        $(".jim").css("opacity", "2")
    });
});


$(document).ready(function() {
    $(".good").mouseenter(function() {
        $(".image").show();
        $(".good").css("opacity", "0.8")
    });
    $(".good").mouseleave(function() {
        $(".image").hide();
        $(".good").css("opacity", "2")
    });
});

$(document).ready(function() {
    $(".calculator").mouseenter(function() {
        $(".image").show();
        $(".calculator").css("opacity", "0.6")
    });
    $(".calculator").mouseleave(function() {
        $(".image").hide();
        $(".calculator").css("opacity", "2")
    });
});

$(document).ready(function() {
    $(".burn").mouseenter(function() {
        $(".image").show();
        $(".burn").css("opacity", "0.9")
    });
    $(".burn").mouseleave(function() {
        $(".image").hide();
        $(".burn").css("opacity", "2")
    });
});

// $(document).ready(function() {
//     $(".burn1").mouseenter(function() {
//         $(".burn").show();
//         $(".burn1").css("opacity", "0.6")
//     });
//     $(".burn1").mouseleave(function() {
//         $(".burn").hide();
//         $(".burn1").css("opacity", "2")
//     });
// });

$(document).ready(function() {
    $(".giraffe").mouseenter(function() {
        $(".image").show();
        $(".giraffe").css("opacity", "0.6")
    });
    $(".giraffe").mouseleave(function() {
        $(".image").hide();
        $(".giraffe").css("opacity", "2")
    });
});

//Form validation

$(document).ready(function() {
    $("form#form").submit(function(event) {
        // event.preventDefault();
        var name = $("input#name").val();
        var email = $("input#email").val();
        var message = $("textarea#subject").val();
        if (name && email) {
            alert(name + ", we have received your message. Thank you for considering us. We shall respond as soon as possible.Cheers!");
        } else {
            alert("Please enter your name and email!");
        }

    });

});