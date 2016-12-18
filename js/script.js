/**
 * Created by rjr910 on 28.10.2016.
 */

function genNumber(zahl) {
    "use strict";
    return Math.round(Math.random() * zahl);
}

var em = new ExcerciseMaker();
em.fillNumberFields();
$("#eingabe").focus();


$("#eingabe").on("input", function () {
    "use strict";
    em.doCheck();
});

$('#maxValue').on("change", function () {
    "use strict";
    em.setMaxNumber(this.value);
    em.fillNumberFields();
});

$('#untilVideo').on("change", function () {
    "use strict";
    em.setCountExercise(this.value);
    em.fillNumberFields();
});

$(window).resize(function () {
    "use strict";
    $('#video').css({width: $(window).innerWidth() + 'px', height: $(window).innerHeight() + 'px'});
});

$("#reset").on("click", function () {
    "use strict";
    location.reload();
});

$("#plus").on("click", function () {
    "use strict";
    if ($("#plus").prop("checked")) {
        em.addOperators("+");
    } else {
        em.removeOperator("+");
    }
    em.fillNumberFields();
});

$("#minus").on("click", function () {
    "use strict";
    if ($("#minus").prop("checked")) {
        em.addOperators("-");
    } else {
        em.removeOperator("-");
    }
    em.fillNumberFields();
});

$("#times").on("click", function () {
    "use strict";
    if ($("#times").prop("checked")) {
        em.addOperators("x");
    } else {
        em.removeOperator("x");
    }
    em.fillNumberFields();
});