/**
 * Created by rjr910 on 28.10.2016.
 */


'use strict';

function genNumber(zahl) {
    return Math.round(Math.random() * zahl);
}

var em = new ExcerciseMaker();
em.fillNumberFields();
$("#eingabe").focus();


$("#eingabe").on("input", function () {
    em.doCheck();
});

$('#maxValue').on("change", function () {
    em.setMaxNumber(this.value);
    em.fillNumberFields();
});

$('#untilVideo').on("change", function () {
    em.setCountExercise(this.value);
    em.fillNumberFields();
});