$(document).ready(function() {
    console.log("Javascript running");
    // run test on initial page load
    checkSize();

    // run test on resize of the window
    $(window).resize(checkSize);
});

$(function(){
    $('body').on('click',function(event){
        if ($(".navbar-toggler").is(":visible")){
            if($("body").hasClass("show_sidebar")){
                if(!$(event.target).is('#push_sidebar')){
                    event.stopPropagation();
                    $("body").removeClass("show_sidebar");
                    console.log("No Clicking on push_sidebar");
                }
            }
        }
    });

    $(".navbar-toggler").click(function() {
        console.log("TOGGLE");
        event.stopPropagation();
        $("body").addClass("show_sidebar");
    });
});

//Function to the css rule
function checkSize(){
    console.log("Check Size");
<<<<<<< HEAD
    if ($(".nav_trigger").css("visibility") == "visible" ){
        console.log("is visible");
=======
    if ($(".navbar-toggler").is(":visible")){
>>>>>>> master
        if($("body").hasClass( "show_sidebar" )){
            $("body").removeClass("show_sidebar");
            console.log("Remove sidebar");
        }
    }
    else{
        if($( "body" ).hasClass( "" )){
            $("body").addClass("show_sidebar");
            console.log("Add sidebar");
        }
        else{
            console.log("sidebar already out")
        }
    }
}
