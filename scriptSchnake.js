jQuery(document).ready(function () {

    // create my elements

    var board = $("<div id='board'>");
    var schnake = $("<div id='schnake'>");
    var fruit = $("<div id='fruit'>");

    $("body").append(board);
    $("#board").append(schnake);
    $("#board").append(fruit);

    //  random position fruit

    $("#fruit").css('top', Math.random() * 905 + "px");
    $("#fruit").css('left', Math.random() * 1875 + "px");

    //  move schnake down infinite

    var snakeDirection = "top";
    var snakeDirectionValue = '+=20px';

    setInterval(function () {

        $("#schnake").css(snakeDirection, snakeDirectionValue);
        $("#schnake").css('transitionDuration = 0.5s');

        // limit of the board

        if ($("#schnake").offset().top <= $(board).scrollTop()) {
            alert("try again");
        }
        else if ($("#schnake").offset().top > ($(board).height() - 130)) {
            alert("try again");
        }
        else if ($("#schnake").offset().left < $(board).scrollLeft()) {
            $("#schnake").css("left", "100%").css("left", "-=101px");
            alert("try again");
        }
        else if ($("#schnake").offset().left > $(board).width() - 100) {
            alert("try again");
        }
      
        function verifPosition(){
            FruitTop = $(board).scrollTop() + $("#fruit").offset().top
            FruitLeft = $(board).scrollLeft() + $("#fruit").offset().left
            SnakeTop = $(board).scrollTop() + $("#schnake").offset().top;
            SnakeLeft = $(board).scrollLeft() + $("#schnake").offset().left;
            if (SnakeTop == FruitTop && SnakeLeft == FruitLeft){
                alert("gg")
            }
            
        }
    
        verifPosition();
        
    }, 100);
    


    





    // set movement pad

    $("body").keydown(function (evt) {

        if (evt.keyCode == 40) {//bas
            snakeDirection = "top";
            snakeDirectionValue = '+=20px';
            $("#schnake").css('background-image', "url(schnake.png)");


        }
        else if (evt.keyCode == 38) {//haut
            snakeDirection = "top";
            snakeDirectionValue = '-=20px';
            $("#schnake").css('background-image', "url(schnakeup.png)");
            $("#schnake").attr('class', 'schnakeup'); // for replace initial width and height don't work 


        }
        else if (evt.keyCode == 37) {//gauche
            snakeDirection = "left";
            snakeDirectionValue = '-=20px';
            $("#schnake").css('background-image', "url(schnakeleft.png)");


        }
        else if (evt.keyCode == 39) {//droite
            snakeDirection = "left";
            snakeDirectionValue = '+=20px';
            $("#schnake").css('background-image', "url(schnakeright.png)");
        }

    });

});
