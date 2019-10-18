jQuery(document).ready(function () {

    // create my elements

    var board = $("<div id='board'>");
    var schnake = $("<div id='schnake'>");
    var fruit = $("<div id='fruit'>");

    $("body").append(schnake);
    $("body").append(fruit);
    $("body").append(board);

    //  random position fruit

    $("#fruit").css('top', Math.random() * 905 + "px");
    $("#fruit").css('left', Math.random() * 1875 + "px");

    //  move schnake down infinite

    var snakeDirection = "top"
    var snakeDirectionValue = '+=5px'

    setInterval(function () {

        $("#schnake").css(snakeDirection, snakeDirectionValue);
        $("#schnake").css('transitionDuration = 0.5s');

    }, 100);

    // limit of the board

    if ($("#schnake").offset().top <= $(board).scrollTop()) {
        // $("#schnake").css("top", "100%").css("top", "-=101px");
        alert("prout")
    }
    else if ($("#schnake").offset().top > ($(board).height() - 130)) {
        // $("#schnake").css("top", "1px");
        alert("prout")
    }
    else if ($("#schnake").offset().left < $(board).scrollLeft()) {
        // $("#schnake").css("left", "100%").css("left", "-=101px");
        alert("prout")
    }
    else if ($("#schnake").offset().left > $(board).width() - 100) {
        // $("#schnake").css("left", "1px");
        alert("prout")
    }

    // set movement pad

    $("body").keydown(function (evt) {

        if (evt.keyCode == 40) {//bas
            snakeDirection = "top"
            snakeDirectionValue = '+=5px'
            $("#schnake").css('background-image', "url(schnake.png)")


        }
        else if (evt.keyCode == 38) {//haut
            snakeDirection = "top"
            snakeDirectionValue = '-=5px'
            $("#schnake").css('background-image', "url(schnakeup.png)")
            // $("#schnake").attr('class' , 'schnakeup'); // for replace initial width and height don't work 


        }
        else if (evt.keyCode == 37) {//gauche
            snakeDirection = "left"
            snakeDirectionValue = '-=5px'
            $("#schnake").css('background-image', "url(schnakeleft.png)")
            

        }
        else if (evt.keyCode == 39) {//droite
            snakeDirection = "left"
            snakeDirectionValue = '+=5px'
            $("#schnake").css('background-image', "url(schnakeright.png)")
        }

    });

});
