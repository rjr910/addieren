/**
 * Created by rjr910 on 05.11.16.
 */


var ExcerciseMaker = function () {
    "use strict";

    var maxNumber = $("#maxValue").val();
    var number1;
    var number2;
    var operator;
    var $eingabe = $("#eingabe");
    var $zahl1 = $("#zahl1");
    var $zahl2 = $("#zahl2");
    var $operator = $("#operator");
    var $progress = $("#progress");
    var $richtige = $("#made");
    var countExcercise = $("#untilVideo");
    var operatorArr = ["+"];
    var vk = new VideoKeeper();

    vk.addVideo("EIiBbUkRckE");
    vk.addVideo("Q_VpkXd1TKA");
    vk.addVideo("eo6i32yWbOY");
    vk.addVideo("pW2bMzgiWpA");
    vk.addVideo("21OqT-tbv_w");
    vk.addVideo("x4xrOY5LKM8");
    vk.addVideo("BjwDV1Is34U");
    vk.addVideo("n-1YjVy2ZTs");
    vk.addVideo("IiKb_V7iUW0");
    vk.addVideo("nYTrIcn4rjg");
    vk.addVideo("Dky7BkBxc0c");
    vk.addVideo("xMnx_3BC7EM");
    vk.addVideo("T8qGpt7hwbI");
    vk.addVideo("QPV-M5pKrPo");
    vk.addVideo("f7NwyBnIRTE");
    vk.addVideo("xqcNHpkGam4");

    var changeColorOperator = function () {
       $("#operator:contains(+)").css("color", "green");
       $("#operator:contains(-)").css("color", "red");
       $("#operator:contains(x)").css("color", "blue");
    };

    var createExcercise = function () {
        number1 = genNumber(maxNumber);
        number2 = genNumber(maxNumber);
        if (number1 + number2 > 20 && $.inArray("x", operatorArr) > 0) {
            operator = operatorArr[genNumber(operatorArr.length - 2)];
        } else {
            operator = operatorArr[genNumber(operatorArr.length - 1)];
        }
        if (operator === "-") {
            if (number1 < number2) {
                var tmp = number1;
                number1 = number2;
                number2 = tmp;
            }
        }
    };

    this.setMaxNumber = function (n) {
        maxNumber = n;
    };

    this.fillNumberFields = function () {
        createExcercise();
        $zahl1.html(number1);
        $zahl2.html(number2);
        $operator.html(operator);
        $eingabe.val(null);
        changeColorOperator();
    };

    this.addOperators = function (op) {
        operatorArr.push(op);
    };

    this.removeOperator = function (op) {
        var index = operatorArr.indexOf(op);
        operatorArr.slice(index, 1);
    };

    this.setCountExercise = function (n) {
        if (n > 0) {
            countExcercise.val(n);
        } else {
            countExcercise.val(10);
        }

    };

    this.doCheck = function () {
        var erge;
        if ($eingabe.val()) {
            switch (operator) {
                case "+":
                    erge = number1 + number2;
                    break;
                case "-":
                    erge = number1 - number2;
                    break;
                case "x":
                    erge = number1 * number2;
                    break;
            }
            if (erge === Number($eingabe.val())) {
                $richtige.append("<div style='display: none'>" + $zahl1.html() + " " + operator + " " + $zahl2.html() +
                    " = " + erge + "</div>");
                $("#made div").fadeIn("slow");
                $progress.val($progress.val() + 100 / countExcercise.val());
                if (Number($progress.val()) >= 100) {
                    $(".aufgabe").hide();
                    $richtige.hide();
                    $progress.hide();


                    var videos = vk.getVideos();
                    $("#video").css({
                        width: $(window).innerWidth() + "px",
                        height: Number($(window).innerHeight() - 50) + "px"
                    });
                    $("#video").append(videos[genNumber(videos.length)]);
                }
                this.fillNumberFields();
            }
        }
    };


};