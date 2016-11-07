/**
 * Created by rjr910 on 05.11.16.
 */

'use strict';

var ExcerciseMaker = function () {
    var maxNumber = $('#maxValue').val();
    var number1 = genNumber(maxNumber);
    var number2 = genNumber(maxNumber);
    var $eingabe = $("#eingabe");
    var $zahl1 = $("#zahl1");
    var $zahl2 = $("#zahl2");
    var $progress = $("#progress");
    var $richtige = $("#made");
    var countExcercise = $("#untilVideo");
    var vk = new VideoKeeper();


    vk.addVideo('<iframe  src="https://www.youtube.com/embed/EIiBbUkRckE?rel=0&autoplay=1" frameborder="0" allowfullscreen></iframe>');
    vk.addVideo('<iframe  src="https://www.youtube.com/embed/Q_VpkXd1TKA?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    vk.addVideo('<iframe  src="https://www.youtube.com/embed/eo6i32yWbOY?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    vk.addVideo('<iframe  src="https://www.youtube.com/embed/pW2bMzgiWpA?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    vk.addVideo('<iframe  src="https://www.youtube.com/embed/21OqT-tbv_w?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    vk.addVideo('<iframe  src="https://www.youtube.com/embed/x4xrOY5LKM8?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    vk.addVideo('<iframe  src="https://www.youtube.com/embed/BjwDV1Is34U?autoplay=1" frameborder="0" allowfullscreen></iframe>');
    vk.addVideo('<iframe  src="https://www.youtube.com/embed/n-1YjVy2ZTs?autoplay=1" frameborder="0" allowfullscreen></iframe>');

    var createExcercise = function () {
        number1 = genNumber(maxNumber);
        number2 = genNumber(maxNumber);

    };

    this.setMaxNumber = function (n) {
        maxNumber = n;
    };

    this.fillNumberFields = function () {
        createExcercise();
        $zahl1.val(number1);
        $zahl2.val(number2);
        $eingabe.val(null);
    };

    this.setCountExercise = function (n) {
        if (n > 0) {
            countExcercise.val(n);
        } else {
            countExcercise.val(10);
        }

    };

    this.doCheck = function () {

        if ($eingabe.val()) {
            var erge = number1 + number2;
            if (erge == $eingabe.val()) {
                $richtige.append("<div style='display: none'>" + $zahl1.val() + "+" + $zahl2.val() + "=" + erge + "</div>");
                $('#made div').fadeIn('slow');
                $progress.val($progress.val() + 100 / countExcercise.val());
                if (Number($progress.val()) >= 100) {
                    $(".aufgabe").hide();
                    $richtige.hide();
                    $progress.hide();


                    var videos = vk.getVideos();
                    $('#video').css({
                        width: $(window).innerWidth() + 'px',
                        height: Number($(window).innerHeight() - 50) + 'px'
                    });
                    $("#video").append(videos[genNumber(videos.length)]);
                }
                this.fillNumberFields();
            }
        }
    };


};